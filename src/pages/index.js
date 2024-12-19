import dynamic from 'next/dynamic';
import Tag from '@/components/Tag';
import { combinations, emotions, emotionColors, moodMessages } from '@/lib/emotionData';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const EmotionAnimation = dynamic(() => import('@/components/EmotionAnimation'), { ssr: false });

const Index = () => {
    const [selectedEmotion, setSelectedEmotion] = useState([]);
    const [newEmotion, setNewEmotion] = useState([]);
    const [mood, setMood] = useState('');

    // tag selection handler
    const handleTagClick = (tag) => {
        if (selectedEmotion.includes(tag)) {
            const isMainEmotion = Object.keys(emotions).includes(tag);

            let updatedTags;

            if (isMainEmotion) {
                const subEmotions = emotions[tag].sub;
                updatedTags = selectedEmotion.filter((t) => t !== tag && !subEmotions.includes(t));
            } else {
                updatedTags = selectedEmotion.filter((t) => t !== tag);
            }
            setSelectedEmotion(updatedTags);
            checkCombination(updatedTags);
        } else {
            const updatedTags = [...selectedEmotion, tag];
            setSelectedEmotion(updatedTags);
            checkCombination(updatedTags);
        }
    };

    // emotion combination checker
    const checkCombination = (tags) => {
        // Normalize and sort tags alphabetically
        const sortedTags = [...new Set(tags)].sort().join("+");

        // Lookup in combinations
        if (combinations[sortedTags]) {
            setMood(combinations[sortedTags]);
        } else {
            setMood("");
        }
    };


    // generate animation colors based on selected emotions
    const getAnimationColors = () => {
        return selectedEmotion.flatMap((emotion) => emotionColors[emotion] || []);
    };

    const renderTags = () => {
        const tags = [];
        Object.keys(emotions).forEach((emotion) => {
            tags.push(
                <Tag
                    key={emotion}
                    label={emotion}
                    onClick={() => handleTagClick(emotion)}
                    isActive={selectedEmotion.includes(emotion)}
                />
            );

            // Add sub emotion after the main emotion
            if (selectedEmotion.includes(emotion)) {
                tags.push(
                    <AnimatePresence>
                        {emotions[emotion].sub.map((subEmotion) => (
                            <Tag
                                key={subEmotion}
                                label={subEmotion}
                                onClick={() => handleTagClick(subEmotion)}
                                isActive={selectedEmotion.includes(subEmotion)}
                            />
                        ))}
                    </AnimatePresence>
                );
            }
        });
        return tags;
    };

    return (
        <div className='relative w-screen h-screen overflow-hidden'>
            <EmotionAnimation
                colors={getAnimationColors()}
                intensity={selectedEmotion.length}
                emotionType={selectedEmotion[0] || "default"}
            />

            <div className='relative z-10 ml-20 mt-24 w-96 flex flex-col gap-10'>
                <h1 className='text-5xl text-gray-800'>How are you feeling today?</h1>

                {/* Emotions */}
                <div className='flex flex-wrap gap-2'>{renderTags()}</div>
            </div>

            {/* Mood */}
            {mood && (
                <motion.div
                    className='absolute bottom-24 left-20 w-96 h-24 flex items-center justify-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h2 className='text-2xl text-gray-800'>{mood}</h2>

                    <div className='absolute -z-10 w-96 h-24 bg-blue-50 rounded-full blur-md'></div>
                </motion.div>
            )}
        </div>
    );
};

export default Index;
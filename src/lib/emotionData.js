export const emotions = {
    Happy: {
        sub: ["Joyful", "Excited", "Content"],
        type: "wave",
        intensity: 1
    },
    Sad: {
        sub: ["Lonely", "Heartbroken", "Down"],
        type: "drops",
        intensity: 1
    },
    Angry: {
        sub: ["Frustrated", "Irritated", "Resentful"],
        type: "shake",
        intensity: 2
    },
    Fearful: {
        sub: ["Anxious", "Insecure", "Overwhelmed"],
        type: "wave",
        intensity: 1.5
    },
    Surprised: {
        sub: ["Shocked", "Amazed", "Intrigued"],
        type: "pulse",
        intensity: 1.2
    },
    Disgusted: {
        sub: ["Appalled", "Uncomfortable", "Offended"],
        type: "scatter",
        intensity: 1
    },
    Neutral: {
        sub: ["Calm", "Reflective", "Indifferent"],
        type: "static",
        intensity: 0.8
    },
};

export const combinations = {
    // Basis-Emotion Combinations
    "Angry+Disgusted": "Raging Disgust",
    "Angry+Fearful": "Tense Aggression",
    "Angry+Happy": "Bittersweet Frustration",
    "Angry+Neutral": "Brooding Anger",
    "Angry+Sad": "Resentful Sorrow",
    "Angry+Surprised": "Outraged Shock",

    "Disgusted+Fearful": "Repulsed Anxiety",
    "Disgusted+Happy": "Conflicted Happiness",
    "Disgusted+Neutral": "Detached Disgust",
    "Disgusted+Sad": "Loathing Grief",
    "Disgusted+Surprised": "Horrified Amazement",

    "Fearful+Happy": "Anxious Optimism",
    "Fearful+Neutral": "Uneasy Calm",
    "Fearful+Sad": "Anxious Regret",
    "Fearful+Surprised": "Startled Fear",

    "Happy+Excited": "Euphoric Energy",
    "Happy+Joyful": "Radiant Bliss",
    "Happy+Neutral": "Calm Contentment",
    "Happy+Sad": "Reflective Nostalgia",
    "Happy+Surprised": "Delighted Surprise",

    "Neutral+Reflective": "Quiet Contemplation",

    "Sad+Fearful": "Anxious Regret",
    "Sad+Heartbroken": "Deep Melancholy",
    "Sad+Neutral": "Quiet Melancholy",
    "Sad+Surprised": "Mourning Shock",

    "Surprised+Neutral": "Subtle Intrigue",

    // Multi-Emotion Combinations
    "Angry+Fearful+Sad": "Overwhelming Tension",
    "Angry+Happy+Neutral": "Conflicted Calm",
    "Angry+Sad+Surprised": "Disbelieving Sorrow",
    "Fearful+Happy+Sad": "Anxious Hope",
    "Fearful+Sad+Neutral": "Numb Unease",
    "Happy+Joyful+Excited": "Boundless Happiness",
    "Happy+Neutral+Reflective": "Peaceful Serenity",
    "Sad+Neutral+Reflective": "Quiet Sadness",
    "Surprised+Fearful+Happy": "Exhilarated Surprise",
};

export const moodMessages = {
    // Basis-Emotion Moods
    "Raging Disgust": "Take a step back and allow yourself to process these intense feelings.",
    "Tense Aggression": "Breathe deeply – focus on releasing this built-up tension.",
    "Bittersweet Frustration": "Balance the frustration with gratitude for what’s good in life.",
    "Brooding Anger": "Find a calm space to let go of what’s weighing on you.",
    "Resentful Sorrow": "It’s okay to feel conflicted. Let yourself heal in your own time.",
    "Outraged Shock": "Take a moment to steady yourself – clarity will come soon.",

    "Repulsed Anxiety": "Focus on your breath. These feelings will pass.",
    "Conflicted Happiness": "Happiness can be complex – lean into the joy where you can.",
    "Detached Disgust": "Step away and reframe the situation. You’re in control.",
    "Loathing Grief": "Let the sadness flow. You’re not alone in this.",
    "Horrified Amazement": "Shock is temporary – take time to understand what’s happening.",

    "Anxious Optimism": "Hope can exist alongside fear. You’re moving forward.",
    "Uneasy Calm": "Find a rhythm that brings balance to your uncertainty.",
    "Anxious Regret": "Reflect on what you can change, and let go of the rest.",
    "Startled Fear": "It’s okay to feel overwhelmed. Ground yourself in the present moment.",

    "Euphoric Energy": "Let this excitement drive you forward with purpose.",
    "Radiant Bliss": "Bask in this moment of pure happiness. You deserve it.",
    "Calm Contentment": "Savor the quiet and the steady peace you’ve found.",
    "Reflective Nostalgia": "Hold onto those memories – they’ve shaped who you are.",
    "Delighted Surprise": "Let the unexpected joy brighten your day.",

    "Quiet Contemplation": "Give yourself space to think deeply and recharge.",

    "Deep Melancholy": "This sadness is heavy, but it won’t last forever.",
    "Quiet Melancholy": "Allow yourself to rest in this gentle sadness.",
    "Mourning Shock": "Grieve at your own pace – healing takes time.",

    "Subtle Intrigue": "Curiosity can lead you to unexpected places – embrace it.",

    // Multi-Emotion Moods
    "Overwhelming Tension": "There’s a lot to feel right now. Take things one step at a time.",
    "Conflicted Calm": "It’s okay to feel torn – focus on what brings you peace.",
    "Disbelieving Sorrow": "Sometimes reality is hard to accept. Let yourself process slowly.",
    "Anxious Hope": "Even through worry, there’s a light of hope guiding you.",
    "Numb Unease": "You might feel stuck, but small steps will move you forward.",
    "Boundless Happiness": "This joy knows no bounds – celebrate it fully!",
    "Peaceful Serenity": "You’ve found a moment of stillness – treasure it.",
    "Quiet Sadness": "Gentle reflection can bring a path toward healing.",
    "Exhilarated Surprise": "Embrace the unexpected joy and let it energize you.",
};

export const emotionColors = {
    // Basis-Emotionen
    Happy: ['#FDE68A', '#FBBF24'],  // Gradient-Farben für Happy
    Sad: ['#93C5FD', '#60A5FA'],    // Blau-Töne
    Angry: ['#FCA5A5', '#EF4444'],  // Rot-Töne
    Fearful: ['#D8B4FE', '#C084FC'],// Lila-Töne
    Surprised: ['#FDE047', '#FACC15'], // Warmes Orange-Gelb
    Disgusted: ['#A3E635', '#65A30D'], // Gelb-Grün-Töne
    Neutral: ['#E5E7EB', '#D1D5DB'],  // Grau-Töne

    // Sub-Emotionen
    Joyful: ['#FEF3C7', '#FDE68A'],
    Excited: ['#FEF9C3', '#FBBF24'],
    Content: ['#FDF6B2', '#FDE047'],

    Lonely: ['#DBEAFE', '#93C5FD'],
    Heartbroken: ['#BFDBFE', '#60A5FA'],
    Down: ['#BFDBFE', '#3B82F6'],

    Frustrated: ['#FEE2E2', '#FCA5A5'],
    Irritated: ['#FECACA', '#EF4444'],
    Resentful: ['#F87171', '#B91C1C'],

    Anxious: ['#E9D5FF', '#C084FC'],
    Insecure: ['#D8B4FE', '#9333EA'],
    Overwhelmed: ['#C4B5FD', '#6D28D9'],

    Shocked: ['#FDE68A', '#FACC15'],   // Gold-Gelb
    Amazed: ['#FCD34D', '#F59E0B'],   // Helles Orange
    Intrigued: ['#FDBA74', '#EA580C'], // Warme Orange-Töne

    Appalled: ['#D9F99D', '#A3E635'],    // Helles Grün
    Uncomfortable: ['#BBF7D0', '#84CC16'],// Grünlicher Ton
    Offended: ['#A7F3D0', '#4ADE80'],    // Türkis-Grün

    Calm: ['#F3F4F6', '#E5E7EB'],
    Reflective: ['#D1D5DB', '#9CA3AF'],
    Indifferent: ['#E5E7EB', '#6B7280'],
};


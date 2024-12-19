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
    // Basis-Emotion Combinations (Alphabetically Sorted Keys)
    "Angry+Fearful": "Tense Aggression",
    "Angry+Happy": "Bittersweet Frustration",
    "Angry+Neutral": "Brooding Anger",
    "Angry+Sad": "Resentful Sorrow",
    "Angry+Surprised": "Outraged Shock",
    "Angry+Disgusted": "Raging Disgust",

    "Disgusted+Fearful": "Repulsed Anxiety",
    "Disgusted+Happy": "Conflicted Happiness",
    "Disgusted+Neutral": "Detached Disgust",
    "Disgusted+Sad": "Loathing Grief",
    "Disgusted+Surprised": "Horrified Amazement",

    "Fearful+Happy": "Anxious Optimism",
    "Fearful+Neutral": "Uneasy Calm",
    "Fearful+Sad": "Anxious Regret",
    "Fearful+Surprised": "Startled Fear",

    "Happy+Joyful": "Radiant Bliss",
    "Happy+Excited": "Euphoric Energy",
    "Happy+Neutral": "Calm Contentment",
    "Happy+Sad": "Reflective Nostalgia",
    "Happy+Surprised": "Delighted Surprise",

    "Neutral+Reflective": "Quiet Contemplation",

    "Sad+Fearful": "Anxious Regret",
    "Sad+Heartbroken": "Deep Melancholy",
    "Sad+Neutral": "Quiet Melancholy",
    "Sad+Surprised": "Mourning Shock",

    "Surprised+Neutral": "Subtle Intrigue",
};

export const moodMessages = {
    "Reflective Nostalgia": "Take a moment to cherish the good memories.",
    "Bittersweet Frustration": "Channel your frustration into something constructive.",
    "Euphoric Energy": "You’re unstoppable – ride the wave of excitement!",
    "Deep Melancholy": "It’s okay to feel this way. Be kind to yourself.",
    "Paralyzing Anxiety": "Breathe. You’re stronger than you feel right now.",
    "Quiet Contemplation": "Embrace the stillness and let your thoughts settle.",
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


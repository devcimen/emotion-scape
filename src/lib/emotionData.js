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
    // 2er-Kombinationen
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
    "Happy+Neutral": "Calm Contentment",
    "Happy+Sad": "Reflective Nostalgia",
    "Happy+Surprised": "Delighted Surprise",
    "Neutral+Sad": "Quiet Melancholy",
    "Neutral+Surprised": "Subtle Intrigue",

    // 3er-Kombinationen
    "Angry+Disgusted+Fearful": "Overwhelming Tension",
    "Angry+Disgusted+Happy": "Conflicted Outburst",
    "Angry+Fearful+Neutral": "Tense Calm",
    "Angry+Happy+Neutral": "Conflicted Calm",
    "Disgusted+Fearful+Sad": "Anxious Loathing",
    "Disgusted+Happy+Surprised": "Startling Conflict",
    "Fearful+Happy+Sad": "Anxious Hope",
    "Fearful+Neutral+Sad": "Numb Unease",
    "Happy+Neutral+Sad": "Melancholic Peace",
    "Happy+Neutral+Surprised": "Curious Serenity",
    "Neutral+Sad+Surprised": "Bittersweet Shock",

    // 4er-Kombinationen
    "Angry+Disgusted+Fearful+Sad": "Exhausting Tension",
    "Angry+Disgusted+Happy+Neutral": "Mixed Conflict",
    "Angry+Fearful+Neutral+Sad": "Dark Unease",
    "Disgusted+Fearful+Neutral+Sad": "Heavy Dread",
    "Fearful+Happy+Neutral+Surprised": "Hopeful Surprise",
    "Happy+Neutral+Sad+Surprised": "Gentle Reflection",

    // 5er-Kombinationen
    "Angry+Disgusted+Fearful+Happy+Neutral": "Chaotic Emotion",
    "Angry+Fearful+Neutral+Sad+Surprised": "Overwhelming Dread",
    "Disgusted+Fearful+Happy+Neutral+Sad": "Layered Emotion",

    // 6er-Kombinationen
    "Angry+Disgusted+Fearful+Happy+Neutral+Sad": "Emotional Storm",
    "Disgusted+Fearful+Happy+Neutral+Sad+Surprised": "Complex Intrigue",

    // 7er-Kombination (alle Hauptemotionen)
    "Angry+Disgusted+Fearful+Happy+Neutral+Sad+Surprised": "All-Encompassing Emotion"
};

export const moodMessages = {
    // 2er-Kombinationen
    "Raging Disgust": "Take a breath and step back. Intense emotions need time to settle.",
    "Tense Aggression": "Tension builds, but strength comes from facing fears calmly.",
    "Bittersweet Frustration": "Conflicting energy – channel frustration into positive action.",
    "Brooding Anger": "A quiet storm brews within. Find a moment to release it.",
    "Resentful Sorrow": "It’s okay to feel conflicted. Healing takes patience.",
    "Outraged Shock": "Shock amplifies anger – pause before reacting.",
    "Repulsed Anxiety": "Discomfort and anxiety can be overwhelming. Start small to regain control.",
    "Conflicted Happiness": "Happiness feels conflicted – focus on what truly brings joy.",
    "Detached Disgust": "Step away for clarity. Perspective can ease discomfort.",
    "Loathing Grief": "A heavy heart and strong aversion – give yourself time to recover.",
    "Horrified Amazement": "Unpleasant surprises can hit hard. Breathe and process slowly.",
    "Anxious Optimism": "Hope shines through fear. Keep moving toward the light.",
    "Uneasy Calm": "Unease sits quietly. Find comfort in the small, steady things.",
    "Anxious Regret": "Worry and sadness weigh heavily – be kind to yourself.",
    "Startled Fear": "A sudden shock brings anxiety. Ground yourself in the present moment.",
    "Calm Contentment": "Calm contentment surrounds you. Enjoy the stillness.",
    "Reflective Nostalgia": "Reflect on bittersweet moments – they shape who you are.",
    "Delighted Surprise": "Unexpected joy brightens your path. Embrace the surprise.",
    "Quiet Melancholy": "Gentle sadness sits within. Let yourself rest and recover.",
    "Subtle Intrigue": "Curiosity stirs quietly. Let it guide you forward.",

    // 3er-Kombinationen
    "Overwhelming Tension": "Tension runs deep – take small steps to find peace.",
    "Conflicted Calm": "Conflicting emotions rise – balance will come with time.",
    "Disbelieving Sorrow": "Shock and sadness collide. Take time to process gently.",
    "Anxious Hope": "Even through worry, hope lights the way forward.",
    "Numb Unease": "Quiet unease lingers – seek comfort in small steps.",
    "Peaceful Serenity": "You’ve found a moment of calm amidst the chaos. Treasure it.",
    "Quiet Sadness": "Gentle melancholy reminds you of what matters most.",
    "Exhilarated Surprise": "A sudden burst of joy energizes your spirit – embrace it.",

    // 4er-Kombinationen
    "Conflicted Chaos": "A mix of feelings swirls – take time to settle your mind.",
    "Stormy Reflection": "A deep tension meets quiet contemplation – allow yourself space.",
    "Unsettled Calm": "You’re balancing heavy emotions. Let the quiet moments ground you.",
    "Reflective Intensity": "There’s power in pause. Let your emotions guide you carefully.",

    // 5er-Kombinationen
    "Turbulent Harmony": "Even amidst a storm, calm moments can be found – hold onto them.",
    "Layered Tension": "The complexity of emotions is natural. Breathe and allow clarity to emerge.",
    "Gentle Release": "Let conflicting feelings flow gently through you without resistance.",

    // 6er-Kombination
    "Emotional Overload": "Everything feels alive at once. Find stillness within the chaos.",

    // 7er-Kombination (Alle Emotionen)
    "Boundless Emotion": "Every part of you is alive – let this wave settle into quiet clarity."
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


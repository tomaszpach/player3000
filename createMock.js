const fs = require('fs');

const randomNames = [
    'Epic Adventure',
    'Mystery of the Night',
    'Journey to the Unknown',
    'The Great Escape',
    'Hidden Treasures',
    'Galactic Odyssey',
    'Whispering Winds',
    'Echoes of Time',
    'Silent Shadows',
    'Dawn of Legends',
    'Lost in Space',
    'Underwater Quest',
    'Mountain Expedition',
    'Desert Mirage',
    'Forest Secrets',
    'Urban Legends',
    'Ancient Ruins',
    'Future Visions',
    'Parallel Worlds',
    'Cosmic Journey',
    'Mystic Lands',
    'Haunted Mansion',
    'Pirate’s Cove',
    'Dragon’s Lair',
    'Robot Invasion',
    'Alien Encounter',
    'Time Traveler',
    'Virtual Reality',
    'Cyberpunk City',
    'Fantasy Realm',
    'Superhero Saga',
    'Zombie Apocalypse',
    'Vampire Chronicles',
    'Werewolf Hunt',
    'Ghost Stories',
    'Magic Spells',
    'Space Mission',
    'Treasure Hunt',
    'Wild West',
    'Medieval Times',
];

const randomVideoLinks = [
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
];

const randomAuthors = [
    'John Doe',
    'Jane Smith',
    'Alice Johnson',
    'Bob Brown',
    'Charlie Davis',
    'Emily Evans',
    'Frank Green',
    'Grace Harris',
    'Henry Jackson',
    'Ivy King',
    'Jack Lee',
    'Karen Miller',
    'Larry Nelson',
    "Mona O'Neil",
    'Nina Parker',
    'Oscar Quinn',
    'Paul Roberts',
    'Quincy Scott',
    'Rachel Turner',
    'Sam Wilson',
    'EpicGamer123',
    'TechGuru',
    'TravelLover',
    'FoodieQueen',
    'MusicManiac',
    'FitnessFreak',
    'MovieBuff',
    'BookWorm',
    'NatureFanatic',
    'GadgetGeek',
    'Fashionista',
    'SportsFanatic',
    'ArtLover',
    'HistoryBuff',
    'ScienceNerd',
    'DIYMaster',
    'PetLover',
    'CarEnthusiast',
    'PhotographyPro',
    'GamingLegend',
    'CookingExpert',
    'AdventureSeeker',
    'BeautyGuru',
    'HealthNut',
    'ComedyKing',
    'NewsJunkie',
    'TravelBug',
    'MusicLover',
    'FitnessGuru',
    'MovieCritic',
    'BookAddict',
    'NatureLover',
    'TechSavvy',
    'FashionGuru',
    'SportsFan',
    'ArtFanatic',
    'HistoryGeek',
    'ScienceBuff',
    'DIYExpert',
    'PetFanatic',
    'CarLover',
    'PhotoFanatic',
    'GamingPro',
    'CookingMaster',
    'AdventureLover',
    'BeautyExpert',
    'HealthGuru',
    'ComedyFanatic',
    'NewsFanatic',
];

const randomComments = [
    'Great video!',
    'Loved it!',
    'Very informative.',
    'Amazing content!',
    'Could be better.',
    'Not what I expected.',
    'Fantastic!',
    'Well done!',
    'I learned a lot.',
    'This was helpful.',
    'Keep it up!',
    'Nice work!',
    'Interesting perspective.',
    'Thanks for sharing.',
    'Good job!',
    "I didn't like it.",
    'This is awesome!',
    'Very well explained.',
    'I disagree with this.',
    'Excellent presentation.',
    'This video was incredibly insightful and provided a lot of valuable information. Thank you!',
    'I really enjoyed watching this. The content was well-presented and easy to understand.',
    'Amazing content! I learned so much from this video. Keep up the great work!',
    'This was a fantastic video. The explanations were clear and the examples were very helpful.',
    'I appreciate the effort put into making this video. It was very informative and engaging.',
    'Great job on this video! The information was presented in a way that was easy to follow.',
    'This video exceeded my expectations. The content was thorough and well-explained.',
    'I found this video to be very helpful. The tips and tricks shared were practical and useful.',
    'Excellent presentation! The visuals and explanations were top-notch.',
    'This video was a great resource. I will definitely be referring back to it in the future.',
    'I loved the way this video was structured. It made the information easy to digest.',
    'Thank you for creating this video. It was very informative and well-made.',
    'This was one of the best videos I have seen on this topic. Great job!',
    'I learned a lot from this video. The content was well-researched and presented.',
    'This video was very well done. The information was clear and concise.',
    'I appreciate the detailed explanations in this video. It was very helpful.',
    'This video was a great learning experience. The content was engaging and informative.',
    'I found this video to be very insightful. The information was presented in a clear and concise manner.',
    'Great video! The content was well-organized and easy to follow.',
    'This video was very helpful. The explanations were clear and the examples were relevant.',
    'This video was incredibly insightful and provided a lot of valuable information. Thank you for taking the time to create such detailed content!',
    'I really enjoyed watching this. The content was well-presented and easy to understand. The examples used were very relevant and helped clarify the concepts.',
    'Amazing content! I learned so much from this video. The explanations were clear and concise, and the visuals were very helpful in understanding the material.',
    'This was a fantastic video. The explanations were clear and the examples were very helpful. I appreciate the effort put into making this video so informative.',
    'I appreciate the effort put into making this video. It was very informative and engaging. The presenter did a great job of breaking down complex topics into easy-to-understand segments.',
    'Great job on this video! The information was presented in a way that was easy to follow. The pacing was just right, and the visuals complemented the explanations perfectly.',
    'This video exceeded my expectations. The content was thorough and well-explained. I especially liked the practical examples that were provided, which made the concepts easier to grasp.',
    'I found this video to be very helpful. The tips and tricks shared were practical and useful. I will definitely be applying some of these techniques in my own work.',
    'Excellent presentation! The visuals and explanations were top-notch. The presenter did a great job of keeping the content engaging and informative throughout the video.',
    'This video was a great resource. I will definitely be referring back to it in the future. The information was well-organized and presented in a logical manner.',
    'I loved the way this video was structured. It made the information easy to digest. The step-by-step approach was very effective in explaining the concepts.',
    'Thank you for creating this video. It was very informative and well-made. The presenter did a fantastic job of explaining the material in a clear and concise manner.',
    'This was one of the best videos I have seen on this topic. Great job! The content was well-researched and presented in an engaging way.',
    'I learned a lot from this video. The content was well-researched and presented. The examples used were very relevant and helped clarify the concepts.',
    'This video was very well done. The information was clear and concise. The presenter did a great job of breaking down complex topics into easy-to-understand segments.',
    'I appreciate the detailed explanations in this video. It was very helpful. The presenter did a great job of keeping the content engaging and informative throughout the video.',
    'This video was a great learning experience. The content was engaging and informative. The presenter did a fantastic job of explaining the material in a clear and concise manner.',
    'I found this video to be very insightful. The information was presented in a clear and concise manner. The examples used were very relevant and helped clarify the concepts.',
    'Great video! The content was well-organized and easy to follow. The pacing was just right, and the visuals complemented the explanations perfectly.',
    'This video was very helpful. The explanations were clear and the examples were relevant. I will definitely be applying some of these techniques in my own work.',
];

const randomValue = (length) => Math.floor(Math.random() * length);

const getRandomDate = (start, end) => {
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();
    const randomTime = new Date(
        startDate + Math.random() * (endDate - startDate)
    );

    return randomTime.toISOString().split('T')[0];
};

const getRandomComment = () => {
    return Array.from({ length: randomValue(30) }, (_, index) => {
        const randomAuthor = randomAuthors[randomValue(randomAuthors.length)];
        const randomComment =
            randomComments[randomValue(randomComments.length)];
        const dateAdded = getRandomDate(
            '2020-01-01',
            new Date().toISOString().split('T')[0]
        );

        return {
            id: index + 1,
            author: randomAuthor,
            comment: randomComment,
            dateAdded,
            likes: randomValue(100),
        };
    });
};

// Create 10 random clips
// Simply change the length to create more or less clips
const clips = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: randomNames[randomValue(randomNames.length)],
    thumbnail: `https://picsum.photos/500/300?random=${index + 1}`,
    created_at: getRandomDate(
        '1991-11-09',
        new Date().toISOString().split('T')[0]
    ),
    src: randomVideoLinks[randomValue(randomVideoLinks.length)],
    comments: getRandomComment(),
}));

const data = { clips };

fs.writeFileSync('db.json', JSON.stringify(data, null, 2), 'utf8');

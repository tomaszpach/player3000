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
    const randomAuthor = randomAuthors[randomValue(randomAuthors.length)];
    const randomComment = randomComments[randomValue(randomComments.length)];
    const dateAdded = getRandomDate(
        '2020-01-01',
        new Date().toISOString().split('T')[0]
    );
    const randomNumber = Math.floor(Math.random() * 100);

    return {
        author: randomAuthor,
        comment: randomComment,
        dateAdded,
        likes: randomNumber,
    };
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

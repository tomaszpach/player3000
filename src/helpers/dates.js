export const timeAgo = (date) => {
    const now = new Date();
    const past = new Date(date);
    const seconds = Math.floor((now - past) / 1000);
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
    };

    for (const [unit, value] of Object.entries(intervals)) {
        const count = Math.floor(seconds / value);
        if (count >= 1) {
            return count === 1 ? `a ${unit} ago` : `${count} ${unit}s ago`;
        }
    }

    return 'just now';
};

export const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

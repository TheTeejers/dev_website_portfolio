function getRandomXDigitWithSign() {
    const randomDigitX = Math.floor(Math.random() * 100) + 100; // Generate a random digit between 0 and 200
    const randomSignX = Math.random() < 0.5 ? -1 : 1; // Generate a random sign (-1 or 1)
    return randomDigitX * randomSignX;
}

function getRandomYDigitWithSign() {
    const randomDigitY = Math.floor(Math.random() * 100); // Generate a random digit between 0 and 100
    const randomSignY = Math.random() < 0.5 ? -1 : 1; // Generate a random sign (-1 or 1)
    return randomDigitY * randomSignY;
}

// Export as named exports
export { getRandomXDigitWithSign, getRandomYDigitWithSign };

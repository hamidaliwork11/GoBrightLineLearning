export function getRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const domains = ['example.com', 'test.com', 'mail.com', 'domain.com'];
    
    function getRandomString(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    
    const usernameLength = Math.floor(Math.random() * 10) + 5; // random length between 5 and 15
    const username = getRandomString(usernameLength);
    const domain = domains[Math.floor(Math.random() * domains.length)];
    
    return `${username}@${domain}`;
}


export function generateRandomZipCode() {
    // Generate a random number between 1000 and 9999 (inclusive)
    const zipCode = Math.floor(1000 + Math.random() * 9000);
    return zipCode.toString();
}

// Example usage:
console.log(generateRandomZipCode()); // e.g., "4837"



export function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomUsername() {
    const adjectives = ['Cool', 'Smart', 'Brave', 'Fast', 'Happy', 'Bright', 'Bold', 'Epic', 'Funky', 'Jolly'];
    const nouns = ['Tiger', 'Eagle', 'Shark', 'Panda', 'Lion', 'Phoenix', 'Dragon', 'Wolf', 'Unicorn', 'Falcon'];
    const randomAdjective = getRandomElement(adjectives);
    const randomNoun = getRandomElement(nouns);
    const randomNumber = Math.floor(Math.random() * 1000); // Generates a random number between 0 and 999

    return `${randomAdjective}${randomNoun}${randomNumber}`;
}

console.log(generateRandomUsername());


export function getRandomElementOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomCompanyName() {
    const adjectives = ['Global', 'Dynamic', 'Innovative', 'Creative', 'Future', 'Visionary', 'Leading', 'Premier', 'Elite', 'Advanced'];
    const nouns = ['Solutions', 'Technologies', 'Industries', 'Enterprises', 'Systems', 'Networks', 'Corporation', 'Holdings', 'Services', 'Ventures'];
    const suffixes = ['Inc.', 'LLC', 'Ltd.', 'Corp.', 'Group', 'Co.', 'Partners', 'PLC', 'Holdings'];

    const randomAdjective = getRandomElementOne(adjectives);
    const randomNoun = getRandomElementOne(nouns);
    const randomSuffix = getRandomElementOne(suffixes);

    return `${randomAdjective} ${randomNoun} ${randomSuffix}`;
}

console.log(generateRandomCompanyName());


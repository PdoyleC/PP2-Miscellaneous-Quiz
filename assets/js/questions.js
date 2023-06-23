const questions = [
    {
        question: "How often do lunar eclipses happen each year?",
        answers: [
            { text: "3", correct: true },
            { text: "5", correct: false },
            { text: "7", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: 'In "Always Sunny in Philadelphia", what fruit does Charlie eat for the very first time?',
        answers: [
            { text: "An Pear", correct: true },
            { text: "An Apple", correct: false },
            { text: "Blueberry", correct: false },
            { text: "A Plum", correct: false }
        ]
    },
    {
        question: "According to Birdperson, in Rick and Morty what does 'Wubba Lubba dub- dub' mean?",
        answers: [
            { text: "Welcome my friend", correct: false },
            { text: "Can you tell me where the shop is", correct: false },
            { text: "I am in great pain, please help me", correct: true },
            { text: "I would like Ketchup", correct: false }
        ]
    },
    {
        question: "A(n) ________ can filter 50 gallons of water a day.",
        answers: [
            { text: "Fish tank", correct: false },
            { text: "Starfish", correct: false },
            { text: "Oyster", correct: true },
            { text: "Beluga whale", correct: false }
        ]
    },
    {
        question: "Beijing has three million _______ that are looked after by robot nannies.",
        answers: [
            { text: "Baby robots", correct: false },
            { text: "Milking Goats", correct: false },
            { text: "Hens", correct: true },
            { text: "Guinea Pigs", correct: false }
        ]
    },
    {
        question: "How many constellations are there?",
        answers: [
            { text: "90", correct: false },
            { text: "82", correct: false },
            { text: "88", correct: true },
            { text: "98", correct: false }
        ]
    },
    {
        question: "What country drinks the most coffee?",
        answers: [
            { text: "France", correct: false },
            { text: "Finland", correct: true },
            { text: "Italy", correct: false },
            { text: "Denmark", correct: false }
        ]
    },
    {
        question: "Where did sushi originate?",
        answers: [
            { text: "Korea", correct: false },
            { text: "New Zealand", correct: false },
            { text: "Japan", correct: false },
            { text: "China", correct: true }
        ]
    },
    {
        question: "Starfish have ______ on the tips of their arms",
        answers: [
            { text: "Hands", correct: false },
            { text: "Feet", correct: false },
            { text: "Eyes", correct: true },
            { text: "Noses", correct: false }
        ]
    },
    {
        question: "Which planet has the largest ocean?",
        answers: [
            { text: "Neptune", correct: false },
            { text: "Earth", correct: false },
            { text: "Saturn", correct: false },
            { text: "Jupiter", correct: true }
        ]
    },
    {
        question: "Which of the following sauces is NOT traditionally vegan",
        answers: [
            { text: "Hoisin", correct: false },
            { text: "Wasabi", correct: false },
            { text: "Mustard", correct: false },
            { text: "Worcestershire", correct: true }
        ]
    },
    {
        question: "The worlds fastest ___________ travels at 47 mph.",
        answers: [
            { text: "Big cat", correct: false },
            { text: "Golf cart", correct: false },
            { text: "Elevator", correct: true },
            { text: "Ostrich", correct: false }
        ]
    },
    {
        question: "How many elements are in the periodic table?",
        answers: [
            { text: "98", correct: false },
            { text: "106", correct: false },
            { text: "112", correct: false },
            { text: "118", correct: true }
        ]
    },
    {
        question: "Who was the Ancient Greek God of the Sun?",
        answers: [
            { text: "Apollo", correct: true },
            { text: "Aries", correct: false },
            { text: "Hades", correct: false },
            { text: "Hera", correct: false }
        ]
    },
    {
        question: "How long does each season last on Neptune?",
        answers: [
            { text: "10years", correct: false },
            { text: "20 years", correct: false },
            { text: "30 years", correct: false },
            { text: "40 years", correct: true }
        ]
    },
    {
        question: "How many breeds of elephant are there?",
        answers: [
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: false },
        ]
    },
    {
        question: "How many letter tiles are there in a game of Scrabble?",
        answers: [
            { text: "97", correct: false },
            { text: "100", correct: true },
            { text: "108", correct: false },
            { text: "120", correct: false }
        ]
    },
    {
        question: "What year was Marmite invented?",
        answers: [
            { text: "1929 ", correct: false },
            { text: "1902 ", correct: true },
            { text: "1899", correct: false },
            { text: "1910", correct: false }
        ]
    },
    {
        question: "Which playground game used to be an Olympic sport up until 1920?",
        answers: [
            { text: "Long Rope Skipping", correct: false },
            { text: "Hop Scotch", correct: false },
            { text: "Tug of war", correct: true },
            { text: "Tag", correct: false }
        ]
    },
    {
        question: "What is at the center of the Milky Way galaxy?",
        answers: [
            { text: "Alpha Centauri", correct: false },
            { text: "The Sun", correct: false },
            { text: "A black hole", correct: true },
            { text: "A Turtle", correct: false }
        ]
    },
    {
        question: "Name the hospital where the first human to human heart transplant took place",
        answers: [
            { text: "Cleveland Clinic", correct: false },
            { text: "Massachusetts General Hospital", correct: false },
            { text: "Mayo Clinic ", correct: false },
            { text: "Groote Schuur Hospital", correct: true }
        ]
    },
    {
        question: "Which U.S. President had the middle name Milhous?",
        answers: [
            { text: "Thomas Jefferson", correct: false },
            { text: "Richard Nixon", correct: true },
            { text: "Zachary Taylor", correct: false },
            { text: "William Henry Harrison", correct: false },
        ]
    },
    {
        question: "when did ireland join the EU",
        answers: [
            { text: "1971", correct: false },
            { text: "1973", correct: true },
            { text: "1975", correct: false },
            { text: "1977", correct: false }
        ]
    },
    {
        question: "How much of the Milky Way is visible?",
        answers: [
            { text: "0.00003%", correct: false },
            { text: "0.000003%", correct: true },
            { text: "0.0003%", correct: false },
            { text: "0.03%", correct: false }
        ]
    },
    {
        question: "In Rick and Morty, What's the name of the colorful land Rick created for Beth when she was a kid?",
        answers: [
            { text: "Derpytown", correct: false },
            { text: "Froopyville", correct: false },
            { text: "Froopyland", correct: true },
            { text: "Drippylex", correct: false }
        ]
    },
    {
        question: "What is a group of Owls called?",
        answers: [
            { text: "Wisdom", correct: false },
            { text: "Flamboyance", correct: false },
            { text: "congress", correct: false },
            { text: "Parliament", correct: true }
        ]
    },
    {
        question: "What is the longest river in Ireland?",
        answers: [
            { text: "River Liffey", correct: false },
            { text: "River Shannon", correct: true },
            { text: "River Lee", correct: false },
            { text: "River Erne", correct: false }
        ]
    },
    {
        question: "The Blarney Stone is a block of what type of rock?",
        answers: [
            { text: "Granite", correct: false },
            { text: "Limestone", correct: true },
            { text: "Sandstone", correct: false },
            { text: "Basalt", correct: false }
        ]
    },
    {
        question: "Name the highest peak in Ireland?",
        answers: [
            { text: "Beenkeragh", correct: false },
            { text: "Caher", correct: false },
            { text: "Carrauntoohil", correct: true },
            { text: "Knocknapeasta", correct: false }
        ]
    },
    {
        question: "In Rick and Morty,What is Morty's dragon's name?",
        answers: [
            { text: "Farthromax", correct: false },
            { text: "Balthromaw", correct: true },
            { text: "Falcordion", correct: false },
            { text: "Drogongly", correct: false }
        ]
    },
    {
        question: "What's the name of the Spandau Ballet lead singer?",
        answers: [
            { text: "Tony Hadley", correct: true },
            { text: "Tony Handly", correct: false },
            { text: "Tony Hardy", correct: false },
            { text: "Tony Manley", correct: false }
        ]
    },
    {
        question: "Which song was voted 'Irelands Favourite Folk Song' by RTÉ in 2019?",
        answers: [
            { text: "The Hot Asphalt", correct: false },
            { text: "Rocky Road to Dublin", correct: false },
            { text: "The Galway Shawl", correct: false },
            { text: "Raglan Road", correct: true }
        ]
    },
    {
        question: "In Rick and Morty, When exactly did Snake Armageddon happen?",
        answers: [
            { text: "June 21, 2023", correct: false },
            { text: "June 21, 2024", correct: false },
            { text: "June 21, 2025", correct: false },
            { text: "June 21, 2026", correct: true }
        ]
    },
    {
        question: "Irish singer-songwriter, Enya, was born in what county?",
        answers: [
            { text: "Dublin", correct: false },
            { text: "Donegal", correct: true },
            { text: "Westmeath", correct: false },
            { text: "Sligo", correct: false }
        ]
    },
    {
        question: "Which international artist played a “Gentlemen of the Road” stopover in Galway?",
        answers: [
            { text: "Elvis Costello", correct: false },
            { text: "Bruce Springsteen", correct: false },
            { text: "Mumford & Sons", correct: true },
            { text: "Ed Sheeran", correct: false }
        ]
    },
    {
        question: "Where is the strongest human muscle located? ",
        answers: [
            { text: "Stomach", correct: false },
            { text: "Chest", correct: false },
            { text: "Legs", correct: false },
            { text: "Jaw", correct: true }
        ]
    },
    {
        question: "How many hearts does an octopus have?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
        ]
    },
    {
        question: "What is a group of Flamingos called?",
        answers: [
            { text: "Guide", correct: false },
            { text: "Flamboyance", correct: true },
            { text: "Pride", correct: false },
            { text: "Parliament", correct: false }
        ]
    },
    {
        question: "In the film Predator What color is the Predator's blood?",
        answers: [
            { text: "Green", correct: true },
            { text: "Yellow", correct: false },
            { text: "Red", correct: false },
            { text: "Blue", correct: false }
        ]
    },
    {
        question: "In the film Predator Who says: 'I ain't got time to bleed'?",
        answers: [
            { text: "Blain", correct: true },
            { text: "Dutch", correct: false },
            { text: "Dillon", correct: false },
            { text: "Poncho", correct: false }
        ]
    },
];



// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Arvindh",
    message: "I'm a computer science student and an aspiring software engineer. Currently working as a Freelancer building Android App and tools to aid students and clients",
    basedLocation: "TamilNadu,India",
    resumeLink: "https://drive.google.com/file/d/1iQEzmX7xGWC9-FkCsv5kD8zeQPYoof4j/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/Designer.png'
}

const socialMediaLinks = {
    github: "https://github.com/arvindh007",
    linkedin: "https://www.linkedin.com/in/arvindh-s-v-48721a236/",
    medium: "#",
    stackoverflow: "",
    xtwitter: "https://twitter.com/Arvindh54062062"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Arvindh and I'm a computer science student at Erode Sengunthar Engineering College. I have a passion for coding in languages such as Python, Java, React.Js, & Node.js. Work in web development and have experience with React.Js,Vue.Js and Tailwind CSS frameworks.",
        "Responsible, organized, problem solver, and independent thinker. Work well in a team and a quick learner.Currently working as a web development freelancer for my clients."
    ], // Separated items are paragraphs
    techStack: [
        "Java",
        "MERN",
        "JavaScript",
        "React.js",
        "MongoDB",
        "Node.js"
    ],
    photo1Link: "images/pic1.jpg",
    photo2Link: "images/pic2.jpg",
    photo3Link: "images/pic3.jpg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Web Dev Intern",
        company: {
            name: "TechVolt",
            link: "https://www.techvoltcoimbatore.com/"
        },
        duration: "JAN 2022 - FEB 2022",
        bulletPoints: [
            "Resolved issues and developed new web pages within companies web applications.",
            "Github code contributions as an intern on the team.",
            // "Currently rebuilding and modernizing the university digital sign manager and system."
        ],
        hashtags: [
            
            
            "MySQL",
            "JS",
            "React.js",
            "HTML",
            "Tailwind"
        ]
    },
    {
        position: "Freelancing",
        company: {
            name: "",
            link: "#"
        },
        duration: "Jan 2022 - Present",
        bulletPoints: [
            "Built web applications using MongoDB,Express.js,React and Node.js, focusing on both front-end and back-end development.",
            "As a Java developer, I create robust applications that run on any device with a Java Virtual Machine (JVM). Using frameworks like Spring and Hibernate, I build scalable and secure web, mobile, and desktop applications.",
            //"In React-Native it leverages Javascript and React to build natively-rendered mobile apps for iOS and Android, focusing on UI development and integration with backend services."
        ],
        hashtags: [
            "MERN FULL STACK",
            "JAVA",
            "REACT.JS",
            "NODE.JS",
            "SQL",
            "MONGODB"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "RangeRider Android App",
        yearCompleted: "2024",
        description: "An Android app to book and buy bikes online, all the while presenting in a clean and professional look with a load of features.",
        techStack: "React-Native, FireBase, Node.JS",
        links: [
            {
                label: "",
                type: "git",
                url: "#"
            },
            {
                label: "",
                type: "external",
                url: "#"
            }
        ],
        imageLink: "images/combined.png",
        alignLeft: false
    },
    {
        projectName: "Online Rental Application",
        yearCompleted: "2024",
        description: "Developed a Online rental website. Incorporated React.js library to construct the frontend of the website and for backend of the website I have used Node.js and MongoDB.",
        techStack: "React.js, HTML, CSS, JS,Node.js,MongoDB",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/arvindh007/Online_RentalApp"
            }
            
        ],
        imageLink: "images/Screenshot 2024-10-04 211756.png",
        alignLeft: true
    },
    // {
    //     projectName: "Student System",
    //     yearCompleted: "2024",
    //     description: "Built a Student System incorporating the Java SpringBoot library.",
    //     techStack: "Java, SpringBoot, React.js, Node.js",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://github.com/arvindh007/StudentsSystem"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "#"
    //         }
    //     ],
    //     imageLink: "#",
    //     alignLeft: false
    // }
    // {
    //     projectName: "Trivia Quiz",
    //     yearCompleted: "2020",
    //     description: "Interested in taking a fun and interactive pop quiz? Using the HTML, CSS3, JavaScript, and jQuery I created a quiz that can be taken on numerous topics of your choice and gives instant feedback. The entire project is built mostly on JavaScript and all the functionality and events are controlled through functions such as ReadDisplay and Validate. The HTML portion of the online quiz only serves as the skeleton and template for elements that will be created via JS.",
    //     techStack: "JS, HTML, CSS",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://github.com/feifyKike/JS-API-Quiz"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://codepen.io/Max_the_coder/pen/yLXZOYL" //https://codepen.io/Max_the_coder/pen/yLXZOYL
    //         }
    //     ],
    //     imageLink: "images/trivia_pic.png",
    //     alignLeft: true
    // },
    // {
    //     projectName: "Coronavirus Report",
    //     yearCompleted: "2020",
    //     description: "Created a program that displays up-to-date COVID-19 data and shows results in a graphical / visual representation. Coded with the Python programming language and libraries such as Matplotlib, Requests, and CSV.",
    //     techStack: "Python",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://youtu.be/gw5kb1QKVp0"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://github.com/feifyKike/Covid-Cases-Visual"
    //         }
    //     ],
    //     imageLink: "images/covid_pic.png",
    //     alignLeft: false
    // }
]

const archiveLink = "https://github.com/arvindh007"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking web and software development positions/internships for summer 2024.",
            "Also looking to build a team for projects & startup ideas or just make professional connections."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "", // email takes precedance
            other: "https://forms.gle/VUE596T5xWmYw9X46"
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}
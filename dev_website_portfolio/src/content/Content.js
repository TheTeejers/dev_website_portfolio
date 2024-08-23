
const Content = () => {

    const contact = {
        topicTitle: 'Contact Me',
        myName: 'TJ Loughry',
        email: 'tjloughry@gmail.com',
        phone: '512.826.6923',
        gitHub: 'https://github.com/TheTeejers',
        linkedIn: 'https://linkedin.com/in/tjloughry',
        faceBook: 'https://www.facebook.com/tj.loughry',
      };

    const tableOfContents = {
        myName: ['T', 'J', 'L', 'ough', 'ry'],
        workTitle: ['Senior Support Engineer', 'Software Developer', 'Web Developer'],

        selfTopics: [
            { aboutMe: 'About Me' },
            { experience: 'Experience' },
            { education: 'Education' },
            { contact: 'Contact' },
            { bonus: 'bonus about me' },
        ],
    };

    const bonus = {
        title: 'Hello World!!!',
        paragraphs: [
            <>I'd love to share a bit more about my background and interests outside of work. Aside from being passionate about web development, I'm also an avid woodworker. When I'm not coding, you'll probably find me in my workshop. </>,
            <>Woodworking is a big passion of mine—it's taught me patience, precision, and how to plan ahead. These skills come in handy when I'm working on web projects, helping me create well-thought-out and detailed applications.  There's something incredibly satisfying about taking raw materials and transforming them into something both functional and beautiful. This hobby has taught me a lot about patience, precision, and the importance of planning ahead, which I find translates really well into my coding projects.</>,

            <>When I'm working on a coding project, I often think about it in the same way I do a woodworking piece. I envision the final product, plan out how all the parts will come together, and pay close attention to the details to ensure everything fits perfectly. This mindset helps me write clean, efficient code and design intuitive user interfaces.</>,

            <>Also, I believe in continuous learning and improvement, whether it's mastering a new framework in web development or learning a new woodworking technique. I'm always eager to take on new challenges and find innovative solutions, which keeps me motivated and engaged in my work.</>,

            <>So, while my resume covers my professional qualifications, I think these personal interests and values really highlight who I am and how I approach my work.</>
        ],
    };


    const aboutMe = {
        title: 'About Me',


        aboutMeTopics: [
            { '': `Hey there! I'm TJ Loughry, a Front-End Web Developer and Automation Testing Support Engineer based in Austin, Texas. I love creating user-friendly web applications and solving tricky tech problems.` },
            { 'What I Do': <>At SubjectWell, I've tackled a ton of website issues, helped move our database to AWS, and made sure everything runs smoothly by keeping an eye on our Step and Lambda functions. Before that, at Sauce Labs, I helped customers with their Selenium/Appium testing, wrote helpful documentation, and managed the support queue. I even took on the role of Austin Office Lead/Manager, where I helped set up our office space and organized team events.</> },
            { 'My Skills': <>I'm skilled in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Python, Selenium, Appium, Vue.js, and Rails. I’ve got a knack for reviewing code, fixing issues, and making databases work better.</> },
            { 'My Background': <>I studied Accounting at Midwestern State University and got an Associate of Science in Mathematics from Austin Community College. I also completed a Web Development Immersive program at General Assembly in Austin.</> },
  

        ],
    };

    const experience = [
        {topicTitle: 'Experience'},
        {
            company: 'SubjectWell, Austin, Texas',
            title: 'Associate Software Engineer',
            dates: 'April 2022 - July 2024',
            responsibilities: [
                'Resolved 95% of website issues by engaging stakeholders and communicating bugs to developers, enhancing functionality.',
                'Conducted comprehensive codebase reviews and supported the transition to AWS, improving database performance by 40%.',
                'Monitored Step and Lambda functions, collaborated on robust solutions, and facilitated interactions between developers and stakeholders to ensure project alignment.'
            ]
        },
        {
            company: 'Sauce Labs, Austin, Texas',
            title: 'Customer Support Engineer',
            dates: 'November 2018 - April 2022',
            responsibilities: [
                'Solved technical problems with Selenium/Appium automation testing and provided best practices to optimize customer experience.',
                'Isolated and reported customer issues to developers, managing support tickets to maintain high customer satisfaction.',
                'Developed customer-facing documentation and created code samples for testing in the Sauce cloud using Selenium/Appium and Python.'
            ]
        },
        {
            company: null,
            title: 'Austin Office Lead/Manager',
            dates: 'January 2019 - April 2022',
            responsibilities: [
                'Assisted the Executive Level Team in obtaining office space and handled office issues in the Austin office.',
                'Set up team-building and offsite events, and served on the Global Return To Work Task Force for post-COVID office planning.'
            ]
        },
        {
            company: 'Ecor Ventures, Austin, Texas',
            title: 'Contract Software Engineer',
            dates: 'February 2018 - May 2018',
            responsibilities: [
                'Launched multiple websites using HTML, CSS, JavaScript, Vue.js, and NGN, increasing client engagement by 30%.',
                'Collaborated with team members to plan, design, and implement robust solutions, improving project efficiency by 25%.',
                'Optimized project specifications through interactions with client CEO, board members, and team, enhancing alignment and satisfaction by 20%.'
            ]
        },
        {
            company: 'Freemon, Shapard, & Story, CPAs',
            title: 'Associate Accountant',
            dates: 'December 2016 - June 2017',
            responsibilities: [
                'Prepared federal and state tax returns and extensions, documenting information to authenticate numbers on tax returns.',
                'Assisted with Texas Sales and Use tax questions.'
            ]
        },
        {
            company: 'Scalco, Johnson, Leahy & Dudek CPAs PLLC',
            title: 'Associate Accountant',
            dates: 'June 2015 - December 2016',
            responsibilities: [
                'Led as the Sales and Use tax associate, preparing federal and state tax returns and extensions.',
                'Created work papers documenting the flow of information.'
            ]
        }
    ];

    const education = [
        {topicTitle: 'Education'},
        {
            school: 'General Assembly, Austin, Texas',
            program: 'Web Development Immersive Fellow',
            degree: 'Course Certificate',
            details: 'Completed an intensive, hands-on program focused on full-stack web development, covering HTML, CSS, JavaScript, React, Node.js, and more.'
        },
        {
            school: 'Midwestern State University, Wichita Falls, Texas',
            program: null,
            degree: 'Bachelor of Business Administration in Accounting',
            details: 'Gained a comprehensive understanding of business principles and accounting practices, developing analytical and problem-solving skills.'
        },
        {
            school: 'Queen Mary University, London, England',
            program: 'International Business',
            degree: null,
            details: 'Studied international business strategies and practices, gaining insights into global markets and cross-cultural communication.'
        },
        {
            school: 'Austin Community College, Austin, Texas',
            program: null,
            degree: 'Associate of Science in Mathematics',
            details: 'Developed a strong foundation in mathematical principles and problem-solving techniques, which are integral to my technical skills in software development.'
        }
    ];


    return { tableOfContents, bonus, aboutMe, experience, contact, education };
};

export default Content;

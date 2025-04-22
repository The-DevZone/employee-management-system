// const Employee = [
//     {
//         "id": 1,
//         "email": "rohit@gmail.com",
//         "password": "123"
//     },
//     {
//         "id": 2,
//         "email": "monika@gmail.com",
//         "password": "123"
//     },
//     {
//         "id": 3,
//         "email": "sarthak@gmail.com",
//         "password": "123"
//     },
//     {
//         "id": 4,
//         "email": "anita@gmail.com",
//         "password": "123"
//     },
//     {
//         "id": 5,
//         "email": "rahul@gmail.com",
//         "password": "123"
//     },
// ]

// const Admin = [
//     {
//         "id": 101,
//         "name": "Admin User",
//         "email": "admin@example.com",
//         "role": "admin",
//         "password": "123"
//     }
// ]


const Employee = [
    {
        id: 1,
        email: "rohit@gmail.com",
        password: "123",
        tasks: [
            {
                task: "Update project documentation",
                description: "Review and update the README file",
                date: "2025-04-18",
                category: "Documentation",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                task: "Fix login issue",
                description: "Resolve bug in user login API",
                date: "2025-04-17",
                category: "Bug Fixing",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                task: "Team meeting",
                description: "Attend project planning meeting",
                date: "2025-04-20",
                category: "Meetings",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
        ],
    },
    {
        id: 2,
        email: "monika@gmail.com",
        password: "123",
        tasks: [
            {
                task: "Design new UI layout",
                description: "Create Figma layout for mobile version",
                date: "2025-04-19",
                category: "Design",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                task: "Code review",
                description: "Review code pushed by Rohit",
                date: "2025-04-17",
                category: "Code Review",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                task: "Update color scheme",
                description: "Implement new theme colors",
                date: "2025-04-15",
                category: "UI",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
            {
                task: "Dashboard prototype",
                description: "Prepare clickable dashboard prototype",
                date: "2025-04-21",
                category: "Design",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
        ],
    },
    {
        id: 3,
        email: "sarthak@gmail.com",
        password: "123",
        tasks: [
            {
                task: "Write test cases",
                description: "Cover all endpoints in test suite",
                date: "2025-04-16",
                category: "Testing",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                task: "Optimize database queries",
                description: "Improve speed of customer queries",
                date: "2025-04-18",
                category: "Backend",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                task: "Deploy on staging",
                description: "Push the latest build to staging server",
                date: "2025-04-17",
                category: "Deployment",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
        ],
    },
    {
        id: 4,
        email: "anita@gmail.com",
        password: "123",
        tasks: [
            {
                task: "Conduct user interviews",
                description: "Gather user feedback for UI update",
                date: "2025-04-19",
                category: "Research",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                task: "Create report presentation",
                description: "Summarize Q1 progress",
                date: "2025-04-20",
                category: "Reporting",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                task: "Update analytics script",
                description: "Add new tracking events",
                date: "2025-04-18",
                category: "Analytics",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                task: "Fix broken links",
                description: "Check website for 404s",
                date: "2025-04-15",
                category: "Maintenance",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
        ],
    },
    {
        id: 5,
        email: "rahul@gmail.com",
        password: "123",
        tasks: [
            {
                task: "Backend integration",
                description: "Connect frontend with Node.js API",
                date: "2025-04-18",
                category: "Integration",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                task: "Monitor server logs",
                description: "Identify unusual behavior in logs",
                date: "2025-04-17",
                category: "DevOps",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                task: "Security patch",
                description: "Apply critical patch to backend",
                date: "2025-04-16",
                category: "Security",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
        ],
    },
];

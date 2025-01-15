localStorage.clear()
const employees = [
    {
        id: 1,
        firstName: "Arjun",
        email: "e@e.com",
        password: "123",
        taskNumbers: {
            active: 1,
            newTask: 2,
            completed: 1,
            failed: 0,
        },
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Prepare Report",
                description: "Complete the quarterly financial report.",
                date: "2025-01-15",
                category: "Finance",
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                title: "Client Meeting",
                description: "Attend meeting with the ABC client.",
                date: "2025-01-17",
                category: "Meetings",
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Submit Presentation",
                description: "Submit presentation for team review.",
                date: "2025-01-10",
                category: "Work",
            },
        ],
    },
    {
        id: 2,
        firstName: "Priya",
        email: "employee2@example.com",
        password: "123",
        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 0,
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "System Update",
                description: "Update the company database.",
                date: "2025-01-20",
                category: "IT",
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Inventory Check",
                description: "Perform inventory check for Q4.",
                date: "2025-01-12",
                category: "Logistics",
            },
        ],
    },
    {
        id: 3,
        firstName: "Rohan",
        email: "employee3@example.com",
        password: "123",
        taskNumbers: {
            active: 1,
            newTask: 0,
            completed: 0,
            failed: 1,
        },
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: true,
                title: "Fix Bug",
                description: "Resolve critical bug reported by QA.",
                date: "2025-01-13",
                category: "Development",
            },
        ],
    },
    {
        id: 4,
        firstName: "Meera",
        email: "employee4@example.com",
        password: "123",
        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 0,
        },
        tasks: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Annual Plan",
                description: "Submit draft of the annual plan.",
                date: "2025-01-05",
                category: "Planning",
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Team Training",
                description: "Organize training session for the team.",
                date: "2025-01-19",
                category: "HR",
            },
        ],
    },
    {
        id: 5,
        firstName: "Anjali",
        email: "employee5@example.com",
        password: "123",
        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 0,
            failed: 0,
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Social Media Campaign",
                description: "Plan next month's campaign strategy.",
                date: "2025-01-18",
                category: "Marketing",
            },
        ],
    },
];

const admin = [
    {
        id: 1,
        email: "admin@example.com",
        password: "123",
    },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    const admin = JSON.parse(localStorage.getItem("admin") || "null");
    return {employees, admin};
};

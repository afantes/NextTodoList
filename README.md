# To-Do List Application with Next.js 📝

This project is an enhancement of a previous task list, [" JS_ToDo_List "](https://github.com/afantes/JS_ToDo_List) ,application developed in HTML, CSS, and Vanilla JavaScript. This new version is developed using [Next.js](https://nextjs.org/), a popular React framework that simplifies the creation of web applications.

You can view the application in action at the following address: [To-Do List App](https://next-todolist-afantes.vercel.app/)

Like its predecessor, this application allows users to create a list of tasks to accomplish. Each task can be marked as done or removed from the list. In addition, the state of the list is saved in the browser's local storage, allowing data to persist between different browsing sessions.

## Project Utility 🎯

The utility of this To-Do List project is mainly to provide a tool that assists users in their task and time management. The web application offers several advantages:

- **Task Management**: The application allows users to create a list of tasks they need to accomplish. This promotes organization and can help users keep track of their responsibilities.

- **Productivity**: With a clear view of their tasks, users can better manage their time and efforts, leading to improved productivity.

- **Convenience**: The application is simple and intuitive to use. Users can easily add tasks, mark them as done, and delete them with a single click. This makes the tool very user-friendly.

- **Data Persistence**: The application uses local storage to save tasks, which means that tasks persist even if the browser is closed or the computer is restarted. The user can return to their task list at any time, providing convenience and ensuring tasks are not easily lost or forgotten.

- **Accessibility**: As a web application, the To-Do List can be accessed from any device with a web browser, offering flexibility to users.

- **Cost-effectiveness**: The application is free to use, providing a cost-effective solution for personal task management.

In summary, the utility of this To-Do List project is to provide a simple yet powerful tool for personal productivity and task management. It aims to help users stay organized and manage their tasks effectively.

## Technologies and Features Used 💻

### Next.js
- **Pages & Routing**: Next.js offers a file-based approach to routing. Each file in the `pages` directory corresponds to a route. For example, the `pages/index.js` file is the `/` route, and the `pages/about.js` file corresponds to the `/about` route.
- **CSS Modules**: Next.js supports CSS modules out of the box. This is a way to compartmentalize styles to avoid conflicts. In this project, I used several `.module.css` files to define styles specific to different components.
- **Built-in support for ES6+**: Next.js supports the latest JavaScript features. In this project, I used several ES6 features, like JavaScript modules, object destructuring, React hooks, etc.

### React.js
- **React Hooks**: React hooks are a new addition to React that allow you to use state and other React features without writing a class. In this project, I used several hooks, like `useState`, `useEffect`, and `useContext`.
- **Context API**: Context API is a feature of React that allows you to share values between different components without having to pass them explicitly through all levels of the component tree. In this project, I created a `TaskContext` that allows sharing the state of tasks and associated functions between different components.
- **Functional Components**: All components in this project are functional components, which are easier to read and test, and can use React hooks.
- **Styled-components**: It's a library that allows you to use CSS in JavaScript to style components. In this project, I used `styled-components` to define styles for several components.

### Other
- **Local Storage**: I used the browser's `localStorage` API to persist the state of tasks between the user's different sessions. When a user adds, marks as completed, or deletes a task, the state is updated both in the task context and in `localStorage`.

## Project Structure 🗂
- **Components**: Contains all React components used in the application.
- **Contexts**: Contains the task context that is used to manage the global state of tasks.
- **Pages**: Contains the application's pages.

## How to Get Started 🚀
1. Clone this repository to your local environment.
2. Run `npm install` to install all necessary dependencies.
3. Run `npm run dev` to start the application in development mode.

## Contribution 🤝
Contributions to this project are welcome.

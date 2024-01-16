# Todo Frontend

This is the frontend for a Todo List application built using React. It interacts with the Django backend to provide a user-friendly interface for managing tasks.

## Features

1. **Task Management:** Create, read, update, and delete tasks seamlessly.

2. **State Management:** Utilize state management (e.g., React hooks) to efficiently manage tasks.

3. **Responsive Design:** Ensure a responsive and user-friendly design suitable for both laptop and mobile users.

4. **Video Integration:** Watch short videos within the application with playback control.

## Setup

To set up the frontend, follow these steps:

1. Install dependencies:

    ```bash
    npm install
    ```

2. Run the development server:

    ```bash
    npm start
    ```
3. **Important Note:**
   - **Run the frontend on port 3000:** Make sure to run the frontend on `http://localhost:3000`. If you use a different port, update the Django backend's CORS settings accordingly.

The application will be available at `http://localhost:3000`.

## Components

### Task List

- Displays the list of tasks with options for completion.

### Task Item

- Represents an individual task within the Task List.

### Add Task Form

- Allows users to add new tasks with details such as task name, priority, and due date.

### Video Section

- Integrates a video player to watch short videos with playback controls.


## Backend Repository

Check out the [Todo Backend Repository](https://github.com/mvpatil45/TODO_BACKEND) for the frontend code.

Feel free to customize and expand the frontend according to your project requirements.

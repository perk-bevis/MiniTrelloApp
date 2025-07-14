## Mini-Trello-App Project


![Dashboard Screenshot](././public/Screenshot%201.png)
![Dashboard Screenshot](././public/Screenshot%202.png)
![Dashboard Screenshot](././public/Screenshot%203.png)
![Dashboard Screenshot](././public/Screenshot%204.png)
![Dashboard Screenshot](././public/Screenshot%205.png)

## Features

- **List Management:** Create new task lists (e.g., To Do, Doing, Done). Add, edit, and delete lists.
- **Card Management:** Add new task cards to each list. Edit the content of cards. Delete cards when no longer needed.
- **Drag & Drop:** Move task cards between different lists. Reorder cards within the same list.
- **Data Persistence:** Automatically saves the board's state to the browser's Local Storage, preserving data across page reloads.

## Project Structure

```
.
src/
├── assets/                           # This directory holds static assets like images, fonts, or other media files.
│   ├── skipli.png                   
│   └── users.png
│
├── components/                       # This directory contains reusable User Interface (UI) components that can be used throughout the application.
│   └── ui/
│       ├── Navbar.jsx
│       └── Slidebar.jsx
│
├── firebase/                         # This directory is dedicated to the configuration and initialization of the Firebase SDK.
│   └── FilebaseConfig.js
│
├── module/                           # This directory organizes the source code by application "modules" or "features.
│   ├── auth/                         # The module that manages user authentication.
│   │   ├── components/
│   │   │   ├── EmailVeriform.jsx
│   │   │   └── Loginform.jsx
│   │   └── pages/                    # Complete pages related to authentication.
│   │       ├── LoginPage.jsx         # The login page.
│   │       └── VerificationEmail.jsx # The email verification page.
│   │
│   └── layout/                       # The module that manages the main application layout after a user has logged in.
│       ├── BoardMenu.jsx             # A menu for a task board.
│       ├── CardModal.jsx             # A modal window to show the details of a task card.
│       ├── DashboardLayout.jsx       # The main layout for the dashboard area.
│       ├── InviteBoard.jsx           # A component to invite members to a board.
│       ├── MainContent.jsx           # The primary content area of the page.
│       ├── Member.jsx                # A component to display member information.
│       ├── MenuSlider.jsx            # A sliding menu component.
│       └── Todolist.jsx              # A component for a to-do list.
│
└── routes/                           # This directory defines how the application handles navigation between different pages.
    └── routes.jsx
```

## Contribution

- Fork the repo, create a new branch, commit your changes, and submit a pull request.
- Please follow code standards, format, and lint before submitting a PR.

## License

MIT © [perk-bevis](https://github.com/perk-bevis)
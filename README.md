Chat Dashboard Frontend

A professional React + Material UI app designed to simulate some predefined interview questions.

#Features

1. Select common interview questions
2. Type and submit personalized answers
3. Dark/Light mode toggle with live switch
4. Chat history with timestamps
5. Clear chat button
6. Persistent data using `localStorage`
7. Responsive design with Material UI

#Tech Stack

1. React + Vite
2. Material UI (MUI)
3. localStorage API
4. JavaScript ES6
5. Git + GitHub

#Project File Overview

=> src/App.jsx (Main container of your app)
it Includes:
  1. All state (input, selectedQuestion, darkMode, messages)
  2.useEffect for localStorage sync
  3.handleSend and handleQuestionClick logic
  4.Renders:
      Header
      Dashboard (question cards)
      TextField + Send button
      Sidebar with chat history
      Footer
  5.ThemeProvider for dark/light mode

=> src/main.jsx (it isEntry point to your React app)
it Includes:
  1. ReactDOM render function
  2. Wraps App inside a StrictMode component
  3.Mounts to the HTML root
 
=> src/components/Dashboard.jsx (Shows all predefined interview questions in cards)
it Includes:
  1. Array of questions
  2. MUI Grid, Card, CardHeader, CardContent
  3. Highlights selected question
  4. Calls onQuestionSelect(question) on click

=> src/components/Header.jsx (Top bar of the app)
it Includes:
  1. App name
  2. Dark/light mode toggle Switch component
  3. Accepts props: darkMode (boolean), onToggle (function)

=> src/components/Footer.jsx (Bottom section of the app)
it Includes:
  1. Simple Typography with name or message
  2. Responsive footer for layout completion

=> .gitignore
   it Tells Git what files/folders to skip.

=> package.json (Project metadata and dependencies)
it Includes:
  1. Project name, version, scripts
  2. Dependencies: react, @mui/material, etc.
  3. Dev dependencies (via Vite)

=> vite.config.js (Vite build config)
  Usually left default unless you add custom plugins.

#Setup Instructions 

1. Clone the Repository (run following command on terminal)

    git clone https://github.com/VikasShakalya/Chat-dashboard.git
    cd Chat-dashboard

2. Install Dependencies (run following command on terminal)

    npm install

3. Run the App (run following command on terminal)

     npm run dev

   
   




# GitHub Repository Explorer

A responsive React application that allows users to search and explore GitHub repositories using the GitHub REST API.

## Features

* Search for GitHub repositories
* Fetch live data from the GitHub REST API using the Fetch API
* Debounced search queries for improved performance
* Repository results displayed dynamically based on user input
* Loading spinner while API requests are in progress
* Error handling for failed API requests
* Repository details including:

  * Repository name
  * Description
  * Stars
  * Forks
  * Programming language
* Direct links to GitHub repositories
* Responsive design for desktop and mobile devices
* Interactive hover effects and polished UI

## Technologies Used

* React
* JavaScript
* Vite
* Fetch API
* GitHub REST API
* CSS

## Project Structure

```text
src/
├── components/
│   ├── LoadingSpinner.jsx
│   └── SearchBar.jsx
├── services/
│   └── githubApi.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## How It Works

1. The user enters a repository search term.
2. The application waits briefly using debouncing before making an API request.
3. The GitHub REST API fetches matching repositories.
4. A loading spinner is displayed while the request is in progress.
5. Repository results are displayed dynamically.
6. If the request fails, a user-friendly error message is shown.

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone https://github.com/YOUR-USERNAME/github-repository-explorer.git
cd github-repository-explorer
npm install
npm run dev
```

The application will run locally through the Vite development server.

## API

This project uses the GitHub Repository Search API to retrieve repository data dynamically.

## Deployment

The application is deployed using Vercel.

**Live Demo:** https://github-repository-explorer-kappa.vercel.app/

## Codveda Task

This project was created as part of the **Codveda Front-End Development Internship**.

### Level 2 — Intermediate

**Task 2: REST API Integration**

The project demonstrates:

* REST API integration using Fetch API
* Dynamic content based on user input
* Search functionality
* Loading states
* Error handling
* Debounced search queries

These align with the task objectives in the Codveda Front-End Development Task List.

## Author

**Titilope Adesodun**

## License

This project is for educational and internship purposes.

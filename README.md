# Personal Portfolio — Zahra Amirinezhad

A personal portfolio website built with **React** and **Sass** to introduce my background, showcase selected projects, and present my technical skills in a clean, dark-themed interface.

🌐 **Live Demo:** [zahraamirinezhad.github.io/portfolio](https://zahraamirinezhad.github.io/portfolio)  
💻 **GitHub:** [zahraamirinezhad](https://github.com/zahraamirinezhad)

## Overview

This portfolio brings personal information, technical skills, and selected development projects together in a single-page experience. It uses reusable React components, CSS Modules powered by Sass, animated skill indicators, and scroll-triggered transitions to create a distinctive presentation.

## Features

- **Introduction section** with a short professional bio and role.
- **About Me section** presenting personal/contact information.
- **Copy-to-clipboard interactions** for selected contact details, with success and error notifications.
- **Technical skills section** with animated circular progress indicators.
- **Additional skills section** with animated horizontal skill bars.
- **Project gallery** showing project descriptions, technology/package lists, preview images, and links to source repositories.
- **Scroll-triggered animations** implemented with the browser's `IntersectionObserver` API.
- **Reusable React components** for project cards, skill indicators, and notifications.
- **Responsive styling** with Sass media queries for smaller screens.
- **Custom typography** using locally bundled font files.

## Tech Stack

| Technology / Library | Purpose |
| --- | --- |
| React 18 | UI components and application rendering |
| JavaScript (ES6+) | Application logic |
| Sass / SCSS Modules | Component-level styling and responsive layouts |
| Material UI (MUI) | Snackbar and alert notifications |
| `copy-to-clipboard` | Copying selected contact information |
| Create React App (`react-scripts`) | Development server, tests, and production build |
| `gh-pages` | Publishing the production build to GitHub Pages |

## Projects Showcased

The portfolio currently features links to the following projects:

| Project | Description | Repository |
| --- | --- | --- |
| Admin Dashboard | Admin interface built with Material UI and charting/UI packages | [View repository](https://github.com/zahraamirinezhad/Admin-Dashboard) |
| Netflix Clone | Full-stack Netflix-inspired application with an admin panel and movie pages | [View repository](https://github.com/zahraamirinezhad/Netflix-Clone) |
| Photo Gallery | Photo gallery using Firebase | [View repository](https://github.com/zahraamirinezhad/Photo-Gallery) |
| Task Manager | Task management interface using React, Redux Toolkit, and Material UI | [View repository](https://github.com/zahraamirinezhad/Task-Manager) |
| Music Player | Android music player developed with Kotlin | [View repository](https://github.com/zahraamirinezhad/Music-Player) |

These projects are presented as portfolio entries and link to their own repositories. Their implementation details and technology choices belong to those individual projects.

## Getting Started

### Prerequisites

- Node.js (an LTS release is recommended)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/zahraamirinezhad/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm start
```

Open the local address printed in the terminal. With the default Create React App configuration, this is usually `http://localhost:3000`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Starts the development server |
| `npm run build` | Creates an optimized production build in `build/` |
| `npm test` | Runs the Create React App test runner |
| `npm run deploy` | Builds the app and publishes the `build/` directory to GitHub Pages via the configured deployment scripts |

The deployment command runs `predeploy` first, which triggers `npm run build`.

## Deployment

The project is configured for GitHub Pages with the homepage URL:

`https://zahraamirinezhad.github.io/portfolio`

To publish an update, ensure the repository and GitHub Pages settings are configured correctly, then run:

```bash
npm run deploy
```

This uses the `gh-pages` package to publish the production build. Verify the GitHub Pages configuration and deployment permissions in the repository settings if deployment fails.

## Project Structure

```text
portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── AboutMe/
│   │   ├── Error/
│   │   ├── MyInformation/
│   │   ├── MyOtherSkills/
│   │   ├── MyProjects/
│   │   ├── MySkills/
│   │   ├── OtherSkill/
│   │   ├── Project/
│   │   ├── Skill/
│   │   └── SuccessAction/
│   ├── fonts/              # Bundled font files
│   ├── images/             # Profile and project images
│   ├── App.js
│   ├── App.module.scss
│   ├── components/index.js # Component exports
│   └── index.js             # React entry point
├── package.json
└── package-lock.json
```

## Implementation Notes

- Styling is organized into SCSS Modules to keep component styles scoped.
- Skill indicators receive values and colors through React props.
- `IntersectionObserver` is used to trigger animations as sections enter the viewport.
- MUI `Snackbar` and `Alert` components provide feedback when contact details are copied or an error occurs.
- Project cards are driven by a data array, making project entries straightforward to update.
- The project uses Create React App, configured with `react-scripts`.

## Potential Improvements

Possible next steps for the portfolio include:

- Add a dedicated contact form or clear email and social-profile links.
- Improve keyboard accessibility for copy-to-clipboard controls and external links.
- Add descriptive, project-specific image alt text.
- Add stable React keys to the project list and review browser-console warnings.
- Refine `IntersectionObserver` effects and remove debugging `console.log` statements.
- Improve metadata, social sharing tags, and the page description in `public/index.html`.
- Add automated tests for key UI interactions.
- Review and simplify the bundled font files to reduce the initial download size.
- Use a more explicit accessible representation for skill levels rather than relying only on percentages.

No license file was included in the provided archive. If you intend to make the source code reusable by others, add a `LICENSE` file that reflects your preferred terms.

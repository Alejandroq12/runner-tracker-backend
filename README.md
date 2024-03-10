# Runner Tracker Back-end

<a name="readme-top"></a>

<div align="center">
  <img src="./logos/logo-julio.png" alt="main-logo" width="500"  height="auto" /><br/>
  <h3><b>Runner Tracker Back-end</b></h3>
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [Runner Tracker Back-end](#runner-tracker-back-end)
- [📗 Table of Contents](#-table-of-contents)
- [Runner Tracker Back-end ](#runner-tracker-back-end-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Feature ](#key-feature-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment ](#deployment-)
  - [👥 Author ](#-author-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ ](#-faq-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# Runner Tracker Back-end <a name="about-project"></a>

This full-stack application, developed using PostgreSQL, Node.js, React.js, Heroku, Tachyons, and JWT, enables users to log and monitor their running activities. Specifically, it allows for the tracking and storage of both the duration and distance covered during each run. Designed for runners seeking a comprehensive view of their training progress, the app provides an intuitive and user-friendly interface to input and review their activity metrics effectively.

[Runner Tracker Front-end -- Source code](https://github.com/Alejandroq12/runner-tracker)

<div align="center">
    <img src="./logos/logo.png" alt="logo" width="500"  height="auto" />
    <img src="./logos/logo2.png" alt="logo" width="500"  height="auto" />
    <img src="./logos/logo3.png" alt="logo" width="500"  height="auto" />
</div>

## 🛠 Built With <a name="built-with"></a>

JavaScript,
Node.js,
PostgreSQL,
Express.js.

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></li>
    <li><a href="https://react.dev/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Back-end</summary>
  <ul>
    <li><a href="https://nodejs.org/en">Node.js</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<details>
  <summary>Package Manager</summary>
  <ul>
    <li><a href="https://www.npmjs.com/">npm</a></li>
  </ul>
</details>
<details>
  <summary>Linters</summary>
  <ul>
      <li><a href="https://eslint.org/">ESLint</a></li>
      <li><a href="https://stylelint.io/">Stylelint</a></li>
  </ul>
</details>

<!-- Features -->

### Key Feature <a name="key-features"></a>

- **It tracks training progress.**
- **It shows progress with a graph to let the user visually see improvements.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

[Live Demo Link](https://running-track-acf8bf94dcd3.herokuapp.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- A web browser to view output e.g [Google Chrome](https://www.google.com/chrome/).
- An IDE e.g [Visual studio code](https://code.visualstudio.com/).
- `node` should be installed in your local machine, [node website](https://nodejs.org/en/download/).
- Install the `npm` package manager use this [to install both node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
- [A terminal](https://code.visualstudio.com/docs/terminal/basics).

### Setup

Clone this repository to your desired folder or download the Zip folder:

Use the following command to clone this project:
```
git clone https://github.com/Alejandroq12/runner-tracker-backend.git

```

- Navigate to the location of the folder in your machine:

**``you@your-Pc-name:~$ cd runner-tracker-backend``**

### Install

To install all dependencies, run:

```
npm install
```
In the file called [server.jd](./server.js) comment this code:

```javascript
const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    },
  },
});
```
Please paste the following code, making sure to adjust the values as necessary. For instance, your password, user, or any other value might differ on your PC. Additionally, don't forget to create the database using the schema found in [schema](./schema.sql)
```javascript
const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1', // Your database host
    user: 'postgres', // Your database user
    port: '5432',     // Your database port
    password: 'your_password', // Your database password
    database: 'runner', // Your database name
  },
});

```
### Usage

To run the project, follow these instructions:

- After Cloning this repo to your local machine.

- You must use `npm run start:dev` command in terminal to run this at the localhost.

- Make sure that you are also running the front-end [Runner Tracker Front-end -- Source code](https://github.com/Alejandroq12/runner-tracker).

### Run tests

Tests will be available soon!

### Deployment <a name="deployment"></a>

You can deploy this project using: Netlify, Render, Heroku or GitHub Pages,
- I am using Heroku to deploy it.
- For more information about deployment on Heroku see "[Heroku](https://www.heroku.com/what)".

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Author <a name="authors"></a>

👤 **Julio Quezada**

- GitHub: [Alejandroq12](https://github.com/Alejandroq12)
- Twitter: [@JulioAle54](https://twitter.com/JulioAle54)
- LinkedIn: [Julio Quezada](https://www.linkedin.com/in/quezadajulio/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **I will improve security.**
- [ ] **I will improve performance.**
- [ ] **I will reuse some React.js components to avoid repetition.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project give me a star ⭐️.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I want to thank all my colleagues that share knowledge with and inspired to to improve each day.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ  -->

## ❓ FAQ <a name="faq"></a>

- **What did you learned?**

  - Through developing this full-stack application, I gained hands-on experience in integrating PostgreSQL, Node.js, React.js, and JWT for secure and effective data handling and user authentication. I learned to deploy applications seamlessly using Heroku and employed Tachyons for rapid, responsive design. This project improved my skills in creating a tracking system, specifically created for runners, to monitor the duration and distance of their activities, enhancing their training progress with an intuitive and user-friendly interface.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [LICENSE](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
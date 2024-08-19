# Help Center API

## Overview

This project is a Help Center API built using the MERN stack. The API allows users to manage "Help Center" cards, which represent different sections of a help center, such as "Branches," "Manage Your Account," "Manage Billing," etc.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)

## Features

- **Create a card:** Add new cards to the help center.
- **Retrieve all cards:** Get a list of all available help center cards.
- **Retrieve a specific card:** Get details of a specific card by its title.

## Technologies Used

- **Frontend:** React.js (Create React App)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ORM
- **Version Control:** Git

## Project Structure

```html
<pre>
<code>
.
├── backend
│   ├── models
│   │   └── Card.js
│   ├── routes
│   │   └── cards.js
│   ├── server.js

├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Content
|   |   |   ├── Footer
|   |   |   ├── Header
|   |   |   ├── navbar
│   │   ├── App.js 
│   ├── public
│   ├── package.json
│   └── index.js
├── README.md
└── package.json
</code>
</pre>

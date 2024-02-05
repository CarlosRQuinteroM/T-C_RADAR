# iubenda_home_challenge

## Overview
This application is designed to find terms and conditions links on web pages based on the language of the page.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Design Decisions](#design-decisions)
- [Time Taken](#time-taken)

## Installation
1. Clone the repository:
```bash
   git clone https://github.com/CarlosRQuinteroM/T-C_RADAR.git
```

2. Install dependencies:
```bash
   npm install
 ```

3. Create a .env file in the root directory with the following content:

 ```bash
  PORT=3000  # Specifies the desired port for the application.
```



## Usage
1. Start the application in development mode:
```bash
   npm run dev
```

2. Open your browser and visit http://localhost:[PORT].
```bash
   http://localhost:3000
```

## Running Tests
1. To run automated tests, use the following command:
```bash
npm test
```


 ## Design Decisions
* The application is built with Node.js and Express for the server-side.
* Puppeteer is used for web scraping and navigating pages.
* The design includes a simple form to accept user input and display the found link.

## Time Taken
The total time taken to complete this test was approximately 6 hours.
# Lions and Tigers and Bears, Oh My!

## Author

**Michael Mihailov**

## Project Description

This project is a JavaScript web application that displays images of different dog breeds
using a public API. The application retrieves dog breed information and images using
HTTP requests and JSON, then dynamically updates the webpage using JavaScript.

This project was created for a Lewis University software development assignment and
demonstrates the use of HTML, CSS, JavaScript, JSON, AJAX, the Fetch API, Promises, and
async/await.

## Credits and Non-Original Content

The initial application was developed by following the YouTube tutorial:

**Brad Schiff / LearnWebCode**

**“Dogs, JavaScript & An API 🐶 Fetch, Promises & Async Await”**

YouTube: https://www.youtube.com/watch?v=AVmGmLFcukM

The tutorial was used as the basis for the application's structure, JavaScript
implementation, and dog-breed slideshow functionality. Brad Schiff is credited as the
original creator of the tutorial and the non-original application concepts and code
derived from it.

The application also uses the following external service:

**Dog API**

https://dog.ceo/dog-api/

The Dog API provides the dog breed information and images displayed by the application.

## Artificial Intelligence Disclosure

ChatGPT was used during development as a programming assistance and learning tool.
ChatGPT was used to explain JavaScript, HTML, and CSS concepts, assist with debugging,
and answer questions about the Fetch API, CORS, local web servers, and related
web-development concepts.

**This README.md file was also generated with the assistance of ChatGPT.**

The author reviewed the generated content and is responsible for the final contents of
this README.md file.

## Technologies

- HTML
- CSS
- JavaScript
- JSON
- AJAX
- Fetch API
- Promises
- async/await

## Running the Application

### Prerequisites

The application requires:

- A modern web browser
- Visual Studio Code or another text editor
- A local web server

### Running with Visual Studio Code

1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension if it is not already installed.
3. Open `src/index.html`.
4. Right-click `index.html` and select **Open with Live Server**.
5. The application will open in a web browser.

A local web server is required because the application makes requests to the external
Dog API. Opening `index.html` directly using a `file://` URL can cause browser CORS
restrictions.

## Project Files

- `src/index.html` - Defines the structure of the web application.
- `src/main.js` - Retrieves information from the Dog API and dynamically updates the
  webpage.
- `src/style.css` - Defines the appearance and layout of the application.
- `README.md` - Provides project information, credits, and execution instructions.
- `LICENSE` - Defines the license for this submission.

## License

This project is distributed under the terms described in the accompanying `LICENSE` file.

The tutorial-derived and other non-original material is identified and credited above.
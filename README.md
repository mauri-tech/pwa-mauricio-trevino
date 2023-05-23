# Text Editor

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Authors and Acknowledgment](#authors-and-acknowledgment)
5. [Contact](#contact)

## Description

This is a progressive web application (PWA) developed as part of a course. It serves as a demonstration of various concepts learned during the course, showcasing their implementation in an impressive manner. The main features of this text editor are:

- The text editor runs directly in the browser as a single-page application.
- It meets the criteria of a Progressive Web App (PWA), providing an enhanced user experience.
- The application incorporates data persistence techniques to ensure redundancy in case certain browser options are unsupported.
- Offline functionality is available, allowing users to continue working even without an internet connection.

The text editor utilizes the IndexedDB database for data storage, providing a reliable and efficient solution for managing user data. Data retrieval and storage methods are implemented using the "idb" package, which serves as a lightweight wrapper around the IndexedDB API. It's worth noting that the "idb" package is widely used by major companies like Google and Mozilla, ensuring its reliability and stability.

## Installation

To install and use the text editor, follow these steps:

1. Visit the following website: [https://pwa-mauricio-trevino.herokuapp.com/](https://pwa-mauricio-trevino.herokuapp.com/).
2. Click on the "Install" button to add the text editor to your device's home screen.
3. Once installed, you can access the text editor directly from your device's home screen.

## Usage

To use the text editor, follow these instructions:

1. Launch the text editor by tapping its icon on your device's home screen.
2. You will be presented with a user-friendly interface where you can create and edit text documents.
3. To access the database and observe data persistence, press the F12 key on your keyboard to open the browser's developer tools.
4. Within the developer tools, navigate to the "Application" or "Storage" tab, where you should find the IndexedDB section.
5. Explore the IndexedDB section to see how the data persists even after refreshing the page.

## Authors and Acknowledgment

The base files for this text editor were provided by Tec de Monterrey and edX. Their contribution laid the foundation for the development of this application.

## Contact

If you have any questions, suggestions, or issues regarding the text editor, feel free to reach out to the author:

- Name: Mauricio Trevino
- Email: mauricio.trevinon91@gmail.com
- GitHub: [https://github.com/mauri-tech/pwa-mauricio-trevino](https://github.com/mauri-tech/pwa-mauricio-trevino)

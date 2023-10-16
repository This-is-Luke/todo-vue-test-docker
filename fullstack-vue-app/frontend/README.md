# Frontend for Todo Vue Test Docker

## Introduction

This is the frontend part of the Todo Vue Test Docker application. It is built using Vue.js.

## Table of Contents

-   [Introduction](#introduction)
-   [Prerequisites](#prerequisites)
-   [Installation and Setup](#installation-and-setup)
    -   [Clone the Repo](#clone-the-repo)
    -   [Environment Variables](#environment-variables)
    -   [Install Dependencies](#install-dependencies)
    -   [Running the App](#running-the-app)
-   [Usage](#usage)
-   [Code Structure](#code-structure)
-   [Testing](#testing)
-   [Troubleshooting](#troubleshooting)
-   [Contributing](#contributing)

## Prerequisites

-   Node.js
-   npm

## Installation and Setup

### Clone the Repo

git clone https://github.com/This-is-Luke/todo-vue-test-docker.git

### Environment Variables

Create a `.env` file in the frontend directory and add the following:

VUE_APP_API_URL=http://localhost:3000

### Install Dependencies

Navigate to the frontend directory and run:

npm install

### Running the App

npm run serve

## Usage

The frontend will run on `http://localhost:8080`. You can access it via a web browser.

## Code Structure

-   `components/`: Contains all the Vue components.
-   `views/`: Contains the Vue views.
-   `store/`: Contains the Vuex store.

## Testing

To run tests, execute:

npm test

## Troubleshooting

If you encounter any issues, please refer to the [Troubleshooting Guide](./TROUBLESHOOTING.md).

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

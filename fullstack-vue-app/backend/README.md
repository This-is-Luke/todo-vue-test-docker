# Backend for Todo Vue Test Docker

## Introduction

This is the backend part of the Todo Vue Test Docker application. It is built using Node.js and Express.

## Table of Contents

-  [Introduction](#introduction)
-  [Prerequisites](#prerequisites)
-  [Installation and Setup](#installation-and-setup)
   -  [Clone the Repo](#clone-the-repo)
   -  [Environment Variables](#environment-variables)
   -  [Install Dependencies](#install-dependencies)
   -  [Running the App](#running-the-app)
-  [Usage](#usage)
-  [Code Structure](#code-structure)
-  [Testing](#testing)
-  [Troubleshooting](#troubleshooting)
-  [Contributing](#contributing)

## Prerequisites

-  Node.js
-  npm

## Installation and Setup

### Clone the Repo

git clone https://github.com/This-is-Luke/todo-vue-test-docker.git

### Environment Variables

Create a `.env` file in the backend directory and add the following:

PORT=3000

### Install Dependencies

Navigate to the backend directory and run:

npm install

### Running the App

npm start

## Usage

The backend will run on `http://localhost:3000`. You can access it via a web browser or Postman.

## Code Structure

-  `routes/`: Contains all the API routes.
-  `models/`: Contains the data models.
-  `controllers/`: Contains the business logic.

## Testing

To run tests, execute:

npm test

## Troubleshooting

If you encounter any issues, please refer to the [Troubleshooting Guide](./TROUBLESHOOTING.md).

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

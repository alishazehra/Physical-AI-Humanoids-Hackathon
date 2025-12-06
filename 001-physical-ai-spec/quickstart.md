# Quickstart: Building the Physical AI Book

This guide provides the steps to set up Docusaurus and build the Physical AI book locally.

## Prerequisites

*   [Node.js](https://nodejs.org/en/) (version 16.x or later)
*   [Yarn](https://yarnpkg.com/) (or npm)

## Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies**:
    ```bash
    yarn install
    ```

3.  **Run the development server**:
    ```bash
    yarn start
    ```
    This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

4.  **Build the static site**:
    ```bash
    yarn build
    ```
    This command generates static content into the `build` directory and can be served using any static contents hosting service.

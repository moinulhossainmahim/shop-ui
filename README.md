# Daily Shop

Daily Shop is an user friendly eCommerce app, build with React and TypeScript. User can explore Groceries, Bakery Goods, Clothing etc with ease order the goods. Experience seamless shopping anytime, anywhere on any device. This app is fully responsive. You can view it from any devices.

## 📦 Technologies

- `React`
- `TypeScript`
- `Material UI`
- `Redux`
- `Redux Saga`
- `React Toastify`
- `Google Authentication`
- `Stripe`
- `Zod`
- `React Hook Form`
- `SCSS`
- `Docker`

## Requirements

- [Node](https://nodejs.org/en) (Version 18.18.0 or higher)
- [NPM](https://www.npmjs.com/) (The Node.js package manager. Installed with Node.js)

# 🚦 How to run the project

  ### Clone the repository
  - Clone this repository and cd into the project directory:
    ```bash
    git clone https://github.com/moinulhossainmahim/shop-ui.git
    cd shop-ui
    ```
  ### Update Environment Variables
  - Replace `env.example` file to `.env`
  - Create new apps in google console and config the URL's and save the **ClientId and Client Secret**
  - Update env environment variables
    ```bash
      VITE_GOOGLE_CLIENT_ID="Your Google App Client ID"
      VITE_GOOGLE_CLIENT_SECRET="Your Google App Client Secret"
      VITE_NODE_ENV = "development"
    ```
  
  ## Manually

  ### Install Dependencies
  - Run `npm install` inside the main project folder to install all dependencies from NPM.

  ### Start the application
  - 
    ```bash
      npm run dev
    ```
  ## Using Docker
  - **Install Docker First**

  - Check the official [Docker](https://docs.docker.com/engine/install) documentation for information how to install Docker on your operating system. And then install Docker and supporting tools.

  - Build the docker images
    ```bash
    docker-compose build
    ```
  - Start the containers
    ```bash
    docker-compose up
    ```

  - **If everyting setup correctly and your containers are running then you will get the application running in [localhost:3002](http://localhost:3002)**

  - **Update port mappings in `docker-compose.yml` file if you want to run in different port**
    

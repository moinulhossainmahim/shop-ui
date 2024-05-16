# Daily Shop

**Daily Shop** is an user friendly eCommerce app, build with React and TypeScript. User can explore Groceries, Bakery Goods, Clothing etc with ease order the goods. Experience seamless shopping anytime, anywhere on any device. This app is fully **Responsive**. You can view it from any devices.

[Trello Board](https://trello.com/b/O8ocRnqS/dailyshop).

## Table of contents
  1. [ Technologies ](#tech)
  2. [ Requirements ](#req)
  3. [ How to run the project ](#run)
  4. [ Features ](#feat)
  5. [ Process ](#process)
  6. [ What I have learned ](#learning)
  7. [ How it can be improved ](#improvements)
  8. [ Demo Video ](#video)

<a name="tech"></a>
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

<a name="req"></a>
## Requirements

- [Node](https://nodejs.org/en) (Version 18.18.0 or higher)
- [NPM](https://www.npmjs.com/) (The Node.js package manager. Installed with Node.js)

<a name="run"></a>
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
  - Run `npm install` inside the main project folder to install all dependencies from **NPM**.

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

<a name="feat"></a>
# Features

### 1. User Identity and Authentication Flow

  - **User Registration**: Enable customers to create accounts.
  - **User Authentication**: Implement JWT-based authentication mechanisms to secure user sessions.
  - **Google Authentication**: Integrate google authentication using google-0auth2.
  - **User Profiles**: Enable users to view and update their profiles.

### 2. Order Management

  - **Order Workflow Management**: User can visit products and add them to the cart and order them.
  - **Payment Gateway Integration**: Integrate with stripe payment gateway for seamless transactions.
  - **Cashon Order**: User can order the products by cashon deliveries.
  - **Order Status**: User can see his all orders and orders status in orders page.

### 3. Product Management

  - **Products**: User can browse products and see the details of each product with their related products.
  - **Categories and Sub Categories**: Organize products into categories and sub categories for easy finding.

### 4. Wishlist

  - **Wishlist management**: User can save any product to the wishlist for his next ordering.

### 5. Shopping Cart and Seamless Checkout

  - **Shopping Cart**: Allow users to effortlessly add, remove, and update products in their carts.
  - **Checkout**: Optimize the checkout process, ensuring swift and secure transactions.

### 6. Security

  - **JWT Tokenization**: Implement robust JSON Web Token mechanisms to fortify authentication.

### 7. Validation

  - **Schema Validation**: Implemented **zod** schema validation with integrating **React Hook Form** in Login and Registration page.

### 8. Pagination and Filtering

  - **Paginating in products**: Added pagination for fetching more products.
  - **Products Filtering**: Implmented filter products by categories and search the products by name.

<a name="process"></a>
## The Processes I have followed for creating the project.

  1. At first, I have created a **Trello** board for managing the project. Which includes feature idea, example project links, track of what I am doing currently etc.

  2. Then Dockerize the application for running in using docker.

  3. Then I had implmented React Router Dom for routing.
    
  4. After that I am working on home page UI with all component which includes header, hero, sidebar, cart, products, product details etc.

  5. Implement all others page UI which includes profile, wishlist, orders, Register, Login etc.

  6. Added order details page UI for showing order details with status of a user.

  7. Added test data with data types where I needed for example for products, categories, sub categories, orders etc which help me later when I am integrating with the backend.

  8. Added Redux for state management and include all the global state in Redux which includes Modals, Loader, Products, Categories, Sub Categories, Orders, User Information etc.

  9. Added and setup Redux saga for handling asynchronous operations.

  10. Integrated Register, Login, Logout with backend and frontend.

  11. Added appropriate loader when some api call is working.

  12. Integrated products, categories, profile, orders in frontend with backend.

  13. Added React Hook Form and zod validation in Register and Login page.

  14. Integrated Google login.

  15. Added basic stripe payment integration.

  16. Added Pagination and Filtering by category and sub category functionality.

  17. Finally, Make responsive for mobiles and tablet devices.

<a name="learning"></a>
## What I have Learned

  During this project I have faced many problems and overcome those for completing my ideas to the project.

### Integation:

  - **Seemless Integration**: Learned Redux saga for integrating both frontend and backend seemlessly.

### Discovering New Tools:

  - **Google 0Auth**: I have learned about google authentication for integrating with backend and also how to create app in google console. This is very interesting for me that how the whole process works.
  - **React Hook Form and Zod**: I have studied about form validation using React Hook Form and Zod and implemented the schema types.
  - **Stripe**: Learned about stripe and how to integrate this for paying.
  - **Swiper**: Explore swiper js and use it for slider in single product details and home page.

### Token Authentication:

  - **JWT**: How jwt authentication exactly works and how to use this in every request.

### Functionalities:

  - **Cart**: I have no idea about cart functionality previously. I think about the whole functionalities and find soltuion of this and implement this using Redux.
  - **Local storage**: Study about local storage for storing user information for loggin in longtime and after refresh the user still logged in.
  - **Update URL Params**: How to work with url params and update the url param based on the filtering.
  - **Pagination and Filtering**: Update the UI based on the pagination and filtering.

### Dockerizing

  - **Docker**: Deep dive into docker images and container and dockerized the project.

<a name="improvements"></a>
## 💭 How can it be improved?

  - Add form validation in all forms
  - Add Github sign in authentication
  - Add more shop type options(Clothing, Bakcery, Make up etc)
  - Make payment process more smooth and user friendly
  - Add Fly to cart functionality
  - Product Details page where user can put reviews of a product
  - Add contact, FAQ, Terma and Conditions page

<a name="video"></a>
## 🍿 Demo Video

  - Will be provided soon

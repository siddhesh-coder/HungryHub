# HungryHub - Food Delivery App ![React Badge](http://ForTheBadge.com/images/badges/built-with-love.svg)

<div style="display: flex; align-items: center;">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="React Badge">
  <br>
  <a style="margin-left: 15px" href="https://hungryhub-food-delivery.vercel.app/">https://hungryhub-food-delivery.vercel.app/</a>
</div><br>

**Description:** You can quickly order your favorite food with a user-friendly interface. Easily search for your desired restaurant and select dishes and add them to your cart for a seamless ordering experience.

# Table of Contents

1. [Hero Section Component](#hero-section-component)
2. [Search Component](#search-component)
3. [Category Component](#category-component)
4. [Menu Component](#menu-component)
5. [Cart Component](#cart-component)
6. [Header Component](#header-component)
7. [Auth Component](#auth-component)
8. [Loader and Shimmer Component](#loader-and-shimmer-component)
9. [Filters Component](#filters-component)
10. [About and Help Component](#about-and-help-component)
11. [Checkout Component](#checkout-component)
12. [Network off Notification](#network-off-notification)
13. [Tech Stack](#tech-stack)

## Installation

1. Clone the repository

```bash
git clone https://github.com/siddhesh-coder/HungryHub.git
```

2. Go to the project directory and install dependencies for both the client and server(server is available on https://github.com/siddhesh-coder/HungryHub-Razorpay-Server.git), below cmd will be the same for server

```bash
npm install
npm start
```

3. To run tests.

```bash
npm watch-test
```

**Components:**

# Hero Section Component:

• Listing of restaurants, cuisines, and greeting with user name:

• Layout: FlexBox

![Hero Section](/Project%20UI/Home.png)

#

![Hero Section](/Project%20UI/Home2.png)

#

![Hero Section](/Project%20UI/Footer.png)

#

#

[🔝 Back to Top](#table-of-contents)

# Search Component:

• It provides a list of restaurants based on the input given by the user.

• Debouncing which reduces the API call for every key stoke.

![Hero Section](/Project%20UI/SearchBar.png)

#

![Hero Section](/Project%20UI/SearchBar2.png)

#

#

[🔝 Back to Top](#table-of-contents)

# Category Component:

• List of food items based on selected cuisine.

![Hero Section](/Project%20UI/Category.png)

#

![Hero Section](/Project%20UI/Category2.png)

#

#

[🔝 Back to Top](#table-of-contents)

# Menu Component:

• List of menus based on the selected restaurant.

• Child Component:

1.  Carousal
2.  Accordion

![Menu Section](/Project%20UI/menu.png)

#

![Menu Section](/Project%20UI/Menu2.png)

#

#

[🔝 Back to Top](#table-of-contents)

# Cart Component:

• List of food items that the user has selected to purchase.

• User can increment, decrement or remove the count of food in their cart.

• The "Clear Cart" button is used to remove all the items from the cart.

![Menu Section](/Project%20UI/Cart.png)

#

![Menu Section](/Project%20UI/ClearCart.png)

#

#

# Header Component:

• Navigate to different sections in the application.

![Menu Section](/Project%20UI/header.png)

#

#

[🔝 Back to Top](#table-of-contents)

# Auth Component:

• User Authentication by using Formik(form handling) and yup(validation).

![Menu Section](/Project%20UI/Login.png)

#

![Menu Section](/Project%20UI/Signup.png)

#

#

[🔝 Back to Top](#table-of-contents)

# Loader and Shimmer Component:

![Loader](/Project%20UI/foodload.gif)

#

<video width="940" height="360" controls>
  <source src="./Project UI/Shimmer.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

#

#

[🔝 Back to Top](#table-of-contents)

# Filters Component:

• Based on filter it sort the list of restaurants

![Filter](/Project%20UI/Filters.png)

#

#

[🔝 Back to Top](#table-of-contents)

# About and Help Component:

![Filter](/Project%20UI/aboutus.png)

#

![Filter](/Project%20UI/help.png)

#

#

[🔝 Back to Top](#table-of-contents)

# Checkout Component:

![Filter](/Project%20UI/pay1.png)

#

![Filter](/Project%20UI/pay3.png)

#

![Filter](/Project%20UI/pay2.png)

#

#

[🔝 Back to Top](#table-of-contents)

# Network off Notification:

![Filter](/Project%20UI/netoff.png)

#

#

[🔝 Back to Top](#table-of-contents)

# Tech Stack:

**Frontend:**

![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Badge](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![React Badge](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React Badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![React Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React Badge](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)

**Backend:**

![React Badge](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

**Authentication:**

![React Badge](https://badgen.net/badge/authentication/Formik-and-Yup/orange?icon=firebase)

**Payment Gateway:**

![React Badge](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF)

**Tests**

![React Badge](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![React Badge](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)

**IDE**

![React Badge](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

**Linters**

![React Badge](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

**Terminal**

![React Badge](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

**Improvement**

1. Enhance the styling and design of the components to create a more visually appealing interface.

[🔝 Back to Top](#table-of-contents)

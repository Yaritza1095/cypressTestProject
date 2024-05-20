Cypress demo project
Author: Yaritza Miranda

This project uses
faker.js to generate fake data

Install requirement:

Make sure you have the latest version of Node Js installed
clone the project with this url https://github.com/Yaritza1095/cypressTestProject.git
Install dependencies with npm install
start cypress with npm npx cypress open




Description:
This projects aims to showcase my knowledge of cypress and the Page Object Model for E2E Testing,
I am using the free demo ecommerce website created by Lambda Test which you can access in this url:
https://ecommerce-playground.lambdatest.io/i

The website has several sections, each one with its own page and set of tests:

Home: here we navigate through the vertical and horizontal menus and test the basic search functionality (searching a keyword and clicking search), detailed search tests (filtering by category are on a separate page object and tests)

Login: we login we dummy email and password since the website has no validation constraints we can use whatever data we want, we assert the user lands on their account page by verifying the url and the title my account is displaying

Register/User Sign Up: here I use the faker.js library to showcase my knowledge of library integrations

Blog: Navigates through the 4 horizontal main menus in the left corner.

TO DO:

Add address into the account for check out

Purchase user Journey: searching for a product (https://ecommerce-playground.lambdatest.io/index.php?route=product/product&path=57&product_id=34), adding it to cart and completing checkout

Review transaction history



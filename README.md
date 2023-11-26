//1st
Given I am user
and I navigate to products component
then I should see list of products

// 2nd
Given I am a user
and I navigate to products component
then I should see a disabled button "Add to Cart" to add a product to cart

Note: the functionality of the button will be added in a future story

// 3rd
Given I am a user
and I navigate to products component
then I should see a cart Icon on the right corner of the nav menu bar

//4th
Given I am a user
and I navigate to products component
then I should see enabled button "Add to Cart" to add a product to cart
when I click "Add to Cart" the product should be added to cart

// 5th
Given I am a user
and I navigate to products component
When I click the cartIcon I should see list of products in the cart displayed in a table as
productName, Quantity, total price columns ,,,,,, and Cart total price in the bottom

// 6th
Given I am a user
and I navigate to the list of cart items by clicking the cart Icon
then I should see check out button below the list of products

7th
Given I am a user on the cart page
when I click checkout 
then an order is placed 
and product is removed from cart
and I see a success banner with a message with a message "order placed successfully".

When I click checkout
Then I am able to checkout the shopping cart items
And I get confirmation that an order is made

//8th
Given I am a user
When I navigate to the Products Page
Then I see a search field on the top navigation bar
And I can search(filter) the products by text
Given I am a user on the shopping cart page

//9th
Given I am a user
When I navigate to the ecommerce application
Then I see a myOrder in the Navigation menu

//10th
Given I am a user
When I navigate to the ecommerce application
And I click myOrder
Then I see the list of Items that I ordered
And a stepper showing the progress of my order status


# ECommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

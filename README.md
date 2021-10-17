# Find Crypto

Find Crypto is a APP to help you find the right crypto currency. The project is made with React Native, supports ios, android and web platforms

<div style="display: flex; justify-content: space-evenly; flex-wrap: wrap;">
  <img src="images/find-crypto-ios.png" alt="Find Crypto IOS" height="400" style="margin:5px;"/>
  <img src="images/find-crypto-android.png" alt="Find Crypto Android" height="400" style="margin:5px;"/>
  <img src="images/find-crypto-web.png" alt="Find Crypto Web" height="400" style="margin:5px;"/>
</div>

## Usage

The APP shows first 25 Cryptocurrency order by Market Cap, will load more when scrolling down to the bottom. Refresh the data by pulling down the list. (On the browser a sync button shows on the top left side)

<div style="display: flex; justify-content: space-evenly;">
<img src="images/refresh-focus.png" alt="Refresh Focus" height="300"/>
</div>

Also the crypto list can be order by name, price and volume. Click on the column of the header to choose. First click will order by ascending (with up icon), second click on the same column will order by descending. (with down icon)

<div style="display: flex; justify-content: space-evenly; flex-wrap: wrap;">
  <img src="images/up-icon-focus.png" alt="Up Icon Focus" height="250" style="margin:5px;"/>
  <img src="images/down-icon-focus.png" alt="Down Icon Focus" height="250" style="margin:5px;"/>
</div>

**NOTE:**
When Click on the coin column, it will use `id` to sort, because sort key `name` not working, `coin_name` acting wield.

# Installation

There are two ways to run the APP, the easiest way is with Expo CLI, another is to use React Native CLI. There is a good document about these, see more at [Setting up the development environment](https://reactnative.dev/docs/environment-setup).

In order to build and run the APP, we needs to install NodeJs on the system, make sure the version is higher than 12.

Next we can clone the repository onto the system.

To install the dependencies run `npm install` or `yarn install` in the terminal

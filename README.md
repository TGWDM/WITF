# What's in the Fridge

A mobile app built using the expo framework with react native. App will allow you to to take pictures of the bought food in it's packaging and uses OCR to extract the best before date and what the product is. The er will also be able to also manually enter these details.

## App design

The app is separated into 5 different buttons: Home, Expiring, New Item, Recipes & Profile.

### Home Page Details

At the top of the home page there is a view for showing the number of food in the fridge that will be hitting their expiration dates this week.

Below there is a view providing a week overview display which shows how many foods are going off on each day. When pressed it opens up into a full month calendar that allows users to swipe forwards and backwards to see their previous months and further into the current month.

### Expiring

This screen contains a scroll view displaying all of the user's added food entries. At the top of the page the user will be able to sort by: Entry order, best before date, alphabetical. There will also be a search at the top of the screen so that the user can easily find entries. When a user presses on an entry, a popup view will open showing a picture from when the item was added and a description.

### New Item

### Recipes

This screen is also a scroll view. It will use the items that have been scanned and aren't expired, in a search for recipes. Then display the found recipes with a image of recipe, the title and a brief description.

### Profile
****
This page is where all the settings for app will be displayed. Currently, the settings for the app are split into: account, appearance, notifications, storage and about. At the top of this page the user can set an image to attach to their account.

## Functionality

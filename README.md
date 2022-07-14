# HAILEY GARCIA CAPSTONE PROJECT README

# Our Environmentalism

## Table of Contents
1. [Overview](#Overview)
1. [Product Spec](#Product-Spec)
1. [Wireframes](#Wireframes)
1. [Schema](#Schema)

## Overview
### Description
Core: Our Environmentalism is an educational web app that provides people with information about different non-profit organizations focused on environmentalism in their area. The user is able to sign up and save different organizations so they can come back and learn more about them.
Stretch: The app goes deeper, pulling from environmental data to visualize the amount of environmental pollutants in a certain area.

### App Evaluation
- **Category:** Educational
- **Mobile:** This app would be primarily developed for web applications and work optimally on laptop/desktops but it would still work on mobile devices.
- **Story:** Provides users with a mapping tool to look at environmental data + non-profits to save in that area.
- **Market:** This is primarilly geared towards Gen-Z and Milenials but anyone could use it.
- **Habit:** This application would not be a daily use application, rather users would look at it when they are feeling inspired to support climate justice.
- **Scope:** At it's core, the application is just providing information about environmental justice & different organizations people can connect to to take action. However, this could expand to have more interactivity, with nonprofits posting certain events.

## Product Spec
### 1. User Stories (Required and Optional)

**Required Must-have Stories**

* User logs in to access saved nonprofits
* User can open a mapping tool where when they click on a location, surrounding environmental non-profits popup
* Users can search by area
* Saved non-profit page, lists out different nonprofits
* Settings (Accesibility, Notification, General, etc.)

**Optional Nice-to-have Stories**

* Mapping page loads environmental data so you can sort by most environmentally burdeded communities
* Mapping page loads Census data to sort by communities of color, education level, poverty level

### 2. Screen Archetypes

* Login
* Register - User signs up or logs into their account
* Mapping screen - California map with search bar to search by location
   * Upon selecting different nonprofits in that area pop up
* Profile Screen
   * Allows user to upload a photo and put in their information
* Saved Nonprofits Screeen.
   * Allows user to access the non-profits they had previously saved.
* Settings Screen
   * Lets people change language, and app notification settings.

### 3. Navigation

**NavBar Navigation - on open**
* About
* Map
* Login
* Sign up

**NavBar Navigation - logged in**
* About
* Map
* Saved
* Profile

**Flow Navigation**
* Forced Log-in -> Account creation if no log in is available
* Map -> Opens Map

## Wireframes
<img src="capstone.png" width=800><br>

### [BONUS] Digital Wireframes & Mockups
<img src="capstone2.png" height=200>


## Schema
### Models
#### Post

   | Property      | Type     | Description |
   | ------------- | -------- | ------------|
   | objectId      | String   | unique id for the non-profit |

### Networking
#### List of network requests by screen
   - Map Screen
      - (Create/POST) Create a save on a post
      - (Delete) Delete existing save
   - Profile Screen
      - (Read/GET) Query logged in user object
      - (Update/PUT) Update user profile image
   s
#### [OPTIONAL:] Existing API Endpoints

##### Non-Profit API
- Base URL - [https://projects.propublica.org/nonprofits/api/v2](https://projects.propublica.org/nonprofits/api/v2)

   HTTP Verb | Endpoint | Description
   ----------|----------|------------
    `GET`    | /name | Organization name, as provided by the IRS
    `GET`    | /city | return cities
    `GET`    | /state   | return states (will filter out anything not CA)
    `GET`    | /zipcode | return zipcode
    `GET`    | /guidestar_url | A link to the GuideStar profile for this organization.

# Project Plan

Pod Members: Enrique Rico, Lucas Vidal, Paul Franco, Nana Okae

## Problem Statement and Description

Insert your groups problem statement and target audience. Target Audience: New Hires and people looking to become more knowledgeable in internet safety Problem Statement: Lots of people fall prey to phishing attacks and other types of cyberscams. How can we make use of game concepts and interactivity to teach people how to be more safe while surfing the web.

## User Roles and Personas

User Roles:
- New hire
- Managers
- General user

Personas:
- 

## User Stories



## Pages/Screens

Login/Register:
<img width="1104" alt="Screen Shot 2022-07-20 at 3 22 46 PM" src="https://user-images.githubusercontent.com/49778407/180092760-d8484df7-3585-45a4-ab92-7c686728d05f.png">

Main Page:
<img width="344" alt="Screen Shot 2022-07-20 at 3 24 06 PM" src="https://user-images.githubusercontent.com/49778407/180092822-9b338c4f-3827-45fd-ba64-5d6ddac49192.png">


  
  

## Data Model

Users Table:

| Column Name | Type                 | Desc.                             |
|-------------|----------------------|-----------------------------------|
| id          | SERIAL PRIMARY KEY   | user id                           |
| password    | TEXT NOT NULL        | password                          |
| first_name  | TEXT NOT NULL        | first name of user                |
| last_name   | TEXT NOT NULL        | last name of user                 |
| email       | UNIQUE TEXT NOT NULL | email                             |
| birthday    | TIMESTAMP NOT NULL   | users birthday                    |
| title       | TEXT NOT NULL        | Mr/Mrs                            |
| isAdmin     | BOOLEAN              | Check if user has access to admin |

Modules Table:

| Column Name | Type                 | Desc.                             |
|-------------|----------------------|-----------------------------------|
| id          | SERIAL PRIMARY KEY   | module id                         |
| name        | TEXT NOT NULL        | module name                       |
| category    | TEXT NOT NULL        | modules category                  |
| steps       | INT DEFAULT 0        | # of steps in module              |

Module_# Table:

| Column Name | Type                 | Desc.                             |
|-------------|----------------------|-----------------------------------|
| id          | SERIAL PRIMARY KEY   | module id                         |
| progress    | INT DEFAULT 0        | steps completed by user           |
| user_id     | INT NOT NULL         | id of user currently logged in    |
| module_id   | INT NOT NULL.        | id of the currrent module         |

Managers Table:

| Column Name | Type                 | Desc.                             |
|-------------|----------------------|-----------------------------------|
| id          | SERIAL PRIMARY KEY   | module id                         |
| user_id     | INT NOT NULL         | id of manager currently logged in |
| token       | TEXT NOT NULL        | manager token provided            |
| company     | TEXT NOT NULL        | company manager works for         |
| usersInPod  | ARRAY                | array of users under the manager  |



## Endpoints

List the API endpoints you will need to implement.


***Don't forget to set up your Issues, Milestones, and Project Board!***

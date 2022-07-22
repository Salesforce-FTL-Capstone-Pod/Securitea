# Project Plan

Pod Members: Enrique Rico, Lucas Vidal, Paul Franco, Nana Okae

## Problem Statement and Description

The internet is a vast and growing environment used by everyone in the world. From big coorperations to a child playing games, these users are all subject to Malware, Phishing, and Social Engineering Attacks. With our website, Securitea, users will be able to gain the knowlege and understanding of how to be safe on the internet through an immersive and easy to use experience.

## User Roles and Personas

User Roles:
-Corperate employee(new hire, employee hired a while back)

-Project Manager

## Personas:
**Corperate employee**:

-Ben is newly hired software engineer at salesforce who loves to read fan fiction and eat salads. He is a believer in coming into work ready to be productive all day and complete all his tasks on time. Ben does not like it when his manager cancels meetings because it messes up his work flow through out the day.

-Stefany, a systems engineer who has been with salesforce for over 12 years, is a big thinker and likes to catch up on her favourite anime, One Piece,during her lunch break. She loves to work on leet code problems when she is not working on projects and takes frequent breaks during the work day.

**Project Manager**

-JuJu is a project manager for a Mulesoft team. He stays busy, making sure everyone in his team is on track to meet deadlines. When he is not in the office he like to go hiking with his 2 boys; Jason and Jackson.

-Brianna takes pride in her team and their work ethic. She loves to bring her dog to the office to boost her teams seratonin and and moral; which seems to prove right everytime.

## User Stories
As a user, I want to be able to see my progress

As a user, I want to be able to share all my progress with my manager

As a user, I want to know what modules I need to complete by a set date

As a user, I want to be able to sign in using slack

As a user, I want to be able to login

As a user, I want to be able to register

As a user, I want to be able to have an easy access to the navigation bar

As a user, I want to be able to see the exampler clearly to be able to read

As a user, I want to be able to scroll down on the home page to see more about the website

As a user, I want to be able to have my profile information saved for easy access to my account


## Wire Frame
**Link to presented Wireframe flow**
- https://www.figma.com/proto/pZas6V078R7kKWmPFAw6bJ/Capstone?node-id=2%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1


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
| Name         | Request Type | Request Path          | Return Status | Return JSON            |   |   |   |   |   |
|--------------|--------------|-----------------------|---------------|------------------------|---|---|---|---|---|
| Home         | GET          | /                     | 200           | server_is: up          |   |   |   |   |   |
| Login        | POST         | /auth/login           | 200           | user obj, token string |   |   |   |   |   |
| Register     | POST         | /auth/register        | 201           | user obj, token string |   |   |   |   |   |
| Me           | GET          | /auth/me              | 200           | publicUser obj         |   |   |   |   |   |
| Get Progress | GET          | /progress/getProgress | 200           | progress obj           |   |   |   |   |   |
|              |              |                       |               |                        |   |   |   |   |   |
|              |              |                       |               |                        |   |   |   |   |   |
|              |              |                       |               |                        |   |   |   |   |   |
|              |              |                       |               |                        |   |   |   |   |   |



***Don't forget to set up your Issues, Milestones, and Project Board!***

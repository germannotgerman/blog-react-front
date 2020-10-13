# Integration testing exercises

## Application under test

Personal blogging web application generated with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).

### User stories

- **As a** blog site visitor **I can** look around the blog site using navigation menu **in order to** get acquainted with the content.
- **As a** blog site visitor **I can** open certain article displayed on the articles page **in order to** read that article.
- **As a** blog site owner **I want to** display page not found message to the user **in order to** let the user know when user stumbled upon an article that does not exist.

## Exercises
- [ ] Get to know the application
- [ ] Testing React components
- [ ] Writing mock integration tests against our back-end
- [ ] Creating a CI pipeline

## Exercise 1: Get to know the application

**Prerequisites:**
- NodeJS and NPM

Setup the application locally and get acquainted with the application, and it's code:
- Checkout the repo from Gitlab (and push it where ever you prefer)
- Install node modules: ```npm install```
- Run the application in DEV mode: ```npm start```
- Familiarise yourself with the application
- Familiarise yourself with React code. Try to understand how it works and/or checkout some tutorials on youtube (**Keywords:** *React*, *React Router*, *create-react-app*)

## Exercise 2: Testing React components with Jest

Testing navigation between different components:
- NavBar and other pages
- ArticlesList and ArticlePage
- Page not found and other pages (TDD)

## Exercise 3: Writing mock integration tests against our back-end with Cypress

We will be writing TDD integration tests against the back-end application by  
replacing dummy data (```article-content.js```) with API calls to the back-end  
that is still being developed.

## Exercise 4: Creating a CI pipeline in Gitlab for the front-end application

We will be creating a basic Gitlab CI pipeline for our front-end which will be  
checking the code we commit to the master branch.
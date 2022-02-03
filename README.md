# Cinemagic
Have you ever found it difficult going back and forth between streaming services to decide what movie to watch? Then Cinemagic is the web app for you. Have all your favorite movies in one place and create a virtual movie collection. Keep track of favorites and decide what you want to watch in one place rather than jumping from different streaming services. The last bonus is that Cinemagic lists all the streaming services each movie is available on rather than making you jump between apps. Consider Cinemagic your new digital magic movie collection.

## Deployed URL
Cinemagic is currently in development and the deployed URL will be listed once we complete the MVP (minimal viable product)

## Screenshot
An image of the working web application can be found here once the MVP is complete.

## Technologies
* JavaScript
* [The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction)
* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [MySQL](https://www.mysql.com/)
* [Sequelize ORM](https://sequelize.org/)
* [Handlebars.js](https://handlebarsjs.com/installation/)
* [Prettier](https://prettier.io/)
* [ESLint](https://eslint.org/)
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [Express](https://expressjs.com/)
* [tailwindcss](https://tailwindcss.com/)

## Code Installation Guide
To download the code on your computer follow this steps

1) Clone the repository using ``` git clone <link here>```

2) Create a .env file with the appropriate user and password using the example code below. In the example code the appropriate database name is already filled in. 

```javascript
DB_NAME=cinemagic_db
DB_USER=
DB_PASSWORD=
```

3) Run in the terminal ```npm i``` to install the necessary packages.

4) Then create the necessary database in the db folder by completing the following commands in the terminal 

```mysql -u root -p```

```source schema.sql```

```quit```

5) Lastly, to start the server and run the web application on your local server use the command ```npm start```

Side Note: To use this code on your local computer make sure to download the appropriate packages listed in the [Technologies Section](#Technologies).

## Contributors
* Matt Enos [GitHub](https://github.com/mattenos), [LinkedIn](https://www.linkedin.com/in/matt-enos-2177b815/)
* Sheen Hahn [GitHub](https://github.com/jhahnsheen), [LinkedIn](https://www.linkedin.com/in/jhahnsheen/)
* Nick Lyle [GitHub](https://github.com/NickLyle2009), [LinkedIn](www.linkedin.com/in/nicholas-lyle-35b703a2)
* Michael Rawlings [GitHub](https://github.com/Mikerawl)
* Rachel Washington [GitHub](https://github.com/rwashi690), [LinkedIn](https://www.linkedin.com/in/rachel-washington-913a0045/)
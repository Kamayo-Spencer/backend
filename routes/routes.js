import express, { application } from 'express'

// Controller imports

import userController from './controllers/userController.js';
import postController from './controllers/postController.js';
import commentController from './controllers/commentControllers.js';

const routes = express().router();

//ROUTES

//User routes
routes.post('/signup', userController.post);

//Post routes

//Retrieving posts 
routes.get('/posts', postController.getAll);

//Creating posts
routes.post('/post', postController.post);

//Submitting posts



// Comments Routes 

//Retrieving comments

//Creating comments
routes.post('/comment', commentController.post);
//Submitting comments

// app.use('/api/tasks', routes)
export default routes;
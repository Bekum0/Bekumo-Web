import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { DataStore } from '@aws-amplify/datastore';
import { Database } from './models';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

Amplify.configure(awsconfig);

const createUser = async () => {
    await DataStore.save(
      new Database({
	  	"username": "Bekumo",
	  	"password": "Test"
	  }));
};

const getAllData = async () => {
  const models = await DataStore.query(Database);
  console.log(models);
};

async function getUserByUserName(userName) {
      const activeUser = await DataStore.query(Database, users => users.username.eq(userName));
      console.log(activeUser);
};

//createUser();    n   
getUserByUserName("Test");
getAllData();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
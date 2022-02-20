// we create routes in seperate folder and file filename same as route

import express from "express";

// initialize a router
const router = express.Router();

// import all the controllers. we have to add .js
import {
  createUser,
  getUsers,
  getSingleUser,
  deleteSingleUser,
  updateSingleUser,
} from "../controllers/users.js";

// get:read
// route path will be / as in index.js we are using /users route. if we use /users in route file then it will point to /users/users route
// so as we mention /users in index file, all routes in users file will start with /
router.get("/", getUsers);

// post
router.post("/", createUser);

// get single user: as we passed :(also called as url params) it means it will accept anything after / route
router.get("/:id", getSingleUser);

// delete: delete a single user
router.delete("/:id", deleteSingleUser);

// patch: we use patch when we have to partially modififed the data
// put: we use put when we have to completely change the entire data
router.patch("/:id", updateSingleUser);

// we have to export the router to use it in index.js file
export default router;

// since in each route we have lots of logic, we will create seperate folder called controller with same filename as router and put all the logic

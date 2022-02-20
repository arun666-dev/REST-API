// to get the singe user data we have to get it by unique id, we will use pkg called uuid
import { v4 as uuidv4 } from "uuid";

// using mock data
let users = [];

// get
export const getUsers = (req, res) => {
  res.send(users);
  // console.log(users);
};

// post:create -> by default in brow. when he hit any route it is a get req.
// so to test api endpoints we will use postman/insomnia
export const createUser = (req, res) => {
  console.log("post route reached");

  // the data client sends is stored in req.body
  // console.log(req.body);
  const newUser = req.body;

  // generate unique id
  const userId = uuidv4();

  // we use spread oper. to add new pro.
  const userWithId = { ...newUser, id: userId };
  // to add data in array we use push method
  users.push(userWithId);

  // res. server will send when client data is received
  res.send(`user with id: ${userId} is created`);
};

// get single user:
// we use req.params: for eg if we pass /2 then it is stored as {id:2}
export const getSingleUser = (req, res) => {
  // console.log(req.params);

  // const id = req.params.id;
  // using destru.
  const { id } = req.params;

  // to get the data for the specific id, first we find the id as follows:
  // user.id is a id present in db and id is the url params
  const foundUserById = users.find((user) => user.id === id);
  // res.send(req.params);
  res.send(foundUserById);
};

// delete single user
export const deleteSingleUser = (req, res) => {
  const { id } = req.params;

  // filter func. will keep only the true vals. and as we passed !== it will remove that obj. from the array
  users = users.filter((user) => user.id !== id);
  res.send(`user with id ${id} is deleted from db`);
};

// patch: update partial data of a user
export const updateSingleUser = (req, res) => {
  const { id } = req.params;

  // get the id whose user data need to be updated in db
  const userToBeUpdated = users.find((user) => user.id === id);

  // the data client will update is stored in req.body
  const { F1, L1, age } = req.body;

  // update the data present in db with client data
  if (F1) {
    userToBeUpdated.F1 = F1;
  }
  if (L1) {
    userToBeUpdated.L1 = L1;
  }
  if (age) {
    userToBeUpdated.age = age;
  }
  res.send(`user with id ${id} is updated`);
};

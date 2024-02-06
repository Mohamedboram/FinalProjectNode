import express from "express";
import {
  deactivateUser,
  login,
  signUp,
  updateDataUser,
  verifySignup,
} from "../controller/user.controller.js";
import checkValidationLogin from "./../validation/checkValidationLogin.js";
import IsLogged, { checkUser } from "../Services/IsLogged.js";
import resetPassword from "../Services/resetpassword.js";
import forgetPassword from "../Services/forgetPassword.js";

const routUsers = express.Router();

routUsers.route("/signin").post(checkValidationLogin, login);

routUsers.route("/signup").post(signUp);
routUsers.route("/verify/:token").get(verifySignup);

routUsers
  .route("/resetpassword/:id")
  .post(IsLogged, checkUser, resetPassword);
routUsers.route("/forgetpassword").post(forgetPassword);
routUsers.route("/update/:id").post(verifyIsLogged, updateDataUser);
routUsers
  .route("/deactivate/:id")
  .post(IsLogged, checkUser, deactivateUser);
export default routUsers;

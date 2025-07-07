import express from "express"
const router = express.Router()
import {Register} from "../controllers/user.js"
import {Login} from "../controllers/user.js"
import {Logout} from "../controllers/user.js"

router.route("/register").post(Register)
router.route("/login").post(Login)
router.route("/logout").get(Logout)

export default router
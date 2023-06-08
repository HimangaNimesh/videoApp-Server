import express from "express"
import { deleting, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/UserController.js"
import { verifyToken } from "../verifyToken.js"

const router = express.Router()

//Update user
router.put("/:id", verifyToken, update)

//delete user
router.delete("/:id", verifyToken, deleting)

//get a user
router.get("/find/:id", getUser)

//subscribe a user
router.put("/sub/:id", verifyToken, subscribe)

//unsubscribe a user
router.put("/unsub/:id", verifyToken, unsubscribe)

//like a video
router.put("/like/:videoId", verifyToken, like)

//dislike a video
router.put("/dislike/:videoId", verifyToken, dislike)

export default router
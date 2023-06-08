import express from "express"
import { deleting, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/UserController.js"
import { verifyToken } from "../verifyToken.js"

const router = express.Router()

//Update user
router.put("/:id", verifyToken, update)

//delete user
router.delete("/:id", deleting)

//get a user
router.get("/find/:id", getUser)

//subscribe a user
router.put("/sub/:id", subscribe)

//unsubscribe a user
router.put("/unsub/:id", unsubscribe)

//like a video
router.put("/like/:videoId", like)

//dislike a video
router.put("/dislike/:videoId", dislike)

export default router
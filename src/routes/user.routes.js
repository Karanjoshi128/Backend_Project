import { Router } from "express"
import { registerUser , logInUser , logOutUser} from "../controllers/user.controller.js"
import { upload } from "../middleware/multer.middleware.js"
import { verifyJWT } from "../middleware/auth.middleware.js";


const router = Router();

router.route("/register").post(
    upload.fields([{
        name : "avatar",
        maxCount : 1
    },
    {
        name : "coverImage",
        maxCount : 1
    }]),
    registerUser);

router.route("/login").post(logInUser);

//secured routes
router.route("/logout").post(verifyJWT , logOutUser);







export default router;
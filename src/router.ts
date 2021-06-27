import { Router } from "express";
import CreateUserController from "./controllers/CreateUserController";
import CreateTagController from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthUserController } from "./controllers/AuthUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuth } from "./middlewares/ensureAuth";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceviedComplimentsController";
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authUserController = new AuthUserController();
const createComplimentControlle = new CreateComplimentController();
const listuserSenderCompliment = new ListUserSenderComplimentsController();
const listuserReceiveCompliment = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

router.post("/tags", ensureAuth, ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authUserController.handle);
router.post("/compliments", ensureAuth, createComplimentControlle.handle);

router.get(
  "/users/compliments/send",
  ensureAuth,
  listuserSenderCompliment.handle
);
router.get(
  "/users/compliments/receive",
  ensureAuth,
  listuserReceiveCompliment.handle
);
router.get("/tags", ensureAuth, listTagsController.handle);

router.get("/users", ensureAuth, listUsersController.handle);

export { router };

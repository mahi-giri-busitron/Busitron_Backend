import express from "express";
import {
    createTask,
    deleteTask,
    getAllTaskByUser,
    getAllTasks,
    updateTask,
    gettaskbyPID,
} from "../controller/task.controller.js";
import { upload } from "../middlewares/fileupload.middleware.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/createTask", authenticateUser, upload.array("attachments", 5), createTask);

router.get("/getAllTasks", authenticateUser, getAllTasks);

router.get("/getTaskByUser", authenticateUser, getAllTaskByUser);

router.put("/:taskId", authenticateUser, upload.array("attachments", 5), updateTask);

router.delete("/:taskId", authenticateUser, deleteTask);

router.get("/gettaskbyid/:id", authenticateUser, gettaskbyPID);

export default router;

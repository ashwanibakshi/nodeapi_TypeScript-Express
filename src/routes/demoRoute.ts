import express from "express";
import {users} from "../controller/demoController";


const router = express.Router();

router.get('/showUser',users.showUser);
router.post('/addUser',users.addUser);
router.put('/updateUser',users.updateUser);
router.delete('/deleteUser/:id',users.deleteUser);

export const routes = router;
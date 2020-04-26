"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var demoController_1 = require("../controller/demoController");
var router = express_1.default.Router();
router.get('/showUser', demoController_1.users.showUser);
router.post('/addUser', demoController_1.users.addUser);
router.put('/updateUser', demoController_1.users.updateUser);
router.delete('/deleteUser/:id', demoController_1.users.deleteUser);
exports.routes = router;

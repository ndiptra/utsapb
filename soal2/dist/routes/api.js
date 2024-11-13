"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dataController_1 = require("../controller/dataController");
const router = (0, express_1.Router)();
router.get('/colors', dataController_1.getColors);
exports.default = router;

import express from "express";
import { Router } from "express";
import { getColors } from "../controller/dataController";

const router = Router();

router.get('/colors', getColors);

export default router;
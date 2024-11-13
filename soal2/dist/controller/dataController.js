"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColors = void 0;
const fs_1 = require("fs");
const getColors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fs_1.promises.readFile("./src/resources/sample.json", "utf-8");
        // console.log("Data berhasil dibaca:", data);
        const colorsData = JSON.parse(data);
        // console.log("Data berhasil di-parse:", colorsData);
        res.json(colorsData.colors);
    }
    catch (error) {
        res.status(500).json({ message: "Error saat membaca data", error: error.message });
    }
});
exports.getColors = getColors;

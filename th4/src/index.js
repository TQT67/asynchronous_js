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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listPost = yield axios_1.default.get("http://jsonplaceholder.typicode.com/posts");
        console.log(listPost.data[0]);
        const dataDetail = yield axios_1.default.get("http://jsonplaceholder.typicode.com/posts/1");
        console.log(dataDetail.data);
    }
    catch (err) {
        console.log(err);
    }
});
getData();

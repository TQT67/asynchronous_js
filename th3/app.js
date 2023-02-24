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
function onlyNumbers(array) {
    let checkNumber = true;
    array.map((element) => {
        if (typeof element !== "number") {
            checkNumber = false;
        }
    });
    return checkNumber;
}
function sumNumber(array) {
    return new Promise((resolve, reject) => {
        if (onlyNumbers(array)) {
            let sum = 0;
            for (const value of array) {
                sum += value;
            }
            resolve(sum);
        }
        else {
            reject("Has a non-integer element");
        }
    });
}
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    const allPromise = Promise.all([sumNumber([1, 2]), sumNumber([3, 4])]);
    const lists = yield allPromise;
    console.log(lists);
});
getData();

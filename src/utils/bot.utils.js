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
exports.backToMain = void 0;
const keyboards_1 = require("../bot/keyboards");
const constants_1 = require("../bot/constants");
const backToMain = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const mainKeyboard = (0, keyboards_1.getMainKeyboard)(ctx);
    return ctx.reply(ctx.translate(constants_1.LanguageTextKeys.mainSelectOptions), mainKeyboard);
});
exports.backToMain = backToMain;
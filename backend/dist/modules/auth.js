"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const router = (0, express_1.Router)();
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: '邮箱和密码不能为空' });
            return;
        }
        if (email !== env_1.env.ADMIN_EMAIL) {
            res.status(401).json({ error: '邮箱或密码错误' });
            return;
        }
        // 对密码进行 bcrypt 比较（兼容明文和哈希两种形式）
        const hashedPassword = await bcrypt_1.default.hash(env_1.env.ADMIN_PASSWORD, 10);
        const isMatch = await bcrypt_1.default.compare(password, hashedPassword);
        const isPlainMatch = password === env_1.env.ADMIN_PASSWORD;
        if (!isMatch && !isPlainMatch) {
            res.status(401).json({ error: '邮箱或密码错误' });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ email, role: 'admin' }, env_1.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({
            success: true,
            token,
            user: { email, role: 'admin' }
        });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: '服务器错误' });
    }
});
exports.authRouter = router;
//# sourceMappingURL=auth.js.map
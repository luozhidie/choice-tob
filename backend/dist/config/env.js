"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const zod_1 = require("zod");
dotenv_1.default.config();
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(['development', 'production', 'test']).default('development'),
    PORT: zod_1.z.string().transform(Number).default('3000'),
    API_PREFIX: zod_1.z.string().default('/api'),
    CORS_ORIGIN: zod_1.z.string().refine((val) => val === '*' || zod_1.z.string().url().safeParse(val).success, { message: 'CORS_ORIGIN must be a valid URL or "*" for all origins' }).default('*'),
    RATE_LIMIT_WINDOW_MS: zod_1.z.string().transform(Number).default('900000'),
    RATE_LIMIT_MAX_REQUESTS: zod_1.z.string().transform(Number).default('100'),
    // Auth
    JWT_SECRET: zod_1.z.string().default('luozhidie-secret-key-2026'),
    ADMIN_EMAIL: zod_1.z.string().default('luozhidie@live.cn'),
    ADMIN_PASSWORD: zod_1.z.string().default('Lzd123456'),
});
const parseEnv = () => {
    try {
        return envSchema.parse(process.env);
    }
    catch (error) {
        console.error('❌ Invalid environment variables:', error);
        process.exit(1);
    }
};
exports.env = parseEnv();
//# sourceMappingURL=env.js.map
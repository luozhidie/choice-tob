import { Router, type Request, type Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';

const router: Router = Router();

interface LoginBody {
  email: string;
  password: string;
}

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as LoginBody;

    if (!email || !password) {
      res.status(400).json({ error: '邮箱和密码不能为空' });
      return;
    }

    if (email !== env.ADMIN_EMAIL) {
      res.status(401).json({ error: '邮箱或密码错误' });
      return;
    }

    // 对密码进行 bcrypt 比较（兼容明文和哈希两种形式）
    const hashedPassword = await bcrypt.hash(env.ADMIN_PASSWORD, 10);
    const isMatch = await bcrypt.compare(password, hashedPassword);
    const isPlainMatch = password === env.ADMIN_PASSWORD;

    if (!isMatch && !isPlainMatch) {
      res.status(401).json({ error: '邮箱或密码错误' });
      return;
    }

    const token = jwt.sign(
      { email, role: 'admin' },
      env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      token,
      user: { email, role: 'admin' }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: '服务器错误' });
  }
});

export const authRouter: Router = router;

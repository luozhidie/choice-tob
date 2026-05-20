import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/admin/dashboard');
      } else {
        setError(data.error || '登录失败');
      }
    } catch (err) {
      setError('网络错误，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'oklch(0.15 0.02 295)' }}>
      <div className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div
            className="inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white text-2xl font-bold mb-4"
            style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))' }}
          >
            骆
          </div>
          <h1 className="text-2xl font-bold text-white">色彩智选管理系统</h1>
          <p className="text-sm mt-2" style={{ color: 'oklch(0.6 0.03 295)' }}>数据驱动服装供应链决策</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">邮箱</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border px-4 py-2.5 text-sm text-white"
              style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.15)' }}
              placeholder="luozhidie@live.cn"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">密码</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border px-4 py-2.5 text-sm text-white"
              style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.15)' }}
              placeholder="请输入密码"
              required
            />
          </div>

          {error && (
            <div className="text-sm text-red-400 text-center">{error}</div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full text-white"
            style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))' }}
          >
            {loading ? '登录中...' : '登录'}
          </Button>
        </form>

        <div className="mt-6 text-center text-xs" style={{ color: 'oklch(0.5 0.03 295)' }}>
          默认账号: luozhidie@live.cn / Lzd123456
        </div>
      </div>
    </div>
  );
}

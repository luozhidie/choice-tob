import { Link } from 'react-router-dom';

const navItems = [
  { label: '首页', path: '/' },
  { label: '仪表盘', path: '/dashboard' },
  { label: 'VIP客户', path: '/vip' },
  { label: '商品SKU', path: '/products' },
  { label: '销售分析', path: '/sales-analysis' },
  { label: '库存智能', path: '/inventory' },
  { label: '会员运营', path: '/members' },
  { label: '店长日报', path: '/reports' },
];

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        background: 'oklch(0.99 0.005 295 / 0.85)',
        backdropFilter: 'blur(12px)',
        borderColor: 'oklch(0.92 0.01 295 / 0.5)',
      }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg font-bold text-white text-lg"
            style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))' }}
          >
            骆
          </div>
          <div className="hidden md:flex flex-col leading-tight">
            <span className="text-sm font-bold" style={{ color: 'oklch(0.18 0.02 295)' }}>色彩智选</span>
            <span className="text-[10px] tracking-wider" style={{ color: 'oklch(0.45 0.05 295)' }}>数据驱动决策</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="rounded-md px-3 py-1.5 text-sm font-medium transition-colors no-underline"
              style={{ color: 'oklch(0.40 0.04 295)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.62 0.18 295)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.40 0.04 295)')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/login"
          className="hidden md:inline-flex rounded-lg px-5 py-2 text-sm font-semibold text-white no-underline transition-transform hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))',
            boxShadow: '0 4px 14px oklch(0.62 0.18 295 / 0.3)',
          }}
        >
          后台登录
        </Link>
      </div>
    </header>
  );
}

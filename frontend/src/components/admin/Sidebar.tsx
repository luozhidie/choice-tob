import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Package,
  BarChart3,
  Warehouse,
  UsersRound,
  FileBarChart,
  LogOut,
} from 'lucide-react';

const menuItems = [
  { path: '/admin/dashboard', icon: LayoutDashboard, label: '仪表盘' },
  { path: '/admin/vip', icon: Users, label: 'VIP管理' },
  { path: '/admin/products', icon: Package, label: '商品管理' },
  { path: '/admin/sales-analysis', icon: BarChart3, label: '销售分析' },
  { path: '/admin/inventory', icon: Warehouse, label: '库存智能' },
  { path: '/admin/members', icon: UsersRound, label: '会员运营' },
  { path: '/admin/reports', icon: FileBarChart, label: '店长日报' },
];

export default function AdminSidebar() {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/admin/login';
  };

  return (
    <aside
      className="fixed left-0 top-0 h-full w-60 border-r flex flex-col"
      style={{
        background: 'oklch(0.18 0.02 295)',
        borderColor: 'oklch(1 0 0 / 0.1)',
      }}
    >
      {/* Logo */}
      <div className="p-4 border-b" style={{ borderColor: 'oklch(1 0 0 / 0.1)' }}>
        <Link to="/admin/dashboard" className="flex items-center gap-2 no-underline">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg font-bold text-white text-sm"
            style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))' }}
          >
            骆
          </div>
          <span className="font-bold text-white text-sm">色彩智选管理</span>
        </Link>
      </div>

      {/* 菜单 */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium no-underline transition-colors"
              style={{
                background: isActive ? 'oklch(1 0 0 / 0.1)' : 'transparent',
                color: isActive ? 'oklch(0.85 0.15 295)' : 'oklch(0.6 0.03 295)',
              }}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* 退出 */}
      <div className="p-3 border-t" style={{ borderColor: 'oklch(1 0 0 / 0.1)' }}>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium w-full no-underline"
          style={{ color: 'oklch(0.5 0.03 295)' }}
        >
          <LogOut size={18} />
          退出登录
        </button>
      </div>
    </aside>
  );
}

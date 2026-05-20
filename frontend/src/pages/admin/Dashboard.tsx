export default function AdminDashboard() {
  return (
    <div className="flex h-screen" style={{ background: 'oklch(0.15 0.02 295)' }}>
      {/* 侧边栏 */}
      <div className="w-60 flex-shrink-0">
        {/* 这里放 Sidebar 组件，暂时用占位 */}
        <div className="h-full border-r flex flex-col" style={{ background: 'oklch(0.18 0.02 295)', borderColor: 'oklch(1 0 0 / 0.1)' }}>
          <div className="p-4 border-b" style={{ borderColor: 'oklch(1 0 0 / 0.1)' }}>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))' }}>骆</div>
              <span className="font-bold text-white text-sm">色彩智选管理</span>
            </div>
          </div>
          <nav className="flex-1 p-3 space-y-1">
            {[
              { label: '仪表盘', path: '/admin/dashboard', active: true },
              { label: 'VIP管理', path: '/admin/vip' },
              { label: '商品管理', path: '/admin/products' },
              { label: '销售分析', path: '/admin/sales-analysis' },
              { label: '库存智能', path: '/admin/inventory' },
              { label: '会员运营', path: '/admin/members' },
              { label: '店长日报', path: '/admin/reports' },
            ].map((item) => (
              <a key={item.path} href={item.path} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium no-underline"
                style={{
                  background: item.active ? 'oklch(1 0 0 / 0.1)' : 'transparent',
                  color: item.active ? 'oklch(0.85 0.15 295)' : 'oklch(0.6 0.03 295)'
                }}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* 主内容区 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 顶部 */}
        <header className="h-16 border-b flex items-center justify-between px-6"
          style={{ background: 'oklch(0.2 0.02 295 / 0.9)', backdropFilter: 'blur(12px)', borderColor: 'oklch(1 0 0 / 0.1)' }}>
          <h1 className="text-lg font-semibold text-white">仪表盘</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg" style={{ color: 'oklch(0.6 0.03 295)' }}>🔔</button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{ background: 'oklch(0.62 0.18 295 / 0.2)' }}>👤</div>
              <span className="text-sm text-white">管理员</span>
            </div>
          </div>
        </header>

        {/* 内容 */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'VIP客户', value: '1,284', change: '+12%' },
              { label: '本月销售额', value: '¥86.5万', change: '+23%' },
              { label: '库存预警', value: '37', change: '↑5', warning: true },
              { label: '售罄率', value: '68%', change: '+5%' },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-xl border" style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.1)' }}>
                <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <div className={`text-xs mt-1 ${item.warning ? 'text-red-400' : 'text-green-400'}`}>{item.change}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl border" style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.1)' }}>
              <h3 className="text-white font-medium mb-4">销售趋势</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">图表区域（待接入数据）</div>
            </div>
            <div className="p-4 rounded-xl border" style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.1)' }}>
              <h3 className="text-white font-medium mb-4">库存预警</h3>
              <div className="space-y-2">
                {[
                  { sku: 'SKU-2024001', name: '真丝连衣裙', stock: 12, alert: '紧急补货' },
                  { sku: 'SKU-2024002', name: '羊毛大衣', stock: 5, alert: '即将断货' },
                  { sku: 'SKU-2024003', name: '棉麻衬衫', stock: 89, alert: '库存积压' },
                ].map((item) => (
                  <div key={item.sku} className="flex items-center justify-between p-2 rounded" style={{ background: 'oklch(1 0 0 / 0.05)' }}>
                    <div>
                      <div className="text-sm text-white">{item.name}</div>
                      <div className="text-xs text-gray-400">{item.sku} · 库存{item.stock}</div>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded ${item.alert === '紧急补货' ? 'bg-red-500/20 text-red-400' : item.alert === '即将断货' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`}>
                      {item.alert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

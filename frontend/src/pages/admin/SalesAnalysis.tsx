export default function AdminSalesAnalysis() {
  return (
    <div className="flex h-screen" style={{ background: 'oklch(0.15 0.02 295)' }}>
      {/* 侧边栏 */}
      <div className="w-60 flex-shrink-0">
        <div className="h-full border-r flex flex-col" style={{ background: 'oklch(0.18 0.02 295)', borderColor: 'oklch(1 0 0 / 0.1)' }}>
          <div className="p-4 border-b" style={{ borderColor: 'oklch(1 0 0 / 0.1)' }}>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))' }}>骆</div>
              <span className="font-bold text-white text-sm">服饰智选管理</span>
            </div>
          </div>
          <nav className="flex-1 p-3 space-y-1">
            {[
              { label: '仪表盘', path: '/admin/dashboard', active: false },
              { label: 'VIP管理', path: '/admin/vip', active: false },
              { label: '商品管理', path: '/admin/products', active: false },
              { label: '销售分析', path: '/admin/sales-analysis', active: true },
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
          <h1 className="text-lg font-semibold text-white">销售分析</h1>
          <div className="flex items-center gap-4">
            <select className="rounded-lg border px-3 py-1.5 text-sm text-white"
              style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.15)' }}>
              <option>本季 vs 上季</option>
              <option>本月 vs 上月</option>
              <option>本年 vs 上年</option>
            </select>
          </div>
        </header>

        {/* 内容 */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* 核心指标 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'GMV', value: '¥86.5万', change: '+23%' },
              { label: '订单数', value: '1,284', change: '+12%' },
              { label: '客单价', value: '¥673', change: '+8%' },
              { label: '售罄率', value: '68%', change: '+5%' },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-xl border" style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.1)' }}>
                <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <div className="text-xs mt-1 text-green-400">{item.change}</div>
              </div>
            ))}
          </div>

          {/* 爆款归因 & 渠道效率 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="p-4 rounded-xl border" style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.1)' }}>
              <h3 className="text-white font-medium mb-4">🔥 爆款归因分析</h3>
              <div className="space-y-3">
                {[
                  { attr: '面料: 真丝', growth: '+45%', sku: 'SKU-2024001' },
                  { attr: '价格带: 200-500元', growth: '+38%', sku: 'SKU-2024003' },
                  { attr: '色彩: 珊瑚粉', growth: '+32%', sku: 'SKU-2024005' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded" style={{ background: 'oklch(1 0 0 / 0.05)' }}>
                    <div>
                      <div className="text-sm text-white">{item.attr}</div>
                      <div className="text-xs text-gray-400">{item.sku}</div>
                    </div>
                    <span className="text-sm font-medium text-green-400">+{item.growth}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl border" style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.1)' }}>
              <h3 className="text-white font-medium mb-4">📊 渠道效率对比</h3>
              <div className="space-y-3">
                {[
                  { channel: '抖音直播', conversion: '3.2%', avgPrice: '¥598', alert: null },
                  { channel: '天猫', conversion: '5.8%', avgPrice: '¥723', alert: null },
                  { channel: '线下门店', conversion: '12.4%', avgPrice: '¥899', alert: '高流量低转化' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded" style={{ background: 'oklch(1 0 0 / 0.05)' }}>
                    <div>
                      <div className="text-sm text-white">{item.channel}</div>
                      <div className="text-xs text-gray-400">转化{item.conversion} · 客单{item.avgPrice}</div>
                    </div>
                    {item.alert && (
                      <span className="text-xs px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-400">{item.alert}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TOP SKU */}
          <div className="p-4 rounded-xl border" style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.1)' }}>
            <h3 className="text-white font-medium mb-4">🏆 TOP 10 SKU</h3>
            <div className="space-y-2">
              {[
                { rank: 1, sku: 'SKU-2024001', name: '真丝连衣裙', sales: 286, growth: '+45%' },
                { rank: 2, sku: 'SKU-2024003', name: '棉麻衬衫', sales: 198, growth: '+32%' },
                { rank: 3, sku: 'SKU-2024005', name: '高腰牛仔裤', sales: 175, growth: '+28%' },
              ].map((item) => (
                <div key={item.sku} className="flex items-center gap-4 p-3 rounded" style={{ background: 'oklch(1 0 0 / 0.05)' }}>
                  <span className="text-lg font-bold text-gray-500 w-8">{item.rank}</span>
                  <div className="flex-1">
                    <div className="text-sm text-white">{item.name}</div>
                    <div className="text-xs text-gray-400">{item.sku}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white">{item.sales}件</div>
                    <div className="text-xs text-green-400">{item.growth}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

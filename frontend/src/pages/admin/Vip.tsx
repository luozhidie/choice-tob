export default function AdminVip() {
  return (
    <div className="flex h-screen" style={{ background: 'oklch(0.15 0.02 295)' }}>
      {/* 侧边栏 - 简化版 */}
      <div className="w-60 flex-shrink-0">
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
              { label: '仪表盘', path: '/admin/dashboard', active: false },
              { label: 'VIP管理', path: '/admin/vip', active: true },
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
          <h1 className="text-lg font-semibold text-white">VIP 客户管理</h1>
          <button className="px-4 py-2 rounded-lg text-sm font-medium text-white"
            style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))' }}>
            + 新增 VIP
          </button>
        </header>

        {/* 内容 */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* 筛选栏 */}
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="搜索 VIP 姓名/手机..."
              className="flex-1 max-w-md rounded-lg border px-4 py-2 text-sm text-white"
              style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.15)' }}
            />
            <select className="rounded-lg border px-4 py-2 text-sm text-white"
              style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.15)' }}>
              <option>全部色彩季型</option>
              <option>春季型</option>
              <option>夏季型</option>
              <option>秋季型</option>
              <option>冬季型</option>
            </select>
            <select className="rounded-lg border px-4 py-2 text-sm text-white"
              style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.15)' }}>
              <option>全部穿衣风格</option>
              <option>优雅型</option>
              <option>自然型</option>
              <option>浪漫型</option>
              <option>戏剧型</option>
            </select>
          </div>

          {/* VIP 列表 */}
          <div className="space-y-3">
            {[
              { name: '张美琳', phone: '138****5678', season: '春季型', style: '优雅型', lastBuy: '2026-05-15', total: '¥12,680' },
              { name: '李晓燕', phone: '139****1234', season: '夏季型', style: '浪漫型', lastBuy: '2026-05-10', total: '¥8,450' },
              { name: '王志强', phone: '136****9876', season: '冬季型', style: '戏剧型', lastBuy: '2026-05-08', total: '¥23,100' },
              { name: '陈美琪', phone: '137****5555', season: '秋季型', style: '自然型', lastBuy: '2026-05-01', total: '¥15,780' },
            ].map((vip, i) => (
              <div key={i} className="p-4 rounded-xl border flex items-center justify-between"
                style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.1)' }}>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center text-white font-medium"
                    style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))' }}>
                    {vip.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-medium">{vip.name}</div>
                    <div className="text-xs text-gray-400">{vip.phone}</div>
                  </div>
                </div>
                <div className="flex gap-6 text-sm">
                  <div>
                    <div className="text-gray-400 text-xs">色彩季型</div>
                    <div className="text-white">{vip.season}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">穿衣风格</div>
                    <div className="text-white">{vip.style}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">最近购买</div>
                    <div className="text-white">{vip.lastBuy}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">累计消费</div>
                    <div className="text-green-400 font-medium">{vip.total}</div>
                  </div>
                </div>
                <button className="text-sm px-3 py-1.5 rounded-lg border" style={{ borderColor: 'oklch(1 0 0 / 0.15)', color: 'oklch(0.7 0.1 295)' }}>
                  查看详情
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

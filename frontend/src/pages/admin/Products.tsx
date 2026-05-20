export default function AdminProducts() {
  return (
    <div className="flex h-screen" style={{ background: 'oklch(0.15 0.02 295)' }}>
      {/* 侧边栏 */}
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
              { label: 'VIP管理', path: '/admin/vip', active: false },
              { label: '商品管理', path: '/admin/products', active: true },
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
          <h1 className="text-lg font-semibold text-white">商品管理</h1>
          <button className="px-4 py-2 rounded-lg text-sm font-medium text-white"
            style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))' }}>
            + 新增商品
          </button>
        </header>

        {/* 内容 */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* 筛选栏 */}
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="搜索商品名称/SKU..."
              className="flex-1 max-w-md rounded-lg border px-4 py-2 text-sm text-white"
              style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.15)' }}
            />
            <select className="rounded-lg border px-4 py-2 text-sm text-white"
              style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.15)' }}>
              <option>全部分类</option>
              <option>连衣裙</option>
              <option>上衣</option>
              <option>裤装</option>
              <option>外套</option>
            </select>
            <select className="rounded-lg border px-4 py-2 text-sm text-white"
              style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.15)' }}>
              <option>全部色彩适配</option>
              <option>适合春季型</option>
              <option>适合夏季型</option>
              <option>适合秋季型</option>
              <option>适合冬季型</option>
            </select>
          </div>

          {/* 商品列表 */}
          <div className="space-y-3">
            {[
              { sku: 'SKU-2024001', name: '真丝连衣裙', category: '连衣裙', price: '¥899', stock: 12, seasons: '春/夏', alert: '紧急补货' },
              { sku: 'SKU-2024002', name: '羊毛大衣', category: '外套', price: '¥2999', stock: 5, seasons: '秋/冬', alert: '即将断货' },
              { sku: 'SKU-2024003', name: '棉麻衬衫', category: '上衣', price: '¥459', stock: 89, seasons: '春/秋', alert: '库存积压' },
              { sku: 'SKU-2024004', name: '高腰牛仔裤', category: '裤装', price: '¥699', stock: 156, seasons: '全季', alert: null },
            ].map((prod, i) => (
              <div key={i} className="p-4 rounded-xl border flex items-center justify-between"
                style={{ background: 'oklch(0.2 0.02 295)', borderColor: 'oklch(1 0 0 / 0.1)' }}>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gray-700 flex items-center justify-center text-white text-xs">
                    图片
                  </div>
                  <div>
                    <div className="text-white font-medium">{prod.name}</div>
                    <div className="text-xs text-gray-400">{prod.sku} · {prod.category} · {prod.price}</div>
                  </div>
                </div>
                <div className="flex gap-6 text-sm">
                  <div>
                    <div className="text-gray-400 text-xs">库存</div>
                    <div className={`font-medium ${prod.stock < 20 ? 'text-red-400' : 'text-white'}`}>{prod.stock}件</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">适配季型</div>
                    <div className="text-white">{prod.seasons}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">状态</div>
                    <div className={`text-xs px-2 py-0.5 rounded ${prod.alert === '紧急补货' ? 'bg-red-500/20 text-red-400' : prod.alert === '即将断货' ? 'bg-yellow-500/20 text-yellow-400' : prod.alert === '库存积压' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'}`}>
                      {prod.alert || '正常'}
                    </div>
                  </div>
                </div>
                <button className="text-sm px-3 py-1.5 rounded-lg border" style={{ borderColor: 'oklch(1 0 0 / 0.15)', color: 'oklch(0.7 0.1 295)' }}>
                  编辑
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

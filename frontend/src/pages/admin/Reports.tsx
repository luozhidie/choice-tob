// 店长日报页面 — DWS层店长日报（业绩+TOP款+库存预警）
export default function AdminReports() {
  return (
    <div style={{ background: '#0f172a', minHeight: '100vh', display: 'flex', color: '#e2e8f0' }}>
      {/* 侧边栏 */}
      <div style={{ width: 240, borderRight: '1px solid #1e293b', background: '#1e293b', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: 16, borderBottom: '1px solid #334155' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #7c3aed, #a78bfa)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 14 }}>骆</div>
            <span style={{ fontWeight: 700, color: 'white', fontSize: 14 }}>服饰智选管理</span>
          </div>
        </div>
        <nav style={{ flex: 1, padding: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[
            { label: '仪表盘', path: '/admin/dashboard', active: false },
            { label: 'VIP管理', path: '/admin/vip', active: false },
            { label: '商品管理', path: '/admin/products', active: false },
            { label: '销售分析', path: '/admin/sales-analysis', active: false },
            { label: '库存智能', path: '/admin/inventory', active: false },
            { label: '会员运营', path: '/admin/members', active: false },
            { label: '店长日报', path: '/admin/reports', active: true },
          ].map(item => (
            <a key={item.path} href={item.path} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: 'none', background: item.active ? '#334155' : 'transparent', color: item.active ? '#c4b5fd' : '#94a3b8' }}>{item.label}</a>
          ))}
        </nav>
      </div>

      {/* 主内容区 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* 顶部 */}
        <header style={{ height: 64, borderBottom: '1px solid #1e293b', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', background: 'rgba(15,23,42,0.9)', backdropFilter: 'blur(12px)' }}>
          <h1 style={{ fontSize: 18, fontWeight: 600, color: 'white' }}>店长日报 / ADS层报告</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <select style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid #334155', background: '#1e293b', color: '#e2e8f0', fontSize: 13 }}>
              <option>2026-05-21 今日</option>
              <option>2026-05-20 昨日</option>
              <option>2026-05-周报</option>
              <option>2026-05-月报</option>
            </select>
            <button style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid #7c3aed', background: 'none', color: '#a78bfa', cursor: 'pointer', fontSize: 13 }}>📥 导出日报PDF</button>
          </div>
        </header>

        {/* 内容 */}
        <main style={{ flex: 1, overflowY: 'auto', padding: 24 }}>
          {/* 业绩概览 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
            {[
              { label: '今日业绩', value: '¥12.8万', alert: '达标率 85%' },
              { label: '今日订单', value: '186', alert: '较昨日 +12%' },
              { label: '今日客单价', value: '¥688', alert: '较昨日 +5%' },
              { label: '今日VIP消费占比', value: '62%', alert: '较昨日 +8%' },
            ].map(kpi => (
              <div key={kpi.label} style={{ padding: 16, borderRadius: 12, border: '1px solid #1e293b', background: '#1e293b' }}>
                <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4 }}>{kpi.label}</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: 'white' }}>{kpi.value}</div>
                <div style={{ fontSize: 11, marginTop: 4, color: '#a78bfa' }}>{kpi.alert}</div>
              </div>
            ))}
          </div>

          {/* TOP款 + 库存预警 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginBottom: 24 }}>
            {/* 今日TOP 5 SKU */}
            <div style={{ padding: 16, borderRadius: 12, border: '1px solid #1e293b', background: '#1e293b' }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 16 }}>🏆 今日TOP 5 SKU</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { rank: 1, sku: 'SKU-24001', name: '真丝连衣裙·春', qty: 42, amount: '¥3.8万' },
                  { rank: 2, sku: 'SKU-24003', name: '棉麻衬衫·春秋', qty: 38, amount: '¥1.7万' },
                  { rank: 3, sku: 'SKU-24005', name: '高腰牛仔裤·四季', qty: 35, amount: '¥2.4万' },
                  { rank: 4, sku: 'SKU-24011', name: '针织开衫·春秋', qty: 28, amount: '¥1.5万' },
                  { rank: 5, sku: 'SKU-24008', name: '真丝吊带·夏季型', qty: 22, amount: '¥0.9万' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px', borderRadius: 8, background: '#0f172a' }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: '#7c3aed', width: 24 }}>#{item.rank}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, color: 'white', fontWeight: 500 }}>{item.name}</div>
                      <div style={{ fontSize: 11, color: '#94a3b8' }}>{item.sku}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 13, color: 'white' }}>{item.amount}</div>
                      <div style={{ fontSize: 11, color: '#94a3b8' }}>{item.qty}件</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 库存预警清单 */}
            <div style={{ padding: 16, borderRadius: 12, border: '1px solid #1e293b', background: '#1e293b' }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 16 }}>⚠️ 今日库存预警</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { sku: 'SKU-24001', name: '真丝连衣裙', store: '天河城', stock: 12, alert: '紧急补货', level: 'danger' },
                  { sku: 'SKU-24002', name: '羊毛大衣', store: '北京路', stock: 5, alert: '即将断货', level: 'warning' },
                  { sku: 'SKU-24003', name: '棉麻衬衫', store: '天河城', stock: 356, alert: '库存积压', level: 'info' },
                  { sku: 'SKU-24007', name: '休闲西裤', store: '全部门店', stock: 89, alert: '动销减缓', level: 'warning' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px', borderRadius: 8, background: '#0f172a' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.level==='danger' ? '#ef4444' : item.level==='warning' ? '#f59e0b' : '#3b82f6' }}></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, color: 'white', fontWeight: 500 }}>{item.name}</div>
                      <div style={{ fontSize: 11, color: '#94a3b8' }}>{item.sku} · {item.store} · 库存{item.stock}件</div>
                    </div>
                    <span style={{ fontSize: 11, padding: '3px 8px', borderRadius: 6, background: item.level==='danger' ? '#450a0a' : item.level==='warning' ? '#451a03' : '#172554', color: item.level==='danger' ? '#fca5a5' : item.level==='warning' ? '#fcd34d' : '#93c5fd' }}>{item.alert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 可执行建议 insights */}
          <div style={{ padding: 16, borderRadius: 12, border: '1px solid #1e293b', background: '#1e293b' }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 16 }}>💡 今日执行建议（AI 生成）</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { priority: '高', text: 'SKU-24001 库存仅12件，建议今日紧急补货200件，预计3天内断货。' },
                { priority: '中', text: 'VIP客户李晓燕（春季型·优雅型）3个月未回购，建议推送真丝连衣裙新品，预计转化率35%。' },
                { priority: '中', text: '棉麻衬衫（SKU-24003）售罄率仅12%，建议开启7折清仓活动，目标7天内售罄提升至30%。' },
                { priority: '低', text: '天河城店今日客单价¥688，低于月均¥723，建议晚高峰推送搭配套装提升客单价。' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 12px', borderRadius: 8, background: '#0f172a', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 10, padding: '2px 6px', borderRadius: 4, background: item.priority==='高' ? '#450a0a' : item.priority==='中' ? '#451a03' : '#172554', color: item.priority==='高' ? '#fca5a5' : item.priority==='中' ? '#fcd34d' : '#93c5fd', fontWeight: 600 }}>{item.priority}</span>
                  <span style={{ fontSize: 13, color: '#e2e8f0', lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

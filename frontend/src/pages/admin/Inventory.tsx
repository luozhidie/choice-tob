// 库存智能页面 — 滞销识别 + 补货建议 + 库存预警
export default function AdminInventory() {
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
            { label: '库存智能', path: '/admin/inventory', active: true },
            { label: '会员运营', path: '/admin/members' },
            { label: '店长日报', path: '/admin/reports' },
          ].map(item => (
            <a key={item.path} href={item.path} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: 'none', background: item.active ? '#334155' : 'transparent', color: item.active ? '#c4b5fd' : '#94a3b8' }}>{item.label}</a>
          ))}
        </nav>
      </div>

      {/* 主内容区 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* 顶部 */}
        <header style={{ height: 64, borderBottom: '1px solid #1e293b', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', background: 'rgba(15,23,42,0.9)', backdropFilter: 'blur(12px)' }}>
          <h1 style={{ fontSize: 18, fontWeight: 600, color: 'white' }}>库存智能决策</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button style={{ padding: 8, borderRadius: 8, background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>🔔</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(124,58,237,0.2)' }}>👤</div>
              <span style={{ fontSize: 14, color: 'white' }}>管理员</span>
            </div>
          </div>
        </header>

        {/* 内容 */}
        <main style={{ flex: 1, overflowY: 'auto', padding: 24 }}>
          {/* 核心指标 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
            {[
              { label: '滞销SKU', value: '37', alert: '>100件且售罄<30%' },
              { label: '缺货预警', value: '12', alert: '未来7天风险' },
              { label: '库存周转天数', value: '42天', alert: '行业平均56天' },
              { label: '库存金额', value: '¥328万', alert: '较上月-8%' },
            ].map(kpi => (
              <div key={kpi.label} style={{ padding: 16, borderRadius: 12, border: '1px solid #1e293b', background: '#1e293b' }}>
                <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4 }}>{kpi.label}</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: 'white' }}>{kpi.value}</div>
                <div style={{ fontSize: 11, marginTop: 4, color: '#fbbf24' }}>{kpi.alert}</div>
              </div>
            ))}
          </div>

          {/* 滞销款识别 + 补货建议 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginBottom: 24 }}>
            {/* 滞销款识别 */}
            <div style={{ padding: 16, borderRadius: 12, border: '1px solid #1e293b', background: '#1e293b' }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 16 }}>📦 滞销款识别（售罄率＜30% 且库存＞100件）</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { sku: 'SKU-24001', name: '真丝连衣裙·春季型', stock: 286, sellRate: '18%', suggestion: '建议打折30%清仓' },
                  { sku: 'SKU-24002', name: '羊毛大衣·冬季型', stock: 198, sellRate: '22%', suggestion: '建议打折20%出清' },
                  { sku: 'SKU-24003', name: '棉麻衬衫·春秋型', stock: 356, sellRate: '12%', suggestion: '建议打折40%急清' },
                ].map((item, i) => (
                  <div key={i} style={{ padding: 12, borderRadius: 8, background: '#0f172a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: 13, color: 'white', fontWeight: 500 }}>{item.name}</div>
                      <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>{item.sku} · 库存{item.stock} · 售罄{item.sellRate}</div>
                    </div>
                    <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 6, background: '#fef3c7', color: '#92400e' }}>{item.suggestion}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 补货建议 */}
            <div style={{ padding: 16, borderRadius: 12, border: '1px solid #1e293b', background: '#1e293b' }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 16 }}>📈 补货建议（TOP 10 SKU 未来7天风险）</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { sku: 'SKU-24005', name: '高腰牛仔裤·四季', sales7d: 42, stock: 89, risk: '低风险', suggest: '补货120件' },
                  { sku: 'SKU-24001', name: '真丝连衣裙·春/夏', sales7d: 68, stock: 12, risk: '紧急', suggest: '立即补货200件' },
                  { sku: 'SKU-24003', name: '棉麻衬衫·春/秋', sales7d: 35, stock: 156, risk: '安全', suggest: '暂不需补货' },
                ].map((item, i) => (
                  <div key={i} style={{ padding: 12, borderRadius: 8, background: '#0f172a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: 13, color: 'white', fontWeight: 500 }}>{item.name}</div>
                      <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>{item.sku} · 7天售{item.sales7d} · 库存{item.stock}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 6, background: item.risk==='紧急' ? '#fee2e2' : item.risk==='低风险' ? '#dcfce7' : '#dbeafe', color: item.risk==='紧急' ? '#991b1b' : item.risk==='低风险' ? '#166534' : '#1e40af' }}>{item.risk}</span>
                      <span style={{ fontSize: 11, color: '#a78bfa' }}>{item.suggest}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 库存预警清单 */}
          <div style={{ padding: 16, borderRadius: 12, border: '1px solid #1e293b', background: '#1e293b' }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 16 }}>⚠️ 库存预警清单</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { sku: 'SKU-24001', name: '真丝连衣裙', store: '天河城店', stock: 12, alert: '紧急补货', level: 'danger' },
                { sku: 'SKU-24002', name: '羊毛大衣', store: '北京路店', stock: 5, alert: '即将断货', level: 'warning' },
                { sku: 'SKU-24003', name: '棉麻衬衫', store: '天河城店', stock: 356, alert: '库存积压', level: 'info' },
                { sku: 'SKU-24005', name: '高腰牛仔裤', store: '全部门店', stock: 421, alert: '正常', level: 'success' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '12px 16px', borderRadius: 8, background: '#0f172a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.level==='danger' ? '#ef4444' : item.level==='warning' ? '#f59e0b' : item.level==='info' ? '#3b82f6' : '#22c55e' }}></div>
                    <div>
                      <div style={{ fontSize: 13, color: 'white', fontWeight: 500 }}>{item.name}</div>
                      <div style={{ fontSize: 11, color: '#94a3b8' }}>{item.sku} · {item.store} · 库存{item.stock}件</div>
                    </div>
                  </div>
                  <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 6, background: item.level==='danger' ? '#450a0a' : item.level==='warning' ? '#451a03' : item.level==='info' ? '#172554' : '#052e16', color: item.level==='danger' ? '#fca5a5' : item.level==='warning' ? '#fcd34d' : item.level==='info' ? '#93c5fd' : '#4ade80' }}>{item.alert}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// 会员运营页面 — RFM模型 + 流失预警 + 个性化推荐
export default function AdminMembers() {
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
            { label: '会员运营', path: '/admin/members', active: true },
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
          <h1 style={{ fontSize: 18, fontWeight: 600, color: 'white' }}>会员运营 · RFM模型</h1>
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
          {/* RFM 核心指标 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
            {[
              { label: '重要价值客户', value: '286', desc: 'RFM全高 · 核心资产' },
              { label: '流失预警客户', value: '127', desc: '高频但3个月未回购' },
              { label: '复购率', value: '68%', desc: '较上月+5%' },
              { label: '客单价提升', value: '+22%', desc: '个性化推荐生效' },
            ].map(kpi => (
              <div key={kpi.label} style={{ padding: 16, borderRadius: 12, border: '1px solid #1e293b', background: '#1e293b' }}>
                <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4 }}>{kpi.label}</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: 'white' }}>{kpi.value}</div>
                <div style={{ fontSize: 11, marginTop: 4, color: '#a78bfa' }}>{kpi.desc}</div>
              </div>
            ))}
          </div>

          {/* RFM 人群细分 + 个性化推荐 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginBottom: 24 }}>
            {/* RFM 人群细分 */}
            <div style={{ padding: 16, borderRadius: 12, border: '1px solid #1e293b', background: '#1e293b' }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 16 }}>👥 RFM 人群细分（最近一年）</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { level: '重要价值', count: 286, color: '#22c55e', desc: 'RFM全高' },
                  { level: '重要保持', count: 412, color: '#3b82f6', desc: '高消费高频率' },
                  { level: '重要挽留', count: 198, color: '#f59e0b', desc: '高消费但久未回购' },
                  { level: '一般价值', count: 523, color: '#8b5cf6', desc: '中消费中频率' },
                  { level: '新客户', count: 865, color: '#06b6d4', desc: '首次购买0-90天' },
                  { level: '流失客户', count: 127, color: '#ef4444', desc: '高频但3月未回购⚠️' },
                ].map((item, i) => (
                  <div key={i} style={{ padding: 10, borderRadius: 8, background: '#0f172a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color }}></div>
                      <span style={{ fontSize: 13, color: 'white', fontWeight: 500 }}>{item.level}</span>
                      <span style={{ fontSize: 11, color: '#94a3b8' }}>{item.desc}</span>
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 个性化推荐示例 */}
            <div style={{ padding: 16, borderRadius: 12, border: '1px solid #1e293b', background: '#1e293b' }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 16 }}>🎁 个性化推荐（示例：张美琳）</h3>
              <div style={{ marginBottom: 12, padding: 10, borderRadius: 8, background: '#1e40af', color: '#dbeafe' }}>
                <div style={{ fontSize: 11, marginBottom: 4 }}>👤 客户画像</div>
                <div style={{ fontSize: 13 }}>色彩季型：春季型 · 穿衣风格：优雅型 · 偏好宽松版型/浅色系</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { sku: 'SKU-24011', name: '真丝连衣裙·淡粉', match: '色彩95% 风格90%', stock: 28 },
                  { sku: 'SKU-24015', name: '棉麻衬衫·米白', match: '色彩88% 风格85%', stock: 56 },
                  { sku: 'SKU-24022', name: '高腰半裙·浅灰', match: '色彩82% 风格88%', stock: 34 },
                ].map((item, i) => (
                  <div key={i} style={{ padding: 10, borderRadius: 8, background: '#0f172a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: 13, color: 'white', fontWeight: 500 }}>{item.name}</div>
                      <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>{item.sku} · 匹配度：{item.match} · 库存{item.stock}</div>
                    </div>
                    <button style={{ fontSize: 11, padding: '4px 10px', borderRadius: 6, border: '1px solid #4f46e5', background: 'none', color: '#a78bfa', cursor: 'pointer' }}>推荐给TA</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 流失预警客户清单 */}
          <div style={{ padding: 16, borderRadius: 12, border: '1px solid #1e293b', background: '#1e293b' }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 16 }}>⚠️ 流失预警客户清单（高消费频次但最近3个月未回购）</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { name: '李晓燕', vip: 'VIP-002', lastBuy: '2026-02-15', lastSku: '羊毛大衣·冬季型', suggest: '推荐新季真丝连衣裙' },
                { name: '王志强', vip: 'VIP-003', lastBuy: '2026-01-20', lastSku: '高领毛衣·冬季型', suggest: '推荐春季薄外套' },
                { name: '陈美琪', vip: 'VIP-004', lastBuy: '2026-02-28', lastSku: '真丝衬衫·春秋型', suggest: '推荐春季新款连衣裙' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '12px 16px', borderRadius: 8, background: '#0f172a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: 14 }}>{item.name[0]}</div>
                    <div>
                      <div style={{ fontSize: 13, color: 'white', fontWeight: 500 }}>{item.name} <span style={{ fontSize: 11, color: '#94a3b8' }}>{item.vip}</span></div>
                      <div style={{ fontSize: 11, color: '#94a3b8' }}>最后购买：{item.lastBuy} · {item.lastSku}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 11, color: '#fcd34d' }}>💡 {item.suggest}</span>
                    <button style={{ fontSize: 11, padding: '4px 10px', borderRadius: 6, background: '#7c3aed', color: 'white', border: 'none', cursor: 'pointer' }}>发送推荐</button>
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

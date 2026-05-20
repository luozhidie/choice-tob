// 用户端首页 — 面向服装店老板 / 买手
export default function Index() {
  return (
    <div style={{ background: '#0f172a', minHeight: '100vh', color: '#e2e8f0' }}>
      {/* ===== HERO ===== */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '96px 0 64px', textAlign: 'center' }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'linear-gradient(135deg, #1e1b4b, #312e81, #0f172a)'
        }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🎨</div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 16 }}>
            服饰智选
          </h1>
          <p style={{ fontSize: 18, color: '#a5b4fc', maxWidth: 640, margin: '0 auto 32px', lineHeight: 1.6 }}>
            数据驱动，智选未来。从 VIP 客户色彩季型测试出发，用科学数据替代经验判断，
            <br />覆盖服装零售全链路：选品 · 企划 · 销售 · 库存 · 会员。
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/vip-test" style={{
              display: 'inline-flex', padding: '12px 32px', borderRadius: 8,
              background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
              color: 'white', fontWeight: 600, fontSize: 15, textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(124,58,237,0.3)'
            }}>开始色彩测试</a>
            <a href="/contact" style={{
              display: 'inline-flex', padding: '12px 32px', borderRadius: 8,
              border: '2px solid #7c3aed', color: '#a78bfa', fontWeight: 600, fontSize: 15,
              textDecoration: 'none'
            }}>预约演示</a>
          </div>
        </div>
      </section>

      {/* ===== 数据亮点 ===== */}
      <section style={{ padding: '48px 0', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, textAlign: 'center' }}>
          {[
            { value: '5,000+', label: '合作品牌' },
            { value: '98%', label: '客户续约率' },
            { value: '3x', label: '选品效率提升' },
            { value: '50万+', label: 'SKU覆盖' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 36, fontWeight: 800, color: '#a78bfa' }}>{s.value}</div>
              <div style={{ fontSize: 14, color: '#94a3b8', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 核心业务 ===== */}
      <section style={{ padding: '64px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: 'white', textAlign: 'center', marginBottom: 8 }}>全链路数据驱动服务</h2>
          <p style={{ fontSize: 16, color: '#94a3b8', textAlign: 'center', marginBottom: 48 }}>从测试到决策，覆盖服装零售全链路</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { icon: '🎨', title: 'VIP色彩测试', desc: '科学测试客户色彩季型与穿衣风格', path: '/vip-test' },
              { icon: '📊', title: '仪表盘', desc: '销售 / 库存 / 会员核心KPI看板', path: '/dashboard' },
              { icon: '👥', title: 'VIP客户管理', desc: 'RFM分析、流失预警、个性化推荐', path: '/vip' },
              { icon: '📦', title: '库存智能', desc: '滞销识别、补货建议、库存预警', path: '/inventory' },
              { icon: '📈', title: '销售分析', desc: '多维度归因、爆款分析、渠道效率', path: '/sales-analysis' },
              { icon: '💝', title: '会员运营', desc: 'RFM模型、流失挽回、推荐', path: '/members' },
              { icon: '📝', title: '店长日报', desc: '自动生成日报 / 周报 / 月报', path: '/reports' },
              { icon: '🏷️', title: '商品SKU', desc: '商品信息、色彩适配、库存管理', path: '/products' },
            ].map(s => (
              <a key={s.path} href={s.path} style={{
                display: 'block', padding: 20, borderRadius: 12, border: '1px solid #1e293b',
                background: '#1e293b', textDecoration: 'none', color: 'inherit',
                transition: 'box-shadow 0.2s'
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'white', marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: '#94a3b8' }}>{s.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 客户证言 ===== */}
      <section style={{ padding: '64px 0', background: '#1e293b' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: 'white', textAlign: 'center', marginBottom: 8 }}>他们正在使用服饰智选</h2>
          <p style={{ fontSize: 16, color: '#94a3b8', textAlign: 'center', marginBottom: 48 }}>数据驱动成效看得见</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { name: '李晓燕', role: '某知名女装品牌 商品总监', text: '服饰智选的数据驱动选品方案，让首单成功率提升60%，库存周转天数缩短30%，真正实现从经验选品到科学选品的跨越。' },
              { name: '王志强', role: '某快时尚品牌 供应链负责人', text: '接入爆款货盘后，上新速度提升3倍，爆款命中率从15%提升到45%，供应链协同效率大幅提升。' },
              { name: '陈美琪', role: '某高端女装品牌 运营总监', text: 'VIP管理模块帮助我们精准识别高价值客户，复购率提升80%，会员贡献占比从35%增长到62%，效果远超预期。' },
            ].map((t, i) => (
              <div key={i} style={{ padding: 24, borderRadius: 12, border: '1px solid #334155', background: '#0f172a' }}>
                <div style={{ fontSize: 14, color: '#e2e8f0', lineHeight: 1.6, marginBottom: 16 }}>"{t.text}"</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>{t.name}</div>
                <div style={{ fontSize: 12, color: '#94a3b8' }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 底部行动号召 ===== */}
      <section style={{ padding: '64px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: 'white', marginBottom: 8 }}>开启数据驱动的智选之旅</h2>
          <p style={{ fontSize: 16, color: '#94a3b8', marginBottom: 32 }}>立即预约演示，了解服饰智选如何助力您的品牌实现精准运营与高效增长</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <a href="/contact" style={{
              display: 'inline-flex', padding: '12px 32px', borderRadius: 8,
              background: 'linear-gradient(135deg, #7c3aed, #a78bfa)', color: 'white',
              fontWeight: 600, fontSize: 15, textDecoration: 'none'
            }}>预约免费演示</a>
            <a href="/vip-test" style={{
              display: 'inline-flex', padding: '12px 32px', borderRadius: 8,
              border: '1px solid #334155', color: '#a5b4fc', fontWeight: 600, fontSize: 15,
              textDecoration: 'none'
            }}>免费色彩测试</a>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer style={{ borderTop: '1px solid #1e293b', padding: '32px 0', background: '#0f172a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, fontSize: 14, color: '#94a3b8' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ fontWeight: 700, color: 'white', fontSize: 16 }}>服饰智选</span>
            </div>
            <p style={{ lineHeight: 1.6 }}>专注服装行业的ToB供应链智选平台，以数据驱动选品、企划、营销全链路。</p>
          </div>
          <div>
            <div style={{ fontWeight: 600, color: 'white', marginBottom: 12 }}>核心服务</div>
            {['买手选品','商品企划','爆款货盘','陈列搭配'].map(s => <div key={s} style={{ marginBottom: 8 }}>{s}</div>)}
          </div>
          <div>
            <div style={{ fontWeight: 600, color: 'white', marginBottom: 12 }}>增值服务</div>
            {['营销策划','销售服务','VIP管理','教学中心'].map(s => <div key={s} style={{ marginBottom: 8 }}>{s}</div>)}
          </div>
          <div>
            <div style={{ fontWeight: 600, color: 'white', marginBottom: 12 }}>联系我们</div>
            <div style={{ lineHeight: 1.8 }}>📍 广州市天河区珠江新城<br/>📞 400-888-6688<br/>📧 contact@fushi-ai.com</div>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: '32px auto 0', padding: '16px 20px 0', borderTop: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
          <span>© 2026 服饰智选. 保留所有权利.</span>
          <span>粤ICP备XXXXXXXX号</span>
        </div>
      </footer>
    </div>
  );
}

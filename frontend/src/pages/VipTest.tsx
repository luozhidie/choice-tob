// 用户端 - VIP 色彩季型测试页面
export default function VipTest() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#1e293b', fontFamily: 'system-ui' }}>
      {/* 顶部导航 */}
      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontWeight: 700, fontSize: 18, color: '#7c3aed' }}>🦋 服饰智选</span>
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 14 }}>
          <span style={{ color: '#7c3aed', fontWeight: 500 }}>色彩测试</span>
          <a href="/admin/login" style={{ color: '#6b7280', textDecoration: 'none' }}>管理登录</a>
        </div>
      </nav>

      {/* 测试内容区 */}
      <div style={{ maxWidth: 480, margin: '64px auto', padding: '0 20px', textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🎨</div>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, color: '#1e293b' }}>VIP 色彩季型测试</h1>
        <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.6, marginBottom: 32 }}>
          科学测试您的专属色彩季型（春季型/夏季型/秋季型/冬季型）和穿衣风格（优雅型/自然型/浪漫型/戏剧型等），<br/>
          让您和客户的每一次穿搭都恰到好处。
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <a href="#test" style={{ padding: '12px 24px', background: 'linear-gradient(135deg, #7c3aed, #a78bfa)', color: 'white', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, boxShadow: '0 4px 12px rgba(124,58,237,0.3)' }}>
            开始测试（共 3 步）
          </a>
        </div>
        <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 20 }}>⏱ 约需 3 分钟 · 科学准确 · 免费</p>
      </div>

      {/* 说明区 */}
      <div style={{ maxWidth: 800, margin: '48px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {[
          { icon: '🌱', title: '春季型', desc: '温暖明亮色系，适合暖黄皮' },
          { icon: '🌊', title: '夏季型', desc: '柔和冷调色系，适合冷白皮' },
          { icon: '🍂', title: '秋季型', desc: '深沉温暖色系，适合橄榄皮' },
          { icon: '❄️', title: '冬季型', desc: '清晰冷艳色系，适合冷白皮' },
          { icon: '👗', title: '8种风格', desc: '优雅/自然/浪漫/戏剧/前卫/经典/少女/少年' },
          { icon: '📊', title: '数据报告', desc: '测试后生成专属色彩穿搭报告' },
        ].map(s => (
          <div key={s.title} style={{ padding: 16, borderRadius: 12, background: 'white', border: '1px solid #e5e7eb', textAlign: 'center' }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{s.title}</div>
            <div style={{ fontSize: 12, color: '#6b7280' }}>{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

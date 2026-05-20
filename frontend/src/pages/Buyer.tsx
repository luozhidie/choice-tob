// 用户端 - 买手选品页面
export default function Buyer() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#1e293b', fontFamily: 'system-ui' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 700, fontSize: 18, color: '#7c3aed' }}>🛒 服饰智选</span>
        <a href="/admin/login" style={{ color: '#6b7280', textDecoration: 'none', fontSize: 14 }}>管理登录</a>
      </nav>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🛒</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12, color: '#1e293b' }}>买手选品</h1>
        <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.6, marginBottom: 32, maxWidth: 640, margin: '0 auto 32px' }}>
          精选优质货源，按风格、色系精准筛选，充值会员享折扣拿货
        </p>
        <div style={{ background: 'white', padding: 32, borderRadius: 12, textAlign: 'left', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>选品筛选</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 20 }}>
            {['全部分类', '风格式筛选', '色系筛选', '价格区间'].map(f => (
              <select key={f} style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 14, background: 'white', boxSizing: 'border-box' }}>
                <option>{f}</option>
              </select>
            ))}
          </div>
          <button style={{ padding: '12px 32px', background: 'linear-gradient(135deg, #7c3aed, #a78bfa)', color: 'white', border: 'none', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>开始选品</button>
          <p style={{ fontSize: 13, color: '#6b7280', marginTop: 16 }}>充值会员享折扣：5万→2.8折 | 10万→2.8折 | 30万→2.6折</p>
        </div>
      </div>
    </div>
  );
}

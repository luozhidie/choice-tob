// 用户端 - 联系我们页面
export default function Contact() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#1e293b', fontFamily: 'system-ui' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 700, fontSize: 18, color: '#7c3aed' }}>🦋 服饰智选</span>
        <a href="/admin/login" style={{ color: '#6b7280', textDecoration: 'none', fontSize: 14 }}>管理登录</a>
      </nav>
      <div style={{ maxWidth: 600, margin: '64px auto', padding: '0 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>联系我们</h1>
        <p style={{ fontSize: 15, color: '#6b7280', marginBottom: 32, lineHeight: 1.6 }}>无论是平台入驻、商品合作还是品牌授权，我们的专业团队随时为您提供支持。</p>
        <div style={{ background: 'white', padding: 24, borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', textAlign: 'left' }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>预约咨询</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['姓名','电话','咨询类型','留言内容'].map((label, i) => (
              <div key={label}>
                <label style={{ fontSize: 13, color: '#374151', fontWeight: 500, display: 'block', marginBottom: 4 }}>{label}</label>
                {i < 3 ? (
                  <input style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 14, boxSizing: 'border-box' }} placeholder={label} />
                ) : (
                  <textarea style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 14, minHeight: 80, boxSizing: 'border-box' }} placeholder="请输入留言内容..." />
                )}
              </div>
            ))}
            <button style={{ padding: '10px 24px', background: 'linear-gradient(135deg, #7c3aed, #a78bfa)', color: 'white', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>提交留言</button>
          </div>
        </div>
        <div style={{ marginTop: 24, fontSize: 13, color: '#6b7280' }}>
          📍 广州市天河区珠江新城<br/>📞 400-888-6688<br/>📧 contact@fushi-ai.com
        </div>
      </div>
    </div>
  );
}

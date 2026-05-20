// 用户端 - 线上课程页面
export default function Courses() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#1e293b', fontFamily: 'system-ui' }}>
      <nav style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 700, fontSize: 18, color: '#7c3aed' }}>🎓 服饰智选</span>
        <a href="/admin/login" style={{ color: '#6b7280', textDecoration: 'none', fontSize: 14 }}>管理登录</a>
      </nav>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🎓</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12, color: '#1e293b' }}>线上课程</h1>
        <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.6, marginBottom: 24, maxWidth: 600, margin: '0 auto 24px' }}>
          专业服饰行业教学视频，从风格测试到色彩诊断，从入门到精通
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, textAlign: 'left', marginTop: 40 }}>
          {[
            { title: 'CMB色彩诊断', price: '¥99', tag: '热门', lessons: 8 },
            { title: '搭配套路设计', price: '¥199', tag: '推荐', lessons: 12 },
            { title: 'VIP客户运营', price: '¥299', tag: '进阶', lessons: 16 },
          ].map(c => (
            <div key={c.title} style={{ padding: 20, borderRadius: 12, background: 'white', border: '1px solid #e5e7eb', position: 'relative' }}>
              {c.tag && <span style={{ position: 'absolute', top: 12, right: 12, background: '#7c3aed', color: 'white', fontSize: 11, padding: '2px 8px', borderRadius: 4 }}>{c.tag}</span>}
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>{c.title}</div>
              <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 12 }}>{c.lessons}节课</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#7c3aed' }}>{c.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

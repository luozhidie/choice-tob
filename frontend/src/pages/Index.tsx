export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.99 0.005 295)' }}>
      {/* Hero 区 */}
      <section className="relative overflow-hidden py-24 text-center">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: 'linear-gradient(135deg, oklch(0.98 0.01 295), oklch(0.95 0.03 310), oklch(0.99 0.005 295))',
          }}
        />
        <div className="container mx-auto px-4 space-y-6">
          <div className="text-5xl">🎨</div>
          <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: 'oklch(0.18 0.02 295)' }}>
            色彩智选
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            从 VIP 客户色彩季型测试出发，用数据驱动服装零售全链路决策
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/vip-test"
              className="inline-flex rounded-lg px-6 py-3 text-sm font-semibold text-white no-underline transition-transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))',
                boxShadow: '0 4px 14px oklch(0.62 0.18 295 / 0.3)',
              }}
            >
              开始色彩测试
            </a>
            <a
              href="/dashboard"
              className="inline-flex rounded-lg border-2 px-6 py-3 text-sm font-semibold no-underline transition-colors"
              style={{
                borderColor: 'oklch(0.62 0.18 295)',
                color: 'oklch(0.62 0.18 295)',
              }}
            >
              进入仪表盘
            </a>
          </div>
        </div>
      </section>

      {/* 数据指标 */}
      <section className="py-12 border-y" style={{ borderColor: 'oklch(0.92 0.01 295)' }}>
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: '合作品牌', value: '5000+' },
            { label: '服务 VIP', value: '10万+' },
            { label: 'SKU 覆盖', value: '50万+' },
            { label: '预警准确率', value: '98%' },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-3xl font-extrabold" style={{ color: 'oklch(0.62 0.18 295)' }}>{item.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 核心功能 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-2">核心功能模块</h2>
          <p className="text-muted-foreground text-center mb-10">从测试到决策，覆盖服装零售全链路</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'VIP 色彩测试', desc: '科学测试客户色彩季型与穿衣风格', icon: '🎨', path: '/vip-test' },
              { title: '数据仪表盘', desc: '销售/库存/会员核心 KPI 看板', icon: '📊', path: '/dashboard' },
              { title: 'VIP 客户管理', desc: 'RFM 分析、流失预警、个性化推荐', icon: '👥', path: '/vip' },
              { title: '商品 SKU', desc: '商品信息、色彩适配、库存管理', icon: '🏷️', path: '/products' },
              { title: '销售分析', desc: '多维度归因、爆款分析、渠道效率', icon: '📈', path: '/sales-analysis' },
              { title: '库存智能', desc: '滞销识别、补货建议、库存预警', icon: '📦', path: '/inventory' },
              { title: '会员运营', desc: 'RFM 模型、流失挽回、推荐', icon: '💝', path: '/members' },
              { title: '店长日报', desc: '自动生成日报/周报/月报', icon: '📝', path: '/reports' },
            ].map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="block p-4 rounded-xl border transition-all no-underline hover:shadow-lg hover:-translate-y-1"
                style={{
                  borderColor: 'oklch(0.92 0.01 295)',
                  background: 'oklch(1 0 0)',
                }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-semibold text-sm">{item.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

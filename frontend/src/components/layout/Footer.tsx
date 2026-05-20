import { Link } from 'react-router-dom';

const coreServices = [
  { label: '买手选品', path: '/buyer' },
  { label: '商品企划', path: '/planning' },
  { label: '企划工具', path: '/planning-tool' },
  { label: '爆款货盘', path: '/hot-picks' },
  { label: '陈列搭配', path: '/display' },
];

const valueServices = [
  { label: '营销策划', path: '/marketing' },
  { label: '销售服务', path: '/sales' },
  { label: 'VIP管理', path: '/vip' },
  { label: '教学中心', path: '/education' },
];

const aboutLinks = [
  { label: '联系我们', path: '/contact' },
  { label: '隐私政策', path: '#' },
  { label: '服务条款', path: '#' },
];

export default function Footer() {
  return (
    <footer
      className="w-full text-sm"
      style={{
        background: 'oklch(0.15 0.02 295)',
        color: 'oklch(0.75 0.03 295)',
      }}
    >
      <div className="container mx-auto px-4 py-12">
        {/* 上部分：品牌信息 + 三列链接 */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 品牌信息 */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2 no-underline">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-md font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))' }}
              >
                骆
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-white">骆芷蝶智选</span>
                <span className="text-[9px] tracking-wider" style={{ color: 'oklch(0.55 0.04 295)' }}>LUOZHDIE ZHIXUAN</span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed" style={{ color: 'oklch(0.6 0.03 295)' }}>
              骆芷蝶智选是专注服装行业的ToB供应链智选平台，以数据驱动选品、企划、营销全链路，助力服装品牌实现精准运营与高效增长。
            </p>
            <div className="space-y-1 text-xs">
              <p>📍 广州市天河区珠江新城</p>
              <p>📞 400-888-6688</p>
              <p>📧 contact@lzdzhixuan.com</p>
            </div>
          </div>

          {/* 核心服务 */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">核心服务</h4>
            <ul className="space-y-1.5 text-xs">
              {coreServices.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="no-underline transition-colors hover:text-white" style={{ color: 'oklch(0.6 0.03 295)' }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 增值服务 */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">增值服务</h4>
            <ul className="space-y-1.5 text-xs">
              {valueServices.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="no-underline transition-colors hover:text-white" style={{ color: 'oklch(0.6 0.03 295)' }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 关于我们 */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">关于我们</h4>
            <ul className="space-y-1.5 text-xs">
              {aboutLinks.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="no-underline transition-colors hover:text-white" style={{ color: 'oklch(0.6 0.03 295)' }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 底部分割线 + 版权 */}
        <div
          className="mt-8 border-t pt-6 flex flex-col gap-1 md:flex-row md:justify-between md:items-center"
          style={{ borderColor: 'oklch(1 0 0 / 0.1)' }}
        >
          <p className="text-xs" style={{ color: 'oklch(0.5 0.03 295)' }}>
            © 2026 骆芷蝶智选. 保留所有权利.
          </p>
          <p className="text-xs" style={{ color: 'oklch(0.5 0.03 295)' }}>
            粤ICP备XXXXXXXX号
          </p>
        </div>
      </div>
    </footer>
  );
}

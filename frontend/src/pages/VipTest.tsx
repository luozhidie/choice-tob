import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// 色彩季型定义
const COLOR_SEASONS = [
  { id: 'spring', name: '春季型', desc: '温暖明亮，适合暖色系', colors: ['#F4C2C', '#FF6B6B', '#7BC67E'] },
  { id: 'summer', name: '夏季型', desc: '柔和冷调，适合冷色系', colors: ['#A8D8EA', '#AA96DA', '#FCBAD3'] },
  { id: 'autumn', name: '秋季型', desc: '深沉温暖，适合大地色系', colors: ['#C46D5E', '#8B6F47', '#D4A574'] },
  { id: 'winter', name: '冬季型', desc: '清晰冷艳，适合纯色系', colors: ['#2C3E50', '#E74C3C', '#1ABC9C'] },
];

const STYLE_TYPES = [
  { id: 'elegant', name: '优雅型', desc: '曲线剪裁，柔和面料' },
  { id: 'natural', name: '自然型', desc: '舒适面料，简约款式' },
  { id: 'romantic', name: '浪漫型', desc: '柔美轮廓，花卉图案' },
  { id: 'dramatic', name: '戏剧型', desc: '夸张廓形，强对比色' },
  { id: 'avantgarde', name: '前卫型', desc: '个性设计，拼接元素' },
  { id: 'classic', name: '古典型', desc: '对称平衡，优质面料' },
  { id: 'gamine', name: '少女型', desc: '俏皮可爱，小图案' },
  { id: 'sporty', name: '少年型', desc: '利落线条，运动感' },
];

type Step = 'welcome' | 'color-season' | 'style-type' | 'body-data' | 'result';

export default function VipTest() {
  const [step, setStep] = useState<Step>('welcome');
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const renderStep = () => {
    switch (step) {
      case 'welcome':
        return (
          <div className="text-center space-y-6 py-16">
            <div className="text-6xl mb-4">🎨</div>
            <h1 className="text-3xl font-bold">VIP 色彩季型 & 穿衣风格测试</h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              通过科学测试，了解您的专属色彩季型和穿衣风格，让每一次穿搭都恰到好处。
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="text-white"
                style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))' }}
                onClick={() => setStep('color-season')}
              >
                开始测试
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/vip">查看VIP列表</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">测试约需 3 分钟 · 科学准确 · 免费</p>
          </div>
        );
      case 'color-season':
        return (
          <div className="space-y-6 py-8 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-sm text-muted-foreground">第 1 步 / 共 3 步</div>
              <h2 className="text-2xl font-bold">您的色彩季型是？</h2>
              <p className="text-muted-foreground text-sm">选择最符合您外貌特征的色彩季型</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COLOR_SEASONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setAnswers(a => ({ ...a, colorSeason: s.id })); setStep('style-type'); }}
                  className="text-left p-4 rounded-xl border-2 transition-all hover:border-primary"
                  style={{
                    borderColor: answers.colorSeason === s.id ? 'oklch(0.62 0.18 295)' : 'oklch(0.92 0.01 295)',
                    background: answers.colorSeason === s.id ? 'oklch(0.95 0.03 295)' : 'oklch(1 0 0)',
                  }}
                >
                  <div className="flex gap-2 mb-2">
                    {s.colors.map((c, i) => (
                      <div key={i} className="w-6 h-6 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.desc}</div>
                </button>
              ))}
            </div>
          </div>
        );
      case 'style-type':
        return (
          <div className="space-y-6 py-8 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-sm text-muted-foreground">第 2 步 / 共 3 步</div>
              <h2 className="text-2xl font-bold">您的穿衣风格是？</h2>
              <p className="text-muted-foreground text-sm">选择最符合您气质的穿衣风格</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STYLE_TYPES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setAnswers(a => ({ ...a, styleType: s.id })); setStep('body-data'); }}
                  className="p-3 rounded-lg border-2 transition-all text-center hover:border-primary"
                  style={{
                    borderColor: answers.styleType === s.id ? 'oklch(0.62 0.18 295)' : 'oklch(0.92 0.01 295)',
                    background: answers.styleType === s.id ? 'oklch(0.95 0.03 295)' : 'oklch(1 0 0)',
                  }}
                >
                  <div className="font-semibold text-sm">{s.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
                </button>
              ))}
            </div>
          </div>
        );
      case 'body-data':
        return (
          <div className="space-y-6 py-8 max-w-md mx-auto">
            <div className="text-center space-y-2">
              <div className="text-sm text-muted-foreground">第 3 步 / 共 3 步</div>
              <h2 className="text-2xl font-bold">补充体型数据</h2>
              <p className="text-muted-foreground text-sm">帮助我们为您推荐更合适的尺码</p>
            </div>
            <div className="space-y-4">
              {['肩宽(cm)', '胸围(cm)', '腰围(cm)', '臀围(cm)', '身高(cm)'].map((label) => (
                <div key={label}>
                  <label className="text-sm font-medium">{label}</label>
                  <input
                    type="number"
                    className="w-full mt-1 rounded-lg border px-3 py-2 text-sm"
                    style={{ borderColor: 'oklch(0.92 0.01 295)', background: 'oklch(0.99 0.005 295)' }}
                    onChange={(e) => setAnswers(a => ({ ...a, [label]: e.target.value }))}
                  />
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="w-full text-white mt-4"
              style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))' }}
              onClick={() => setStep('result')}
            >
              查看测试结果
            </Button>
          </div>
        );
      case 'result':
        const season = COLOR_SEASONS.find(s => s.id === answers.colorSeason);
        const style = STYLE_TYPES.find(s => s.id === answers.styleType);
        return (
          <div className="space-y-8 py-8 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-5xl mb-2">✨</div>
              <h2 className="text-2xl font-bold">您的专属测试结果</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border" style={{ borderColor: 'oklch(0.92 0.01 295)', background: 'oklch(0.98 0.01 295)' }}>
                <div className="text-sm text-muted-foreground mb-1">色彩季型</div>
                <div className="text-xl font-bold" style={{ color: 'oklch(0.62 0.18 295)' }}>{season?.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{season?.desc}</div>
                <div className="flex gap-2 mt-3">
                  {season?.colors.map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" style={{ background: c }} />
                  ))}
                </div>
              </div>
              <div className="p-5 rounded-xl border" style={{ borderColor: 'oklch(0.92 0.01 295)', background: 'oklch(0.98 0.01 295)' }}>
                <div className="text-sm text-muted-foreground mb-1">穿衣风格</div>
                <div className="text-xl font-bold" style={{ color: 'oklch(0.62 0.18 295)' }}>{style?.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{style?.desc}</div>
              </div>
            </div>
            <div className="p-5 rounded-xl border" style={{ borderColor: 'oklch(0.92 0.01 295)', background: 'oklch(0.98 0.01 295)' }}>
              <div className="text-sm font-semibold mb-2">推荐用色范围</div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {season?.id === 'spring' && '适合：暖黄、珊瑚粉、草绿、明亮蓝。避免：冷灰、深紫、纯黑。'}
                {season?.id === 'summer' && '适合：灰粉、灰蓝、薰衣草紫、薄荷绿。避免：暖橙、土黄、纯黑。'}
                {season?.id === 'autumn' && '适合：驼色、橄榄绿、砖红、金棕。避免：冷粉、冰蓝、纯白。'}
                {season?.id === 'winter' && '适合：纯黑、纯白、宝石蓝、艳红。避免：驼色、暖橙、灰褐。'}
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <Button
                size="lg"
                className="text-white"
                style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))' }}
                onClick={() => { setStep('welcome'); setAnswers({}); }}
              >
                重新测试
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/vip">前往VIP管理</Link>
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.99 0.005 295)' }}>
      {/* 顶部导航 */}
      <nav className="border-b" style={{ background: 'oklch(1 0 0 / 0.9)', backdropFilter: 'blur(12px)' }}>
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg font-bold text-white text-sm"
              style={{ background: 'linear-gradient(135deg, oklch(0.62 0.18 295), oklch(0.55 0.22 325))' }}>骆</div>
            <span className="font-bold text-sm">色彩智选</span>
          </Link>
          <Link to="/login" className="text-sm no-underline" style={{ color: 'oklch(0.45 0.05 295)' }}>后台登录</Link>
        </div>
      </nav>
      {renderStep()}
    </div>
  );
}

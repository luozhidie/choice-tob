# 色彩智选 - 服装供应链智选平台

## 本地开发

### 前端
```bash
cd frontend && pnpm install && pnpm dev
```

### 后端
```bash
cd backend && npm install && npm run dev
```

## 环境变量

### 后端 (.env)
```
NODE_ENV=development
PORT=3000
API_PREFIX=/api
JWT_SECRET=luozhidie-secret-key-2026
ADMIN_EMIAL=luozhidie@live.cn
ADMIN_PASSWORD=Lzd123456
```

### 前端
无需特殊环境变量，API 通过相对路径 `/api` 访问后端。

## 部署

### Vercel 部署
1. 连接 GitHub 仓库
2. 设置项目名为 `choice-tob`
3. 构建命令：`cd frontend && pnpm install && pnpm build`
4. 输出目录：`frontend/dist`

## 项目结构

```
/
├── frontend/          # React 前端
│   ├── src/
│   │   ├── pages/      # 页面组件
│   │   ├── components/  # 共享组件
│   │   └── App.tsx     # 路由配置
│   └── dist/          # 构建输出
├── backend/           # Express 后端
│   ├── src/
│   │   ├── modules/   # 业务模块
│   │   └── app.ts     # Express 应用
│   └── dist/          # 构建输出
└── vercel.json        # Vercel 部署配置
```

## 核心功能模块

1. **VIP 色彩季型测试** - 客户色彩季型与穿衣风格测试
2. **数据仪表盘** - 销售/库存/会员核心 KPI 看板
3. **VIP 客户管理** - 客户档案、RFM 分析、流失预警
4. **商品 SKU 管理** - 商品信息、色彩适配性、库存管理
5. **销售分析** - 多维度销售归因、爆款分析、渠道效率
6. **库存智能决策** - 滞销款识别、补货建议、库存预警
7. **会员运营** - RFM 模型、个性化推荐、流失挽回
8. **店长日报** - 自动生成日报/周报/月报

## 技术栈

- 前端: React 19 + Vite + Tailwind CSS + shadcn/ui + Recharts
- 后端: Express + TypeScript
- 数据库: TCB PostgreSQL (通过 CloudBase SDK)
- 部署: Vercel

## 账号信息

- 后台登录: luozhidie@live.cn / Lzd123456
- GitHub: luozhidie@live.cn

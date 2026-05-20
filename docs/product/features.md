# 色彩智选 — 服装行业数据驱动决策平台

## 产品概述

色彩智选是一个面向服装零售行业的数据驱动决策SaaS平台。核心创新在于将传统依赖老板"个人感觉"的拿货、销售、清库存模式，转变为基于核心VIP顾客色彩季型和穿衣风格数据的科学决策体系。

平台覆盖服装零售全链路：VIP色彩风格测试 → 数据汇总分析 → 商品企划 → 采购 → 陈列搭配 → 营销策划 → 销售服务 → 数据反馈，形成完整闭环。

## 核心功能模块

### 一、VIP色彩季型与穿衣风格测试系统

#### 1.1 色彩季型测试
- 基于四季色彩理论，将客户分为：春季型、夏季型、秋季型、冬季型
- 每个季型细分2-3个子类型
- 测试流程：肤色/瞳孔/发色分析 → 色布对比测试 → 结果生成
- 输出：客户专属用色范围（最佳色、可用色、避免色）

#### 1.2 穿衣风格测试
- 基于客户五官轮廓、身材比例、气质偏好
- 风格分类：优雅型、自然型、浪漫型、戏剧型、前卫型、古典型、少女型、少年型
- 输出：风格定位 + 款式剪裁建议 + 面料偏好 + 图案建议

#### 1.3 VIP档案管理
- 客户基础信息（姓名、年龄、联系方式）
- 色彩季型标签 + 风格标签
- 体型数据（肩宽、胸围、腰围、臀围、身高）
- 购买偏好记录（版型、色系、面料偏好）
- 消费历史关联

---

### 二、数据仪表盘（概览）

#### 2.1 核心KPI看板
- 今日/本周/本月销售额、订单数、客单价
- VIP客户占比及贡献率
- 库存总金额、SKU总数
- 售罄率、周转天数

#### 2.2 数据亮点条
- 合作品牌数、服务VIP数、分析SKU数、预警数量

#### 2.3 趋势图表
- 销售额趋势（日/周/月）
- 各季型客户消费占比饼图
- 各风格类别销售柱状图

---

### 三、销售分析模块

#### 3.1 销售归因与爆款分析
- 按品类、面料、价格带、色彩季型、风格多维度拆解GMV
- 本季vs上季对比分析
- 增长最快的细分属性识别
- TOP 10 SKU排行

#### 3.2 渠道效率分析
- 抖音直播、天猫、线下门店三大渠道对比
- 转化率、客单价、流量分析
- 高流量低转化渠道识别
- 促销活动效果关联分析

#### 3.3 时间维度分析
- 日/周/月/年数据汇总
- 季节性销售趋势
- 节假日促销效果

---

### 四、库存智能决策模块

#### 4.1 滞销款识别
- 关联最近30天销售明细与当前库存
- 按"色彩季型 + 个人穿衣风格 + 品类 + 款式"分组
- 计算售罄率与周转天数
- 列出售罄率低于30%且库存大于100件的SKU清单
- 智能建议打折力度

#### 4.2 补货建议
- 分析各门店畅销款（TOP 10 SKU）日销量趋势
- 当前库存与未来7天缺货风险预测
- 输出建议补货量
- 按色彩季型和风格匹配度排序

#### 4.3 库存预警
- 库存低于安全线自动预警
- 断码缺货预警
- 库存积压预警
- 预警通知推送

---

### 五、会员运营模块（RFM）

#### 5.1 动态RFM模型
- 基于最近一年消费数据自动划分RFM等级
- R（Recency）：最近购买时间
- F（Frequency）：消费频次
- M（Monetary）：消费金额
- 客户分层：重要价值/重要保持/重要挽留/一般价值/新客户/流失客户

#### 5.2 流失预警
- 筛选"高消费频次但最近3个月未回购"的流失预警客户
- 导出名单及最后购买款式
- 自动推荐挽回策略

#### 5.3 个性化推荐
- 查询用户历史购买记录
- 根据色彩季型（用色范围）、穿衣风格（面料/剪裁/图案）、尺码匹配
- 在库存表中推荐符合特征且库存充足的新品
- 推荐3-5款精准匹配商品

---

### 六、商品管理模块

#### 6.1 SKU管理
- 商品基础信息（名称、品类、面料、价格、尺码）
- 色彩属性（主色、辅色）
- 适配季型标签（适合春季型/夏季型等）
- 适配风格标签
- 进货成本、零售价、毛利

#### 6.2 商品与VIP匹配
- 商品适合哪些季型客户
- 商品适合哪些风格客户
- 匹配度评分

---

### 七、店长日报（ADS层）

#### 7.1 自动生成日报
- 当日业绩汇总
- TOP 10畅销款
- 库存预警清单
- VIP到店/消费情况
- 环比/同比数据

#### 7.2 周报/月报
- 周期性数据汇总
- 趋势分析图表
-  actionable insights（可执行建议）

---

## 数据模型设计

### DWD层（明细事实表）

#### vip_customers（VIP客户表）
- id, name, phone, age, gender
- color_season（色彩季型: 春/夏/秋/冬/春柔/夏浅等）
- style_type（穿衣风格）
- body_measurements（体型数据JSON）
- preferences（偏好JSON: 版型/色系/面料）
- created_at, updated_at

#### products（商品SKU表）
- id, sku_code, name, category, fabric, price, cost
- main_color, sub_color
- color_season_tags（适配季型数组）
- style_tags（适配风格数组）
- size_range（尺码范围）
- season（季节: 春/夏/秋/冬）
- created_at

#### sales_orders（销售订单表）
- id, order_no, vip_customer_id, product_id
- channel（渠道: 抖音/天猫/线下）
- quantity, unit_price, total_amount
- sale_date, store_id
- promotion_tag（促销标签）

#### inventory（库存表）
- id, product_id, store_id
- quantity, safety_stock（安全库存）
- turnover_days（周转天数）
- sell_through_rate（售罄率）
- last_restock_date
- status（状态: 正常/预警/积压）

### DWS层（轻度汇总表）

#### sales_summary（销售汇总表）
- date, store_id, color_season, style_type, category
- total_sales, total_quantity, total_orders
- avg_order_value, gross_profit, gross_margin

#### channel_performance（渠道表现表）
- date, channel
- visitors, orders, conversion_rate
- avg_order_value, total_gmv

### ADS层（应用数据表）

#### rfm_analysis（RFM分析结果）
- vip_customer_id, r_score, f_score, m_score
- rfm_level（等级: 重要价值/重要保持等）
- last_purchase_date, total_orders, total_amount
- risk_level（风险: 正常/预警/流失）

#### daily_report（店长日报）
- report_date, store_id
- daily_sales, daily_orders, top_skus（JSON）
- inventory_alerts（JSON）, insights（JSON）

## 页面结构

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | / | 平台介绍 + 价值主张 + 色彩测试入口 |
| 色彩测试 | /test | VIP色彩季型与风格测试流程 |
| 仪表盘 | /dashboard | 核心KPI看板与数据概览 |
| VIP客户 | /vip | VIP客户列表与管理 |
| 商品管理 | /products | SKU管理与商品信息 |
| 销售分析 | /sales | 销售数据多维度分析 |
| 库存智能 | /inventory | 滞销识别、补货建议、预警 |
| 会员运营 | /members | RFM模型、流失预警、推荐 |
| 店长日报 | /reports | 自动生成日报/周报/月报 |

## 技术栈

- 前端: React 19 + Vite + Tailwind CSS + shadcn/ui + Recharts（图表）
- 后端: Express + TypeScript
- 数据库: TCB PostgreSQL（通过CloudBase SDK前端直连）
- 部署: Vercel

---
trigger: model_decision
description:
globs: *.js,*.ts,*.jsx,*.tsx,*.vue
---

# 代码注释密度规则

## 核心要求

### 注释密度标准

- **注释密度：> 10%**
- **计算方式：注释行数 / 逻辑行数**
- **Vue文件说明：逻辑行数 = template + script 的逻辑行数之和**

## 注释规范

- 所有公共函数都有完整的JSDoc注释
- 复杂业务逻辑都有"为什么"的说明注释
- Vue模板的关键区域都有功能说明注释
- 避免了显而易见的无意义注释
- 注释密度达到10%以上
- 注释内容简洁明确

## 注释示例

```javascript
/**
 * 计算用户会员折扣
 * 业务规则：VIP用户在生日月享受额外5%折扣，但总折扣不超过30%
 * @param {object} user - 用户信息
 * @param {number} originalPrice - 原价
 * @returns {object} 折扣信息
 */
function calculateMemberDiscount(user, originalPrice) {
  // 基础会员折扣：VIP 8折，SVIP 7折
  let discount = user.memberLevel === 'vip'
    ? 0.8
    : user.memberLevel === 'svip' ? 0.7 : 1.0

  // 生日月特殊优惠：额外5%折扣（业务需求，提升用户粘性）
  const currentMonth = new Date().getMonth() + 1
  const birthMonth = new Date(user.birthday).getMonth() + 1

  if (user.memberLevel !== 'normal' && currentMonth === birthMonth) {
    discount = Math.max(discount - 0.05, 0.7) // 最低7折保护利润
  }

  const finalPrice = originalPrice * discount

  return {
    finalPrice,
    discountRate: (1 - discount) * 100,
    reason: currentMonth === birthMonth ? '会员折扣+生日优惠' : '会员折扣'
  }
}
```

# 基础算法题库（JavaScript）

这个仓库已经从“零散脚本”重构为「可复习、可扩展、可测试」的基础算法题库，目标是用于面试系统复习。

## 目录结构

```txt
.
├── docs/
│   └── study-roadmap.md          # 8 周复习计划
├── src/
│   ├── problems/
│   │   ├── array/
│   │   ├── string/
│   │   ├── linked-list/
│   │   ├── stack-queue/
│   │   ├── binary-search/
│   │   ├── tree/
│   │   ├── backtracking/
│   │   ├── dynamic-programming/
│   │   ├── graph/
│   │   ├── greedy/
│   │   ├── bit/
│   │   └── heap/
│   └── utils/                    # 链表/树构造工具
└── tests/
    └── core-problems.test.js     # 核心题单测试
```

## 高频必做清单（建议先刷）

### 数组
- [x] Two Sum（哈希）
- [x] Maximum Subarray（Kadane）

### 字符串
- [x] 无重复字符的最长子串（滑动窗口）
- [x] 有效的字母异位词（计数）

### 链表
- [x] 反转链表

### 栈 / 队列
- [x] 有效括号

### 二分
- [x] 搜索插入位置

### 树
- [x] 二叉树最大深度

### 回溯
- [x] 全排列

### 动态规划
- [x] 爬楼梯

### 图
- [x] 岛屿数量

### 贪心
- [x] 买卖股票的最佳时机

### 位运算
- [x] 只出现一次的数字

### 堆 / TopK
- [x] 前 K 个高频元素

## 使用方式

### 安装依赖

```bash
npm install
```

### 运行测试

```bash
npm test
```

## 你接下来可以怎么扩展

1. 每个分类补到 15~30 题。
2. 每道题新增：
   - `problem.md`（题意 + 思路 + 复杂度）
   - `solution.js`（可运行代码）
   - `*.test.js`（最少 3 个用例）
3. 每周复盘错题，按“不会写 / 边界错 / 复杂度不稳”分组。

## 历史文件说明

仓库根目录保留了一批早期练习脚本（例如 `array.js`、`binaryTree.js`），可作为思路草稿参考；当前主学习路径以 `src/problems` + `tests` 为准。

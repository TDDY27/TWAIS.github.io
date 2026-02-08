# 🚀 NTUAIS Website Development Roadmap

## 1. 專案概覽 (Project Overview)

* **目標**：建立一個具備現代感、易於維護、且功能完整的 AI Safety 社群官網。
* **核心團隊**：4 位 Organizer（1 位開發者，3 位內容維護者）
* **技術棧**：
  * **SSG**: Hugo (Extended Version)
  * **Theme Base**: [Blowfish](https://blowfish.page/)
  * **Design Style**: Linear.app inspired (深色主題、統一背景、微透明卡片)
  * **Deployment**: GitHub → Vercel / Netlify (CI/CD)
  * **CMS (Optional)**: Decap CMS

---

## 2. 功能進度 (Feature Progress)

### A. 核心展示 (Core Display)

| 功能 | 狀態 | 說明 |
|------|------|------|
| **Hero Section** | ✅ | Linear 風格，左對齊，深色背景，Discord CTA |
| **Blog Post** | ✅ | 支援分類、標籤、閱讀時間 |
| **Member Staffs** | ✅ | 水平行佈局 (頭像左、資訊右) |
| **Events** | ✅ | 已建立頁面結構，待填內容 |
| **Resources** | ✅ | 已建立頁面結構，待填內容 |

### B. 科技社群必備 (Enhanced Features)

| 功能 | 狀態 | 優先度 |
|------|------|--------|
| **Join Us CTA** | ✅ | Discord 按鈕 + Icon |
| **Sponsors Wall** | ⏳ | 🟢 低 (目前無贊助商) |
| **Contributor Wall** | ⏳ | 🟢 低 |
| **Newsletter** | ⏳ | 🟡 中 |

### C. 工程品質 (Engineering Excellence)

| 功能 | 狀態 | 說明 |
|------|------|------|
| **Dark Mode** | ✅ | 預設深色，已移除切換 |
| **Search** | ✅ | Blowfish 內建 |
| **SEO & Open Graph** | ⏳ | 需自訂 OG 圖片 |
| **GitHub Pages 部署** | ✅ | � 已完成 (GitHub Actions) |

---

## 3. 導航結構 (Navigation)

```
Home → Events → Blog → Resources → Team → About
```

---

## 4. 內容架構 (Content Schema)

```text
content/
├── blog/               # 技術文章
├── events/             # 社群活動
│   └── _index.md       
├── team/               # 成員資料
│   └── [name].md       # 個人頁面
├── resources/          # 學習資源
└── about.md            # 關於我們
```

---

## 5. 設計決策 (Design Decisions)

- **色彩**：統一深黑背景 `#08090A`，卡片微透明 `rgba(255,255,255,0.03)`
- **字體**：Inter (Google Fonts)
- **Team 佈局**：水平行 (頭像左側 120px，資訊右側)
- **卡片樣式**：16px 圓角，1px 邊框，hover 效果

---

## 6. 下一步行動 (Next Steps)

### ✅ 已完成 (Completed)
- [x] **GitHub Pages 部署** - 設定 GitHub Actions CI/CD
- [ ] **填充 Events 內容** - 新增過往活動
- [ ] **填充 Resources 內容** - 新增學習資源

### 🟡 中優先
- [ ] **SEO 優化** - 自訂 Open Graph 圖片
- [ ] **Newsletter 整合** - Substack 嵌入

### 🟢 低優先
- [ ] **Sponsors Wall** - 等待贊助商
- [ ] **Contributor Wall** - GitHub 貢獻者自動抓取
- [ ] **Decap CMS** - 方便非技術成員編輯

---

## 7. 維護流程 (Maintenance)

1. **開發者**：負責 `assets/`, `layouts/`, `config/` 修改
2. **Organizer**：
   - 方法一：直接在 GitHub Web 編輯 `content/` Markdown
   - 方法二：(未來) Decap CMS 圖形化編輯
3. **自動化**：每次 Git Push 觸發 GitHub Actions Build

---

## 8. 短期推廣計畫 (Promotion Roadmap - Feb 2026)

**目標 (Goal)**: 準備 2-3 週後的社群推廣。重點在於清晰傳達「我們是誰」以及「即將開始的活動」。

### Phase 1: 首頁活動亮點 (Homepage Highlights) - 🟢 In Progress
*   **目標**: 讓新訪客一眼看到可以參加的活動。
*   **執行項目**:
    *   [x] **新增區塊**: 在首頁加入 "Upcoming 2026 Programs"。
    *   [x] **Unify Team Data Structure**: Move all member data to `content/team/*.md` and update `list.html` to remove JSON dependency.
    *   [x] **Setup Deployment**: Configure GitHub Actions to automatically build and deploy `TWAIS.github.io` on commit to `main` (Served via GitHub Pages).
    *   [ ] **填補資訊**: 確認 BlueDot, Technical Reading, 的具體日期與報名連結。
    *   [ ] **樣式優化**: 確保手機版顯示正常。

### Phase 2: 品牌教準 (Refine Identity) - 🟡 Planned
*   **目標**: 吸引聽眾，建立信任感。
*   **執行項目**:
    *   **Hero 文案**: 調整打字機效果文字，使其更具號召力。
    *   **About 頁面**: 增加成員故事或照片 (Optional)。

### Phase 3: 行動呼籲 (Call to Action) - 🟡 Planned
*   **目標**: 提高轉換率 (申請/加入)。
*   **執行項目**:
    *   **Global CTA**: 確保首頁 "Join Community" 按鈕引導至 Discord 新手區。
    *   **Event CTAs**: 每個活動頁面頂部加入顯眼的 "Apply Now" 按鈕。

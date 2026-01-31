# 🚀 Tech Community Website Development Guide (Hugo)

## 1. 專案概覽 (Project Overview)

* **目標**：建立一個具備現代感（Cool）、易於維護、且功能完整的科技社群官網。
* **核心團隊**：4 位 Organizer（含 1 位開發者，3 位內容維護者）。
* **技術棧**：
  * **SSG**: Hugo (Extended Version)
  * **Theme Base**: [Blowfish](https://blowfish.page/) (基於 Tailwind CSS，支援模組化組件)
  * **Deployment**: GitHub -> Vercel / Netlify (CI/CD)
  * **CMS (Optional)**: Decap CMS (提供非技術成員 UI 介面更新內容)

---

## 2. 功能需求與架構 (Feature Roadmap)

### A. 核心展示 (Core Display)

1. **Community Intro**: 具有衝擊力的 Hero Section，包含社群使命與動態背景。
2. **Blog Post**: 支援多分類 (Categories)、標籤 (Tags)、以及估計閱讀時間。
3. **Member Staffs**: 成員牆，展示頭像、職稱、社交連結（GitHub/Twitter/LinkedIn）。
4. **Recent Events**: 活動時序表或卡片，區分「即將到來」與「過去活動」。

### B. 科技社群必備 (Enhanced Tech Features)

1. **Sponsors Wall**: 贊助商 Logogrid，區分等級（Gold, Silver, Bronze）。
2. **Resource Library**: 「Awesome List」風格的工具或學習資源推薦頁。
3. **Join Us (CTA)**: 固定於導航欄或頁尾的按鈕，導向 Discord / Telegram 社群。
4. **Contributor Wall**: 自動化或手動維護的貢獻者名單（展現開源精神）。
5. **Newsletter**: 整合訂閱表單（如 Substack / Revue 嵌入）。

### C. 工程品質 (Engineering Excellence)

1. **SEO & Open Graph**: 自動生成高品質的分享卡片（Twitter Card / FB Open Graph）。
2. **Dark Mode**: 預設支援，且 UI 過渡平滑。
3. **Search**: 整合靜態搜尋（如 Pagefind 或 FlexSearch），不依賴後端。

---

## 3. 內容架構 (Content Schema)

在 Hugo 中，請遵循以下目錄結構與 Front-matter 規範：

```text
content/
├── blog/               # 技術文章
├── events/             # 社群活動
│   ├── _index.md       # 活動清單頁配置
│   └── 2026-meetup.md  # 單一活動資料 (含 Date, Location)
├── authors/            # 成員資料
│   ├── organizer-1/
│   │   └── _index.md   # 個人簡介與頭像
├── resources/          # 資源清單
└── projects/           # 社群開源專案
```

---

## 4. AI 指令建議 (Prompts for AI Coding Tool)

當你開始開發時，可以使用以下 Prompt 指引 AI 助手：

* **初始化樣式**：「請根據 Blowfish 主題文件，幫我設定 `hugo.toml`。我需要深色模式作為首選，並配置顏色主題為科技感重的『霓虹綠』或『數位藍』。」
* **建立組件**：「幫我寫一個 Hugo Shortcode 名稱為 `event-card.html`。它需要接收 `title`, `date`, `location`, `status` 四個參數，並使用 Tailwind CSS 設計成現代感十足的卡片樣式。」
* **自動化指令**：「我是一名 AI 工程師，請幫我寫一個 Python 腳本放進 `scripts/`，功能是抓取我們的 GitHub Repo 貢獻者名單，並自動轉化為 Hugo 的 `data/contributors.yml` 檔案。」

---

## 5. 維護流程 (Maintenance Workflow)

1. **開發者 (You)**: 負責 `assets/`, `layouts/`, `config/` 的修改與效能優化。
2. **Organizer (Others)**:
   * **方法一**: 直接在 GitHub Web 介面修改 `content/` 下的 Markdown 檔案。
   * **方法二**: 部署 Decap CMS，讓他們在 `yourdomain.com/admin` 進行圖形化編輯。
3. **自動化**: 每次 Git Push 觸發 Vercel Build，確保網頁在 30 秒內更新。

---

## 下一步行動 (Next Steps)

你可以嘗試將 **Blowfish** 的 Repo 作為 Submodule 加入你的專案，然後對 AI 助手說：

> 「我已經安裝了 Blowfish 主題，請幫我分析它的 `exampleSite` 目錄，並在我的 `content/` 資料夾下建立適合『科技社群』的初始資料結構。」

### 待討論項目

- [ ] 是否需要 Member Staff (成員牆) 的 `_index.md` 資料範本？
- [ ] Blowfish 主題的具體配置方式
- [ ] CMS (Decap CMS) 是否需要整合？

# みぢかな珈琲 - ランディングページ

[![GitHub](https://img.shields.io/badge/GitHub-midikanacoffee-blue)](https://github.com/midikanacoffee)
[![Website](https://img.shields.io/badge/Website-Live-green)](https://midikanacoffee.github.io/midikanacoffee-LP/)

みぢかな珈琲の公式ランディングページです。厳選されたコーヒー豆と心を込めた焙煎で、あなたの日常に特別な一杯をお届けします。

## 📋 プロジェクト概要

- **店名**: みぢかな珈琲
- **事業形態**: 小規模コーヒーロースター
- **営業場所**: 東京都東村山市久米川町4-46-1（百才内）
- **営業日**: 第一日曜・第三日曜
- **技術スタック**: HTML5, CSS3, JavaScript

## 🚀 セットアップ

### 前提条件
- モダンブラウザ（Chrome, Firefox, Safari, Edge）
- Git

### インストール手順

```bash
# リポジトリをクローン
git clone https://github.com/midikanacoffee/midikanacoffee-LP.git

# プロジェクトディレクトリに移動
cd midikanacoffee-LP

# ブラウザでindex.htmlを開く
open index.html
```

## 📁 プロジェクト構造

```
midikanacoffee-LP/
├── index.html              # メインランディングページ
├── style.css               # メインスタイルシート
├── sozai/                  # アセットフォルダ
│   └── ロゴスクエア_inchar_black_500x500_背景透明.png
├── .gitignore             # Git除外設定
└── README.md              # このファイル
```

## 🎨 デザイン仕様

### カラーパレット
- **プライマリ**: #8B4513 (茶色)
- **セカンダリ**: #F5F5DC (ベージュ)
- **アクセント**: #DAA520 (ゴールド)
- **テキスト**: #2F2F2F (ダークグレー)

### フォント
- **メインフォント**: Noto Sans JP (Google Fonts)
- **ウェイト**: 300, 400, 500, 700

### レスポンシブ対応
- **モバイル**: 320px〜576px
- **タブレット**: 576px〜992px
- **デスクトップ**: 992px以上

## 📱 SNSリンク

| プラットフォーム | URL | 用途 |
|----------------|-----|------|
| Instagram | [@midikanacoffee](https://www.instagram.com/midikanacoffee/) | コーヒー写真、日常投稿 |
| X (Twitter) | [@midikanacoffee](https://x.com/midikanacoffee) | コーヒー豆情報、店舗情報 |
| TikTok | [@midikanacoffee](https://www.tiktok.com/@midikanacoffee) | 焙煎動画、ショート動画 |
| STORES | [オンラインショップ](https://midikanacoffee.stores.jp/) | 商品販売 |
| NOTE | [記事](https://note.com/midikanacoffee) | コーヒー豆情報、レシピ |
| Spotify | [プレイリスト](https://open.spotify.com/user/31cm44f45ws34orqbkywdusoo37m) | 営業日用音楽 |
| LINE | [お問い合わせ](https://lin.ee/zCpXlzg) | 直接コミュニケーション |

## 🛠️ 開発

### コーディング規約
- **HTML**: セマンティックなマークアップ
- **CSS**: BEM記法、CSS変数活用
- **JavaScript**: ES6+、モジュラー設計

### ブラウザサポート
- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

### パフォーマンス要件
- ページ読み込み時間: 3秒以内
- Lighthouse スコア: 90点以上
- モバイル最適化対応

## 📈 今後の拡張予定

### Phase 1 (短期)
- [ ] Google Analytics 4実装
- [ ] SEO最適化
- [ ] パフォーマンス最適化

### Phase 2 (中期)
- [ ] ブログ機能追加
- [ ] オンライン注文システム
- [ ] 多言語対応

### Phase 3 (長期)
- [ ] PWA化
- [ ] 管理画面追加
- [ ] AIチャットボット

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 📞 お問い合わせ

- **店舗**: みぢかな珈琲
- **住所**: 〒189-0003 東京都東村山市久米川町4-46-1
- **営業日**: 第一日曜・第三日曜
- **LINE**: [@midikanacoffee](https://lin.ee/zCpXlzg)

---

**最終更新**: 2025年1月  
**バージョン**: 1.0.0 

## デザインカスタマイズ履歴（2024年7月）

### 主な変更点
- **フォント**：全体にBIZ UDPGothic（Webフォント）を適用
- **配色**：白と黒を基調としたモノクロデザインに変更
- **ボタン・リンク**：モノクロのグラデーションや影で表現し、シンプルかつおしゃれに
- **アニメーション**：全体のアニメーション・トランジションを無効化し、活字主体の静的な印象に
- **SNSカード等**：カラーアイコンもモノクロ化し、統一感を持たせた

### 変更ファイル
- `src/styles/style.css`：上記デザイン方針に沿って大幅に修正

### 補足
- フォントはGoogle FontsのBIZ UDPGothicを利用しています。
- 旧デザインのカラフルな要素やアニメーションはすべて削除・無効化しています。
- 内容や構成はそのまま、見た目のみをシンプル＆モノクロに調整しています。

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

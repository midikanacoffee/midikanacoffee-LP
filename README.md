# みぢかな珈琲 - ランディングページ

[![GitHub](https://img.shields.io/badge/GitHub-midikanacoffee-blue)](https://github.com/midikanacoffee)
[![Website](https://img.shields.io/badge/Website-Live-green)](https://midikanacoffee.github.io/midikanacoffee-LP/)

みぢかな珈琲の公式ランディングページです。厳選されたコーヒー豆と心を込めた焙煎で、あなたの日常に特別な一杯をお届けします。

## 📋 プロジェクト概要

- **店名**: みぢかな珈琲
- **事業形態**: 小規模コーヒーロースター
- **営業場所**: 東京都東村山市久米川町4-46-1（百才内）
- **営業日**: 第一日曜・第三日曜
- **技術スタック**: Astro, HTML, CSS (BIZ UDPGothic), JavaScript (最小限)

## 🚀 セットアップ

### 前提条件
- Node.js（v18以上推奨）
- npm
- Git

### インストール手順

```bash
# リポジトリをクローン
git clone https://github.com/midikanacoffee/midikanacoffee-LP.git

# プロジェクトディレクトリに移動
cd midikanacoffee-LP

# 依存パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで `http://localhost:4321/` を開いてご覧ください。

## 📁 プロジェクト構造

```
midikanacoffee-LP/
├── public/
│   └── sozai/（ロゴ・画像素材）
├── src/
│   ├── pages/
│   │   └── index.astro（メインページ）
│   ├── styles/
│   │   └── style.css（スタイル）
├── package.json
├── README.md
└── ...
```

## 🎨 デザイン仕様

- **配色**：白と黒を基調としたモノクロデザイン
- **フォント**：BIZ UDPGothic（Google Fonts）
- **ボタン・リンク**：モノクロのグラデーションや影で表現
- **アニメーション**：活字主体の静的な印象を重視しつつ、ロゴ等に一部アニメーションあり
- **レスポンシブ対応**：スマホ・タブレット・PCで最適表示

## 📱 SNSリンク

| プラットフォーム | URL | 用途 |
|----------------|-----|------|
| Instagram | [@midikanacoffee](https://www.instagram.com/midikanacoffee/) | 営業情報、お店の様子、日常の投稿 |
| X (Twitter) | [@midikanacoffee](https://x.com/midikanacoffee) | 主に店主のつぶやき |
| TikTok | [@midikanacoffee](https://www.tiktok.com/@midikanacoffee) | 店舗の様子や抽出動画、ショート動画など |
| STORES | [オンラインショップ](https://midikanacoffee.stores.jp/) | 商品販売 |
| NOTE | [記事](https://note.com/midikanacoffee) | 珈琲のマメ知識、季節に合わせた音楽の情報など |
| Spotify | [プレイリスト](https://open.spotify.com/user/31cm44f45ws34orqbkywdusoo37m) | 店主の趣味中心のプレイリスト公開 |
| LINE | [お問い合わせ](https://lin.ee/zCpXlzg) | 公式アカウント・ポイント・クーポンなど |
| YouTube | [チャンネル](https://youtube.com/channel/UCX9C7fRTx47V2huECxsMu1Q?si=3rGRG2e838alVcWB) | 動画で店舗の様子やコーヒーの紹介 |
| Threads | [@midikanacoffee](https://www.threads.com/@midikanacoffee) | 最新のお知らせや日常のつぶやき |

## 🛠️ 開発

### コーディング規約
- **Astro**: コンポーネント分割、セマンティックなマークアップ
- **CSS**: BEM記法、CSS変数活用
- **JavaScript**: 必要最小限

### ブラウザサポート
- Chrome, Firefox, Safari, Edge（最新版）

### パフォーマンス要件
- ページ読み込み時間: 3秒以内
- モバイル最適化対応

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/your-feature`)
3. 変更をコミット (`git commit -m 'Add your feature'`)
4. ブランチにプッシュ (`git push origin feature/your-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 📞 お問い合わせ

- **店舗**: みぢかな珈琲
- **住所**: 〒189-0003 東京都東村山市久米川町4-46-1
- **営業日**: 第一日曜・第三日曜
- **LINE**: [@midikanacoffee](https://lin.ee/zCpXlzg)

---

**最終更新**: 2025年7月  
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

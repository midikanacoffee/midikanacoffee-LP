# みぢかな珈琲 - ランディングページ 仕様書

このファイルは、みぢかな珈琲のランディングページ開発における詳細な仕様書です。

## 📋 プロジェクト概要

### 基本情報
- **プロジェクト名**: みぢかな珈琲 - ランディングページ
- **店名**: みぢかな珈琲
- **事業形態**: 小規模なコーヒーロースター
- **プロジェクトタイプ**: 静的ウェブサイト（ランディングページ）
- **開発言語**: HTML5, CSS3, JavaScript（必要最小限）

### 目的
小規模なコーヒーロースターのランディングページとして、各種SNSプラットフォームやオンラインストアへのリンクをまとめて、事業の宣伝を行うサイトです。

### ターゲットユーザー
- **プライマリ**: コーヒー愛好家（25-45歳）
- **セカンダリ**: 地元のコーヒーショップを探している人
- **ターシャリ**: SNSでコーヒー関連のコンテンツを探している人

### 主要KPI
- ページビュー数
- SNSリンクのクリック率
- ページ滞在時間
- モバイルでの表示率

## 🗂️ ファイル構成

```
claude-code-demo/
├── index.html                    # メインランディングページ
├── style.css                     # メインスタイルシート
├── script.js                     # JavaScript機能（必要時）
├── sozai/                        # アセットフォルダ
│   ├── logo.png                  # メインロゴ
│   ├── favicon.ico               # ファビコン
│   └── images/                   # 画像ファイル
├── docs/                         # ドキュメント
│   └── design-specs.md           # デザイン仕様詳細
├── CLAUDE.md                     # この仕様書
└── README.md                     # プロジェクト概要
```

## 🎨 UI/UX設計仕様

### デザインコンセプト
- **テーマ**: 温かみのあるコーヒーショップの雰囲気
- **トーン**: 親しみやすく、上品で洗練された
- **ムード**: リラックスできる、居心地の良い空間

### カラーパレット詳細

#### メインカラー
```css
:root {
  /* プライマリカラー */
  --primary-brown: #8B4513;        /* メインの茶色 */
  --primary-brown-light: #A0522D;  /* 明るい茶色 */
  --primary-brown-dark: #654321;   /* 暗い茶色 */
  
  /* セカンダリカラー */
  --secondary-beige: #F5F5DC;      /* ベージュ */
  --secondary-cream: #FFF8DC;      /* クリーム色 */
  --secondary-coffee: #CD853F;     /* コーヒー色 */
  
  /* アクセントカラー */
  --accent-gold: #DAA520;          /* ゴールド */
  --accent-orange: #FF8C00;        /* オレンジ */
  
  /* テキストカラー */
  --text-primary: #2F2F2F;         /* メインテキスト */
  --text-secondary: #666666;       /* サブテキスト */
  --text-light: #FFFFFF;           /* ライトテキスト */
  
  /* 背景カラー */
  --bg-primary: #FFFFFF;           /* メイン背景 */
  --bg-secondary: #F8F8F8;         /* セカンダリ背景 */
  --bg-gradient: linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%);
}
```

### タイポグラフィ仕様

#### フォント設定
```css
/* Google Fonts - Noto Sans JP */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

:root {
  --font-family-primary: 'Noto Sans JP', sans-serif;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
}
```

#### フォントサイズ
```css
:root {
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
}
```

### レスポンシブデザイン仕様

#### ブレークポイント
```css
/* モバイルファースト */
--breakpoint-sm: 576px;   /* スマートフォン */
--breakpoint-md: 768px;   /* タブレット */
--breakpoint-lg: 992px;   /* デスクトップ */
--breakpoint-xl: 1200px;  /* 大画面デスクトップ */
```

#### レイアウト仕様
- **モバイル（320px〜576px）**: 1カラムレイアウト
- **タブレット（576px〜992px）**: 2カラムレイアウト
- **デスクトップ（992px以上）**: 3カラムレイアウト

## 🏗️ HTML構造仕様

### セマンティックHTML構造
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>みぢかな珈琲 - 小規模コーヒーロースター</title>
    <meta name="description" content="みぢかな珈琲の公式サイト。厳選されたコーヒー豆と心を込めた焙煎で、あなたの日常に特別な一杯を。">
    <link rel="icon" href="sozai/favicon.ico">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- ヘッダーセクション -->
    <header class="header">
        <nav class="nav">
            <!-- ナビゲーション要素 -->
        </nav>
    </header>

    <!-- メインコンテンツ -->
    <main class="main">
        <!-- ヒーローセクション -->
        <section class="hero">
            <!-- ヒーローコンテンツ -->
        </section>

        <!-- 店舗紹介セクション -->
        <section class="about">
            <!-- 店舗情報 -->
        </section>

        <!-- SNSリンクセクション -->
        <section class="social-links">
            <!-- SNSリンク -->
        </section>

        <!-- お問い合わせセクション -->
        <section class="contact">
            <!-- 連絡先情報 -->
        </section>
    </main>

    <!-- フッター -->
    <footer class="footer">
        <!-- フッター情報 -->
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

### 各セクションの詳細仕様

#### 1. ヘッダーセクション
```html
<header class="header">
    <div class="container">
        <div class="header-content">
            <div class="logo">
                <img src="sozai/logo.png" alt="みぢかな珈琲" class="logo-img">
                <h1 class="logo-text">みぢかな珈琲</h1>
            </div>
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="#about" class="nav-link">店舗について</a></li>
                    <li><a href="#social" class="nav-link">SNS</a></li>
                    <li><a href="#contact" class="nav-link">お問い合わせ</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>
```

#### 2. ヒーローセクション
```html
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <h2 class="hero-title">美味しい自家焙煎珈琲をもっとみぢかに</h2>
            <p class="hero-subtitle">厳選されたコーヒー豆と心を込めた焙煎で<br>お届けする、みぢかな珈琲</p>
            <div class="hero-cta">
                <a href="#social" class="btn btn-primary">SNSを見る</a>
                <a href="#about" class="btn btn-secondary">店舗について</a>
            </div>
        </div>
    </div>
</section>
```

#### 2.5. 店舗紹介（私たちについて）セクション
```html
<section class="about" id="about">
    <div class="container">
        <h2 class="section-title">私たちについて</h2>
        <div class="profile">
            <p>「みぢかな珈琲」は厳選した生豆をすっきりと飲みやすい味になるよう焙煎し、ハンドドリップでお出しします。普段は東京は東村山、久米川町にある百才（ももとせ）という施設の中にあるコーヒースタンドを間借りして第一日曜と第三日曜に営業しています。<br>
            いつどの珈琲が飲めるかは店主の気まぐれのため決まっておりませんが、世界のいろいろな地域の珈琲をいつもそばにある「ちょっと違った珈琲」として味わってもらえたら幸いです。</p>
        </div>
    </div>
</section>
```

#### 2.6. アクセスセクション
```html
<section class="access" id="access">
    <div class="container">
        <h2 class="section-title">アクセス</h2>
        <div class="address">
            <p>〒189-0003 東京都東村山市久米川町4-46-1</p>
            <p>最寄り駅：東村山駅 東口より徒歩10分</p>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps?q=東京都東村山市久米川町4-46-1&output=embed" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</section>
```

#### 3. SNSリンクセクション
```html
<section class="social-links" id="social">
    <div class="container">
        <h2 class="section-title">SNSで最新情報をお届け</h2>
        <div class="social-grid">
            <a href="#" class="social-card instagram">
                <i class="fab fa-instagram"></i>
                <h3>Instagram</h3>
                <p>コーヒー写真や日常の投稿</p>
            </a>
            <a href="#" class="social-card twitter">
                <i class="fab fa-twitter"></i>
                <h3>Twitter</h3>
                <p>コーヒー豆情報や店舗情報</p>
            </a>
            <!-- 他のSNSリンク -->
        </div>
    </div>
</section>
```

## 🎨 CSS設計仕様

### CSSアーキテクチャ
- **BEM記法**を使用
- **CSS変数**でテーマ管理
- **モバイルファースト**アプローチ
- **Flexbox/Grid**を活用したレイアウト

### コンポーネント設計

#### ボタンコンポーネント
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn--primary {
  background: var(--bg-gradient);
  color: var(--text-light);
}

.btn--secondary {
  background: transparent;
  color: var(--primary-brown);
  border: 2px solid var(--primary-brown);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
}
```

#### カードコンポーネント
```css
.card {
  background: var(--bg-primary);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

### アニメーション仕様

#### フェードインアニメーション
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

#### ホバーエフェクト
```css
.social-card {
  transition: all 0.3s ease;
}

.social-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
```

## ⚙️ 機能要件仕様

### 必須機能
1. **レスポンシブ表示**: 全デバイスでの最適表示
2. **SNSリンク**: 6つのSNSプラットフォームへのリンク
3. **スムーズスクロール**: セクション間のスムーズ移動
4. **アクセシビリティ**: キーボードナビゲーション対応

### 推奨機能
1. **ローディングアニメーション**: ページ読み込み時のアニメーション
2. **パララックス効果**: ヒーローセクションでの視差効果
3. **ダークモード**: ユーザー設定に応じたテーマ切り替え
4. **PWA対応**: オフライン対応とアプリ化

### パフォーマンス要件
- **ページ読み込み時間**: 3秒以内
- **First Contentful Paint**: 1.5秒以内
- **Largest Contentful Paint**: 2.5秒以内
- **Cumulative Layout Shift**: 0.1以下

## 🧪 テスト仕様

### ブラウザテスト
- **Chrome**: 最新版（必須）
- **Firefox**: 最新版（必須）
- **Safari**: 最新版（必須）
- **Edge**: 最新版（必須）

### デバイステスト
- **スマートフォン**: iPhone（Safari）、Android（Chrome）
- **タブレット**: iPad（Safari）、Android（Chrome）
- **デスクトップ**: Windows、macOS

### アクセシビリティテスト
- **キーボードナビゲーション**: Tabキーでの移動
- **スクリーンリーダー**: NVDA、VoiceOver対応
- **コントラスト比**: WCAG AA準拠（4.5:1以上）

### パフォーマンステスト
- **Lighthouse**: 90点以上
- **PageSpeed Insights**: モバイル90点以上
- **WebPageTest**: 各デバイスでの速度テスト

## 🚀 実装ガイドライン

### コーディング規約
- **HTML**: セマンティックなマークアップ
- **CSS**: BEM記法、CSS変数活用
- **JavaScript**: ES6+、モジュラー設計
- **コメント**: 日本語で分かりやすく

### ファイル命名規則
- **HTML**: kebab-case（例：index.html）
- **CSS**: kebab-case（例：style.css）
- **JavaScript**: camelCase（例：script.js）
- **画像**: 説明的な名前（例：hero-coffee.jpg）

### バージョン管理
- **Git**: 機能ブランチでの開発
- **コミットメッセージ**: 日本語で分かりやすく
- **タグ**: バージョン番号での管理

## 📱 SNSリンク設定詳細

### 対応プラットフォーム仕様
| プラットフォーム | アイコン | 用途 | 実際のURL |
|----------------|---------|------|-----------|
| Instagram | fa-instagram | コーヒー写真、日常投稿 | https://www.instagram.com/midikanacoffee/ |
| X (Twitter) | fa-x-twitter | コーヒー豆情報、店舗情報 | https://x.com/midikanacoffee |
| TikTok | fa-tiktok | コーヒー豆焙煎動画、ショート動画 | https://www.tiktok.com/@midikanacoffee |
| STORES | fa-shopping-cart | オンラインショップ | https://midikanacoffee.stores.jp/ |
| NOTE | fa-sticky-note | コーヒー豆情報やレシピ記事 | https://note.com/midikanacoffee |
| Spotify | fa-spotify | 営業日用プレイリスト、音楽 | https://open.spotify.com/user/31cm44f45ws34orqbkywdusoo37m?si=c580664022794caf |
| LINE | fa-line | 直接コミュニケーション | https://lin.ee/zCpXlzg |

### リンク設定方法
```html
<!-- Instagramリンク -->
<a href="https://www.instagram.com/midikanacoffee/" 
   class="social-card instagram" 
   target="_blank" 
   rel="noopener noreferrer">
    <i class="fab fa-instagram"></i>
    <h3>Instagram</h3>
    <p>コーヒー写真や日常の投稿</p>
</a>

<!-- X (Twitter)リンク -->
<a href="https://x.com/midikanacoffee" 
   class="social-card x-twitter" 
   target="_blank" 
   rel="noopener noreferrer">
    <i class="fab fa-x-twitter"></i>
    <h3>X (Twitter)</h3>
    <p>コーヒー豆情報や店舗情報</p>
</a>

<!-- TikTokリンク -->
<a href="https://www.tiktok.com/@midikanacoffee" 
   class="social-card tiktok" 
   target="_blank" 
   rel="noopener noreferrer">
    <i class="fab fa-tiktok"></i>
    <h3>TikTok</h3>
    <p>コーヒー豆焙煎動画、ショート動画</p>
</a>

<!-- STORESリンク -->
<a href="https://midikanacoffee.stores.jp/" 
   class="social-card stores" 
   target="_blank" 
   rel="noopener noreferrer">
    <i class="fas fa-shopping-cart"></i>
    <h3>STORES</h3>
    <p>オンラインショップ</p>
</a>

<!-- NOTEリンク -->
<a href="https://note.com/midikanacoffee" 
   class="social-card note" 
   target="_blank" 
   rel="noopener noreferrer">
    <i class="fas fa-sticky-note"></i>
    <h3>NOTE</h3>
    <p>コーヒー豆情報やレシピ記事</p>
</a>

<!-- Spotifyリンク -->
<a href="https://open.spotify.com/user/31cm44f45ws34orqbkywdusoo37m?si=c580664022794caf" 
   class="social-card spotify" 
   target="_blank" 
   rel="noopener noreferrer">
    <i class="fab fa-spotify"></i>
    <h3>Spotify</h3>
    <p>営業日用プレイリスト、音楽</p>
</a>

<!-- LINEリンク -->
<a href="https://lin.ee/zCpXlzg" 
   class="social-card line" 
   target="_blank" 
   rel="noopener noreferrer">
    <i class="fab fa-line"></i>
    <h3>LINE</h3>
    <p>直接コミュニケーション</p>
</a>
```

## 📈 今後の拡張予定

### Phase 1（短期：1-3ヶ月）
- [ ] Google Analytics 4の実装
- [ ] SEO最適化（メタタグ、構造化データ）
- [ ] パフォーマンス最適化
- [ ] ファビコン・アプリアイコン追加

### Phase 2（中期：3-6ヶ月）
- [ ] ブログ機能の追加
- [ ] オンライン注文システム統合
- [ ] 多言語対応（英語版）
- [ ] お問い合わせフォーム実装

### Phase 3（長期：6ヶ月以上）
- [ ] PWA（Progressive Web App）化
- [ ] 管理画面の追加
- [ ] 顧客データベース統合
- [ ] AIチャットボット導入

## 📞 サポート・保守

### 開発者向け
- **コードレビュー**: プルリクエストでの改善提案
- **ドキュメント**: 実装ガイドの継続更新
- **テスト**: 自動テストの実装

### 店舗オーナー向け
- **コンテンツ更新**: 簡単な更新手順書提供
- **カスタマイズ**: デザイン変更のサポート
- **運用サポート**: 定期的なメンテナンス

## 📄 ライセンス・権利

### ライセンス
- **コード**: MITライセンス
- **デザイン**: 店舗オリジナル
- **画像**: 店舗所有権

### 使用ライブラリ
- **Font Awesome**: MITライセンス
- **Google Fonts**: Apache 2.0ライセンス

---

**最終更新**: 2025年06月
**バージョン**: 2.0.0
**作成者**: Claude Code Assistant
**承認者**: みぢかな珈琲 オーナー

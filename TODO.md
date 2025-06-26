# TODOリスト：Astro化＆Netlifyデプロイ

- [ ] 1. Astroプロジェクトの初期化
    - [x] `npm create astro@latest` を実行し、既存ディレクトリを選択
    - [ ] テンプレートは「Empty」または「Minimal」を選択
    - [ ] 依存パッケージをインストール

- [ ] 2. 既存ファイルのAstroプロジェクトへの移行
    - [ ] `index.html` を `src/pages/index.astro` に変換
    - [ ] `style.css` を `src/styles/style.css` に移動し、`index.astro`で読み込む
    - [ ] 画像やアセットを `public` または `src/assets` へ移動

- [ ] 3. ローカルでAstro開発サーバーを起動し、表示確認
    - [ ] `npm run dev` を実行
    - [ ] ブラウザで `http://localhost:4321` などにアクセスし、表示を確認

- [ ] 4. GitHubにコミット＆プッシュ
    - [ ] 変更内容をコミット
    - [ ] GitHubリポジトリにプッシュ

- [ ] 5. Netlifyアカウント作成＆ログイン
    - [ ] https://www.netlify.com/ でアカウント作成またはログイン

- [ ] 6. NetlifyでGitHubリポジトリと連携
    - [ ] 「New site from Git」からリポジトリを選択
    - [ ] ビルドコマンド: `npm run build` を設定
    - [ ] 公開ディレクトリ: `dist` を設定

- [ ] 7. Netlifyでデプロイ
    - [ ] デプロイボタンを押して公開
    - [ ] 公開URLで動作確認

- [ ] 8. Netlify CLIでローカルからデプロイ（任意）
    - [ ] `npm install -g netlify-cli` でCLIをインストール
    - [ ] `netlify login` でログイン
    - [ ] `netlify deploy` でデプロイ（公開ディレクトリは `dist`）
    - [ ] `netlify deploy --prod` で本番公開

---

**順番にチェックを付けて進めてください！** 
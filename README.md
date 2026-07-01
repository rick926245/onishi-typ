# 大西配列タイピング練習 - Onishi Typing Pro

日本語のローマ字入力に最適化されたモダンキーボード配列**「大西配列」**をタッチタイピングで効率的に練習できる、インタラクティブなWebアプリケーションです。

## 主な特徴

1. **仮想大西配列入力モード (デフォルトON)**
   - パソコンのOS設定に大西配列（Karabiner-ElementsやPowerToys等）を導入していなくても、**通常のQWERTYキーボードで打つだけで、アプリ内で自動的に大西配列に変換**して練習可能です。
   - すでに大西配列をOSに設定済みの方のために、入力キーをそのまま受け取る「OS設定モード」も切り替えられます。

2. **リアルタイム指ガイド (SVG)**
   - 次に押すべきキーと、それに対応する指（左右の手・10本）が連動してネオンカラーで脈動（パルス）します。
   - キートップには「大西配列としてのアルファベット」と、補助として薄く「QWERTYでのアルファベット」が併記されているため、キー配置を覚える前でも手元を見ずに練習できます。

3. **柔軟な複数スペル入力判定**
   - 日本語タイピングで一般的なローマ字スペル（`si`/`shi`, `ti`/`chi`, `tu`/`tsu`, `n`/`nn`, 促音など）のすべての組み合わせに動的に対応。ユーザーが入力した綴りに合わせて、画面のローマ字表示がリアルタイムに自動追従します。

4. **ベネッセのホームポジション練習を踏襲**
   - 制限時間設定（1分〜5分）
   - 得点計算式: **（正タイプ数 × 10点） - （誤タイプ数 × 5点）**
   - 習熟度に応じたレッスン 1〜5

## 導入・公開方法 (GitHub Pages)

このアプリはHTML、CSS、JavaScriptのみで構築されたSPA（シングルページアプリケーション）です。GitHub Pagesを利用して、完全無料でインターネット上に公開することができます。

### 1. ローカルGitの初期化と最初のコミット
ターミナルを開き、本フォルダで以下を実行します。
```bash
git init
git add .
git commit -m "Initial commit: Onishi Typing Pro app"
```

### 2. GitHubへのプッシュ
GitHubで新規リポジトリ（例: `onishi-typing`）を**Public**で作成し、表示された手順に従ってプッシュします。
```bash
git branch -m main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### 3. GitHub PagesでWebに公開する
1. GitHub上のリポジトリのページを開きます。
2. 右上の **「Settings」**（設定）をクリックします。
3. 左メニューの **「Pages」** をクリックします。
4. **Build and deployment** の **Source** が `Deploy from a branch` になっていることを確認します。
5. **Branch** で `main`（または `master`）を選択し、フォルダを `/ (root)` のままにして **「Save」** をクリックします。
6. 数分待つと、ページ上部に公開URL（例: `https://<your-username>.github.io/<your-repo-name>/`）が表示され、世界中からブラウザで遊べるようになります！

---
大西配列についての詳細は、考案者公式サイト [o24.works](https://o24.works/layout/) を参照してください。

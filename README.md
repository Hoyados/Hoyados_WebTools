# ベイズ成功確率推定ツール（GitHub Pages 対応）

「成功回数」と「試行回数」から、真の成功確率 `p` をベイズ推定する静的 Web サイトです。  
サーバー不要で、GitHub Pages にそのまま配置して公開できます。

## 特徴

- 単一ページ（`index.html`）で完結
- 日本語 UI
- レスポンシブ対応（PC / スマホ）
- 入力変更時に即時再計算
- 事後分布（Beta 分布）をグラフ表示
- 観測比率・事後平均・事後中央値・最頻値・信用区間を表示

## 推定モデル

- 事前分布: `Beta(1,1)`
- 事後分布: `Beta(成功回数+1, 失敗回数+1)`

表示項目:

- 観測比率（成功回数 / 試行回数）
- 事後平均
- 事後中央値
- 最頻値（定義できない場合はその旨を表示）
- 指定レベルの信用区間

## ローカルでの確認方法

### 方法1: 直接開く（最も簡単）

1. リポジトリを clone
2. `index.html` をブラウザで開く

### 方法2: ローカルサーバーで確認（任意）

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開いて確認します。

## GitHub Pages 公開手順（初心者向け）

1. GitHub にリポジトリを push する
2. GitHub のリポジトリ画面で **Settings** を開く
3. 左メニューの **Pages** を開く
4. **Build and deployment** の **Source** を `Deploy from a branch` にする
5. **Branch** を `main`（または公開したいブランチ） / `/ (root)` にして **Save**
6. 数分待つと、表示された URL で公開ページにアクセス可能

## ファイル構成

```text
.
├── README.md
├── index.html
├── ddr_flare_gauge.html
├── csv_dashboard.html
├── gacha_simulator.html
├── sorting_visualizer.html
└── .nojekyll
```

## 実装メモ

- 数値計算は JavaScript のみで実装し、依存ライブラリは使っていません。
- GitHub Pages での可搬性と、長期運用時のメンテナンス性を優先した構成です。

# Hoyados Web Tools

GitHub Pages でそのまま公開できる、静的 HTML/CSS/JavaScript ツール集です。
インストールやユーザー登録は不要で、各ツールの処理はブラウザ上で完結します。

## デザインシステム

- `site.css` にカラー、タイポグラフィ、レスポンシブレイアウトを集約
- `site.js` で全ツール共通のナビゲーションと、保存可能なライト／ダークテーマを提供
- キーボードフォーカス、スキップリンク、`prefers-reduced-motion` に対応
- トップページは目的を見つけやすい Bento グリッド形式のツールディレクトリ

## 収録ツール

- CSV 自動ダッシュボード
- ソートアルゴリズム可視化ツール
- ベイズ成功確率推定ツール
- DDR フレアゲージ計算機
- ガチャシミュレータ
- ルーレットメーカー

### ベイズ成功確率推定ツール

ファイル: `bayes_success_estimator.html`

### できること
- 成功回数・試行回数・信用区間レベル（90/95/99%）を入力
- 事前分布 `Beta(1,1)` に基づくベイズ推定
- 事後分布 `Beta(成功+1, 失敗+1)` を可視化
- 以下を表示
  - 観測比率
  - 事後平均
  - 事後中央値
  - 最頻値（定義できないケースは説明表示）
  - 指定した信用区間
- 0〜1 表示と % 表示を併記
- 入力変更時の即時再計算
- サンプルボタン（1/1, 0/10, 50/100 など）

## ローカル確認方法

### 方法1: ファイルを直接開く
1. このリポジトリを clone
2. `index.html` をブラウザで開く
3. 一覧から「ベイズ成功確率推定ツール」を開く

### 方法2: ローカルサーバーで確認（任意）

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開きます。

## GitHub Pages 公開手順（初心者向け）

1. リポジトリを GitHub に push する
2. GitHub のリポジトリ画面で **Settings** を開く
3. 左メニューの **Pages** を開く
4. **Source** を `Deploy from a branch` に設定
5. **Branch** は `main`、フォルダは `/ (root)` を選んで **Save**
6. 数分待つと公開 URL が表示されるのでアクセスする

## ディレクトリ構成

```text
.
├── .nojekyll
├── README.md
├── index.html
├── bayes_success_estimator.html
├── csv_dashboard.html
├── ddr_flare_gauge.html
├── gacha_simulator.html
├── roulette.html
├── sorting_visualizer.html
├── site.css
└── site.js
```

## 技術メモ

- サーバー不要の静的構成です。
- 数値計算は依存を増やさないため、JavaScript のみで実装しています。
- GitHub Pages で clone 後すぐ動作する構成を意図しています。

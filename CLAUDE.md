# CLAUDE.md — Strategy& / 大学スタイル プロジェクト概要

このファイルはClaude（AIエージェント）が本プロジェクトを正確に理解・操作するための参照文書です。
コードを書く前に必ずこのファイルを読んでください。

---

## 組織概要

| 項目 | 内容 |
|---|---|
| 組織名 | Strategy&（サービス名: 大学スタイル） |
| 設立 | 2024年2月 |
| メンバー | 3名 |
| 活動大学 | 北海道大学・東北大学 |
| ドメイン | strategy-and.art |
| Vercelプロジェクト | style（masatokawais-projects） |
| GitHubリポジトリ | MasatoKawai/style |

### ミッション
機会格差をなくし、誰もが「知っていれば選べた人生」を選べる世界をつくる。

---

## サイト構成（情報アーキテクチャ）

```
strategy-and.art/
├── /                   トップページ
├── /about              MVV・団体概要
├── /news               ニュースリリース一覧・記事
├── /services/
│   └── /shinkan-movie  新歓映画館LP
├── /daigaku-style/     大学祭セクション（旧: 大学スタイル）
│   ├── /              トップ
│   ├── /festivals     学祭カレンダー
│   ├── /platform      学祭プラットフォーム・交流会
│   └── /media/        取材記事
│       └── /[slug]    個別記事
└── /contact            お問い合わせ
```

### サービス体系
```
Strategy&
├── 機会リマインド（2025年リリース予定）
├── 新歓
│   ├── 新歓プラットフォーム（運用中）
│   └── 新歓映画館（NEW）
└── 学祭（大学スタイル）
    ├── 学祭メディア（取材・記事）
    ├── 学祭カレンダー
    ├── 学祭プラットフォーム（運用中）
    └── 学祭運営交流会（Coming Soon）
```

### ナビゲーション構成
- About → /about
- Services → /#services
- News → /news
- 新歓映画館（gold） → /services/shinkan-movie
- 大学祭（green） → /daigaku-style
- お問い合わせ（ボタン） → /contact
- ※ Contact の個別テキストリンクは存在しない

---

## 技術スタック

| 項目 | 内容 |
|---|---|
| フレームワーク | Astro v6（静的出力） |
| デプロイ | Vercel（GitHub連携、mainブランチ自動デプロイ） |
| スタイリング | コンポーネントスコープCSS（`<style>`タグ） |
| フォント | Google Fonts（Noto Sans JP） |
| フォーム | Formspree（FORMSPREE_ID環境変数） |
| コンテンツ管理 | Astro Content Collections（Markdownファイル） |
| メール難読化 | ObfuscatedEmail.astroコンポーネント |

---

## ファイル構成

```
src/
├── components/
│   ├── Header.astro        グローバルヘッダー（ナビ）
│   ├── Footer.astro        グローバルフッター
│   └── ObfuscatedEmail.astro メールアドレス難読化コンポーネント
├── layouts/
│   └── Layout.astro        共通レイアウト（head, header, footer）
├── pages/
│   ├── index.astro         トップ
│   ├── about.astro         MVV・団体概要
│   ├── contact.astro       お問い合わせ（Formspree）
│   ├── news/
│   │   ├── index.astro     ニュース一覧
│   │   └── [slug].astro    ニュース記事詳細
│   ├── services/
│   │   └── shinkan-movie.astro
│   └── daigaku-style/
│       ├── index.astro
│       ├── festivals.astro
│       ├── platform.astro
│       └── media/
│           ├── index.astro
│           └── [slug].astro
├── content/
│   ├── news/               Strategy& ニュースリリース（Markdown）
│   └── gakusai/            大学祭メディア記事（Markdown）
├── data/
│   └── festivals.ts        学祭カレンダーデータ
├── styles/
│   └── global.css          グローバルCSS変数・リセット
└── content.config.ts       Content Collections設定
```

---

## Content Collections

### `news` コレクション（`src/content/news/*.md`）
```ts
{
  title: string
  date: string          // "YYYY-MM-DD"
  category: string
  excerpt: string
  externalUrl?: string  // 外部リンクがある場合
  coverImage?: string   // 画像URL（WP等外部も可）
}
```

### `gakusai` コレクション（`src/content/gakusai/*.md`）
```ts
{
  title: string
  date: string
  excerpt: string
  university?: string
  festivalName?: string
  coverImage?: string
  tags?: string[]
  noteUrl?: string      // 元記事Note URL
}
```

---

## デザインシステム

### カラー（CSS変数 `src/styles/global.css`）
```css
--gold:    #ffb400   /* 新歓・メインCTA */
--purple:  #4a28b4   /* アクセント */
--bg-dark: #0a0a0a   /* 背景（濃） */
--bg-card: #111111   /* カード背景 */
```
- 大学祭セクションのアクセントカラー: `#00dc64`（緑）
- ライトセクション（contactなど）: `section--light`クラス、背景 `#f5f5f5`

### セクションパターン
```html
<section class="section section--dark">
  <div class="container">
    <p class="section-label">Label</p>
    <div class="section-divider"></div>
    <h2 class="section-title">タイトル</h2>
  </div>
</section>
```

---

## 重要な制約・注意事項

### Astro v6 の破壊的変更
- Content Collections config: `src/content.config.ts`（`src/content/config.ts`ではない）
- `glob` loaderが必須: `import { glob } from 'astro/loaders'`
- renderは独立関数: `import { render } from 'astro:content'` → `await render(post)`
- slug生成: `post.id.replace(/\.md$/, '')`（`post.slug`は使わない）

### メールアドレス
- サイト上に`mailto:`リンクを直接書かない
- 必ず`ObfuscatedEmail.astro`コンポーネントを使用
- `<ObfuscatedEmail user="info" domain="strategy-and.art" />`

### 学祭カレンダーの更新
- `src/data/festivals.ts` を直接編集
- インターフェース: `Festival { university, festivalName, prefecture, month, dateText, url?, note? }`

### デプロイ
- mainブランチへのpushでVercelが自動デプロイ
- 環境変数 `FORMSPREE_ID=meevdpaj` がVercelに設定済み
- ビルド確認: `npm run build`（エラーなしを確認してからpush）

---

## お問い合わせフォームのサービス選択肢（現在）

1. 新歓映画館企画
2. 新歓プラットフォーム
3. 学祭プラットフォーム
4. 学祭掲載（カレンダー）
5. 学祭取材
6. 学祭運営交流会
7. 広告掲載
8. その他

---

## 関連リンク

- 本番サイト: https://strategy-and.art（現在DNSがWordPressのため未切替）
- Vercelプレビュー: https://style-57v4m9e01-masatokawais-projects.vercel.app
- Instagram: https://www.instagram.com/gakusei_style/
- Note: https://note.com/gaku_sai
- Knowledge Station（学祭データ参照元）: https://www.gakkou.net/daigaku/gakuensai/

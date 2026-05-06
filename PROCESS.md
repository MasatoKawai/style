# PROCESS.md — 開発・運用フロー

Claudeエージェントおよび開発者が参照する作業フロー文書。
作業前に必ず `CLAUDE.md` も読むこと。

---

## 基本ルール

1. **コードを書く前にビルドを確認する**: `npm run build` でエラーがないことを確認してからpush
2. **mainブランチに直接push**: このプロジェクトはフィーチャーブランチなし、mainへ直接コミット
3. **pushするとVercelが自動デプロイ**: 意図しないコードをpushしない
4. **メールアドレスはObfuscatedEmailコンポーネントを使う**: 直接`mailto:`を書かない

---

## 記事・コンテンツの追加

### ニュースリリースを追加する
1. `src/content/news/` にMarkdownファイルを作成
2. ファイル名がURLのslugになる（例: `hokudai-2025.md` → `/news/hokudai-2025`）
3. 必須フロントマター:
```yaml
---
title: "記事タイトル"
date: "2025-06-01"
category: "プレスリリース"  # or "お知らせ" / "イベント" / "取材"
excerpt: "記事の要約（一覧表示に使用）"
coverImage: "https://..."   # 任意
externalUrl: "https://..."  # 外部リンクがある場合
---
```
4. `npm run build` でエラーがないことを確認
5. `git add` → `git commit` → `git push`

### 学祭メディア記事を追加する
1. `src/content/gakusai/` にMarkdownファイルを作成
2. 必須フロントマター:
```yaml
---
title: "記事タイトル"
date: "2025-11-01"
excerpt: "記事の要約"
university: "東京大学"      # 任意
festivalName: "駒場祭"      # 任意
coverImage: "https://..."   # 任意
tags: ["インタビュー", "東京大学"]  # 任意
noteUrl: "https://note.com/gaku_sai/n/xxx"  # 任意
---
```
3. 本文はMarkdown形式で記述（`##` で見出し、`**太字**` など）

---

## 学祭カレンダーの更新

`src/data/festivals.ts` を直接編集する。

### 学祭を追加する
```ts
// festivals配列に追記
{ university: "○○大学", festivalName: "○○祭", prefecture: "東京", month: 11, dateText: "11月上旬（予定）", url: "https://..." },
```

### フィールド説明
| フィールド | 型 | 説明 |
|---|---|---|
| university | string | 大学名 |
| festivalName | string | 学祭名 |
| prefecture | string | 都道府県（フィルター用） |
| month | number | 主要開催月（1〜12） |
| dateText | string | 表示用テキスト（例: "11月3日〜5日"） |
| url | string? | 公式サイトURL（任意） |
| note | string? | 備考（任意） |

---

## 新規ページの追加

### 通常ページ
1. `src/pages/` に `.astro` ファイルを作成
2. `Layout.astro` をimportして使用
3. `title` と `description` を必ず設定

### 新規セクション（サブディレクトリ）
1. `src/pages/[セクション名]/index.astro` を作成（トップページ）
2. 必要に応じて `[slug].astro` （動的ルーティング）を追加
3. Content Collectionが必要な場合は `src/content.config.ts` に追加

---

## お問い合わせフォームの変更

`src/pages/contact.astro` を編集。

### サービス選択肢の追加
```html
<label class="checkbox-label">
  <input type="checkbox" name="サービス" value="新しいサービス名" />
  <span class="checkbox-custom"></span>
  新しいサービス名
</label>
```
※ サイドバー（`aside-services`）にも対応するアイテムを追加すること。

---

## デプロイ手順

```bash
# 1. ビルドエラーがないか確認
npm run build

# 2. 変更をステージング
git add <変更ファイル>

# 3. コミット
git commit -m "変更内容の説明"

# 4. push（Vercelが自動デプロイ）
git push
```

### Vercelの環境変数
- `FORMSPREE_ID=meevdpaj`（設定済み）
- 新規環境変数が必要な場合: Vercel Dashboard → Settings → Environment Variables → Save → Redeploy

---

## よくあるエラーと対処

| エラー | 原因 | 対処 |
|---|---|---|
| `LegacyContentConfigError` | content config の場所が違う | `src/content.config.ts`（`src/content/config.ts`ではない） |
| `post.render is not a function` | Astro v6のAPI変更 | `import { render } from 'astro:content'` → `await render(post)` |
| スラッグが取れない | v6のAPI変更 | `post.id.replace(/\.md$/, '')` を使う |
| Vercelで環境変数が効かない | ビルド時に未設定 | 変数追加後に必ずRedeploy |

---

## 複数エージェント運用時の注意

- **同時編集禁止**: 同じファイルを複数エージェントが同時編集しない
- **コミット前に確認**: `git status` と `git diff` で変更内容を確認
- **ビルド必須**: pushの前に必ず `npm run build` でエラーがないことを確認
- **CLAUDE.mdを最新に保つ**: 構造変更・新機能追加時は必ず更新
- **ファイル命名**: kebab-case（例: `hokudai-shinsai-2025.md`）

---

## コンポーネント使用ガイド

### ObfuscatedEmail（メールアドレス難読化）
```astro
---
import ObfuscatedEmail from '../components/ObfuscatedEmail.astro';
---
<ObfuscatedEmail user="info" domain="strategy-and.art" />
<ObfuscatedEmail user="info" domain="strategy-and.art" class="aside-email" label="メールで問い合わせる" />
```

### Layout
```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout
  title="ページタイトル | Strategy&"
  description="ページの説明文（SEO用）"
  ogImage="https://..."
>
  <!-- コンテンツ -->
</Layout>
```

---

## 更新履歴

| 日付 | 更新内容 |
|---|---|
| 2025-05-06 | 初版作成。大学祭セクション追加、Note記事5本移行 |
| 2025-05-06 | ナビ「大学祭」に変更、Contact削除、フォームに学祭選択肢追加 |

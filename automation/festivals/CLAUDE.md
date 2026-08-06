# CLAUDE.md — 学祭データ自動更新エージェント

定期実行エージェント。確認なしで festivals.ts を更新し、GitHubにpushする。

---

## 対象ファイル

- **学祭データ（読み書き）**: `/Users/masato/Project/2026/style/src/data/festivals.ts`
- **大学マスタ（読み書き）**: `/Users/masato/Project/2026/style/src/data/universities.json`
- **HPリポジトリ**: `/Users/masato/Project/2026/style/`
- **ログ保存先**: `/Users/masato/Project/2026/style/automation/festivals/materials/`

---

## 優先大学の決め方

**universities.json を参照して未掲載大学を特定する。**

1. `universities.json` を読み込む（764件）
2. `festivals.ts` に掲載済みの大学名リストと照合する
3. 未掲載の大学を `studentCount` の降順で並べ、上位から順に調査対象とする
4. `studentCount` が未設定の大学は後回し（学生規模が不明なため）

**旧来の固定 Tier リスト（参考）**:
- Tier 1: 東京大学、京都大学、一橋大学、東京科学大学、早稲田大学、慶應義塾大学
- Tier 2: 東北大学、北海道大学、名古屋大学、大阪大学、九州大学
- Tier 3: 明治大学、立教大学、青山学院大学、中央大学、法政大学、上智大学、同志社大学、立命館大学、関西大学、関西学院大学、横浜国立大学、筑波大学、千葉大学、神戸大学、広島大学、岡山大学、金沢大学

---

## データ構造（Festival interface）

```typescript
{
  university: string;        // 大学名
  festivalName: string;      // 学祭名
  prefecture: string;        // 都道府県
  month: number;             // 主要開催月
  dateText: string;          // 表示用（例: "5月16日〜17日" / "11月上旬（予定）"）
  slug?: string;             // URLスラッグ（例: "todai-gogatsu"）— 詳細ページ生成に必須
  startDate?: string;        // "YYYY-MM-DD"（確定時のみ）
  endDate?: string;          // "YYYY-MM-DD"（複数日の場合）
  url?: string;              // 公式サイト
  sponsorStatus?: 'open' | 'closed' | 'unknown';
  reach?: string;            // 来場者数（例: "約15万人"）
  studentCount?: string;     // 在籍学生数（例: "約2.8万人"）
  venue?: string;            // 会場名（例: "本郷キャンパス"）
  history?: string;          // 開催回数（例: "第99回"）
  description?: string;      // 学祭紹介文（100〜200字）
  highlights?: string[];     // 見どころリスト（3〜5項目）
  instagramUrl?: string;     // Instagram公式アカウントURL
  xUrl?: string;             // X(Twitter)公式アカウントURL
  sponsorContact?: string;   // 協賛問い合わせ先URL
  pastSponsors?: string;     // 過去スポンサー例（確認できた場合）
}
```

### slug の命名規則
- 形式: `[大学略称]-[学祭略称]`（ローマ字・ハイフン区切り・小文字）
- 例: 東京大学五月祭 → `todai-gogatsu`、早稲田祭 → `waseda`
- 大学名が明確なら省略してもよい（例: `hokudai`、`meidai`）
- slug がある学祭のみ詳細ページ（`/festivals/[slug]`）が生成される

---

## 実行手順（毎回この順番で実行）

### Step 1: 両ファイルを読み込む

1. `festivals.ts` を読む → 掲載済み大学名リスト・日程確定状況を把握
2. `universities.json` を読む → 全764大学の studentCount で降順ソートし、未掲載大学の優先順位を決める

### Step 2: 3種類の更新判定を行う

#### A. 未掲載大学の追加（毎回最大5件）
- `universities.json` の studentCount 降順で未掲載大学を上位から選ぶ
- WebSearchで以下を収集:
  - 基本: 学祭名・開催月・日程・来場者数・公式URL
  - 詳細ページ用: `slug`（命名規則参照）・`venue`（会場）・`history`（第X回）・`description`（100〜200字紹介文）・`highlights`（見どころ3〜5項目）・`instagramUrl`・`xUrl`・`sponsorContact`
- 確認できない情報は省略（推測で入れない）。日程のみ不明なら「〇月上旬（予定）」等で埋める
- **slug は必ず設定する**（詳細ページが生成されるため）
- **universities.json の studentCount が未設定の場合**: 同じ調査の中で学生数も調べ、確認できたら universities.json も更新する

#### B. 日程未確定の更新（dateTextに「予定」を含むもの）
- WebSearchで `"[学祭名] 2026 日程"` を検索
- 確定情報があれば startDate/endDate を追加し、dateTextから「（予定）」を外す
- 情報が見つからなければスキップ（変更しない）

#### C. 直前確認（今日の日付を基準に判定）
- **30日以内に startDate がある学祭** → 優先的にWebSearchで最新情報確認
- **7日以内に startDate がある学祭** → さらに詳細な情報（スポンサー・来場者数）を収集
- 変更があれば更新、なければスキップ

#### D. 詳細ページ情報の補完（毎回最大3件）
- slug はあるが `description` や `venue` など詳細情報が不足している学祭を選ぶ
- WebSearchで `description`・`highlights`・`instagramUrl`・`xUrl`・`sponsorContact`・`pastSponsors` を調査
- 確認できた情報のみ追加する（推測で入れない）

### Step 3: 変更がある場合のみファイルを更新

- 変更がない場合はログのみ書いて終了
- `festivals.ts` に変更がある場合は直接編集
- `universities.json` に学生数を追加した場合も同様に保存

### Step 4: ビルド確認 → git commit → push

```bash
cd /Users/masato/Project/2026/style
npm run build
git add src/data/festivals.ts src/data/universities.json
git commit -m "data: 学祭データ定期更新 $(date +%Y-%m-%d) — 追加X件・更新Y件"
git push origin main
```

ビルドが失敗した場合は変更を revert して終了し、ログにエラーを記録する。

### Step 5: ログ保存

`materials/YYYY-MM-DD_auto-update.md` に以下を記録:
- 実行日時
- 追加した大学祭（件数・内容）
- 更新した内容（件数・内容）
- universities.json に追加した学生数（件数・大学名）
- 変更なしの場合もその旨を記録
- エラーがあれば詳細を記録

---

## ルール

- **確認不要**: 更新・pushを自律的に実行する
- **不確かな情報には「（予定）」を付ける**
- **startDate は確定情報のみ設定**（推測で入れない）
- **sponsorStatus**:
  - `'open'`: 公式サイトで協賛募集が確認できた
  - `'closed'`: 募集終了が確認できた
  - `'unknown'`: 確認できない（デフォルト）
- **ビルドエラーが出たら必ずrevertする**（壊れた状態でpushしない）
- **universities.json の studentCount**: 確認できた実数のみ設定。推測・概算は入れない。単位は人（整数）。

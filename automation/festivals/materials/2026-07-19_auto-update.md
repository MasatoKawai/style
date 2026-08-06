# 学祭データ定期更新ログ — 2026-07-19

## 実行日時
2026-07-19

## Step 2A: 新規追加（3件）

未掲載大学をuniversities.jsonのstudentCount降順で調査。上位候補（千葉大学10,408・関西外大10,380・立正大学10,286・九州産業大学10,283・摂南大学10,226・岡山大学10,140・筑波大学9,634）を検索した結果、2026年確定/有力情報が得られた以下3件を追加:

1. **筑波大学 / 雙峰祭** (slug: tsukuba-sohosai)
   - 10月31日〜11月1日（2026年確定日程）
   - 茨城・筑波大学キャンパス・来場者約4万人以上
   - description・highlights・Instagram/X URL 設定済み

2. **千葉大学 / 千葉大祭** (slug: chiba-daigakusai)
   - 11月上旬（予定）- 2026年確定日程未発表
   - 千葉・西千葉キャンパス・来場者約4万人
   - description・highlights・Instagram/X URL 設定済み

3. **岡山大学 / 津島祭** (slug: okadai-tsushima)
   - 11月上旬（予定）- 2026年確定日程未発表（2025年は11/1-2開催）
   - 岡山・津島キャンパス・学生数約1万人
   - description・highlights・Instagram URL 設定済み

未追加（2026年日程情報未確認）:
- 関西外国語大学: 2025年は10/25-26。2026年情報なし
- 立正大学: 橘花祭（品川）・星霜祭（熊谷）。日程未確認
- 九州産業大学: 学文祭（5月開催）。日程未確認
- 摂南大学: 摂大祭。日程未確認

## Step 2B: 日程確定更新（予定→確定）

以下の学祭で2026年確定日程が判明し更新:

| 大学 | 学祭名 | 更新後日程 |
|------|--------|-----------|
| 東京科学大学（旧東京工業大学） | 工大祭 | 10月10日〜11日（第64回） |
| 上智大学 | ソフィア祭 | 11月1日〜4日 |
| 神戸大学 | 六甲祭 | 11月7日〜8日 |
| 関西学院大学 | 新月祭（上ケ原） | 11月7日〜8日 |
| 中央大学 | 白門祭 | 10月31日〜11月3日 |
| 法政大学 | 自主法政祭 | 10月31日〜11月3日 |
| 同志社大学 | 同志社EVE | 11月26日〜28日 |
| 立命館大学 | 衣笠祭典 | 11月1日 |
| 京都大学 | 11月祭 | 11月20日〜23日 |

日程未確認（変更なし）:
- 学習院大学、東京学芸大学、横浜国立大学、北海道大学エルムの森、広島大学、関西大学、慶應義塾大学日吉祭 など

## Step 2D: 詳細情報補完

以下の学祭にdescription・highlights・SNS URL等を追加:

| 大学 | 補完内容 |
|------|---------|
| 神戸大学（六甲祭） | description・highlights・Instagram/X URL・日程・come場者数・会場 |
| 関西学院大学（新月祭） | description・highlights・Instagram/X URL・studentCount・会場 |
| 中央大学（白門祭） | description・highlights・Instagram/X URL・来場者数・会場 |
| 法政大学（自主法政祭） | description・highlights・Instagram URL・会場・studentCount |
| 広島大学（広大祭） | description・highlights・Instagram URL・url・venue・studentCount |
| 京都大学（11月祭） | description更新・reach追加・studentCount・url修正 |
| 同志社大学（同志社EVE） | description・highlights・Instagram URL・studentCount・history（第150回） |
| 立命館大学（衣笠祭典） | description・highlights・xUrl・studentCount |
| 東京科学大学（工大祭） | description・highlights・xUrl・history・studentCount・venue |
| 上智大学（ソフィア祭） | description・highlights |

## 学祭名・大学名の修正

| 修正前 | 修正後 |
|--------|--------|
| 東京工業大学 | 東京科学大学（改名済みに対応） |
| 関学祭 | 新月祭（正式名称に修正） |
| 法政大学学園祭 | 自主法政祭 |
| 同志社大学学園祭 | 同志社EVE |
| 立命祭 | 衣笠祭典（衣笠キャンパス祭典の正式名） |
| 白門祭（茗荷谷） | 白門祭（多摩キャンパスのもので更新） |

## 変更なし

- universities.json: 今回は学生数の新規追加なし（上位大学はすでにstudentCount設定済み）

## ビルド・push

- ビルド: 成功 ✅
- 新規詳細ページ生成: tsukuba-sohosai / chiba-daigakusai / okadai-tsushima
- git push origin main: 成功 ✅

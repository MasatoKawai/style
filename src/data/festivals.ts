// 学祭カレンダーデータ
// ベース：ナレッジステーション (https://www.gakkou.net/daigaku/gakuensai/) + 各公式サイト
// 更新日：2026年5月24日（Company/style/festivals/materials/ 参照）

export interface Festival {
  university: string;
  festivalName: string;
  prefecture: string;
  month: number;
  dateText: string;
  slug?: string;         // URLスラッグ（例: "todai-gogatsu"）詳細ページ用
  startDate?: string;    // "YYYY-MM-DD" 確定日程がある場合
  endDate?: string;      // "YYYY-MM-DD" 複数日の場合
  url?: string;
  note?: string;
  sponsorStatus?: 'open' | 'closed' | 'unknown';
  reach?: string;        // 想定来場者数（例: "約10万人"）
  studentCount?: string; // 在籍学生数（例: "約2.8万人"）
  venue?: string;        // 会場名（例: "本郷キャンパス"）
  history?: string;      // 開催回数（例: "第99回"）
  description?: string;  // 学祭紹介文（100〜200字）
  highlights?: string[]; // 見どころリスト
  instagramUrl?: string; // Instagram公式アカウントURL
  xUrl?: string;         // X(Twitter)公式アカウントURL
  sponsorContact?: string; // 協賛問い合わせ先URL
  pastSponsors?: string; // 過去スポンサー例
}

export const festivals: Festival[] = [
  // ===== 5月 =====
  {
    university: "東京大学", festivalName: "五月祭", prefecture: "東京", month: 5,
    slug: "todai-gogatsu",
    dateText: "5月16日〜17日", startDate: "2026-05-16", endDate: "2026-05-17",
    url: "https://visitor.gogatsusai.jp", sponsorStatus: "unknown",
    reach: "約15万人", studentCount: "約2.8万人",
    venue: "本郷キャンパス", history: "第99回",
    description: "東京大学本郷キャンパスで毎年5月に開催される日本最大規模の学術文化祭。学生・教員による研究発表・企画展示・模擬店・ステージなど多彩なプログラムが2日間にわたって展開される。",
    highlights: ["学術展示・研究発表が充実", "大規模ステージイベント", "約150以上の模擬店"],
  },
  {
    university: "東北大学", festivalName: "青葉まつり", prefecture: "宮城", month: 5,
    slug: "tohoku-aoba",
    dateText: "5月16日〜17日（予定）", startDate: "2026-05-16", endDate: "2026-05-17",
    sponsorStatus: "open", reach: "約3万人", studentCount: "約1.8万人",
    venue: "川内キャンパス",
  },
  {
    university: "大阪大学", festivalName: "いちょう祭", prefecture: "大阪", month: 5,
    slug: "osaka-icho",
    dateText: "5月23日〜24日（予定）", startDate: "2026-05-23", endDate: "2026-05-24",
    sponsorStatus: "unknown", reach: "約5万人", studentCount: "約2.3万人",
    venue: "豊中キャンパス",
  },
  {
    university: "明治学院大学", festivalName: "戸塚まつり", prefecture: "神奈川", month: 5,
    slug: "meijigakuin-totsuka",
    dateText: "5月24日（予定）", startDate: "2026-05-24", endDate: "2026-05-24",
    sponsorStatus: "open",
    reach: "約5,000人", studentCount: "約1万人",
    venue: "戸塚キャンパス",
  },

  // ===== 6月 =====
  {
    university: "北海道大学", festivalName: "北大祭", prefecture: "北海道", month: 6,
    slug: "hokudai",
    dateText: "6月5日〜7日", startDate: "2026-06-05", endDate: "2026-06-07",
    url: "https://hokudaisai.com", sponsorStatus: "open",
    reach: "約10〜12万人", studentCount: "約1.8万人",
    venue: "北海道大学キャンパス", history: "第68回",
    description: "北海道大学のキャンパス全体を使った大規模な学園祭。模擬店・ライブ・展示・スポーツ大会など多彩なイベントが3日間にわたって繰り広げられる。",
    highlights: ["ポプラ並木沿いの露店", "大型ステージライブ", "農学部の新鮮食材を使った模擬店"],
  },
  {
    university: "名古屋大学", festivalName: "名大祭", prefecture: "愛知", month: 6,
    slug: "meidai",
    dateText: "6月11日〜14日", startDate: "2026-06-11", endDate: "2026-06-14",
    sponsorStatus: "unknown", reach: "約3万人", studentCount: "約1.6万人",
    venue: "東山キャンパス", history: "第67回",
  },

  // ===== 10月 =====
  {
    university: "東北大学", festivalName: "東北大学祭", prefecture: "宮城", month: 10,
    slug: "tohoku-daigakusai",
    dateText: "10月23日〜25日（予定）", startDate: "2026-10-23", endDate: "2026-10-25",
    url: "https://www.festa-tohoku.org", sponsorStatus: "open",
    reach: "約3万人", studentCount: "約1.8万人",
    venue: "川内キャンパス",
  },
  { university: "立教大学", festivalName: "立教大学学院祭", prefecture: "東京", month: 10, slug: "rikkyo", dateText: "10月下旬〜11月上旬（予定）", sponsorStatus: "unknown" },
  { university: "青山学院大学", festivalName: "青山祭", prefecture: "東京", month: 10, slug: "aoyama", dateText: "10月下旬（予定）", url: "https://aoyamasai.net", sponsorStatus: "unknown" },
  { university: "学習院大学", festivalName: "常磐祭", prefecture: "東京", month: 10, slug: "gakushuin-tokiwa", dateText: "10月下旬（予定）", sponsorStatus: "unknown" },
  { university: "東京学芸大学", festivalName: "小金井祭", prefecture: "東京", month: 10, slug: "gakugei-koganei", dateText: "10月下旬〜11月上旬（予定）", sponsorStatus: "unknown" },
  { university: "上智大学", festivalName: "ソフィア祭", prefecture: "東京", month: 10, slug: "sophia", dateText: "10月下旬（予定）", sponsorStatus: "unknown" },
  { university: "東京工業大学", festivalName: "工大祭", prefecture: "東京", month: 10, slug: "titech", dateText: "10月中旬（予定）", sponsorStatus: "unknown" },
  { university: "横浜国立大学", festivalName: "常盤祭", prefecture: "神奈川", month: 10, slug: "yokonoku-tokiwa", dateText: "10月下旬（予定）", sponsorStatus: "unknown" },
  { university: "神戸大学", festivalName: "神大祭", prefecture: "兵庫", month: 10, slug: "kobe", dateText: "10月下旬（予定）", sponsorStatus: "unknown" },
  { university: "関西学院大学", festivalName: "関学祭", prefecture: "兵庫", month: 10, slug: "kwansei", dateText: "10月下旬（予定）", sponsorStatus: "unknown" },
  { university: "北海道大学", festivalName: "エルムの森", prefecture: "北海道", month: 10, slug: "hokudai-elm", dateText: "10月中旬（予定）", sponsorStatus: "unknown" },

  // ===== 11月 =====
  {
    university: "早稲田大学", festivalName: "早稲田祭", prefecture: "東京", month: 11,
    slug: "waseda",
    dateText: "11月上旬（予定）", url: "https://wasedasai.net", sponsorStatus: "unknown",
    reach: "約20万人", studentCount: "約4.6万人",
    venue: "早稲田キャンパス",
    description: "日本最大規模の学生主体による文化祭。著名人ゲストの講演・ライブ、多数の企画・模擬店が展開され、2日間で約20万人が来場する。",
    highlights: ["著名人・芸能人ゲスト", "学生企画多数（500企画超）", "早稲田通りに連なる模擬店"],
  },
  {
    university: "慶應義塾大学", festivalName: "三田祭", prefecture: "東京", month: 11,
    slug: "keio-mita",
    dateText: "11月下旬4日間（予定）", url: "https://www.mitasai.com", sponsorStatus: "unknown",
    reach: "約20万人", studentCount: "約3.3万人",
    venue: "三田キャンパス",
    description: "慶應義塾大学三田キャンパスで毎年11月に開催される伝統の学園祭。企業・OBとの連携イベント、ライブ、展示など4日間にわたる大型イベント。",
    highlights: ["企業・OB連携イベントが充実", "大型ステージと屋外ライブ", "4日間の長期開催"],
  },
  {
    university: "東京大学", festivalName: "駒場祭", prefecture: "東京", month: 11,
    slug: "todai-komaba",
    dateText: "11月22日〜24日", startDate: "2026-11-22", endDate: "2026-11-24",
    url: "https://komabasai.net", sponsorStatus: "unknown",
    reach: "約5〜6万人", studentCount: "約2.8万人",
    venue: "駒場キャンパス", history: "第76回",
    description: "東京大学教養学部（1・2年生）が主体となって駒場キャンパスで開催する文化祭。学術的な展示・研究発表から演劇・音楽まで幅広いプログラムが揃う。",
    highlights: ["前期課程学生が企画・運営", "学術展示・研究発表", "ミスコン・ライブ等エンタメ企画"],
  },
  { university: "明治大学", festivalName: "明大祭", prefecture: "東京", month: 11, slug: "meiji", dateText: "11月中旬（予定）", sponsorStatus: "unknown" },
  { university: "中央大学", festivalName: "白門祭（茗荷谷）", prefecture: "東京", month: 11, slug: "chuo-hakumon", dateText: "11月上旬（予定）", sponsorStatus: "unknown" },
  { university: "法政大学", festivalName: "法政大学学園祭", prefecture: "東京", month: 11, slug: "hosei", dateText: "11月上旬（予定）", sponsorStatus: "unknown" },
  { university: "津田塾大学", festivalName: "津田ヶ谷祭", prefecture: "東京", month: 11, slug: "tsuda", dateText: "11月中旬（予定）", sponsorStatus: "unknown" },
  { university: "東京理科大学", festivalName: "理科大祭", prefecture: "東京", month: 11, slug: "tus", dateText: "11月中旬（予定）", sponsorStatus: "unknown" },
  { university: "一橋大学", festivalName: "一橋祭", prefecture: "東京", month: 11, slug: "hitotsubashi", dateText: "11月中旬（予定）", url: "https://hitotsubashisai.wixsite.com/website", sponsorStatus: "unknown" },
  { university: "慶應義塾大学", festivalName: "日吉祭", prefecture: "神奈川", month: 11, slug: "keio-hiyoshi", dateText: "11月中旬（予定）", sponsorStatus: "unknown" },
  {
    university: "京都大学", festivalName: "11月祭", prefecture: "京都", month: 11,
    slug: "kyodai-november",
    dateText: "11月中旬（予定）", url: "https://www.nov-fes.com", sponsorStatus: "unknown",
    venue: "吉田キャンパス",
    description: "京都大学で毎年11月に開催される自由な校風を象徴する学園祭。自主企画・展示・ライブ・討論会など個性的なプログラムが揃い、学生の自由な発想が際立つ。",
  },
  { university: "同志社大学", festivalName: "同志社大学学園祭", prefecture: "京都", month: 11, slug: "doshisha", dateText: "11月上旬（予定）", sponsorStatus: "unknown" },
  { university: "立命館大学", festivalName: "立命祭", prefecture: "京都", month: 11, slug: "ritsumeikan", dateText: "11月上旬（予定）", sponsorStatus: "unknown" },
  { university: "関西大学", festivalName: "関大まつり", prefecture: "大阪", month: 11, slug: "kansai", dateText: "11月中旬（予定）", sponsorStatus: "unknown" },
  { university: "広島大学", festivalName: "広大祭", prefecture: "広島", month: 11, slug: "hiroshima", dateText: "11月上旬（予定）", sponsorStatus: "unknown" },
  { university: "九州大学", festivalName: "九大祭", prefecture: "福岡", month: 11, slug: "kyushu", dateText: "11月中旬（予定）", sponsorStatus: "unknown" },
  {
    university: "日本大学", festivalName: "桜麗祭", prefecture: "東京", month: 11,
    slug: "nihon-u-ohrei",
    dateText: "11月上旬（予定）",
    sponsorStatus: "unknown", studentCount: "約6.7万人",
    venue: "世田谷キャンパス（文理学部）",
    description: "日本大学文理学部（世田谷キャンパス）で毎年11月に開催される学部祭。屋台・ステージ企画・展示など多彩なプログラムが展開される。日本最大規模の学生数を誇る日本大学の文化系学部を代表する学園祭。",
  },
  {
    university: "近畿大学", festivalName: "生駒祭", prefecture: "大阪", month: 11,
    slug: "kindai-ikoma",
    dateText: "11月2日〜4日（予定）", startDate: "2026-11-02", endDate: "2026-11-04",
    sponsorStatus: "unknown", reach: "約10万人超", studentCount: "約3.5万人",
    venue: "東大阪キャンパス",
    description: "近畿大学東大阪キャンパスで毎年11月に開催される西日本最大級の大学祭。170店の屋台にキャッシュレス決済を導入するなど革新的な運営で知られ、パレードや大型ライブも行われる。",
    highlights: ["西日本最大級の規模", "全屋台キャッシュレス対応", "近大通りパレード", "大型アーティストライブ"],
    instagramUrl: "https://www.instagram.com/ikomasai_kindai/",
    xUrl: "https://x.com/ikomasai_kindai",
  },
  {
    university: "東洋大学", festivalName: "白山祭", prefecture: "東京", month: 11,
    slug: "toyo-hakusan",
    dateText: "11月上旬（予定）",
    url: "https://www.hakusansai.com/", sponsorStatus: "unknown",
    studentCount: "約3.1万人",
    venue: "白山キャンパス",
    instagramUrl: "https://www.instagram.com/hakusanfes/",
    xUrl: "https://x.com/toyo_hakusansai",
  },
  {
    university: "東海大学", festivalName: "建学祭", prefecture: "神奈川", month: 11,
    slug: "tokai-kengaku",
    dateText: "11月1日〜3日（予定）", startDate: "2026-11-01", endDate: "2026-11-03",
    url: "https://shonan-kengakusai.com/", sponsorStatus: "unknown",
    studentCount: "約2.9万人",
    venue: "湘南キャンパス",
    instagramUrl: "https://www.instagram.com/kengakusai_s/",
    xUrl: "https://x.com/kengakusai_s",
  },
  {
    university: "帝京大学", festivalName: "帝祭", prefecture: "東京", month: 11,
    slug: "teikyo",
    dateText: "11月上旬（予定）",
    sponsorStatus: "unknown", studentCount: "約2.3万人",
    venue: "八王子キャンパス",
  },
];

export const prefectures = [...new Set(festivals.map(f => f.prefecture))].sort();
export const months = [...new Set(festivals.map(f => f.month))].sort((a, b) => a - b);

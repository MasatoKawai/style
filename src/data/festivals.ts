// 学祭カレンダーデータ
// ベース：ナレッジステーション (https://www.gakkou.net/daigaku/gakuensai/)
// 更新日：2026年5月

export interface Festival {
  university: string;
  festivalName: string;
  prefecture: string;
  month: number;
  dateText: string;
  startDate?: string;   // "YYYY-MM-DD" 確定日程がある場合
  endDate?: string;     // "YYYY-MM-DD" 複数日の場合
  url?: string;
  note?: string;
  sponsorStatus?: 'open' | 'closed' | 'unknown';
  reach?: string;       // 想定来場者数（例: "約10万人"）
  studentCount?: string; // 在籍学生数（例: "約2.8万人"）
}

export const festivals: Festival[] = [
  // ===== 5月 =====
  { university: "東京大学", festivalName: "五月祭", prefecture: "東京", month: 5, dateText: "5月16日〜17日", startDate: "2026-05-16", endDate: "2026-05-17", url: "https://gogatsusai.jp", sponsorStatus: "unknown", reach: "約10万人", studentCount: "約2.8万人" },
  { university: "東北大学", festivalName: "青葉まつり", prefecture: "宮城", month: 5, dateText: "5月16日〜17日（予定）", startDate: "2026-05-16", endDate: "2026-05-17", sponsorStatus: "open", reach: "約3万人", studentCount: "約1.8万人" },
  { university: "大阪大学", festivalName: "いちょう祭", prefecture: "大阪", month: 5, dateText: "5月23日〜24日（予定）", startDate: "2026-05-23", endDate: "2026-05-24", sponsorStatus: "unknown", reach: "約5万人", studentCount: "約2.3万人" },
  { university: "明治学院大学", festivalName: "戸塚まつり", prefecture: "神奈川", month: 5, dateText: "5月24日（予定）", startDate: "2026-05-24", endDate: "2026-05-24", url: "https://www.instagram.com/gakusei_style/", sponsorStatus: "open", reach: "約5,000人", studentCount: "約1万人" },

  // ===== 6月 =====
  { university: "北海道大学", festivalName: "北大祭", prefecture: "北海道", month: 6, dateText: "6月6日〜9日（予定）", startDate: "2026-06-06", endDate: "2026-06-09", url: "https://hokudaisai.com", sponsorStatus: "open", reach: "約5万人", studentCount: "約1.8万人" },
  { university: "名古屋大学", festivalName: "名大祭", prefecture: "愛知", month: 6, dateText: "6月6日〜8日（予定）", startDate: "2026-06-06", endDate: "2026-06-08", sponsorStatus: "unknown", reach: "約3万人", studentCount: "約1.6万人" },

  // ===== 10月 =====
  { university: "東北大学", festivalName: "東北大学祭", prefecture: "宮城", month: 10, dateText: "10月下旬（予定）", sponsorStatus: "open" },
  { university: "立教大学", festivalName: "立教大学学院祭", prefecture: "東京", month: 10, dateText: "10月下旬〜11月上旬（予定）", sponsorStatus: "unknown" },
  { university: "青山学院大学", festivalName: "青山祭", prefecture: "東京", month: 10, dateText: "10月下旬（予定）", url: "https://aoyamasai.net", sponsorStatus: "unknown" },
  { university: "学習院大学", festivalName: "常磐祭", prefecture: "東京", month: 10, dateText: "10月下旬（予定）", sponsorStatus: "unknown" },
  { university: "東京学芸大学", festivalName: "小金井祭", prefecture: "東京", month: 10, dateText: "10月下旬〜11月上旬（予定）", sponsorStatus: "unknown" },
  { university: "上智大学", festivalName: "ソフィア祭", prefecture: "東京", month: 10, dateText: "10月下旬（予定）", sponsorStatus: "unknown" },
  { university: "東京工業大学", festivalName: "工大祭", prefecture: "東京", month: 10, dateText: "10月中旬（予定）", sponsorStatus: "unknown" },
  { university: "横浜国立大学", festivalName: "常盤祭", prefecture: "神奈川", month: 10, dateText: "10月下旬（予定）", sponsorStatus: "unknown" },
  { university: "神戸大学", festivalName: "神大祭", prefecture: "兵庫", month: 10, dateText: "10月下旬（予定）", sponsorStatus: "unknown" },
  { university: "関西学院大学", festivalName: "関学祭", prefecture: "兵庫", month: 10, dateText: "10月下旬（予定）", sponsorStatus: "unknown" },
  { university: "北海道大学", festivalName: "エルムの森", prefecture: "北海道", month: 10, dateText: "10月中旬（予定）", sponsorStatus: "unknown" },

  // ===== 11月 =====
  { university: "早稲田大学", festivalName: "早稲田祭", prefecture: "東京", month: 11, dateText: "11月上旬（予定）", url: "https://www.wasedafes.com", sponsorStatus: "unknown" },
  { university: "慶應義塾大学", festivalName: "三田祭", prefecture: "東京", month: 11, dateText: "11月下旬（予定）", url: "https://mitasai.com", sponsorStatus: "unknown" },
  { university: "東京大学", festivalName: "駒場祭", prefecture: "東京", month: 11, dateText: "11月下旬（予定）", url: "https://www.komabasai.net", sponsorStatus: "unknown" },
  { university: "明治大学", festivalName: "明大祭", prefecture: "東京", month: 11, dateText: "11月中旬（予定）", sponsorStatus: "unknown" },
  { university: "中央大学", festivalName: "白門祭（茗荷谷）", prefecture: "東京", month: 11, dateText: "11月上旬（予定）", sponsorStatus: "unknown" },
  { university: "法政大学", festivalName: "法政大学学園祭", prefecture: "東京", month: 11, dateText: "11月上旬（予定）", sponsorStatus: "unknown" },
  { university: "津田塾大学", festivalName: "津田ヶ谷祭", prefecture: "東京", month: 11, dateText: "11月中旬（予定）", sponsorStatus: "unknown" },
  { university: "東京理科大学", festivalName: "理科大祭", prefecture: "東京", month: 11, dateText: "11月中旬（予定）", sponsorStatus: "unknown" },
  { university: "一橋大学", festivalName: "一橋祭", prefecture: "東京", month: 11, dateText: "11月中旬（予定）", url: "https://hitotsubashisai.wixsite.com/website", sponsorStatus: "unknown" },
  { university: "慶應義塾大学", festivalName: "日吉祭", prefecture: "神奈川", month: 11, dateText: "11月中旬（予定）", sponsorStatus: "unknown" },
  { university: "京都大学", festivalName: "11月祭", prefecture: "京都", month: 11, dateText: "11月中旬（予定）", url: "https://www.nov-fes.com", sponsorStatus: "unknown" },
  { university: "同志社大学", festivalName: "同志社大学学園祭", prefecture: "京都", month: 11, dateText: "11月上旬（予定）", sponsorStatus: "unknown" },
  { university: "立命館大学", festivalName: "立命祭", prefecture: "京都", month: 11, dateText: "11月上旬（予定）", sponsorStatus: "unknown" },
  { university: "関西大学", festivalName: "関大まつり", prefecture: "大阪", month: 11, dateText: "11月中旬（予定）", sponsorStatus: "unknown" },
  { university: "広島大学", festivalName: "広大祭", prefecture: "広島", month: 11, dateText: "11月上旬（予定）", sponsorStatus: "unknown" },
  { university: "九州大学", festivalName: "九大祭", prefecture: "福岡", month: 11, dateText: "11月中旬（予定）", sponsorStatus: "unknown" },
];

export const prefectures = [...new Set(festivals.map(f => f.prefecture))].sort();
export const months = [...new Set(festivals.map(f => f.month))].sort((a, b) => a - b);

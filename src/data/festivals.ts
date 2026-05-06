// 学祭カレンダーデータ
// ベース：ナレッジステーション (https://www.gakkou.net/daigaku/gakuensai/)
// 更新日：2025年5月

export interface Festival {
  university: string;
  festivalName: string;
  prefecture: string;
  month: number;      // 開催月（主要開催月）
  dateText: string;   // 表示用日程テキスト（例: "10月18日〜20日"）
  url?: string;       // 公式サイト or SNS
  note?: string;
}

export const festivals: Festival[] = [
  // ===== 5月 =====
  { university: "北海道大学", festivalName: "北大祭", prefecture: "北海道", month: 5, dateText: "6月上旬（予定）", url: "https://hokudaisai.com" },
  { university: "東北大学", festivalName: "東北大学祭", prefecture: "宮城", month: 10, dateText: "10月下旬（予定）" },
  { university: "早稲田大学", festivalName: "早稲田祭", prefecture: "東京", month: 11, dateText: "11月上旬（予定）", url: "https://www.wasedafes.com" },
  { university: "慶應義塾大学", festivalName: "三田祭", prefecture: "東京", month: 11, dateText: "11月下旬（予定）", url: "https://mitasai.com" },
  { university: "東京大学", festivalName: "五月祭", prefecture: "東京", month: 5, dateText: "5月中旬（予定）", url: "https://gogatsusai.jp" },
  { university: "東京大学", festivalName: "駒場祭", prefecture: "東京", month: 11, dateText: "11月下旬（予定）", url: "https://www.komabasai.net" },
  { university: "明治大学", festivalName: "明大祭", prefecture: "東京", month: 11, dateText: "11月中旬（予定）" },
  { university: "立教大学", festivalName: "立教大学学院祭", prefecture: "東京", month: 10, dateText: "10月下旬〜11月上旬（予定）" },
  { university: "青山学院大学", festivalName: "青山祭", prefecture: "東京", month: 10, dateText: "10月下旬（予定）", url: "https://aoyamasai.net" },
  { university: "中央大学", festivalName: "白門祭（茗荷谷）", prefecture: "東京", month: 11, dateText: "11月上旬（予定）" },
  { university: "法政大学", festivalName: "法政大学学園祭", prefecture: "東京", month: 11, dateText: "11月上旬（予定）" },
  { university: "学習院大学", festivalName: "常磐祭", prefecture: "東京", month: 10, dateText: "10月下旬（予定）" },
  { university: "東京学芸大学", festivalName: "小金井祭", prefecture: "東京", month: 10, dateText: "10月下旬〜11月上旬（予定）" },
  { university: "津田塾大学", festivalName: "津田ヶ谷祭", prefecture: "東京", month: 11, dateText: "11月中旬（予定）" },
  { university: "上智大学", festivalName: "ソフィア祭", prefecture: "東京", month: 10, dateText: "10月下旬（予定）" },
  { university: "東京理科大学", festivalName: "理科大祭", prefecture: "東京", month: 11, dateText: "11月中旬（予定）" },
  { university: "一橋大学", festivalName: "一橋祭", prefecture: "東京", month: 11, dateText: "11月中旬（予定）", url: "https://hitotsubashisai.wixsite.com/website" },
  { university: "東京工業大学", festivalName: "工大祭", prefecture: "東京", month: 10, dateText: "10月中旬（予定）" },
  { university: "慶應義塾大学", festivalName: "日吉祭", prefecture: "神奈川", month: 11, dateText: "11月中旬（予定）" },
  { university: "横浜国立大学", festivalName: "常盤祭", prefecture: "神奈川", month: 10, dateText: "10月下旬（予定）" },
  { university: "名古屋大学", festivalName: "名大祭", prefecture: "愛知", month: 6, dateText: "6月上旬（予定）" },
  { university: "京都大学", festivalName: "11月祭", prefecture: "京都", month: 11, dateText: "11月中旬（予定）", url: "https://www.nov-fes.com" },
  { university: "大阪大学", festivalName: "いちょう祭", prefecture: "大阪", month: 5, dateText: "5月下旬（予定）" },
  { university: "神戸大学", festivalName: "神大祭", prefecture: "兵庫", month: 10, dateText: "10月下旬（予定）" },
  { university: "広島大学", festivalName: "広大祭", prefecture: "広島", month: 11, dateText: "11月上旬（予定）" },
  { university: "九州大学", festivalName: "九大祭", prefecture: "福岡", month: 11, dateText: "11月中旬（予定）" },
  { university: "東北大学", festivalName: "青葉まつり", prefecture: "宮城", month: 5, dateText: "5月中旬（予定）" },
  { university: "北海道大学", festivalName: "エルムの森", prefecture: "北海道", month: 10, dateText: "10月中旬（予定）" },
  { university: "同志社大学", festivalName: "同志社大学学園祭", prefecture: "京都", month: 11, dateText: "11月上旬（予定）" },
  { university: "立命館大学", festivalName: "立命祭", prefecture: "京都", month: 11, dateText: "11月上旬（予定）" },
  { university: "関西大学", festivalName: "関大まつり", prefecture: "大阪", month: 11, dateText: "11月中旬（予定）" },
  { university: "関西学院大学", festivalName: "関学祭", prefecture: "兵庫", month: 10, dateText: "10月下旬（予定）" },
];

export const prefectures = [...new Set(festivals.map(f => f.prefecture))].sort();
export const months = [...new Set(festivals.map(f => f.month))].sort((a, b) => a - b);

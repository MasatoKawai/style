#!/bin/zsh

# style/automation/festivals — 学祭データ自動更新スクリプト
# launchd から週1回呼ばれる。CLAUDE.md の手順に従って festivals.ts を更新・push する。

FESTIVALS_DIR="/Users/masato/Project/2026/style/automation/festivals"
CLAUDE_BIN="/opt/homebrew/bin/claude"
LOG_FILE="/tmp/festivals-update.log"

PROMPT="学祭データを定期更新してください。CLAUDE.md の手順（Step 1〜5）に従い、未掲載大学の追加・日程確定の更新・直前確認を実施し、変更があれば festivals.ts を更新してGitHubにpushしてください。確認は不要です。"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] 起動" >> "$LOG_FILE"

cd "$FESTIVALS_DIR" && echo "$PROMPT" | "$CLAUDE_BIN" -p \
  --allowedTools "Read,Write,Edit,Bash,Glob,Grep,WebSearch,WebFetch" \
  >> "$LOG_FILE" 2>&1

echo "[$(date '+%Y-%m-%d %H:%M:%S')] 完了" >> "$LOG_FILE"

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const 区分 = data.get('区分')?.toString() ?? '';
  const サービス = data.getAll('サービス').join('、');
  const 会社団体名 = data.get('会社名・団体名')?.toString() ?? '';
  const 担当者名 = data.get('担当者名')?.toString() ?? '';
  const email = data.get('email')?.toString() ?? '';
  const 電話 = data.get('電話番号')?.toString() ?? '未入力';
  const 内容 = data.get('お問い合わせ内容')?.toString() ?? '（なし）';

  // 必須項目チェック
  if (!区分 || !サービス || !会社団体名 || !担当者名 || !email) {
    return new Response(JSON.stringify({ error: '必須項目が不足しています' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: import.meta.env.GMAIL_USER,
      pass: import.meta.env.GMAIL_PASS,  // Gmailアプリパスワード
    },
  });

  const mailBody = `
【お問い合わせ区分】
${区分}

【ご希望サービス】
${サービス}

【会社名・団体名】
${会社団体名}

【ご担当者名】
${担当者名}

【メールアドレス】
${email}

【電話番号】
${電話}

【お問い合わせ内容】
${内容}
  `.trim();

  try {
    await transporter.sendMail({
      from: `"Strategy& お問い合わせ" <${import.meta.env.GMAIL_USER}>`,
      to: import.meta.env.GMAIL_USER,        // 受信先（自分のGmail）
      replyTo: email,                          // 返信先は問い合わせ者のメール
      subject: `【お問い合わせ】${区分}｜${サービス}｜${会社団体名}`,
      text: mailBody,
    });

    // 問い合わせ者への自動返信
    await transporter.sendMail({
      from: `"Strategy&" <${import.meta.env.GMAIL_USER}>`,
      to: email,
      subject: `【Strategy&】お問い合わせを受け付けました`,
      text: `${担当者名} 様

この度はStrategy&へお問い合わせいただき、ありがとうございます。
以下の内容でお問い合わせを受け付けました。

━━━━━━━━━━━━━━━━━
${mailBody}
━━━━━━━━━━━━━━━━━

担当者より2〜3営業日以内にご連絡いたします。
しばらくお待ちください。

Strategy&
info@strategy-and.art
https://strategy-and.art
      `.trim(),
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Mail error:', err);
    return new Response(JSON.stringify({ error: 'メール送信に失敗しました' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const TO_EMAIL  = import.meta.env.CONTACT_TO_EMAIL  ?? 'info@strategy-and.art';
const FROM_EMAIL = import.meta.env.CONTACT_FROM_EMAIL ?? 'noreply@strategy-and.art';

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, string>;
  try {
    const ct = request.headers.get('content-type') ?? '';
    if (ct.includes('application/json')) {
      body = await request.json();
    } else {
      const fd = await request.formData();
      body = {};
      for (const key of new Set(fd.keys())) {
        body[key] = fd.getAll(key).join('、');
      }
    }
  } catch {
    return new Response(JSON.stringify({ error: 'invalid body' }), { status: 400 });
  }

  const { 区分, サービス, 担当者名, email, 電話番号, お問い合わせ内容 } = body as Record<string, string>;
  const 会社名団体名 = (body as Record<string, string>)['会社名・団体名'];

  if (!email || !担当者名 || !会社名団体名) {
    return new Response(JSON.stringify({ error: 'required fields missing' }), { status: 422 });
  }

  const html = `
<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:600px">
  <tr><td colspan="2" style="background:#4a28b4;color:#fff;padding:16px 20px;font-weight:700;font-size:16px">📬 大学スタイル お問い合わせ</td></tr>
  <tr><td style="padding:10px 16px;border-bottom:1px solid #eee;width:140px;color:#888;font-weight:700">区分</td><td style="padding:10px 16px;border-bottom:1px solid #eee">${区分 ?? '—'}</td></tr>
  <tr><td style="padding:10px 16px;border-bottom:1px solid #eee;color:#888;font-weight:700">希望サービス</td><td style="padding:10px 16px;border-bottom:1px solid #eee">${サービス ?? '—'}</td></tr>
  <tr><td style="padding:10px 16px;border-bottom:1px solid #eee;color:#888;font-weight:700">会社・団体名</td><td style="padding:10px 16px;border-bottom:1px solid #eee">${会社名団体名}</td></tr>
  <tr><td style="padding:10px 16px;border-bottom:1px solid #eee;color:#888;font-weight:700">担当者名</td><td style="padding:10px 16px;border-bottom:1px solid #eee">${担当者名}</td></tr>
  <tr><td style="padding:10px 16px;border-bottom:1px solid #eee;color:#888;font-weight:700">メール</td><td style="padding:10px 16px;border-bottom:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
  <tr><td style="padding:10px 16px;border-bottom:1px solid #eee;color:#888;font-weight:700">電話番号</td><td style="padding:10px 16px;border-bottom:1px solid #eee">${電話番号 ?? '—'}</td></tr>
  <tr><td style="padding:10px 16px;color:#888;font-weight:700;vertical-align:top">内容</td><td style="padding:10px 16px;white-space:pre-wrap">${お問い合わせ内容 ?? '（記載なし）'}</td></tr>
</table>`;

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to:   TO_EMAIL,
    replyTo: email,
    subject: `【大学スタイル】${会社名団体名} 様よりお問い合わせ`,
    html,
  });

  if (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ error: 'send failed' }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};

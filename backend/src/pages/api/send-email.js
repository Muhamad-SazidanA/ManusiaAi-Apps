import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS handler
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Hanya menerima method POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, company, phone, linkedin, message } = req.body;

  // Validasi data yang diterima
  if (!name || !email || !company || !phone || !message) {
    return res.status(400).json({
      message: 'Semua field wajib diisi kecuali LinkedIn URL',
    });
  }

  try {
    // Konfigurasi transporter nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Email pengirim
        pass: process.env.EMAIL_PASS, // App password Gmail
      },
    });

    // Kirim email
    await transporter.sendMail({
      from: `"Demo Request - ${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: 'New Demo Request from Website',
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f6fbff; padding: 32px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 24px rgba(74,158,255,0.08); border: 1px solid #e3f2fd;">
            <tr>
              <td style="padding: 32px 32px 16px 32px;">
                <img src="" alt="Manusia.AI" style="height: 40px; margin-bottom: 24px;" />
                <h2 style="color: #0377FF; margin-bottom: 8px;">Demo Request Form Submission</h2>
                <p style="color: #1A2B4C; font-size: 16px; margin-bottom: 24px;">
                  Anda menerima permintaan demo baru dari website Manusia.AI.
                </p>
                <table cellpadding="0" cellspacing="0" style="width: 100%; font-size: 15px; color: #1A2B4C;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; width: 160px;">Personal Name</td>
                    <td style="padding: 8px 0;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600;">Company Email</td>
                    <td style="padding: 8px 0;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600;">Company Name</td>
                    <td style="padding: 8px 0;">${company}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600;">Phone</td>
                    <td style="padding: 8px 0;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600;">LinkedIn URL</td>
                    <td style="padding: 8px 0;">${linkedin || '<span style="color:#888">Not provided</span>'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Message</td>
                    <td style="padding: 8px 0; white-space: pre-line;">${message}</td>
                  </tr>
                </table>
                <div style="margin-top: 32px; color: #6B7A99; font-size: 13px; border-top: 1px solid #e3f2fd; padding-top: 16px;">
                  <em>Email ini dikirim otomatis dari website <a href="https://manusia.ai" style="color:#0377FF;text-decoration:none;">manusia.ai</a></em>
                </div>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    res.status(200).json({ message: 'Email berhasil dikirim!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      message: 'Gagal mengirim email',
      error: error.message,
    });
  }
}

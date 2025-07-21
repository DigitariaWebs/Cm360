import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  console.log('=== API ROUTE CALLED ===');
  try {
    const body = await request.json();
    console.log('Request body received:', JSON.stringify(body, null, 2));
    
    const { firstName, lastName, email, phone, specialRequests } = body;

    // Validate required fields
    if (!firstName || !email || !phone) {
      console.log('Missing required fields:', { firstName, email, phone });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Environment variables check:', {
      SMTP_HOST: process.env.SMTP_HOST ? 'Set' : 'Missing',
      SMTP_PORT: process.env.SMTP_PORT ? 'Set' : 'Missing',
      SMTP_USER: process.env.SMTP_USER ? 'Set' : 'Missing',
      SMTP_PASS: process.env.SMTP_PASS ? 'Set' : 'Missing',
      SMTP_FROM: process.env.SMTP_FROM ? 'Set' : 'Missing',
      CONTACT_EMAIL: process.env.CONTACT_EMAIL ? 'Set' : 'Missing',
    });

    // Create transporter using the existing environment variables
    console.log('Creating email transporter...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Test the connection first
    console.log('Testing SMTP connection...');
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL, // Send to your contact email
      subject: `Nouveau message de contact - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: 'Georgia', 'Times New Roman', serif; background: #f8f9fa; padding: 0; margin: 0;">
          <div style="max-width: 600px; margin: 40px auto; background: #fff; border-radius: 18px; box-shadow: 0 4px 24px rgba(26,58,47,0.08); overflow: hidden; border: 1px solid #e5e7eb;">
            <div style="background: linear-gradient(90deg, #1A3A2F 60%, #BF9040 100%); padding: 32px 0 24px 0; text-align: center;">
              <h2 style="color: #fff; font-size: 2rem; font-family: 'Georgia', serif; margin: 0; letter-spacing: 1px;">Nouveau message de contact</h2>
            </div>
            <div style="padding: 32px 28px 24px 28px;">
              <p style="color: #1A3A2F; font-size: 1.1rem; margin-bottom: 18px;">Vous avez reçu un nouveau message via le formulaire de contact du site <strong>CM360</strong> :</p>
              <div style="background: #f6f6f6; border-radius: 12px; padding: 20px 18px; margin-bottom: 18px; border-left: 4px solid #BF9040;">
                <p style="margin: 0 0 8px 0;"><strong>Nom complet :</strong> ${firstName} ${lastName}</p>
                <p style="margin: 0 0 8px 0;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #1A3A2F; text-decoration: underline;">${email}</a></p>
                <p style="margin: 0 0 8px 0;"><strong>Téléphone :</strong> <a href="tel:${phone}" style="color: #1A3A2F; text-decoration: underline;">${phone}</a></p>
                <p style="margin: 0 0 8px 0;"><strong>Entreprise :</strong> ${specialRequests?.split('|')[0]?.replace('Entreprise:','').trim() || '-'}</p>
                <p style="margin: 0;"><strong>Message :</strong> ${specialRequests?.split('|')[1]?.replace('Message:','').trim() || '-'}</p>
              </div>
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" style="display: inline-block; background: #1A3A2F; color: #fff; font-weight: bold; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-size: 1rem; letter-spacing: 1px; box-shadow: 0 2px 8px rgba(26,58,47,0.08); transition: background 0.2s;">Répondre</a>
              </div>
            </div>
            <div style="background: #f6f6f6; color: #888; font-size: 0.95rem; text-align: center; padding: 18px 0; border-top: 1px solid #e5e7eb;">
              Ce message a été envoyé depuis le site <a href="https://cabinetcm360.com" style="color: #BF9040; text-decoration: underline;">cabinetcm360.com</a>.
            </div>
          </div>
        </div>
      `,
    };

    console.log('Email options prepared:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    // Send email
    console.log('Attempting to send email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error details:', error);
    return NextResponse.json(
      { error: 'API error occurred', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 
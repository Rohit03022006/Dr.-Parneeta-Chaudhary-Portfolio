import { Resend } from 'resend';
import { NextResponse } from 'next/server';


export async function POST(req) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <noreply@yourdomain.com>', // You can update this with your verified domain
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #131515; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #FFFAFB;">
          <div style="background: #339989; padding: 30px; text-align: center;">
            <h2 style="margin: 0; color: #FFFAFB; font-size: 24px; font-weight: 700;">New Message</h2>
            <p style="margin: 5px 0 0; color: rgba(255, 250, 251, 0.9); font-size: 14px;">Dr. Parneeta Chaudhary Portfolio</p>
          </div>
          <div style="padding: 30px;">
            <div style="margin-bottom: 25px;">
              <span style="display: block; font-size: 12px; color: #339989; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">From</span>
              <p style="margin: 0; font-size: 16px; color: #131515;"><strong>${name}</strong> (${email})</p>
            </div>
            
            <div style="margin-bottom: 25px;">
              <span style="display: block; font-size: 12px; color: #339989; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Message</span>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 15px; color: #2B2C28; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
          <div style="padding: 20px; background: #f8fafc; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
            This email was sent from the contact form on your portfolio website.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}

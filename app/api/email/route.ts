import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Resend API key not configured' },
      { status: 500 }
    );
  }

  try {
    const { 
      name, 
      email, 
      phone, 
      company, 
      website, 
      service, 
      budget, 
      message 
    } = await req.json();

    // Validate required fields
    if (!name || !email || !service || !budget || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
          </style>
        </head>
        <body>
          <div style="background-color: #f8f9fa; padding: 40px 0;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow: hidden;">
              <!-- Header -->
              <div style="background: linear-gradient(to right, #2563eb, #3b82f6); padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Lead from HackRest</h1>
                <p style="color: #e5e7eb; margin: 10px 0 0 0; font-size: 16px;">Contact Form Submission</p>
              </div>

              <!-- Content -->
              <div style="padding: 30px;">
                <!-- Basic Info Section -->
                <div style="background-color: #f8fafc; border-radius: 6px; padding: 20px; margin-bottom: 25px;">
                  <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Contact Information</h2>
                  <div style="display: grid; gap: 12px;">
                    <div style="display: flex; align-items: center;">
                      <span style="color: #64748b; width: 120px;">Name:</span>
                      <strong style="color: #1e293b;">${name}</strong>
                    </div>
                    <div style="display: flex; align-items: center;">
                      <span style="color: #64748b; width: 120px;">Email:</span>
                      <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                    </div>
                    <div style="display: flex; align-items: center;">
                      <span style="color: #64748b; width: 120px;">Phone:</span>
                      <span style="color: #1e293b;">${phone || 'Not provided'}</span>
                    </div>
                  </div>
                </div>

                <!-- Business Info Section -->
                <div style="background-color: #f8fafc; border-radius: 6px; padding: 20px; margin-bottom: 25px;">
                  <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Business Details</h2>
                  <div style="display: grid; gap: 12px;">
                    <div style="display: flex; align-items: center;">
                      <span style="color: #64748b; width: 120px;">Company:</span>
                      <span style="color: #1e293b;">${company || 'Not provided'}</span>
                    </div>
                    <div style="display: flex; align-items: center;">
                      <span style="color: #64748b; width: 120px;">Website:</span>
                      <span style="color: #1e293b;">${website || 'Not provided'}</span>
                    </div>
                  </div>
                </div>

                <!-- Project Info Section -->
                <div style="background-color: #f8fafc; border-radius: 6px; padding: 20px; margin-bottom: 25px;">
                  <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Project Requirements</h2>
                  <div style="display: grid; gap: 12px;">
                    <div style="display: flex; align-items: center;">
                      <span style="color: #64748b; width: 120px;">Service:</span>
                      <span style="color: #1e293b; font-weight: 500;">${service}</span>
                    </div>
                    <div style="display: flex; align-items: center;">
                      <span style="color: #64748b; width: 120px;">Budget:</span>
                      <span style="color: #1e293b; font-weight: 500;">${budget}</span>
                    </div>
                  </div>
                </div>

                <!-- Message Section -->
                <div style="background-color: #f8fafc; border-radius: 6px; padding: 20px;">
                  <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Message</h2>
                  <p style="color: #1e293b; margin: 0; line-height: 1.6;">${message}</p>
                </div>
              </div>

              <!-- Footer -->
              <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="color: #64748b; margin: 0; font-size: 14px;">
                  This is an automated email from HackRest Contact Form
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: 'HackRest Lead <lead@hackrest.com>',
      to: ['info@hackrest.com'],
      subject: `New Lead: ${service} Project - ${name}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 
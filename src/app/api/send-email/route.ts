import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY || 're_B4gg9xz7_2Ww7LHoig4BDUmXV92SWVTfP');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, storeConcept, numberOfStores } = body;

    // Validate required fields
    if (!fullName || !email || !storeConcept || !numberOfStores) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Use environment variables for email addresses
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'tadeo@churromania.com';
    const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      subject: 'New Form Submission from Clave Landing Page',
      html: `
        <h1>New Lead Submission</h1>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Store Concept:</strong> ${storeConcept}</p>
        <p><strong>Number of Stores:</strong> ${numberOfStores}</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 
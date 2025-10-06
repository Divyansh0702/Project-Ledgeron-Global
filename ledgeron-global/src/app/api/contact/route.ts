import { NextResponse } from 'next/server';
import { saveSubmission } from '@/utils/formStorage';

export type FormSubmission = {
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp?: string;
};

export async function POST(request: Request) {
  try {
    console.log('Received POST request to /api/contact');
    const data: FormSubmission = await request.json();
    console.log('Received form data:', data);

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      console.log('Validation failed: Missing required fields');
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      console.log('Validation failed: Invalid email format');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('Attempting to save submission...');
    // Save the submission to the JSON file
    await saveSubmission(data);

    // Log for monitoring purposes
    console.log('Form submission saved successfully:', data);

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Failed to save your message. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
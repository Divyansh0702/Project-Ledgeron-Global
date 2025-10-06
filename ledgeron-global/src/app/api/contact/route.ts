import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export type FormSubmission = {
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp?: string;
};

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'submissions.json');

async function saveSubmission(submission: FormSubmission): Promise<void> {
  try {
    // Ensure the data directory exists
    await fs.mkdir(DATA_DIR, { recursive: true });

    // Read existing submissions
    let submissions: FormSubmission[] = [];
    try {
      const data = await fs.readFile(SUBMISSIONS_FILE, 'utf-8');
      submissions = JSON.parse(data);
    } catch {
      // File doesn't exist or is invalid, start with empty array
    }

    // Add timestamp to submission
    const submissionWithTimestamp = {
      ...submission,
      timestamp: new Date().toISOString(),
    };

    // Add new submission
    submissions.push(submissionWithTimestamp);

    // Write back to file
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving submission:', error);
    throw error;
  }
}

export async function POST(request: Request) {
  console.log('Received POST request to /api/contact');
  
  try {
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

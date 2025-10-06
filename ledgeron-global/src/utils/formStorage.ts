import fs from 'fs/promises';
import path from 'path';
import { FormSubmission } from '@/app/api/contact/route';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'submissions.json');

export async function saveSubmission(submission: FormSubmission): Promise<void> {
  try {
    console.log('Creating data directory if it doesn\'t exist...');
    // Ensure the data directory exists
    await fs.mkdir(DATA_DIR, { recursive: true });

    console.log('Reading existing submissions...');
    // Read existing submissions
    let submissions: FormSubmission[] = [];
    try {
      if (await fileExists(SUBMISSIONS_FILE)) {
        const data = await fs.readFile(SUBMISSIONS_FILE, 'utf-8');
        submissions = JSON.parse(data);
        console.log('Loaded existing submissions:', submissions.length);
      } else {
        console.log('No existing submissions file found, starting with empty array');
      }
    } catch (error) {
      console.log('Error reading submissions file, starting with empty array:', error);
      // File doesn't exist or is invalid, start with empty array
    }

    // Add timestamp to submission
    const submissionWithTimestamp = {
      ...submission,
      timestamp: new Date().toISOString(),
    };

    // Add new submission
    submissions.push(submissionWithTimestamp);
    console.log('Added new submission to array');

    // Write back to file
    console.log('Writing submissions to file...');
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), 'utf-8');
    console.log('Successfully wrote submissions to file');
  } catch (error) {
    console.error('Error saving submission:', error);
    throw new Error(`Failed to save submission: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function getSubmissions(): Promise<FormSubmission[]> {
  try {
    const data = await fs.readFile(SUBMISSIONS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, return empty array
    return [];
  }
}
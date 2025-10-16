import { NextResponse } from 'next/server';
import { organizationsMockData } from '@/database/table';

export async function GET() {
  return NextResponse.json(organizationsMockData);
}

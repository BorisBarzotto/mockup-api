import { NextResponse, NextRequest } from 'next/server';
import { organizationsMockData } from '@/database/table';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const org = organizationsMockData.find(o => o.id === id);
  if (!org) {
    return NextResponse.json({ error: 'Organization not found' }, { status: 404 });
  }
  return NextResponse.json(org);
}

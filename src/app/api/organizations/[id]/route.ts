import { NextResponse } from 'next/server';
import { organizationsMockData } from '@/database/table';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const org = organizationsMockData.find(o => o.id === params.id);
  if (!org) {
    return NextResponse.json({ error: 'Organization not found' }, { status: 404 });
  }
  return NextResponse.json(org);
}

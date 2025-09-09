import {NextRequest, NextResponse} from 'next/server';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const target = new URL('/opengraph-image', request.url);
  return NextResponse.redirect(target, 308);
}

export async function HEAD(request: NextRequest) {
  const target = new URL('/opengraph-image', request.url);
  return NextResponse.redirect(target, 308);
}



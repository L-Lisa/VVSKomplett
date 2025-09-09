import {NextRequest, NextResponse} from 'next/server';

export const runtime = 'nodejs';

// Next's metadata loader expects a file at this segment; keep redirect here.
export async function GET(request: NextRequest) {
  const target = new URL('/opengraph-image', request.url);
  return NextResponse.redirect(target, 308);
}

export async function HEAD(request: NextRequest) {
  const target = new URL('/opengraph-image', request.url);
  return NextResponse.redirect(target, 308);
}



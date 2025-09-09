import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

export default async function GET(request: NextRequest) {
  try {
    let url: URL;
    try {
      url = new URL(request.url);
    } catch {
      // Fallback to a sane default in dev if request.url is invalid
      url = new URL('http://localhost:3000/opengraph-image');
    }
    const { searchParams } = url;
    const title = searchParams.get('title') || 'VVS i Stockholm – trygga lösningar för hem & fastighet';
    const description = searchParams.get('description') || 'Professionella VVS-tjänster i Stockholm. Nyinstallation, stambyte, relining och service av certifierade montörer.';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0B1B3A', // Navy background
            backgroundImage: 'linear-gradient(135deg, #0B1B3A 0%, #1E3A8A 100%)',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {/* Logo and Company Name */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#F97316', // Orange accent
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '24px',
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#0B1B3A',
              }}
            >
              VVS
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  marginBottom: '8px',
                }}
              >
                Komplett VVS
              </div>
              <div
                style={{
                  fontSize: '20px',
                  color: '#E6F0FF', // Sky color
                  fontWeight: '500',
                }}
              >
                i Stockholm AB
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#FFFFFF',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: '1.2',
              marginBottom: '24px',
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '24px',
              color: '#E6F0FF',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: '1.4',
              marginBottom: '40px',
            }}
          >
            {description}
          </div>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#F97316',
                fontSize: '18px',
                fontWeight: '600',
              }}
            >
              ✓ Säker Vatten
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#F97316',
                fontSize: '18px',
                fontWeight: '600',
              }}
            >
              ✓ Försäkrade arbeten
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#F97316',
                fontSize: '18px',
                fontWeight: '600',
              }}
            >
              ✓ Garanti
            </div>
          </div>

          {/* Bottom accent */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              height: '8px',
              background: 'linear-gradient(90deg, #F97316 0%, #1E3A8A 100%)',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error'}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

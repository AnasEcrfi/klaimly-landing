import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Klaimly - Forschungszulage Digital'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #7A866C 0%, #93A084 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>KLAIMLY</div>
        <div style={{ fontSize: 36, textAlign: 'center', maxWidth: 800 }}>
          Ihre Forschungszulage. Einfach. Sicher. Digital.
        </div>
        <div style={{ fontSize: 24, marginTop: 30, opacity: 0.9 }}>
          Bis zu 3,5 Mio. € jährliche Förderung
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
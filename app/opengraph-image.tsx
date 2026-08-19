import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { ImageResponse } from 'next/og'

export const alt = 'Mauli Wealth — Strategic Wealth Creation & Mutual Fund Distribution'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  const logoBuffer = await readFile(path.join(process.cwd(), 'public', 'logo-mark.png'))
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#faf8f4',
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(196,155,74,0.22), transparent 55%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={148} height={148} style={{ borderRadius: '50%' }} alt="" />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '9px 24px',
            borderRadius: 999,
            border: '1px solid rgba(90,42,32,0.25)',
            color: '#7a3226',
            fontSize: 20,
            marginTop: 30,
          }}
        >
          AMFI Registered Mutual Fund Distributor
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 80,
            fontWeight: 700,
            color: '#1256d8',
            letterSpacing: '-0.02em',
            marginTop: 22,
          }}
        >
          <span style={{ color: '#7a3226' }}>Mauli</span>&nbsp;Wealth
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: 'rgba(44,38,80,0.6)', marginTop: 18 }}>
          Strategic Wealth Creation, Goal by Goal
        </div>
      </div>
    ),
    { ...size }
  )
}

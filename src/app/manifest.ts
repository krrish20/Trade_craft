
import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tradecraft Academy',
    short_name: 'Tradecraft',
    description: 'Master trading from beginner to advanced with a structured, offline-first curriculum.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#0F172A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        "src": "/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
          "src": "/android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
      }
    ],
  }
}

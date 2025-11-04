import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Valdir Ronis - Desenvolvedor Full-Stack',
    short_name: 'Valdir Ronis',
    description: 'Currículo profissional de Valdir Ronis (Xogum) - Desenvolvedor Full-Stack',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

import './globals.css'
import { Roboto } from 'next/font/google'
import { Providers } from './providers'

const font = Roboto({ subsets: ['latin'], weight: ['300'] })

export const metadata = {
  title: 'Prometheus R&D Tijuana: Soluciones Digitales',
  description: '  Somos una empresa dedicada a la creación de prototipos, desarrollo de aplicaciones y diseño de páginas web. Nuestro equipo de expertos transforma ideas en soluciones digitales de alta calidad, ayudando a nuestros clientes a alcanzar sus metas.  '
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

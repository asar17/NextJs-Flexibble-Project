import './global.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'flexibble',
  description: 'Showcase and discover remarable developerprojcts',
}

export default function RootLayout ({children}:{children: React.ReactNode}){
  return(
    <html>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
const inter = Inter({ subsets: ['latin'] })
import { bgcolor } from '@/constants/constant'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en"  >
        <body className={inter.className}>
            <Navbar />
            <main className=' img'> {children}</main>
            <Footer />
          
        </body>
      </html>
    </>
  )
}

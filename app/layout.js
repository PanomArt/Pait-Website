import './globals.scss'
import { Inter } from 'next/font/google'
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PanomArt | Website',
  description: "Welcome to PanomArt portfolios ,a Junior Frontend Developer based in Bangkok, Thailand. I'm passionate about coding and enjoy diving into various technologies to enhance my skills. My expertise lies in ReactJS and NextJS, During my free time, I'm dedicated to continuous learning, exploring new technologies, and building projects that challenge and expand my abilities",
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
          <body className={inter.className}>
             <Header/>
                {children}
             <Footer/>   
          </body>

    </html>
  )
}

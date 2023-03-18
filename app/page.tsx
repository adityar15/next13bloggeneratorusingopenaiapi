
import { Inter } from 'next/font/google'
import BlogForm from './components/BlogForm'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Generator',
}

export default function Home() {
  return (
    <main className="bg-black/90 w-full h-screen overflow-auto">
        
        <header className="bg-gradient-to-r from-sky-600 to-purple-600 h-16 w-full">
        </header>
        
        <BlogForm />
    </main>
  )
}

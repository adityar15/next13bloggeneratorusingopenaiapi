
import { Inter } from 'next/font/google'
import BlogForm from './components/BlogForm'
import Avatar from './components/Avatar'

const inter = Inter({ subsets: ['latin'] })




export const metadata = {
  title: 'Blog Generator',
}

export default function Home() {
  return (
    <main className="bg-black/90 w-full h-screen overflow-auto">
        
        <header className="bg-gradient-to-r px-5 from-sky-600 to-purple-600 h-16 w-full flex justify-between items-center">
          <div></div>
          <Avatar />
        </header>
        
        <BlogForm />
    </main>
  )
}

import Link from "next/link";

export default function NavBar() {
  return (
    <>
    <nav className="sticky top-0 z-50 backdrop-blur">
      <div className="max-w-6xl mx-auto px-7 py-5 flex items-center justify-between backdrop-blur-md">
        
        <div className="text-3xl font-bold text-gray-300">
          <Link href="/">Leafy</Link>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-300 text-xl">
          <li className="hover:text-gray-400 transition"><Link href="/">Home</Link></li>
          <li className="hover:text-gray-400 transition"><Link href="/plants">Plants</Link></li>
          <li className="hover:text-gray-400 transition"><Link href="/posts">Posts</Link></li>
          <li className="hover:text-gray-400 transition"><Link href="/about">About</Link></li>
          <li className="hover:text-gray-400 transition"><Link href="/profile">Profile</Link></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

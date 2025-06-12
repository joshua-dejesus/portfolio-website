import Link from "next/link";

export default function Navbar () {
    return (
        <nav className = "p-4 bg-gray-700 shadow">
            <div className = "text-white max-w-4xl mx-auto flex gap-50 justify-center font-bold">
                <Link className = "hover:text-blue-600" href="/">Home</Link>
                <Link className = "hover:text-blue-600" href="/about">About Me</Link>
                <Link className = "hover:text-blue-600" href="/projects">Projects</Link>
            </div>
        </nav>
    )
}
import Image from "next/image";

export default function HomePage() {
  return (

    <main className="min-h-screen flex-col items-center p-16">

      <div className="w-full flex items-center">

        <div className="max-w-2xl text-center space-y-6">
          <h1 className="text-6xl font-bold">Joshua DeJesus</h1>
          <p className="text-2xl text-gray-500">Pursuing B.S in Computer Science at Binghamton University</p>
          <p className="text-lg text-gray-300">Hi, I&apos;m Joshua, a junior at Binghamton University. I&apos;m interested in software development and game development. I have experience using C++, Python, and Java. This website is a work in progress, so please check back later for more updates!</p>
        </div>

        <div className="relative ml-36">
        <Image 
          src="/SuitPhoto.jpeg"
          alt="Joshua DeJesus"
          width={300}
          height={300}
          className="rounded-full"
        />
        </div>

      </div>
      
      <div className="flex gap-4 pt-2 ml-40">
        <a href="https://github.com/joshua-dejesus" target="_blank" rel="noopener noreferrer">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 border border-white cursor-pointer">View Github Profile</button>
        </a>
        <a href="/joshuadejesus_resume.pdf" download="joshua_deJesus_resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="border border-black px-6 py-3 rounded-lg hover:bg-gray-800 border border-white cursor-pointer">Download Resume</button>
        </a>
      </div>

      <div className="ml-56 pt-10">
        <a href="https://www.linkedin.com/in/joshua-dejesus-583992296/" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 border border-white px-6 py-3 rounded-lg hover:bg-gray-800 cursor-pointer">Connect with me on LinkedIn</button>
        </a>
      </div>

    </main>
  );
}

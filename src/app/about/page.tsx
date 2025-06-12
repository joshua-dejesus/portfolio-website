export default function AboutPage () {
    return (
        <main className="min-h-screen p-16">
            <div className="max-w-4xl mx-auto space-y-8">
                <div>
                    <h1 className="font-bold text-4xl flex justify-center">About Me</h1>

                    <p className="p-10 text-xl text-gray-300 flex justify-center">Hi, I'm Joshua DeJesus, a CS student at Binghamton University. From a young age I knew that I'd want to do something in the technology field. I was always messing with computers and had been fascinated with how programs were created. Growing up playing video games, I loved immersing myself into new and different enviornments, playing through heartfelt stories, and competeting online with and agaisnt friends. My goal is to be able to bring that same joy and inspiration to more people around the world.</p>

                    <h2 className="font-bold text-4xl flex justify-left p-10">Education:</h2>
                    
                    <ul className="list-disc text-xl mx-20">
                        <li>Queens College: 2023-2025</li>
                        <li>Binghamton University 2025-Current</li>
                    </ul>

                    <h2 className="font-bold text-4xl flex justify-left p-10">Skills:</h2>

                    <ul className="list-disc text-xl mx-20">
                        <li>C++</li>
                        <li>Unreal Engine 5 Blueprints</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                    
                </div>
            </div>

        </main>
    );
}
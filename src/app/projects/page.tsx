export default function projectsPage () {
    return (
        <main className="min-h-screen p-16">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="font-bold flex justify-left text-4xl">Python CLI To Do List App</h1>

                <li className="pl-10 text-lg">This is a very simple command line to do list app using python. The features include adding, viewing, completeing, deleting, and saving tasks between sessions using a JSON file</li>

                <h1 className="font-bold flex justify-left text-4xl">C++ CLI Number Guessing Game</h1>

                <li className="pl-10 text-lg">This is a very simple command line number guessing game using C++. A random number between 1-100 is generated and the user must guess the number and is given hints along the way.</li>

                <h1 className="font-bold flex justify-left text-4xl">HTML/JS/CSS Blackjack Web Game</h1>

                <li className="pl-10 text-lg">This is a blackjack card game created using vanilla Javascript, HTML, and CSS. This project is a work in progress so much of the game is incomplete and features will be added periodically. The game will deal both the user and the dealer their cards, allow users to hit or stand, and also feature complete blackjack game logic.</li>

            </div>
            
        </main>
    );
}
export default function Content()
{
    return(
        <main className="min-h-screen bg-primary">
            <div className="bg-linear-to-b from-secondary to-primary py-9">
                <h1 className="text-3xl mx-5 font-inter text-center text-text font-semibold pt-9 pb-8">Everything You want to know about Dota2 in One Place</h1>
                <p className="text-2xl mx-5 text-center text-accent font-light font-sans pb-8">
                    From Hero Details to Professional Matches and everything related to Dota2 like Items, Torunments, public matches in one single place.
                </p>
                <button className="btn mx-auto">Get Started</button>
            </div>
            <div className="pt-9 mx-5">
                <h2 className="text-center font-semibold text-2xl font-inter text-text">Featuring Category</h2>
                <div className="mt-7 md:grid md:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
                    <section className="bg-background mt-5 rounded-md shadow-sm shadow-gray-50 p-5">
                        <h3 className="text-xl text-text mb-2 font-inter">Heroes</h3>
                        <p className="font-sans h-20 text-secondary mb-3">The Detail of each hero from stats, abilities to matches, matchups and item recommandation.</p>
                        <button className="btn">Check Out</button>
                    </section>
                    <section className="bg-background mt-5 rounded-md shadow-sm shadow-gray-50 p-5">
                        <h3 className="text-xl text-text mb-2 font-inter">Items</h3>
                        <p className="font-sans h-20 text-secondary mb-3">The Detail Description of each items.The cost, the effect and the components.</p>
                        <button className="btn">Check Out</button>
                    </section>
                    <section className="bg-background mt-5 rounded-md shadow-sm shadow-gray-50 p-5">
                        <h3 className="text-xl text-text mb-2 font-inter">Tournments</h3>
                        <p className="font-sans h-20 text-secondary mb-3">The Info of different Dota2 tournments from the top tier event to fun tournment.</p>
                        <button className="btn">Check Out</button>
                    </section>
                    <section className="bg-background mt-5 rounded-md shadow-sm shadow-gray-50 p-5">
                        <h3 className="text-xl text-text mb-2 font-inter">Public Matches</h3>
                        <p className="font-sans h-20 text-secondary mb-3">The list and detail of most recent public matches. From the result to item build in that game.</p>
                        <button className="btn">Check Out</button>
                    </section>
                    <section className="bg-background mt-5 rounded-md shadow-sm shadow-gray-50 p-5">
                        <h3 className="text-xl text-text mb-2 font-inter">Professional Team</h3>
                        <p className="font-sans h-20 text-secondary mb-3">The history, the earning, the player, the result and so much more of each pro team.</p>
                        <button className="btn">Check Out</button>
                    </section>
                    <section className="bg-background mt-5 rounded-md shadow-sm shadow-gray-50 p-5">
                        <h3 className="text-xl text-text mb-2 font-inter">Professional Players</h3>
                        <p className="font-sans h-20 text-secondary mb-3">The history, the earning, the result and so much more of each pro player.</p>
                        <button className="btn">Check Out</button>
                    </section>
                </div>
            </div>
            <p className="text-center text-secondary py-9 font-sans text-2xl">This website is powered by <a href="https://www.opendota.com/" target="_blank" className="text-accent">OpenDota</a></p>
        </main>
    )
}
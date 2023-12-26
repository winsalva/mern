export default function Home() {
    return (
	<>
	    <h1 className="text-red-500">WELCOME TO MY E-COMMERCE SITE!</h1>
	    <header>
		<nav className="border border-white">
		    <div>Logo | Nav</div>
		</nav>
		<section className="relative border border-white z-3 m-3">
		    <h1>WELCOME TO MY BISTO</h1>
		</section>
	    </header>
	    <main>
		<a href="/users">List Users</a>
		<a href="/users/new">New User</a>
	    </main>

	</>
    );
}

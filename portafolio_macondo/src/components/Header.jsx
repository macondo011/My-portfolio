function scrollToSection(id) {
	const element = document.getElementById(id)
	element.scrollIntoView({ behavior: 'smooth' })
}

export function Header() {
	return (
		<div className="relative">
			<div className="fixed top-0 left-0 right-0">
				<nav className="border-dotted border flex items-center justify-center bg-blueberry text-white text-xl  w-auto sm:text-4xl h-20 mx-2 px-1 shadow">
					<ul className="flex gap-0 font-mono sm:gap-4">
						<li>
							<h2 className="font-bongee">Macondev</h2>
						</li>
						<li className=" hover:-translate-y-1 hover:scale-110">
							<span
								onClick={() => scrollToSection('Home')}
								className="no-underline hover:underline"
							>
								HOME🏠
							</span>
						</li>
						<li className="hover:-translate-y-1  hover:scale-110">
							<span
								onClick={() => scrollToSection('About')}
								className="no-underline hover:underline"
							>
								about
							</span>
						</li>
						<li className="flex-initial  hover:-translate-y-1 hover:scale-110">
							<span
								onClick={() => scrollToSection('Projects')}
								className="no-underline hover:underline"
							>
								Projects
							</span>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

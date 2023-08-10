
export function Header() {
	return (
		<nav className="triangle flex items-center justify-center bg-blueberry text-white text-xl  w-auto sm:text-4xl h-28 mx-2 px-1  ">
			<ul className="flex gap-0 font-mono sm:gap-4">
				<li>
					<h2 className="font-bongee">Macondev</h2>
				</li >
				<li className=" hover:-translate-y-1 hover:scale-110">
					<a href="/" className="no-underline hover:underline" >HOME🏠</a>
				</li>
				<li className="hover:-translate-y-1  hover:scale-110">
					<a href="#" className="no-underline hover:underline">about</a>
				</li>
				<li className="flex-initial  hover:-translate-y-1 hover:scale-110">
					<a href="#" className="no-underline hover:underline">Projects</a>
				</li>
			</ul>
		</nav>
	)
}

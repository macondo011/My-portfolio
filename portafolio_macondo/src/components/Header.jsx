import { IconHome2, IconAddressBook, IconSourceCode } from '@tabler/icons-react'
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
							<h2 className="font-bongee ">Macondev</h2>
						</li>
						<li className=" hover:-translate-y-1 hover:scale-110">
							<span
								onClick={() => scrollToSection('Home')}
								className="flex no-underline hover:underline"
							>
								Home<IconHome2 size={36}/>
							</span>
						</li>
						<li className="hover:-translate-y-1  hover:scale-110">
							<span
								onClick={() => scrollToSection('About')}
								className="flex no-underline hover:underline"
							>
								About<IconAddressBook size={36}/>
							</span>
						</li>
						<li className="flex-initial  hover:-translate-y-1 hover:scale-110">
							<span
								onClick={() => scrollToSection('Projects')}
								className="flex no-underline hover:underline"
							>
								Projects<IconSourceCode size={36}/>
							</span>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

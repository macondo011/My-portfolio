import { Laptop } from './Laptop'
import proyecto_1 from '../images/project_1.jpg'
import proyecto_2 from '../images/tetris-macondo.png'

export function Projects() {
	return (
		<div
			id="Projects"
			className=" grid grid-cols-1 h-auto bg-gradient-to-r from-neutral-800  via-gray-800 to-neutral-950 
						mx-2 py-16 gap-4 border-dotted  border-r border-l md:grid-cols-2 pt-24"
		>
			<aside>
				<Laptop imageSrc={proyecto_1} />
				<h4 className="text-center my-4 text-4xl">Project 1</h4>
				<div className="text-center my-2 pb-2">
					<a
						href="https://prueba-tecnica-macondo01-ee4b4.web.app/"
						target="_blank"
						rel="noreferrer"
						className=" border-2 rounded-full border-neutral-50 p-2 text-xl font-mono bg-slate-400 hover:bg-slate-500"
					>
						Live Demo
					</a>
				</div>

				<div className="text-center my-4 ">
					<a
						href="https://github.com/macondo011/pruebas-tecnicas/tree/main/pruebas/01-reading-list/macondo011/app-books-list"
						target="_blank"
						rel="noreferrer"
						className=" border-2 rounded-full border-neutral-50 p-2 text-xl font-mono bg-slate-400 hover:bg-slate-500"
					>
						&lt;/&gt; Source Code
					</a>
				</div>
			</aside>

			<aside>
				<Laptop imageSrc={proyecto_2} />
				<h4 className="text-center my-4 text-4xl">Project 2</h4>
				<div className="text-center my-2 pb-2">
					<a
						href="https://macondo011.github.io/Tetris_macondo/"
						target="_blank"
						rel="noreferrer"
						className=" border-2 rounded-full border-neutral-50 p-2 text-xl font-mono bg-slate-400 hover:bg-slate-500"
					>
						Live Demo
					</a>
				</div>

				<div className="text-center my-4">
					<a
						href="https://github.com/macondo011/Tetris_macondo"
						target="_blank"
						rel="noreferrer"
						className="border-2 rounded-full border-neutral-50 p-2 text-xl font-mono bg-slate-400 hover:bg-slate-500"
					>
						&lt;/&gt; Source Code
					</a>
				</div>
			</aside>
			
		</div>
	)
}

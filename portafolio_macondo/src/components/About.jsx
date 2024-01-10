import { IconBrandNodejs, IconBrandReact, IconBrandTailwind, IconBrandJavascript, IconBrandCss3, 
	IconBrandHtml5, IconBrandGit, IconBrandGithub, IconChessBishopFilled, IconMusicHeart, IconBrandTypescript } from '@tabler/icons-react'
export function About() {
	return (
		<>
			<div
				id="About"
				className="flex flex-col justify-center items-center text-center bg-gradient-to-r from-neutral-800 via-gray-800 to-neutral-950 mx-2 py-1 border-dotted border md:py-14 gap-8"
			>
				<section className=" bg-slate-800 shadow-lg shadow-indigo-500/40 rounded-lg w-11/12 md:w-2/4 h-auto my-12">
					<div className="flex h-8 bg-slate-400 py-2 px-1 gap-2 rounded-t-lg ">
						<div className="w-4 h-4 bg-red-600 rounded-full py-2"></div>
						<div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
						<div className="w-4 h-4 bg-green-500 rounded-full"></div>
					</div>
					<article className="text-left text-lg font-montserrat sm:text-2xl py-8 px-8">
						<p>
							<span className="text-lime">marcosbautista $</span> cat
							aboutmarcos <br />
						</p>
						<p className="py-2">
							Hello! I&apos;m Marcos Bautista, front-end developer. I trained in
							software development (MERN stack) at the University of Antioquia.
							I enjoy turning ideas into engaging web experiences. Passionate
							about design and technology, I believe in collaboration to create
							functional and visually striking products. Always seeking new
							opportunities and continuous learning. Let&apos;s connect and
							bring the digital vision to life.<b className="animate-ping">_</b>
						</p>
					</article>
				</section>
				<section className="bg-slate-800 shadow-lg shadow-indigo-500/40 rounded-lg w-11/12 md:w-2/4 h-auto ">
					<div className="flex h-8 bg-slate-400 py-2 px-1 gap-2 rounded-t-lg ">
						<div className="w-4 h-4 bg-red-600 rounded-full py-2"></div>
						<div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
						<div className="w-4 h-4 bg-green-500 rounded-full"></div>
					</div>
					<article className="w-auto text-left text-lg font-montserrat sm:text-2xl py-8 px-8">
						<p>
							<span className="text-lime">marcosbautista $</span> cd
							skills/tools
							<br />
						</p>
						<p className="py-2">
							<span className="text-lime">skills/tools (main) $</span> ls
							<br />
						</p>
						<p className="text-lime pb-4">Proficient With</p>
						<ul className="grid grid-cols-2 gap-4">
							<li className="flex hover:-translate-y-1 hover:scale-100 gap-2">
								<IconBrandJavascript color='#F0DB4F'/>
								JavaScript
							</li>
							<li className="flex hover:-translate-y-1 hover:scale-100 gap-2">
							<IconBrandTypescript color='#007acc'/> TypeScript
							</li>
							<li className="flex hover:-translate-y-1 hover:scale-100 gap-2">
							<IconBrandGit color='#F1502F'/> Git
							</li>
							<li className="flex hover:-translate-y-1 hover:scale-100 gap-2">
								<IconBrandReact color='#7cc5d9'/> React
							</li>
							<li className=" flex hover:-translate-y-1 hover:scale-100 gap-2">
								<IconBrandGithub color='black'/> GitHub
							</li>
							<li className=" flex hover:-translate-y-1 hover:scale-100 gap-2">
								<IconBrandTailwind color='#3490dc'/> Tailwind</li>
							<li className="flex hover:-translate-y-1 hover:scale-100 gap-2">
								<IconBrandHtml5 color='#F06529'/>
								Html5
							</li>
							<li className="flex hover:-translate-y-1 hover:scale-100 gap-2">
								<IconBrandCss3 color='#2965f1'/>
								Css3
							</li>
							<li className="flex hover:-translate-y-1 hover:scale-100 gap-2"> <IconBrandNodejs color='#3c873a'/>
								Nodejs <div><b className="animate-ping">_</b></div>
							</li>
						</ul>
					</article>
				</section>
				<section className="bg-slate-800 shadow-lg shadow-indigo-500/40 rounded-lg w-11/12 md:w-2/4 h-auto ">
					<div className="flex h-8 bg-slate-400 py-2 px-1 gap-2 rounded-t-lg ">
						<div className="w-4 h-4 bg-red-600 rounded-full py-2"></div>
						<div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
						<div className="w-4 h-4 bg-green-500 rounded-full"></div>
					</div>
					<article className="text-left text-lg font-montserrat sm:text-2xl py-8 px-8">
						<p>
							<span className="text-lime">marcosbautista $</span> cd
							hobbies/interests
							<br />
						</p>
						<p className="py-2">
							<span className="text-lime">hobbies/interests (main) $</span>
							ls <br />
						</p>

						<ul className="gap-4">
							<li className="py-1 hover:-translate-y-1 hover:scale-100">
								📖 reading
							</li>
							<li className="py-1 hover:-translate-y-1 hover:scale-100">
								📽️ movies
							</li>
							<li className=" flex py-1 hover:-translate-y-1 hover:scale-100 gap-1">
								<IconChessBishopFilled/> Chess
							</li>
							<li className="flex py-1 hover:-translate-y-1 hover:scale-100 gap-1">
								<IconMusicHeart/> music <div><b className="animate-ping">_</b></div>
							</li>
						</ul>
					</article>
				</section>
			</div>
		</>
	)
}

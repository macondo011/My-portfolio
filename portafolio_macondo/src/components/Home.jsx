export function Home() {
	return (
		<>
			<main
				id="Home"
				className="flex justify-center items-center bg-gradient-to-r
				         from-neutral-800  via-gray-800 to-neutral-950
				           mx-2 py-16 mt-6 border-dotted  border-r border-l"
			>
				<section className="border-2 border-dotted my-12 bg-gradient-to-r
								  from-indigo-500 via-purple-500 to-pink-500 rounded-full h-auto">
					<img
						className="pb-4 w-24 h-58 sm:w-60"
						src="man_dev.png"
						alt=" hombre desarrollador"
					/>
				</section>
				<article className=" pl-1 sm:pl-4">
					<h1 className="text-3xl font-mono py-2 sm:text-6xl">
						Hi, i&apos;m{' '}
						<strong className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-graper via-rose to-pinkpanter">
							Marcos
						</strong>
						👌
					</h1>
					<p className="text-2xl sm:text-4xl">I&apos;m a Front End Developer.</p>

					<ul className="text-xl">
						<li>
							<p>☕fueled by coffee</p>
						</li>
						<li>
							<p>🌎based in the Colombia </p>
						</li>
						<li>
							<p>📬macondo777@hotmail.com</p>
						</li>
					</ul>
				</article>
			</main>
			<div className="flex justify-center items-center gap-5 mx-2 pb-16 border-dotted  border-r border-l bg-gradient-to-r from-neutral-800  via-gray-800 to-neutral-950">
				<a className='rounded-full border border-dashed p-2 bg-slate-700 opacity-50 hover:bg-slate-900 ' href='https://github.com/macondo011' alt='logo github' target="_blank" rel="noreferrer">
				<img className="h-14 w-14" src="github.png" alt="logo github" />
				</a>
				<a className='rounded-full border border-dashed p-2 bg-slate-700 opacity-50 hover:bg-slate-900'  href='https://twitter.com/macondo011' alt='logo de twitter' target="_blank" rel="noreferrer">
				<img className="h-14 w-14" src="twitter.png" alt="logo de twitter" />
				</a>
				<a className='rounded-full border border-dashed p-2 bg-slate-700 opacity-50 hover:bg-slate-900' href='https://www.instagram.com/macondo011/' alt='logo de instagram' target="_blank" rel="noreferrer">
				<img className="h-14 w-14" src="instagram.png" alt="logo instagram" />
				</a>
			</div>
		</>
	)
}

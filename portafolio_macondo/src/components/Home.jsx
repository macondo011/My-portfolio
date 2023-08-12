
export function Home() {
	return (
		<>
			<main
				id="Home"
				className="flex justify-center items-center bg-gradient-to-r from-emerald-400 to-blue-500 mx-2 py-16 mt-6"
			>
				<section className=" my-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full h-auto">
					<img
						className="pb-4 w-24 h-58 sm:w-60"
						src="man_dev.png"
						alt=" hombre desarrollador"
					/>
				</section>
				<article className=" pl-1 sm:pl-4">
					<h1 className="text-3xl font-mono py-2 sm:text-6xl">
						Hi, i am{' '}
						<strong className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
							Marcos
						</strong>
						👌
					</h1>
					<p className="text-2xl sm:text-4xl">I am a Front End Developer.</p>

					<ul className="text-xl">
						<li>
							<p>☕fueled by coffee</p>
						</li>
						<li>
							<p>🗺️based in the Colombia </p>
						</li>
						<li>
							<p>📬macondo777@hotmail.com</p>
						</li>
					</ul>
				</article>
			</main>
			<div className="flex justify-center items-center gap-5 mx-2 bg-gradient-to-r from-emerald-400 to-blue-500 pb-16">
				<img className="h-14 w-14" src="github.png" alt="logo github" />
				<img className="h-14 w-14" src="twitter.png" alt="logo de twitter" />
				<img className="h-14 w-14" src="instagram.png" alt="logo instagram" />
			</div>
		</>
	)
}

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Bubble } from './components/Bubble'

function App() {
	return (
		<>
			<Header />
			<Home />
			<Bubble/>
			<About />
			<Projects />
			<Footer />	
		</>
	)
}

export default App

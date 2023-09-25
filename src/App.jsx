import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Form from './components/Form'

function App() {
	return (
		<div>
			<div className="hero__container">
				<Navbar />
				<Hero />
			</div>
			<About />
			<Skills/>
			<Portfolio/>
			<Form />
			<Footer />
		</div>
	)
}

export default App

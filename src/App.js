import logo from './logo.svg'
import './App.css'
import { createElement } from 'react'
import React from 'react'

//Все декларативный кроме span, он иперативный!

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<span>{new Date().getFullYear()}</span>
			</header>
		</div>
	)
}

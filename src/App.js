import logo from './logo.svg'
import './App.css'
import { createElement } from 'react'
import React from 'react'

//Все декларативный кроме span, он иперативный!

export const App = () => {
	return React.createElement(
		'div',
		{ className: 'App' },
		React.createElement(
			'header',
			{ className: 'App-header' },
			React.createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			React.createElement(
				'p',
				null,
				'Edit',
				React.createElement('code', null, 'src / App.js'),
				'and save to reload.',
			),
			React.createElement('a', {
				className: 'App-link',
				href: 'https://reactjs.org',
				target: '_blank',
				rel: 'noopener noreferrer',
			}),
			React.createElement('span', null, new Date().getFullYear()),
		),
	)
}

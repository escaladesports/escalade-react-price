import React from 'react'
import { render } from 'react-dom'
import Price from '../src/price'

const containerEl = document.createElement('div')
document.body.appendChild(containerEl)

render(
	<Price
		site='goalrilla'
		id='asdf'
		unavailable='Unavailable'
		loading='Loading...'
		cookies={false}
		verbose
	/>,
	containerEl
)
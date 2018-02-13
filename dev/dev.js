import React from 'react'
import { render } from 'react-dom'
import Price, { prefetchPrices } from '../src'

let containerEl = document.createElement('div')
document.body.appendChild(containerEl)

prefetchPrices('goalrilla', ['asdf'])

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
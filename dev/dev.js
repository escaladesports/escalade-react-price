import React from 'react'
import { render } from 'react-dom'
import { Price } from '../src'

let containerEl = document.createElement('div')
document.body.appendChild(containerEl)

//console.log('main:', main)
console.log('Price:', Price)
//console.log('prefetchPrices:', prefetchPrices)

/*
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
*/
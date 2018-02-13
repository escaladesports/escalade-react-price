import Store from 'escalade-price-store'

const stores = {}

function getStore(options) {
	if (!(options.site in stores)) {
		stores[options.site] = new Store(options)
	}
	return stores[options.site]
}

export default getStore
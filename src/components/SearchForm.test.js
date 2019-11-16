import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import SearchForm from './SearchForm'

describe(`SearchForm Component`, () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<SearchForm />, div)
		ReactDOM.unmountComponentAtNode(div)
	})

	it.skip('renders the UI as expected', () => {
		expect(renderer.create(<SearchForm />).toJSON()).toMatchSnapshot()
	})
})

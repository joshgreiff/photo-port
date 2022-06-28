import React from "react";

import { render, cleanup } from '@testing-library/react'
import'@testing-library/jest-dom/extend-expect'

import Contact from '..'

afterEach(cleanup)

describe('render contact form', () => {
    it('renders', () => {
        render(<Contact/>)
    })

    it('snapshot', () => {
        const { asFragment } = render(<Contact/>)
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders h1', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('header1')).toHaveTextContent('Contact')
    })
})
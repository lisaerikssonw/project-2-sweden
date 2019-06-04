import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('Footer Components', () => {
      it('Should render without errors', () => {
      const component = shallow(<Footer />)
      const footerElement = component.find(`[data-test='footer-component']`)
      expect(footerElement.length).toBe(1)
      })

      it('Should be greater than 2 in amount', () => {
      const component = shallow(<Footer />)
      const subElements = component.find(`[data-test='footer-heading-component']`)
      expect(subElements.length).toBeGreaterThan(2)
      })
  })

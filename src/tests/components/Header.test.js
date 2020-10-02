import React from 'react'
import { Header } from '../../components/Header'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />)
  expect(toJSON(wrapper)).toMatchSnapshot()

  // expect(wrapper.find('h1').length).toBe(1)
})

test('should call startLogout on button click', () => {
  const startLogout = jest.fn()
  const wrapper = shallow(<Header startLogout={startLogout} />)
  wrapper.find('button').simulate('click')
  expect(startLogout).toHaveBeenCalled()
})
import React from 'react'
import { shallow, mount } from 'enzyme'
import Button from './button'

describe('Button test', () => {
    it('render', () => {
        const wrapper = shallow(<Button/>);

        expect(wrapper).toMatchSnapshot()
    })

    it('text is modified', () => {
        const wrapper = mount(<Button/>);

        const button = wrapper.find('button')

        button.simulate('click')
        button.simulate('click')

        expect(wrapper.state().timesClicked).toEqual(2)
        expect(button.text()).toEqual('2 times clicked!')
    })

    it('props onClick works', () => {
        const onClick = jest.fn()
        const wrapper = mount(<Button onClick={onClick} />);

        const button = wrapper.find('button')

        button.simulate('click')
        button.simulate('click')

        expect(onClick).toHaveBeenCalledTimes(2)

    })
})
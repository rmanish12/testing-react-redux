import React from 'react'
//for fullDOM testing implementation
import { mount } from 'enzyme'

import Root from '../../Root'
import CommentBox from '../CommentBox'

let wrapped

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox/>
        </Root>)
})

afterEach(() => {
    wrapped.unmount()
})

it('has a textarea and a button', () => {
    // const wrapped = mount(<CommentBox/>)

    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
})

//describe can be used to club test cases
describe('text area checkup', () => {

    beforeEach(() => {
        //simulating change
        wrapped.find('textarea').simulate('change', {
            target: {
                value: 'new comment'
            }
        })
    
        //force update
        wrapped.update()
    })

    it('has a text area where user can type in', () => {            
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })
    
    it('has a text area that gets cleared off when form is submitted', () => {    
        // to check textarea is not empty when we update it
        // expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    
        wrapped.find('form').simulate('submit')
        wrapped.update()
    
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })
})


  
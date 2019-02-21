import React from 'react'
//for fullDOM testing implementation
import { mount } from 'enzyme'

import CommentBox from '../CommentBox'

let wrapped

beforeEach(() => {
    wrapped = mount(<CommentBox/>)
})

afterEach(() => {
    wrapped.unmount()
})

it('has a textarea and a button', () => {
    // const wrapped = mount(<CommentBox/>)

    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
})

// it('has a text area where user can type in', () => {
//     wrapped.find('textarea').simulate('change', {
//         target: {
//             value: 'new comment'
//         }
//     })
// })
  
import React from 'react'

import commentReducer from '../comments'
import { SAVE_COMMENT } from '../../actions/types'

it('handles action of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'new comment'
    }

    const newState = commentReducer([], action)

    expect(newState).toEqual(['new comment'])
})

it('handles action of unknown type', () => {
    // const newState = commentReducer([], {})
    const newState = commentReducer([], { type: 'dnsjk'})

    expect(newState).toEqual([])
})
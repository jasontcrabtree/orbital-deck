import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

test('Page', () => {
    render(<Page />)
    expect(screen.getAllByText('Orbital Deck')).toBeDefined()
})

/*
Tests/functionality
1. test things that I can't write correctly the first time
2. test interactions and user behaviours
*/

/* user login/logout, userId retrievable from API */

/* user elements stored and retrievable */

/* elements display based on provided data with expected outputs */

/* character counter, word counter provides correct response */

/* copy/paste works as expected */

/* todolist element functions as expected
1. create new element adds to list
2. archive hides element completely
3. complete puts in hidden queue
4. items can be reordered
*/

/* pagination/show more function works for long elements */

/* elements can be dragged/moved on screen */
test('Page', () => {
    render(<Page />)

})

/* elements can be pinned */
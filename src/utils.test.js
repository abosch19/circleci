import { sum } from './utils'

describe('utils library', () => {
    it('sum() function', () => {
        const value = sum(4, 5)

        expect(value).toEqual(4)
    })
})
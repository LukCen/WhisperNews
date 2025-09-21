import { expect, test, describe, it } from 'vitest'
import articleData from "../data/articles/articles_long.json"

describe('Returns a proper object imported from JSON', () => {
  it('Should exist and contain expected data', () => {
    expect(articleData).toBeDefined()
    expect(articleData).toBeInstanceOf(Object)
  })
})

test('Has required parameters, of expected type', () => {
  Object.keys(articleData).forEach(e => {
    const dataElement = articleData[e]
    // title
    expect(dataElement.title, "title does not exist").toBeDefined()
    expect(typeof dataElement.title, "title does not equal type - string").toBe('string')
    // subtitle
    expect(dataElement.subtitle, "subtitle does not exist").toBeDefined()
    expect(typeof dataElement.subtitle, "subtitle does not equal type - string").toBe('string')
    // contents
    expect(dataElement.contents, "contents does not exist").toBeDefined()
    expect(typeof dataElement.contents, "contents does not equal type - object").toBe('object')

  })
})


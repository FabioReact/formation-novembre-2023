import { describe, it, test, expect } from 'vitest'

describe('something truthy and falsy', () => {
  it('should be true', () => {
    expect(true).toBe(true)
  })

  test('false to be false', () => {
    expect(false).toBe(false)
  })
})

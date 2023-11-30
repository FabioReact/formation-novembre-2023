import { render, screen } from '@testing-library/react'
import Loading from '../../components/Loading'

describe('Testing Loading Component', () => {
  it('should show a spinner when isLoading is true', () => {
    render(
      <Loading isLoading={true}>
        <h1>Content Loaded</h1>
      </Loading>,
    )

    const title = screen.queryByRole('heading')
    const spinner = screen.getByLabelText('spinner')
    expect(title).toBeNull()
    expect(spinner).toBeDefined()
  })

  it('should show a Content when isLoading is false', () => {
    render(
      <Loading isLoading={false}>
        <h1>Content Loaded</h1>
      </Loading>,
    )

    const title = screen.queryByRole('heading')
    expect(title).not.toBe(null)
  })
})

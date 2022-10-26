import { getUrl } from '../components/FileMenuItem/getUrl'

describe('useGetUrl', () => {
  // it('returns the correct path string for a given button click and a given url')

  it('should handle top button, unclicked actions', () => {
    expect(getUrl('/', 'test', 0)).toBe('/test')
  })
  it('should handle top button, clicked actions', () => {
    expect(getUrl('/test', 'test', 0)).toBe('/')
  })
  it('should handle bottom button, unclicked actions', () => {
    expect(getUrl('/test1', 'test2', 2)).toBe('/test1/to/test2')
  })
  it('should handle bottom button, clicked actions', () => {
    expect(getUrl('/test1/to/test2', 'test2', 2)).toBe('/test1')
  })
})

import { Link, useLocation } from 'react-router-dom'
import { Category } from '../../FileType'
import { getUrl } from './getUrl'
import SvgImage from '../SvgImage'

// functionnal component properties
interface Props {
  snail: string
  vanity: string
  icon: Category
  category: Category
  color: string
  layer: 1 | 2
}

export default function FileMenuItem ({
  snail,
  vanity,
  icon,
  category,
  color,
  layer
}: Props): JSX.Element {
  const correctColor = `var(--file-${category})`

  return (
    <Link
      className="select-none"
      style={{
        display: 'inline-block',
        margin: '0 1rem',
        marginBottom: '2rem'
      }}
      to={useGetUrl(snail, layer)}
      key={snail}
    >
      <button
        className={`filemenuitem-${category}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // set the border color
          borderColor: useLocation().pathname.split('/')[layer === 1 ? 1 : 3] === snail ? correctColor : undefined
        }}
        type="button"
      >
        <SvgImage image={icon} color={correctColor} />
        <p className='dark:text-white text-gray-800'>{vanity}</p>
      </button>
    </Link>
  )
}

function useGetUrl (s: string, n: number): string {
  return getUrl(useLocation().pathname, s, n)
}

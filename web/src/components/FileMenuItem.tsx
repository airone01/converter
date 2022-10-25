import { Link, useLocation } from "react-router-dom";
import { Category } from "../FileType";
import SvgImage from "./SvgImage";

// functionnal component properties
interface Props {
  snail: string,
  vanity: string,
  icon: Category,
  category: Category,
  color: string,
  layer: 1 | 2
}

export default function FileMenuItem({
  snail,
  vanity,
  icon,
  category,
  color,
  layer
}: Props) {
  const correctColor = `var(--file-${category})`

  return (
    <Link
      className="select-none"
      style={{
        display: "inline-block",
        margin: "0 1rem",
        marginBottom: "2rem",
      }}
      to={useGetUrl(snail, layer)}
      key={snail}
    >
      <button
        className={`filemenuitem-${category}`}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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

// get the url for the button to redirect to
function useGetUrl(s: string, n: number): string {
  const l = useLocation().pathname

  if ((l === '/' || n === 1) && l.split('/')[1] !== s) {
    // top button, not chosen yet
    return `/${s}`
  } else if ((l === '/' || n === 1) && l.split('/')[1] === s) {
    // top button, already chosen
    return '/'
  } else if (n === 2) {
    // bottom button
    const list = l.split('/')
    if (list[list.length-1] === s)
      // already chosen
      return `/${list[1]}`
    // not chosen yet
    list[2] = 'to'
    list[3] = s
    return list.join('/')
  } else return '/'
}
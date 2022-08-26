import { Link, useLocation } from "react-router-dom";
import { Category } from "../FileType";
import SvgImage from "./SvgImage";
import './FileMenuItem.css'

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
      className="lenk"
      style={{
        display: "inline-block",
        margin: "0 1rem",
        marginBottom: "2rem",
      }}
      to={getUrl(snail, layer)}
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
        <p>{vanity}</p>
      </button>
    </Link>
  )
}

// get the url for the button to redirect to
function getUrl(s: string, n: number): string {
  const l = useLocation().pathname

  if ((l === '/' || n === 1) && l.split('/')[1] !== s) {
    return `/${s}`
  } else if ((l === '/' || n === 1) && l.split('/')[1] === s) {
    return l
  } else if (n === 2) {
    const list = l.split('/')
    list[2] = 'to'
    list[3] = s
    return list.join('/')
  } else return '/'
}
import { Link, useLocation } from "react-router-dom";
import SvgImage from "./SvgImage";

interface Props {
  snail: string,
  vanity: string,
  icon: 'document' | 'image',
  color: string,
  layer: 1 | 2
}

export default function FileMenuItem({
  snail,
  vanity,
  icon,
  color,
  layer
}: Props) {
  return (
    <Link
      style={{
        display: "inline-block",
        margin: "0 1rem",
        marginBottom: "2rem",
      }}
      to={getUrl(snail, layer)}
      key={snail}
    >
      <button
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderColor: useLocation().pathname.split('/')[layer === 1 ? 1 : 3] === snail ? color : undefined
        }}
        type="button"
      >
        <SvgImage image={icon} color={color} />
        <p>{vanity}</p>
      </button>
    </Link>
  )
}

function getUrl(s: string, n: number): string {
  const l = useLocation().pathname

  if (l === '/') {
    return `/${s}`
  } else if (n === 1 && l.split('/').length === 2) {
    return `/${s}`
  } else if (n === 1 && l.split('/').length === 4) {
    const list = l.split('/')
    list[1] = s
    return list.join('/')
  } else if (n === 2) {
    const list = l.split('/')
    list[2] = 'to'
    list[3] = s
    return list.join('/')
  } else return '/'
}
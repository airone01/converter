import './Marble.css'

type Props = {
  title: string
  on: boolean
}

export default function Marble(props: Props) {
  const ttip = props.title + " " + (props.on ? "loaded" : "loading...")

  return (
    <div className="marble" title={ttip}>
      {!props.on || (
        <div className="marble-loader" title={ttip}/>
      )}
    </div>
  )
}
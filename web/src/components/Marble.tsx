import './Marble.css'

type Props = {
  title: string
  on: boolean
}

export default function Marble({ title, on }: Props) {
  const ttip = title + " " + (on ? "loaded" : "loading...")

  return (
    <div className="marble" title={ttip}>
      {!on || (
        <div className="marble-loader" title={ttip}/>
      )}
    </div>
  )
}
type Props = {
  title: string
  on: boolean
}

export default function Marble({ title, on }: Props) {
  const ttip = title + " " + (on ? "loaded" : "loading...")

  return (
    <div className="marble h-4 w-4 translate-y-6 bg-white dark:bg-gray-800 rounded-full" title={ttip}>
      {!on || (
        <div className="marble-loader h-2 w-2 translate-y-1/2 translate-x-1/2 bg-gray-800 dark:bg-white rounded-full" title={ttip}/>
      )}
    </div>
  )
}
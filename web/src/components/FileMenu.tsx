import FileMenuItem from './FileMenuItem/FileMenuItem'
import { FileFormat } from '../FileType'
import { useLocation, useNavigate } from 'react-router-dom'
import data from '../types.json'
import { useEffect, useState } from 'react'

const config = data as FileFormat[]

// functionnal component properties
interface Props {
  layer: 1 | 2
}

export default function FileMenu ({ layer }: Props): JSX.Element {
  const navigate = useNavigate()

  const snail = useLocation().pathname.split('/')[1]
  const [items, setItems] = useState([''])

  useEffect(() => {
    if (snail !== '') {
      setItems(() => config.find((x) => x.snail === snail)?.accepts as string[])
    }
    if (items === undefined || items[0] === '') navigate('/') // return to menu if wrong url
    return () => {}
  }, [snail, items, navigate])

  let newConfig: FileFormat[]
  if (layer === 1) {
    newConfig = config.filter((e) => e.itemType === 'file')
  } else {
    newConfig = config.filter((e) => items.includes(e.snail))
  }

  return (<div>{
    newConfig
      .map((e, i) => {
        let color: string

        switch (e.category) {
          case 'audio':
            color = e.color ?? 'var(--file-audio)'
            break
          case 'image':
            color = e.color ?? 'var(--file-image)'
            break
          case 'document':
          default:
            color = e.color ?? 'var(--file-document)'
            break
        }

        return (
        <FileMenuItem
          layer={layer}
          snail={e.snail}
          vanity={e.vanity ?? e.snail.toUpperCase() }
          icon={e.icon ?? e.category ?? 'document'}
          color={color}
          category={e.category ?? 'document'}
          key={i}
        />
        )
      })}</div>)
}

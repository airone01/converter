import FileMenuItem from "./FileMenuItem";
import { Category, FileFormat, Format, ItemType } from "../FileType";
import { useLocation } from "react-router-dom";
import data from '../types.json'

const config = data as FileFormat[]

interface Props {
  layer: 1 | 2,
}

export default function FileMenu({ layer }: Props) {
  const snail = useLocation().pathname.split('/')[1]
  let itemType: ItemType, category: Category
  if (snail !== '') {
    const res = (config.find((x) => x.snail === snail)?.filter) as { itemType: ItemType, category: Category }
    itemType = res.itemType
    category = res.category
  }

  let newConfig: FileFormat[]
  if (layer === 1) {
    newConfig = config.filter((e: Format) => e.itemType === 'file')
  } else {
    newConfig = config.filter((e: Format) => {
      if (e.category === category && e.itemType === itemType) return true
      return false
    })
  }

  return (<div>{
    newConfig
      .map((e, i) => {
        let color: string

        switch (e.category) {
          case 'audio':
            color = e.color || '#ffce90'
            break
          case 'image':
            color = e.color || '#aaaaff'
            break
          default:
          case 'document':
            color = e.color || 'white'
            break
        }

      return (
        <FileMenuItem
          layer={layer}
          snail={e.snail}
          vanity={e.vanity || e.snail.toUpperCase() }
          icon={e.icon || e.category || 'document'}
          color={color}
          key={i}
        />
    )})}</div>);
}
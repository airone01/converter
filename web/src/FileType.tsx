export type Category = 'document' | 'image' | 'audio' | 'video' | 'sheet'
export type ItemType = 'file' | 'action'
export interface Format {
  color?: string
  category?: Category
  icon?: Category
  snail: string
  itemType?: ItemType
  vanity?: string
}
export interface FileFormat extends Format {
  snail: string
  filter: {
    itemType: ItemType
    category: Category
  }
  category?: Category
  color?: string
  icon?: Category
  vanity?: string
  itemType?: ItemType
}
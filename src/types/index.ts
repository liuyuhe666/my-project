export interface DataItem {
  title: string
  emoji: string
  children: Item[]
}

export interface Item {
  name: string
  emoji: string
  description: string
  url: string
  github: string
}

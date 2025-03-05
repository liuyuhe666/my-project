const colors = [
  '#4ea5f5',
  '#8a91d0',
  '#20c007',
]

export function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

const gradientColors = [
  ['#FF626E', '#FFBE71'],
  ['#EEC9A3', '#EF629F'],
  ['#BB5571', '#F0C6B5'],
  ['#BC95C6', '#7DC4CC'],
  ['#B2B9BE', '#2F4052'],
  ['#F6726B', '#934F91'],
  ['#D66D75', '#F2AA9D'],
  ['#6190E8', '#A7BFE8'],
  ['#4DA2CB', '#67B26F'],
  ['#D9A7C7', '#FFFCDC'],
  ['#06BEB6', '#028EA1'],
  ['#67F9D4', '#FF9554'],
  ['#F9957E', '#F3F5D0'],
  ['#FDD819', '#E04C4C'],
  ['#FFF886', '#F072B6'],
  ['#BB73DF', '#FF8DDB'],
  ['#0DCDA4', '#C2FCD4'],
  ['#E0B9FF', '#FF9A9E'],
  ['#EFBD8A', '#D343BA'],
  ['#9600FF', '#E1E1E1'],
  ['#FF9A9E', '#F6E745'],
  ['#18545A', '#F1F2B5'],
  ['#D39340', '#FFD194'],
  ['#DD8DD8', '#F5BDA1'],
  ['#4CA1AF', '#C4E0E5'],
  ['#F902FF', '#00DBDE'],
  ['#EE9CA7', '#FFDDE1'],
]

export function getGradientColor() {
  const randomIndex = Math.floor(Math.random() * gradientColors.length)
  return gradientColors[randomIndex]
}

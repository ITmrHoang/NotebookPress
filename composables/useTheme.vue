export default function () {
  return useState('theme', () => shallowRef({ type: 'light' }))
}
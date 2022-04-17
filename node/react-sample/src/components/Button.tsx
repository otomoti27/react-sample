export default function Button(props: { text: string; onClick: any }) {
  const { text, onClick } = props
  return <button onClick={onClick}>{text}</button>
}

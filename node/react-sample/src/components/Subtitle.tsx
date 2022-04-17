type Props = {
  title: string
  style: object
}
export const Subtitle: React.FC<Props> = (props) => {
  return <h2 style={props.style}>{props.title}</h2>
}

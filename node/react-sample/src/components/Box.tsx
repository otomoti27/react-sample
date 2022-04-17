import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const Box: React.FC<Props> = (props) => {
  const style = {
    border: '1px solid gray',
    borderRadius: '3px',
    padding: '1rem',
    margin: '10px 0',
  }

  return <div style={style}>{props.children}</div>
}

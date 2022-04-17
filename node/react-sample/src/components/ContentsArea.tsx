import React from 'react'
import Button from './Button'

type Props = {
  contents: Array<string>
  onClickDelete: (index: number) => void
}

export const ContentsArea: React.FC<Props> = (props) => {
  const { contents, onClickDelete } = props

  return (
    <ul>
      {contents.map((content: string, index: number) => {
        return (
          <li key={index}>
            <p>{content}</p>
            <Button text='削除' onClick={() => onClickDelete(index)} />
          </li>
        )
      })}
    </ul>
  )
}

import { useCallback, useState } from 'react'
import Title from './Title'
import Button from './Button'
import TextInput from './TextInput'
import { ContentsArea } from './ContentsArea'
import { Box } from './Box'
import { Subtitle } from './Subtitle'

export const App: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const [contents, setContents] = useState<string[]>([])

  const onClickAdd = () => {
    const newContents = [...contents]
    newContents.push(value)
    setContents(newContents)
    setValue('')
  }

  const onClickDelete = useCallback(
    (index: number) => {
      const newContents = [...contents]
      newContents.splice(index, 1)
      setContents(newContents)
    },
    [contents]
  )

  const subtitleStyle = {
    marginBottom: '1rem',
    fontSize: '14px',
  }
  return (
    <>
      <Title title='簡単メモアプリ' />
      <TextInput value={value} setValue={setValue} />
      <Button text='送信' onClick={onClickAdd} />
      <Box>
        <Subtitle style={subtitleStyle} title='メモ一覧' />
        <ContentsArea contents={contents} onClickDelete={onClickDelete} />
      </Box>
    </>
  )
}

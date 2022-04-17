import React from 'react'

export default function TextInput(props: { value: string; setValue: any }) {
  const { value, setValue } = props

  const onChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  return <input type='text' value={value} onChange={onChangeValue} />
}

import React from 'react'

interface IProps {
    value?: string
}
 
const TextBox = (props?: IProps) => {
  return (
    <div>
       {props?.value}
    </div>
  )
}

export default TextBox
import React, { useState } from 'react'
import { IComment } from '../../utils/comments.util';

interface IProps {
    rep?: null | IComment; 
    setComments: (x: IComment) => void;
    handler: any;
}

const CommentInput = (props: IProps) => {

    const [val, setVal] = useState();

    const handleKeyPress = (e: any) => {

        const reply = props.rep;        
        if(e.key === 'Enter') {
        const x: IComment = {
            id: reply?.id+`_1`,
            value: val? val : '',
            reply: null
        }
        props.setComments(x);
        props.handler(props.rep);
    }
    }

  return (
    <div>
        <input id = "com1" onKeyDown={handleKeyPress} onChange={ (e: any) => {setVal(e.target.value)}}/>
        <div className='com-btm'>
            <span>Like</span>
            <span>Reply</span>
        </div>
    </div>
  )
}

export default CommentInput
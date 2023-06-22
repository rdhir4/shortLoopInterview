import React, { useState } from 'react'
import TextBox from './TextBox/textBox';
import { CommentList, IComment } from '../utils/comments.util';
import CommentInput from './common/input';

export const Main = () => {

    const [comments, setComments] = useState<IComment>();
    const handler = (val: any) => {
        val.reply = comments
    }

const replies = (margin: number, reply1?: IComment | null, prev?: IComment | null) => {

    if(!reply1)
    return (
    <div style={{marginLeft: `${margin}px`}}>
    <CommentInput rep={prev}
    setComments = {setComments}
    handler = {handler}
    />
    </div>)
    const x =  replies(margin + 10 ,reply1?.reply, reply1)
    return (
    <div style={{marginLeft: `${margin}px`}}>
    <TextBox value={reply1?.value}/>
    {x}
    </div>
    )
}

  return (
    <div>{
    CommentList.map((comment: IComment) => {
        const {id, value, reply} = comment;
        return (
            <div key = {id}>
            <TextBox value = {value}/>
            {replies(10, reply, null)}
            </div>
        )
    })
    
    }</div>
 )
}

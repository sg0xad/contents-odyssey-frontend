import style from '../../styles/pages/WritePost.module.css'
import Editor from '../../components/Editor'
import { useState } from 'react'
import Post from './Post'

/**
 * 글쓰기 페이지
 */
function WritePost() {
    const [postStatus, setPostStatus] = useState(false)
    return (
        <div className={style.container} >
            <Editor setPostStatus={setPostStatus}/>
            {postStatus ? <Post setPostStatus={setPostStatus}/> : null}
        </div>
    )
}

export default WritePost
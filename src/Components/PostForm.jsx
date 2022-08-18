import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";


const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' });


    const AddNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' });
    }
    return (
        <form>
            {/* Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type='text'
                placeholder="Название поста">
            </MyInput>
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type='text'
                placeholder="Описание Поста"></MyInput>
            <MyButton onClick={AddNewPost}>Создать пост</MyButton>
        </form>
    )
}
export default PostForm;
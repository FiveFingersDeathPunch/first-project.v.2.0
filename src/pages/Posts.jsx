
import React, { useEffect, useState, useRef } from "react";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from '../hooks/useFetching';
import PostService from "../API/PostService";
import MyButton from '../Components/UI/Button/MyButton';
import MyModal from '../Components/UI/MyModal/MyModal';
import Loader from '../Components/UI/Loader/Loader';
import PostFilter from '../Components/PostFilter';
import PostList from '../Components/PostList';
import PostForm from '../Components/PostForm';
import Pagination from "../Components/UI/pagination/Pagination";
import { getPageCount } from "../utils/pages";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../Components/UI/Select/MySelect";




function Posts() {


    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Description' },
        { id: 2, title: 'JavaScript 2', body: 'Description' },
        { id: 3, title: 'JavaScript 3', body: 'Description' },
    ])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSorchedPost = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();





    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getall(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    }

    // Получает пост из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const changePage = (page) => {
        setPage(page)

    }

    return (
        <div className="App">
            <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
                Новый пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: "15px 0" }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <MySelect value={limit}
            onChange={value => setLimit(value)}
            defaultValue='Кол-во элементов на странице'
            option={[
                {value: 5, name: '5'},
                {value: 10, name: '10'},
                {value: 25, name: '25'},
                {value: -1, name: 'Показать все'},
            ]}
            />
            {postError &&
                <h1>Произошла Ошибка ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSorchedPost} title='Посты про JS' />
            <div ref={lastElement} style={{ height: 20, background: 'red' }}></div>
            {isPostsLoading &&
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}><Loader />
                </div>}


            <Pagination totalPages={totalPages}
                page={page}
                changePage={changePage}
            />

        </div>
    )

}

export default Posts;
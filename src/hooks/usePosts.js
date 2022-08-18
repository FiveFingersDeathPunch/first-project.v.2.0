import { useMemo } from "react";


export const useSortedPost = (posts, sort) => {


    const sortedPost = useMemo(() => {
        console.log('Функция ГЕТ СОРТЕД ПОСТС ОТРАБОТАЛА');
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts

    }, [sort, posts]);

    return sortedPost;
}

export const usePosts = (posts, sort, query) => {
    const sortedPost = useSortedPost(posts, sort);

    const sortedAndSorchedPost = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPost]);
    return sortedAndSorchedPost;
}
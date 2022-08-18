import React from "react";
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({ filter, setFilter }) => {

    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placholder='Поиск...'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Сортировка"
                option={[
                    { value: 'title', name: "По заголовку" },
                    { value: 'body', name: 'По описанию' }
                ]}
            />
        </div>
    )
}

export default PostFilter;
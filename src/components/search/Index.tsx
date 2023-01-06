import { FC, useState } from 'react'
import { Input, Space } from 'antd';

import './index.css'

const { Search } = Input;

interface SearchProps {
    SearchWord: string
}

const SearchBox: FC<SearchProps> = (props) => {

    const onSearch = () => {
    }

    return <div className={'search-box'}>
        KEY 搜索 默认SCAN
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
        <div style={{ display: 'flex', flexFlow: 'row wrap', marginLeft: '5px', marginTop: '5px' }}>
            <div className={'db-selector'}>DB-0</div>
            <div className={'db-selector'}>DB-1</div>
            <div className={'db-selector'}>DB-2</div>
            <div className={'db-selector'}>DB-3</div>
            <div className={'db-selector'}>DB-4</div>
            <div className={'db-selector'}>DB-5</div>
            <div className={'db-selector'}>DB-6</div>
            <div className={'db-selector'}>DB-7</div>
            <div className={'db-selector'}>DB-8</div>
            <div className={'db-selector'}>DB-9</div>
            <div className={'db-selector'}>DB-10</div>
            <div className={'db-selector'}>DB-11</div>
            <div className={'db-selector'}>DB-12</div>
            <div className={'db-selector'}>DB-13</div>
            <div className={'db-selector'}>DB-14</div>
            <div className={'db-selector'}>DB-15</div>
        </div>
        <div className='key-list'>
            <div className='redis-key'>Key1</div>
            <div className='redis-key'>Key1</div>
            <div className='redis-key'>Key1</div>
            <div className='redis-key'>Key1</div>
        </div>
    </div>
};

export default SearchBox;
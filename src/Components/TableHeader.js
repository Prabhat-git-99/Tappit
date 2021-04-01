import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Button from './Button';

const TableHeader = () => {
    return (
        <TableHeaderWrapper>
            <div className='header-left-title'>
                <h3>FPO list</h3>
            </div>
            <div className='header-right-container'>
                <div className='sort-container'>
                    <span>Sort by</span>
                    <select defaultValue='all' onChange={() => {}} >
                        <option value="all">All</option>
                        <option value="location">Location</option>
                        <option value="name">Name</option>
                    </select>
                </div>
                <div className='search-container'>
                    { <SearchBar /> }
                </div>
                <div className='btn-container'>
                    <Button text='Add FPO' />
                </div>
            </div>
        </TableHeaderWrapper>
    )
}

const TableHeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;


    .header-left-title {
        font-weight: bolder;
    }

    .sort-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
    }

    span {
        font-weight: lighter;
        padding-right: 10px;
        /* font-size: 12px; */
    }

    select {
        padding: 0.6rem;
        background: white;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .header-right-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search-container, .btn-container {
        padding: 10px;
        border-radius: 5px;
        outline: none;
    }
    input {
        outline: none;
    }
`;

export default TableHeader

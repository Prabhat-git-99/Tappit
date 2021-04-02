import React from 'react';

import styled from 'styled-components';

import { BiSearch } from "react-icons/bi";


const SearchBar = (props) => {

    const onChangeSearch = e => {
        props.onChangeHandler(e);
    }

    return (
        <SearchBarWrapper>
            <div className="searchContainer">
                <input className="searchBox" type="search" name="search" placeholder="Search" onChange={onChangeSearch} />
                {/* <input type="submit" value="Search" class="searchButton" /> */}
                <span className='searchIcon'><BiSearch /></span>
            </div>        
        </SearchBarWrapper>
    );
}

const SearchBarWrapper = styled.div`
        .searchContainer {
            display: inline-flex;
            flex: 1 1 300px;
            position: relative;
            border: 1px solid #ccc;
            border-radius: 5px;
            overflow: hidden;
        }

        .searchIcon {
            padding: 0.5rem;
            background: white;
        }

        .searchBox {
            border: 0;
            padding: 0.5rem 0.5rem 0.5rem 0.5rem;
            flex: 1;
        }
`;

export default SearchBar;

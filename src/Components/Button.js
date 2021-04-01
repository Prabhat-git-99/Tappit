import React from 'react';
import styled from 'styled-components';

const Button = props => {
    return (
        <ButtonWrapper>
            <button>
                {props.text}
            </button>
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.div`
    button {
        padding: 12px 14px 12px 14px;
        background: green;
        font-size: 12px;
        font-weight: bolder;
        border-radius: 5px;
        color: white;
        outline: none;
        border: none;
    }

`;

export default Button

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";


import TableHeader from './TableHeader';
import TableRow from './TableRow';

import Data from '../Data/data';


const TableContainer = () => {

    const newData = Data;
    // const [newData, setNewData] = useState(Data);
    // const [currValue, setCurrValue] = useState('');

    // const onChangeHandler = e => {
    //     let currentV = e.target.value;

    // useEffect({
        
    // })

    console.log(Data);
    return (
        <TableContainerWrapper>
            <TableHeader />
            <table cellSpacing='0'>
               
                <thead>
                <tr>
                <th>FPO Name</th>
                <th>Contact Person Name</th>
                <th>Location</th>
                <th>Members</th>
                <th>BOD</th>
                <th>Staffs</th>
                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    newData.map(item => {
                        return (
                        <tr>
                            <td>{item.fpo}</td>
                            <td>{item.name}</td>
                            <td>{item.location}</td>
                            <td>{item.member}</td>
                            <td>{item.BOD}</td>
                            <td>{item.staffs}</td>
                            <td>
                                <button className='edit'><AiOutlineEdit /></button>
                                <button className='delete'><AiOutlineEye /></button>
                            </td>
                        </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </TableContainerWrapper>
    )
};

const TableContainerWrapper = styled.div`
    background: rgba(0,0,0,0.1);
    width: 90vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    table {
        width: 100%;
        text-align: center;
        border: none!important;
        margin-right: 16px; 
        /* border-collapse: separate; */
        border-spacing: 0 10px;
    }

    th {
        /* background: green; */
        /* margin: 0; */
        font-weight: bolder;
        color: white;
        font-size: 12px;
        padding: 20px;
        background: green;

    }

    th:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    th:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    thead {
    }

    td {
        padding: 15px;
    }

    tr {
        /* margin: 10px; */
        padding: 20px;
        display: table-row;
        background: rgba(255,255,255,0.5);
    }

    .edit, .delete {
        border: none;
        background: transparent;
    }

    .edit {
        color: green;
    }
    .delete {
        color: gray;
    }
`;


export default TableContainer

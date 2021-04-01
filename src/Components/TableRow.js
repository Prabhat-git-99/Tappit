import React from 'react';
import styled from 'styled-components';

const TableRow = (props) => {
    console.log(props.item);
    return (
        <TableRowWrapper>
            {/* <tr>
                <td>{props.item.fpo}</td>
                <td>{props.item.name}</td>
                <td>{props.item.location}</td>
                <td>{props.item.member}</td>
                <td>{props.item.bod}</td>
                <td>{props.item.staffs}</td>
                <td>{props.item.fpo}</td>
            </tr> */}
            <h1>j</h1>
        </TableRowWrapper>
    )
}

const TableRowWrapper = styled.div`

`;

export default TableRow;

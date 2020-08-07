import React from "react";
import {Col, Row} from "reactstrap";
import styled from "styled-components";

const StyledRow = styled(Row)`
display:flex;
margin-bottom: 40px;
`

const RowBlock = ({left, right}) => {
    return (
        <StyledRow>
            <Col md='6'>
                {left}
            </Col>
            <Col md='6'>
                {right}
            </Col>
        </StyledRow>
    )
}

export default RowBlock;

import styled from '@emotion/styled';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;

  text-align: center;
  width: 80%;

  box-shadow: 2px 0px 3px 2px rgb(0 0 0 / 10%), 0px 2px 2px rgb(0 0 0 / 8%),
    2px 2px 2px rgb(0 0 0 / 12%);
`;

export const Thread = styled.thead`
  background-color: #2980b9;
  color: #fff;
`;

export const TableCell = styled.th`
  padding: 10px;
`;

export const TableItem = styled.tr`
  background-color: ${({ elIndex }) => {
    return elIndex % 2 === 0 ? '#fff' : '#B6D0E2';
  }};
`;

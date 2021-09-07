import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

  max-width: 350px;

  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;

  box-shadow: 2px 0px 3px 2px rgb(0 0 0 / 10%), 0px 2px 2px rgb(0 0 0 / 8%),
    2px 2px 2px rgb(0 0 0 / 12%);
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => {
    return props.isOnline ? '#00FF00' : '#FF0000 ';
  }};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  display: block;

  margin-left: 20px;
  width: 80px;
  height: 80px;

  border: 1px solid #4d4d4d;

  border-radius: 50%;
  overflow: hidden;
`;

export const Name = styled.p`
  margin-left: 15px;

  font-size: 20px;
  font-weight: 600;
`;

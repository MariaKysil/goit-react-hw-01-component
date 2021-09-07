import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;

  max-width: 350px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  text-align: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 35px;
  padding-bottom: 35px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #808080;

  overflow: hidden;
`;

export const Name = styled.p`
  font-size: 26px;
  font-weight: 600;
`;

export const Tag = styled.p`
  color: #808080;
`;

export const Location = styled.p`
  color: #808080;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;

  background-color: #d4e6f1;
  border-top: 1px solid #85929e;

  text-align: center;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 33%;
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 14px;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: 353535;
`;

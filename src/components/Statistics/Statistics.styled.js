import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 15px;
  width: 80px;

  border: 1px solid #808080;
  background-color: ${getRandomColor};
`;

export const Label = styled.span`
  font-weight: 600;
`;

export const Percentage = styled.span`
  margin-top: 5px;
  font-size: 18px;
`;

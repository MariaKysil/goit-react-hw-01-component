import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsList,
  StatisticsItem,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ stats, title }) => {
  return (
    <StatisticsSection>
      {title && <h2 className="title">{title}</h2>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;

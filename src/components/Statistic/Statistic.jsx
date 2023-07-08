import PropTypes from 'prop-types';

import s from './statistic.module.css';
import { memo } from 'react';

function Statistic({ good, neutral, bad, total, positivePercentage }) {
  const percentageStat = positivePercentage
  ? `${positivePercentage} %`
  : 'there is no good feedback yet'
  return (
    <div className={s.container}>
      <p className={s.text}>Good: {good}</p>
      <p className={s.text}>Neutral: {neutral} </p>
      <p className={s.text}>Bad: {bad}</p>
      <p className={s.text}>Total: {total}</p>
      <p className={s.text}>Positive Feedback: {percentageStat}</p>
    </div>
  );
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default memo(Statistic);

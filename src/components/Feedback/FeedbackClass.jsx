import { useCallback, useState } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistic from '../Statistic/Statistic';
import Notification from '../Notification/Notification';

function FeedbackClass() {
  const [state, setState] = useState( {
      good: 0,
      neutral: 0,
      bad: 0,
  })
  // add feedback to state
  const handleClick = useCallback(data => {
    setState((prevState) => ({
      ...prevState,
      [data]: prevState[data] + 1,

    }))
  }, [ setState]);

//count total amount of feedback
  const countTotalFeedback = () => {
    const values = Object.values(state);
    return values.reduce((value, acc) => (acc += value), 0);
  }
  const countPositiveFeedbackPercentage= () => {
    const total = countTotalFeedback();
    return Math.ceil((state.good / total) * 100);
  }
  const total = countTotalFeedback();

  return (
    <>
      <Section title={'Please Live Feedback'}>
        <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={handleClick} />
      </Section>

      <Section title={'Statistics'}>
        {total ? (
          <Statistic
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  )
}

export default FeedbackClass;

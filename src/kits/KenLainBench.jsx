import { useEffect, useState } from 'react';
import kenLainBenchPress from '../programs/kenLainBenchPress.json'
import { setItem, getItem } from '../utils/localStorage';

const KenLainBenchPress = () => {
  const [max, setMax] = useState(() => {
    return getItem('bprm') || 100
  });

  useEffect(() => {
    setItem('bprm', max);
  }, [max])



  return (
    <div className='container'>
      <h2 className='title'>{kenLainBenchPress.program}</h2>
			<div className='input'>
				<span>Enter your 1RM: <input onChange={e => setMax(e.target.value)} type="number" placeholder={max}></input> KGs</span>
			</div>
      <div className='introduction'>
				<h3>Introduction</h3>
				<p>{kenLainBenchPress.introduction}</p>
			</div>
			<div className='rules'>
				<h3>Rules</h3>
				{kenLainBenchPress.rules.map((rule, i) => <li key={i}>{rule}</li>)}
			</div>
      {max ? (
        <div>
          <h3>Program</h3>
          <div className='kenLainDisplay'>
          <div className='kenLainCol'>
            <h4>Week</h4>
            {kenLainBenchPress.variables.high.map((week, i) => (
              <div className='case'>n°{i+1}</div>
            ))}
          </div>
          <div className='kenLainCol'>
          <h4>High intensity (mon)</h4>
            {kenLainBenchPress.variables.high.map(week => (
            <div className='case'>
              <div className='bold'>
                {week.heavy.reps}@{Math.round(max*week.heavy.multiplicator)}
              </div>
              <div>
                {week.series ? (<>{week.series.sets}x{week.series.reps}@{Math.round(max*week.series.multiplicator)}</>) : null}
              </div>
            </div>
            ))}
          </div>
          <div className='kenLainCol'>
          <h4>Low intensity (thu)</h4>
            {kenLainBenchPress.variables.low.map(week => (
              <div className='case'>
                {week.sets}x{week.reps}@{Math.round(max*week.multiplicator)}
              </div>
            ))}
          </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default KenLainBenchPress;
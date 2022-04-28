import { useState } from 'react';
import kenLainBenchPress from "../programs/kenLainBenchPress.json"

const KenLainBenchPress = () => {
  const [max, setMax] = useState(100);

  return (
    <div className='container'>
      <h2 className='title'>{kenLainBenchPress.program}</h2>
			<div className='input'>
				<span>Enter your max : <input onChange={e => setMax(e.target.value)} type="number"></input></span>
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
          <div className='kenLainDisplay' style={{"display": "flex"}}>
          <div className='kenLainCol'>
            <h4>Week</h4>
            {kenLainBenchPress.variables.high.map((week, i) => (
              <div className='case'>n {i+1}</div>
            ))}
          </div>
          <div className='kenLainCol'>
          <h4>High intensity (monday)</h4>
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
          <h4>Low intensity (thursday)</h4>
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
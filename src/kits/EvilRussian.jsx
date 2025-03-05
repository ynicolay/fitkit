import { useState } from 'react';
import evilRussian from "../programs/evilRussian.json";

const calculateSet = (max, multiplier) => Math.round(max * multiplier);

const EvilRussian = () => {
  const [max, setMax] = useState(20);
	return (
		<div className='container'>
			<h2 className='title'>{evilRussian.program}</h2>
			<div className='input'>
				<span>Enter your max : <input onChange={e => setMax(e.target.value)} type="number" placeholder='20'></input></span>
			</div>
			<div className='introduction'>
				<h3>Introduction</h3>
				<p>{evilRussian.introduction}</p>
			</div>
			<div className='rules'>
				<h3>Rules</h3>
				{evilRussian.rules.map((rule, i) => <li key={i}>{rule}</li>)}
			</div>
			{max ? (
				<div className='display'>
					<h3>Program</h3>
					{evilRussian.variables.map((day, i) => {
						if ((i+1)%7 === 1) {
							return (
								<div key={i}>
									<p style={{'textDecoration': 'underline'}}>Week {Math.floor(i/7) + 1}</p>
									<p>{evilRussian.days[i%7]} - {day.interval === 0 ? 'Test your new max' : <span>{calculateSet(max, day.multiplicator)} pushups every {day.interval} minutes</span>}</p>
								</div>
							);
						} else return (
							<div key={i}>
								<p>{evilRussian.days[i%7]} - {calculateSet(max, day.multiplicator)} pushups every {day.interval} minutes</p>
							</div>
						)
					})}
				</div>
			) : null}

		</div>
	)
}

export default EvilRussian;
import { useEffect, useState } from 'react';
import jimWendler531 from '../programs/531.json';
import { setItem, getItem } from '../utils/localStorage';

const Wendlers531 = () => {
    const [rms, setRMs] = useState(() => {
        return getItem('jwrms') || [100, 100, 100, 50]
    });

    useEffect(() => {
        setItem('jwrms', rms);
    }, [rms]);

    const updateRMs = (value, index) => {
        const newRMs = rms.map((rm, i) => {
            if (i === index) {
                return value;
            } else {
                return rm;
            }
        });
        setRMs(newRMs);
    };

    return (
        <div className='container'>
            <h2 className='title'>{jimWendler531.program}</h2>
            {jimWendler531.exercices.map((exercice, i) => (
                <div className='input'>
                    <span>Enter your {exercice} 1RM: <input onChange={e => updateRMs(e.target.value, i)} type="number" placeholder={rms[i]}></input> KGs</span>
                </div>
            ))}
            <div className='introduction'>
                <h3>Introduction</h3>
                <p>{jimWendler531.introduction}</p>
            </div>
            <div className='rules'>
                <h3>Rules</h3>
                {jimWendler531.rules.map((rule, i) => <li key={i}>{rule}</li>)}
            </div>
            {rms ? (
                <div>
                    <h3>Program</h3>
                    <div className='kenLainDisplay'>
                        <div className='kenLainCol'>
                            <h4>Week</h4>
                            {jimWendler531.multiplicators.map((week, i) => (
                                <div className='case'>n°{i + 1}</div>
                            ))}
                        </div>
                        {jimWendler531.exercices.map((exercice, exerciceIndex) => (
                            <div className='kenLainCol'>
                                <h4>{exercice}</h4>
                                {jimWendler531.multiplicators.map((percentages, multiplicatorsIndex) => (
                                    <div className='case'>
                                        {jimWendler531.reps[multiplicatorsIndex] instanceof Array ? 
                                            percentages.map((percentage, percentageIndex) => (
                                                <div>{jimWendler531.reps[multiplicatorsIndex][percentageIndex]}@{Math.round(rms[exerciceIndex]*0.9*percentage)}</div>
                                            )) :
                                            percentages.map(percentage => (
                                                <div>{jimWendler531.reps[multiplicatorsIndex]}@{Math.round(rms[exerciceIndex]*0.9*percentage)}</div>
                                            ))   
                                        }
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Wendlers531;
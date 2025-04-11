import React, { useState } from 'react';

const Wendlers531 = () => {
  const [maxRep, setMaxRep] = useState(0);
// AI SLOP TO REFACTOR


  const exercises = [
    {
      name: "Bench Press",
      weeks: [
        { week: 1, sets: [{ set: 1, reps: 5, intensity: 0.65 }, { set: 2, reps: 5, intensity: 0.75 }, { set: 3, reps: "5+", intensity: 0.85 }] },
        { week: 2, sets: [{ set: 1, reps: 3, intensity: 0.70 }, { set: 2, reps: 3, intensity: 0.80 }, { set: 3, reps: "3+", intensity: 0.90 }] },
        { week: 3, sets: [{ set: 1, reps: 5, intensity: 0.75 }, { set: 2, reps: 3, intensity: 0.85 }, { set: 3, reps: "1+", intensity: 0.95 }] },
        { week: 4, sets: [{ set: 1, reps: 5, intensity: 0.40 }, { set: 2, reps: 5, intensity: 0.50 }, { set: 3, reps: 5, intensity: 0.60 }] },
      ],
    }
  ];

  const handleMaxRepChange = (event) => {
    setMaxRep(parseFloat(event.target.value) || 0);
  };

  const calculateWeight = (intensity) => {
    return (maxRep * intensity).toFixed(2);
  };

  return (
    <div>
      <input
        type="number"
        value={maxRep}
        onChange={handleMaxRepChange}
        placeholder="Enter your max rep"
      />
      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Week</th>
            <th>Set</th>
            <th>Reps</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, exerciseIndex) => (
            <React.Fragment key={exerciseIndex}>
              {exercise.weeks.map((week, weekIndex) => (
                <React.Fragment key={weekIndex}>
                  {week.sets.map((set, setIndex) => (
                    <tr key={setIndex}>
                      {setIndex === 0 && <td rowSpan={week.sets.length}>{exercise.name}</td>}
                      {setIndex === 0 && <td rowSpan={week.sets.length}>{week.week}</td>}
                      <td>{set.set}</td>
                      <td>{set.reps}</td>
                      <td>{calculateWeight(set.intensity)}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Wendlers531;

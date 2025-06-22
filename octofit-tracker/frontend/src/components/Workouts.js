import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://glowing-space-xylophone-wx455qrrqghjp5-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-4 bg-body rounded">
      <h1 className="mb-4 text-primary">Workouts</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {workouts.map(workout => (
          <div className="col" key={workout._id}>
            <div className="card h-100 border-primary">
              <div className="card-body">
                <h5 className="card-title">{workout.name}</h5>
                <p className="card-text">{workout.description}</p>
                <button className="btn btn-outline-primary" disabled>Start Workout (Coming Soon)</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;

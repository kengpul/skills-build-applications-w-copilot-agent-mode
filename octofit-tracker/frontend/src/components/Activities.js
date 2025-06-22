import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://glowing-space-xylophone-wx455qrrqghjp5-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-4 bg-body rounded">
      <h1 className="mb-4 text-primary">Activities</h1>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th>User</th>
              <th>Type</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activity => (
              <tr key={activity._id}>
                <td>{activity.user}</td>
                <td>{activity.activity_type}</td>
                <td>{activity.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary mt-3" disabled>Add Activity (Coming Soon)</button>
    </div>
  );
}

export default Activities;

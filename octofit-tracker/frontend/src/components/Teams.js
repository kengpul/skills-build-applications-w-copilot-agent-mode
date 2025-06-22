import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://glowing-space-xylophone-wx455qrrqghjp5-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-4 bg-body rounded">
      <h1 className="mb-4 text-primary">Teams</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {teams.map(team => (
          <div className="col" key={team._id}>
            <div className="card h-100 border-primary">
              <div className="card-body">
                <h5 className="card-title">{team.name}</h5>
                <p className="card-text">Members: {team.members ? team.members.length : 0}</p>
                <button className="btn btn-outline-primary" disabled>View Team (Coming Soon)</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;

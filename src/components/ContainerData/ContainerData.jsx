import React from 'react';
import './ContainerData.css';

const ContainerData = ({ userData, error }) => {
  if (error) return <p className="error-message">{error}</p>;

  if (!userData) return <p className="info-message">Search for a GitHub user to see data.</p>;

  return (
    <main className='container-data'>
      <div className="div-image">
        <img src={userData.avatar_url} alt={userData.login} />
      </div>

      <div className="content-dev">
        <div className="header-info">
          <div>
            <h3>{userData.name || "No name provided"}</h3>
            <span className="username">@{userData.login}</span>
          </div>
          <span className="joined">Joined {new Date(userData.created_at).toLocaleDateString()}</span>
        </div>

        <p className="bio">{userData.bio || "This profile has no bio."}</p>

        <div className="stats">
          <div>
            <p>Repos</p>
            <strong>{userData.public_repos}</strong>
          </div>
          <div>
            <p>Followers</p>
            <strong>{userData.followers}</strong>
          </div>
          <div>
            <p>Following</p>
            <strong>{userData.following}</strong>
          </div>
        </div>

        <div className="details">
          <p><strong>Location:</strong> {userData.location || "Not available"}</p>
          <p><strong>Website:</strong> {userData.blog ? <a href={userData.blog} target="_blank" rel="noreferrer">{userData.blog}</a> : "Not available"}</p>
          <p><strong>GitHub:</strong> <a href={userData.html_url} target="_blank" rel="noreferrer">{userData.html_url}</a></p>
        </div>
      </div>
    </main>
  );
};

export default ContainerData;

import { useEffect, useState } from 'react';
import './App.css';

const GitHubProfileValueCalculator = ({ username }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching GitHub profile data', error);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div>
      {profileData ? (
        <div>
          <h2>{profileData.login}'s GitHub Profile</h2>
          <p>Public Repositories: {profileData.public_repos}</p>
          <p>Followers: {profileData.followers}</p>
          {/* Add more metrics as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GitHubProfileValueCalculator;

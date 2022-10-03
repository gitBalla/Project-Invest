import React, { useContext } from 'react';
import { UserContext } from '../../App';


const MyProjects = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h3>{user} Projects</h3>
    </div>
  );
};

export default MyProjects;
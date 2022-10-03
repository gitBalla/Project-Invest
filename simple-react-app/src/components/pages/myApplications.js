import React, { useContext } from 'react';
import { UserContext } from '../../App';


const MyApplications = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h3>{user} Applications</h3>
    </div>
  );
};

export default MyApplications;
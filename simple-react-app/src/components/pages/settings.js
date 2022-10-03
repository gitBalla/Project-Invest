import React, { useContext } from 'react';
import { UserContext } from '../../App';


const Settings = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h3>{user} Settings</h3>
    </div>
  );
};

export default Settings;
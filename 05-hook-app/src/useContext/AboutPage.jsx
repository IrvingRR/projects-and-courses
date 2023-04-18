import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const AboutPage = () => {
  
  const { user } = useContext(UserContext);
  
  return (
      <>
          <h1>AboutPage</h1>
          <hr />
          <h4>Hello { user.username ? user.username : 'Unknown user' }</h4>
      </>
    )
}
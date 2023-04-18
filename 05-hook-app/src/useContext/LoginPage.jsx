import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext);

    return (
      <>
          <h1>LoginPage</h1>
          <hr />
          <pre aria-label="pre-tag">
            { JSON.stringify(user, null, 3) }
          </pre>
          <button className="btn btn-primary" disabled={ user } onClick={ () => setUser({ username: 'PatricioEstrella12', email: 'ulisesRomero@gmail.com', age: 22 }) }>Set user</button>
      </>
    )
}
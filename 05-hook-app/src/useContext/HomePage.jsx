import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {
  
  const { user, setUser } = useContext(UserContext);
  
  return (
      <>
          <h1>HomePage</h1>
          <hr />
          <pre aria-label="pre-tag">
            { JSON.stringify(user, null, 3) }
          </pre>
          <button className="btn btn-primary" onClick={ () => setUser({ username: 'PatricioEstrella12', email: 'ulisesRomero@gmail.com', age: Math.floor(Math.random() * 50) }) }>Set user</button>
      </>
    )
  }

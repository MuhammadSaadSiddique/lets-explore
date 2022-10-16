import {useContext, useState} from "react";
import { AuthContext } from "../context/AuthContext";
import {OPEN_MODEL} from "../context/types/ModelTypes";
import axios from "axios";


const Login = (props) =>{
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
      });
    
      const { dispatch } = useContext(AuthContext);

    
      const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            // check here
          const res = await axios.post("/auth/login", credentials);
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
          
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };
    return (<form onSubmit={handleClick}>
        <div className="model__heading">
            <h3>Login</h3>
        </div>

        <div className='group'>
            <input
                type="email"
                name=""
                className="group__control"
                placeholder="email"
                value={credentials.email}
                onChange={handleChange}
            />
        </div>
        <div className='group'>
            <input
                type="password"
                name=""
                className="group__control"
                placeholder="password"
                value={credentials.password}
                onChange={handleChange}
            />
        </div>
        <div className='group model__row'>
            <input type="submit" name="" className="btn-dark" value="sSubmit"/>
            {/* Again check */}
            <span onClick={()=> dispatch({type: OPEN_MODEL, payload: props.currentModel})}> צור משתמש חדש</span>
        </div>
    </form>)
}

export default Login;

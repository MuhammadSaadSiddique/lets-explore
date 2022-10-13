import {useContext, useState} from "react";
import ModelContext from "../context/ModelContext";
import {OPEN_MODEL} from "../context/types/ModelTypes";

const Login = (props) =>{
    const {dispatch} = useContext(ModelContext);
    const [state, setState] = useState({
        email: '',
        password:''
    });
    const loginForm = (e) =>{
        e.preventDefault();
    }
    return (<form onSubmit={loginForm}>
        <div className="model__heading">
            <h3>Login</h3>
        </div>

        <div className='group'>
            <input
                type="email"
                name=""
                className="group__control"
                placeholder="email"
                value={state.email}
                onChange={(e)=> setState({...state, email: e.target.value})}
            />
        </div>
        <div className='group'>
            <input
                type="password"
                name=""
                className="group__control"
                placeholder="password"
                value={state.password}
                onChange={(e)=> setState({...state, password: e.target.value})}
            />
        </div>
        <div className='group model__row'>
            <input type="submit" name="" className="btn-dark" value="sSubmit"/>
            <span onClick={()=> dispatch({type: OPEN_MODEL, payload: props.currentModel})}> צור משתמש חדש</span>
        </div>
    </form>)
}

export default Login;

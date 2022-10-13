import {useContext, useState} from "react";
import ModelContext from "../context/ModelContext";
import {OPEN_MODEL} from "../context/types/ModelTypes";

const Register = (props) => {
    const {dispatch} = useContext(ModelContext);
    const [state, setState] = useState({
        name: '',
        email: '',
        password:''
    });
    const registerForm = (e) =>{
        e.preventDefault();
        // Todo
    }
    return (<form onSubmit={registerForm}>
            <div className="model__heading">
            <h3>Create a new account</h3>
        </div>
        <div className='group'>
            <input
                type="text"
                name=""
                className="group__control"
                placeholder="name"
                value={state.name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
            />
        </div>
        <div className='group'>
            <input
                type="email"
                name=""
                className="group__control"
                placeholder="email"
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
            />
        </div>
        <div className='group'>
            <input
                type="password"
                name=""
                className="group__control"
                placeholder="password"
                value={state.password}
                onChange={(e) => setState({ ...state, password: e.target.value })}
            />
        </div>
        <div className='group model__row'>
            <input type="submit" name="" className="btn-dark" value="Subscribe" />
            <span onClick={()=> dispatch({type: OPEN_MODEL, payload: props.currentModel})}> משתמש קיים? התחבר</span>
        </div>
        </form>)
}

export default Register;

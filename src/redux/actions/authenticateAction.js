import {authenticateActions} from '../reducers/authenticateReducer';

function login(id, password) {
    return (dispatch) => {
        //dispatch({type:"LOGIN_SUCCESS", payload: {id, password}}); //이전문법
        dispatch(authenticateActions.getLoginAction({id, password})) //로그인시 받은 로그인 정보를 reducer에 보냄.
    };

}

function logout() {
    return (dispatch) => {
        //dispatch({type:"LOGIN_SUCCESS"}); //이전 문법
        dispatch(authenticateActions).getLogoutAction()
    };

}

export const authenticateAction = {login, logout} 
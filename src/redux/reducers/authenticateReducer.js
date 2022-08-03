import {createSlice} from '@reduxjs/toolkit'; 

let initialState={
    id:'',
    password:'',
    authenticate:false
}

//이전 문법
/*
function authenticateReducer(state=initialState, action){ 
    let {type,payload} = action
    switch(type){
        case "LOGIN_SUCCESS" :
            return {
                ...state, 
                id:payload.id, 
                password:payload.password, 
                authenticate : true,
            }
        case "LOGOUT_SUCCESS" :
            return {
                ...state, 
                id:'',
                password:'',
                authenticate : false,
            }
        default :
            return {...state}

    }
}

export default authenticateReducer;
*/

//최신문법(redux toolkit)
const authenticateSlice = createSlice({ //createSlice로 이름, 초기상태, reducers를 선언해서 책을 만듬. 
    name:'auth',
    initialState,
    reducers:{
        getLoginAction(state, action){  //action에서 받은 정보를 활용하여 state변경
            state.id = action.payload.id;
            state.password = action.payload.password;
            state.authenticate = true;
        },

        getLogoutAction(state){ //임시 구현. 소스수정해야함. 
            state.id = '';
            state.password = '';
            state.authenticate = false;
        }
    }
})

export const authenticateActions = authenticateSlice.actions;
export default authenticateSlice.reducer;
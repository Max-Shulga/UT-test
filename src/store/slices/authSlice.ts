import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {sexType} from "@/types/sex";
import {contentType} from "@/types/contentType";

type initialStateType={
    sex: sexType
    username:string
    agePreference:[number, number]| null,
    age:number|null
    contentType:contentType
    mail:string
    password:string
}

const initialState: initialStateType = {
    sex: null,
    username: '',
    agePreference: null,
    age:null,
    contentType: null,
    mail: '',
    password: '',
};
const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setSex: (state, action: PayloadAction<sexType>) => {
            state.sex = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setAgePreference: (state, action: PayloadAction<[number, number]>) => {
            state.agePreference = action.payload;
        },
        setAge:(state,action: PayloadAction<number>) => {
            state.age = action.payload;
        },
        setContentType: (state, action: PayloadAction<"hot" | "trendy">) => {
            state.contentType = action.payload;
        },
        setMail: (state, action: PayloadAction<string>) => {
            state.mail = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
});

export const { setSex, setUsername,setAge, setAgePreference, setContentType, setMail, setPassword } = authSlice.actions;
export default authSlice.reducer;

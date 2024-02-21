import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Aluno } from "../../models/aluno.model";
import { realizarLogin } from "../../services/api.service";
import { LoginDTO } from "../../models/login.model";
import { setLoading } from "./loading.slice";

//Pedir explicação!!!!!!!!!!!!!!!
//Mostra as informações do processo pending -> fulfilled -> rejected
export const realizarLoginThunk = createAsyncThunk("aluno/realizarLogin", async (data: LoginDTO, config) => {

    config.dispatch(setLoading(true));

    

    const result = await realizarLogin(data);

    return result;
});

const alunoSlice = createSlice({
    name: "aluno",
    initialState: null as Aluno | null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(realizarLoginThunk.pending, (state, action) => {
            return null;
        });

        builder.addCase(realizarLoginThunk.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default alunoSlice.reducer;

//slice:
//reducer:

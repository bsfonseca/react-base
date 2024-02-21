import axios from "axios";
import { LoginDTO } from "../models/login.model";
import { Aluno } from "../models/aluno.model";

const api = axios.create({
    baseURL: "http://localhost:3333",
});

// 1- Entrada data:login
export async function realizarLogin(data: LoginDTO) {
    try {
        // 2 - Processamento
        const result = await api.post("/login", data);
        // 3 - Saída
        return result.data.data as Aluno;
    } catch (error: any) {
        console.log(error);
        alert(error.toString());
        return null;
    }
}

//data são os dados que a API retorna

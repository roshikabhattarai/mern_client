import axios from "axios";
import { TLoginInput } from "@/types/auth.types";

// login

export const login = async (data: TLoginInput)=>{
    try{
        const response = await axios.post(
            "http://localhost:8080/api/v1/auth/login",
        data,
    );

    }catch(error){
        console.log(error);
        // throw error
    }
};
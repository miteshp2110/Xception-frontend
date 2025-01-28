import axios from "axios";
import Response from "./Response";
// const uri = "https://xception.tech/service/api"
const uri = "http://localhost:5000/api"


const postRequest = async(endpoint,jwt,data)=>{


  const headers = {
    "Content-Type": "application/json",
    Authorization: jwt,
  };

  try{
    const response = await axios.post(uri+`/${endpoint}`,data,{headers})
    return new Response(200,false,response.data)
  }
  catch(error){

    if(error.status === 403){
        return new Response(403,true)
    }
    if(error.status === 401){
        const errorResponseData = error.response.data
        if(errorResponseData === "Unauthorized"){
            return new Response(403,true)
        }
        else{
            if(errorResponseData.error === 'name already taken'){
                return new Response(401,true)
            }
        }
    }
    // if(error.status === 401 || error.status===403){
    //     return new Response(401,true)
    // }
  }
}

export default postRequest
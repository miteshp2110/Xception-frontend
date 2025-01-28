import postRequest from "./requestMaker"

export const addProject = async(projectName,jwt)=>{
    const data = {
        "name":projectName
    }
    return await postRequest("/createProject",jwt,data)
}

export const getAllProject = async(jwt)=>{
    return await postRequest("getAllProject",jwt,{})
}

export const getAllExceptions = async(apiKey,jwt)=>{
    const data = {
        "apiKey":apiKey
    }
    return await postRequest("getAllExceptions",jwt,data)
}


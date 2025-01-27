import postRequest from "./requestMaker"

export const addProject = async(projectName,jwt)=>{
    const data = {
        "name":projectName
    }
    return await postRequest("/createProject",jwt,data)
}
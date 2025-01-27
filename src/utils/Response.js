class Response{
    constructor(status,error=false,data={}){
        this.status = status
        this.error = error,
        this.data = data
    }
}

export default Response
class response{

    private _responseCode!: number;
    public get responseCode(): number {
        return this._responseCode;
    }
   
    private _responseData: any;
    public get responseData(): any {
        return this._responseData;
    }
   
    constructor(responseCode:number, responseData:any){
        this._responseCode = responseCode;
        this._responseData = responseData;
    }

}

export default response

export class User {

    constructor( private _username:string,
                 private _password:number,
                 private _email:string
                ) { }
    
    public toString():string {
        
        return `${this._username}\n${this._password}\n${this._username}`;
    }
}
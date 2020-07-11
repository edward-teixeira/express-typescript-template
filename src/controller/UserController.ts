import { Request, Response } from "express";
import { User } from "../model";

export class UserController {
    
    public Index(req:Request, res:Response):void {
        res.status(200).json(new User("Test", 1234, "test@gmail.com"));
    }

    public Create(req:Request, res:Response):void {
        const {userName, pasword, email } = req.body;
        res.status(200).json(new User(userName, pasword, email));
    }
}
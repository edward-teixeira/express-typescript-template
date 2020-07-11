import { Request, Response } from "express";

export class ApiController {

    public Index(req: Request, res: Response):void {
        res.status(200).json( {
            Controller: "home",
            method: "get"
        });
    }
}
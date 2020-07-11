interface IRepository<T> {
    GetBydId(id:number):T,
    GetAll():T,
    Create(entity: T):T,
    Update(id:number, entity:T):T,
    Delete(entity:T):T
}

export abstract class AbstractRepository<T> implements IRepository<T>{

    GetAll(): T {
        throw new Error("Not implemented Exception");
    }

    GetBydId(id: number): T {
        throw new Error("Not implemented Exception");
    }

    Create(entity: T): T {
        throw new Error("Not implemented Exception");
    }

    Delete(entity: T): T {
        throw new Error("Not implemented Exception");
    }

    Update(id:number, entity: T): T {
        throw new Error("Not implemented Exception");
    }

}
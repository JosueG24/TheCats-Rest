// type
export type example = "this example" | "or this example" | "or this other example"
// type es para crear nuestros propios tipos de datos, como el ejemplo de antes

// interface
export interface myInterface {
    id: number,
    name : string,
    exampleSelected: example
}
// una interface es mas como un contrato que debe cumplir un objeto

// la diferencia entre type y interface es que la interfaces se pueden extender de una manera mas natural que las types
interface myOtherInterface extends myInterface{
    cellphone:number
}
// ======================================================================================

export type resObject={
    status: number
    message:string
    data: object|unknown
    error: object | unknown
}

export type newCat={
    name:string
    src:string
}

export type myCat ={
    name: string;
    src: string;
}
// ==========================================
// V0

export interface newCatRequest {
    name: string
    source: string
    owner: null | string
}

export interface responseService{
    status: number
    message: string
    data: object | null
    error: any
}
//Akcijata e funkcija sto vrakja objekt od type sto sakame na prikaze i payload nov state sto sakame da go update
export const sayHello = () => {

    return {
        type : "SAY_HELLO",
        payload: "Hi and welcome to my lovely REDUX App!!!"
    }

}
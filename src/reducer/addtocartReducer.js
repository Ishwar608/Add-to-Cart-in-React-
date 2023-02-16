

export default (state = [], { type, payload }) => {
    switch (type) {

        case 'AddToCartReducer':

            let myCart = [...state];
            let myObj = {...payload}
            if (myCart.length === 0) {
                myObj['qty'] = 1;
                myCart.push(myObj);
            }
            else {
                let checkProductExist = myCart?.find((data, index) => {

                    return data.id == myObj.id;
                })

                if (checkProductExist == undefined || checkProductExist == null){
                    myObj.qty = 1
                    myCart.push(myObj);
                } 
                else{
                    let myArray = myCart?.filter((elemment,index) => {

                        if (elemment.id == myObj.id) {
                            elemment.qty = elemment.qty +1;
                        }
                            return elemment;
                    });

                    myCart=myArray

                }

            }

            return myCart;
        case 'RemoveData':
            let d = [...state];
            d.splice(payload,1);
        return d;    


        default:
            return state
    }
}

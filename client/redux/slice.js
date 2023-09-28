import { createSlice } from '@reduxjs/toolkit'


const initialState={
  cart:[],
  count:0,
  total:0,
  cartcount:1,
  Dish:[],
 
};

export const counterSlice = createSlice({
 name:"coter",
 initialState,
  reducers: {
   
    addtocart: (state,action) => {
      
            state.cart.push(action.payload);
            state.count = state.cart.length;
            state.total=  state.count?state.total +action.payload.price:state.total=0;
            state.cartcount=state.cart.includes(action.payload)?state.cartcount+1:state.cartcount=1;
           


    },

    remcart:(state,action) => {
      console.log(action.payload);
      console.log(state.cart.length)
      const updtacount = state.total?state.total -action.payload.price:state.total=0;
      const update= state.cart.filter(item=>action.payload.id !== item.id);
    return{
      cart:update,
      total:updtacount
    }
    }
  },
})

// Action creators are generated for each case reducer function

export const { addtocart ,remcart,Dishbyid,RemDishbyid} = counterSlice.actions

export default counterSlice.reducer
// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  birthDate: '',
  address: '',
  city: '',
  region: '',
  postalCode: '',
  gender: 'male',
  profile: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setRegisterFormData: (state, action) => {
        console.log("stateis",state,action.payload)
        return { ...state, ...action.payload };
    },
    clearFormData: () => initialState,
  },
});

export const { setRegisterFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;

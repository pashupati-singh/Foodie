import { Autocomplete, Box, Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addressAddFunction, addressGetFunction } from '../Redux/AddressRedux/action';

export const AddressPage = ({AddressData}) => {
  const {token} = useSelector((store)=>store.authReducer)
  const {address} = useSelector((store)=>store.addressReducer)
  const dispatch = useDispatch()
  const [checkoutChecked, setCheckoutChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    house: '',
    state:'',
    code: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleObject = (option) =>{
    return `${option.name}, ${option.house}, ${option.street}, ${option.state}, ${option.code}`;
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {...formData}
    if(checkoutChecked){
      AddressData(obj);
    }
    dispatch(addressAddFunction(obj,token))
    setFormData({
      name: '',
      street: '',
      house: '',
      state:'',
      code: '',
    });
    setCheckoutChecked(false)
    FetchAdress(token)
};
const handleCheckoutChange = (event) => {
  setCheckoutChecked(event.target.checked);
};

const handleAutocompleteChange = (event, value) => {
  if (value) {
   AddressData(value)
};
}

   const FetchAdress = async (token) =>{
      dispatch(addressGetFunction(token))
   }


   useEffect(()=>{
     FetchAdress(token);
   },[])


  return (
    <Box>
      <Box style={{display:"flex"}}>
       <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={address.address}
      getOptionLabel={handleObject}
      onChange={handleAutocompleteChange}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label = "Address" />}
    />
      </Box>
    <form onSubmit={handleSubmit}>
      <Box style={{display:"flex"}}>
      <Grid item xs={12} sm={6}>
        <TextField
        aria-required
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      </Grid>
      <TextField
      aria-required
        label="House No."
        name="house"
        value={formData.house}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      /></Box>
      
      <TextField
        label="Street Name"
        aria-required
        name="street"
        value={formData.street}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      
      <Box style={{display:"flex"}}><TextField
        label="State"
        name="state"
        aria-required
        value={formData.state}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Zip Code"
        name="code"
        aria-required
        value={formData.code}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      /></Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={checkoutChecked}
            onChange={handleCheckoutChange}
          />
        }
        label="want to continue with same address"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  </Box>
  )
}

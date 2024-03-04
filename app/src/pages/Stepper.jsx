import React, { useState } from 'react'
import style from "../css/Cart.module.css"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AddressPage } from './AddressPage';
import { PaymentPage } from './PaymentPage';
import { CartPage } from './CartPage';
import Image from "../Image/foodies.png"
import { Footer } from './Footer';
import { Link } from 'react-router-dom';


const steps = ['Bag', 'Address', 'Payment'];


export const StepperFun = () => {
  const [address,setAddress] = useState("");
  const [cart,setCart] = useState("");
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <CartPage cartData = {cartData} />;
      case 1:
        return <AddressPage AddressData = {AddressData} />;
      case 2:
        return <PaymentPage address = {address} cart = {cart} />;
      default:
        return null;
    }
  };

  const AddressData = (value)=>{
       setAddress(value)
         handleNext()
       
  }

  const cartData = (value)=>{
    setCart(value)
}

  return (

    
    <Box sx={{ width: '100%' }}>
       <div className={style.nav}> 
       <Link to={`/product/Lucknow`}><img src={Image} alt="err" /></Link>
    <div className={style.stepper}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      </div>
   </div>
      {renderStepContent(activeStep)}

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            
           {activeStep === 0 ?<Button variant="contained" color='secondary' style={{width:"20%" , marginTop:"15px",marginBottom:"10px"}} onClick={handleNext}>Place Order</Button>:activeStep === 1 && address !== "" ?<Button variant="contained" disabled color='secondary' style={{width:"20%" , marginTop:"15px",marginBottom:"10px"}} onClick={handleNext}>Next</Button>:""}

            
          </Box>
        </React.Fragment>
            )}
            <Footer />
    </Box> 
  )
}

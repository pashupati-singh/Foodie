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

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

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
//  handleNext()
}

  return (

    
    <Box sx={{ width: '100%' }}>
       <div className={style.nav}> 
    <img src={Image} alt="err" />
    <div className={style.stepper}>

   {/* <StepperFun /> */}
    
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
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
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
            

            <Button variant="contained" color='secondary' style={{width:"20%" , marginTop:"15px"}} onClick={handleNext}>
              {activeStep === 0 ? 'Place Order' : activeStep === 1 ? 'Next' : 'Finish'  }
            </Button>
          </Box>
        </React.Fragment>
            )}
    </Box> 
  )
}

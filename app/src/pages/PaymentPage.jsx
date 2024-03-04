
import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Modal, Typography } from '@mui/material';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import style1 from '../css/Payment.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartDataDelete } from '../Redux/CartRedux/action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const PaymentPage = ({ address, cart }) => {
  const { text } = useSelector((store) => store.foodReducer);
  const [open, setOpen] = React.useState(false);
  const {token} = useSelector((store)=>store.authReducer)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [paymentData, setPaymentData] = useState({
    accountNumber: '',
    accountHolderName: '',
    expiryDate: '',
    cvv: '',
  });
  const [count, setCount] = useState(5);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let truncatedValue = value;
    if (name === 'cvv' && value.length > 3) {
      truncatedValue = value.slice(0, 3);
    }
  
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: truncatedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpen();
    startTimer();
  };

  const startTimer = () => {
    let interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      
      handleClose();
      setCount(5);
      dispatch(cartDataDelete(token))
     navigate(`/product/${text}`);

    }, 5000);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
      <TextField
          label="Account Number"
          name="accountNumber"
          value={paymentData.accountNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Account Holder Name"
          name="accountHolderName"
          value={paymentData.accountHolderName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Expiry Date"
          name="expiryDate"
          value={paymentData.expiryDate}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="CVV"
          name="cvv"
          type="password"
          value={paymentData.cvv}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" disabled={
    !(paymentData.accountNumber && 
    paymentData.accountHolderName && 
    paymentData.expiryDate && 
    paymentData.cvv.length === 3)
  }>
          {cart} to pay
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <Box className={style1.round}>
                <CreditScoreIcon
                  className={style1.symbol}
                  fontSize="large"
                  color="success"
                />
              </Box>
            </Typography>
            <Typography
              className={style1.centre}
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              <h1 className={style1.texts}>Thank you!</h1>
              <p>Payment Done Successfully</p>
            </Typography>
            <Typography className={style1.centre}>
              <p>
                You will be redirected to the home page shortly or click here
                to return to the home page
              </p>
              <p>{count}</p>
              <Link to={`/product/${text}`}>
                {' '}
                <Button variant="contained">Home</Button>
              </Link>
            </Typography>
          </Box>
        </Modal>
      </form>
    </Box>
  );
};

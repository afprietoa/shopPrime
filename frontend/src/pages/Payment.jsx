import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../slices/cartSlice';

import React from 'react'

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    useEffect(() => {
        if (!shippingAddress.address) {
          navigate('/shipping');
        }
    }, [navigate, shippingAddress]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate('/placeorder');
    };

  return (
<FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              className='my-2'
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default Payment
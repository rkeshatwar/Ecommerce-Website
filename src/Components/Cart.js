import React, { useEffect, useState } from 'react'
import GooglePayButton from '@google-pay/button-react';
import './Cart.css'

const Cart = ({cart, handleChange, search, setCart}) => {

    const [price, setPrice] = useState(0);

    function handleRemove(id){
        let arr = cart.filter(item=> item.id!==id);
        setCart(arr);
    };

    function handlePrice(){
        let totalAmount = 0;
        cart.map((item)=>totalAmount += item.price*item.amount);
        setPrice(totalAmount);
    }

    useEffect(()=>{
        handlePrice()
    })

  return (
    <div>
        <table width={'100%'}>
            <thead>
            <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Incre</th>
            <th>Qty</th>
            <th>Decre</th>
            <th>Total Price</th>
            <th>Remove</th>
            </tr>
            </thead>

            <tbody>
            {cart.filter((item)=>item.category.toLowerCase().includes(search)).map((item)=>{
                return(
                    <tr>
                    <td><img src={item.image} alt='' height={'50px'} width={'50px'}></img></td>
                    <td>{item.title}</td>
                    <td><button onClick={()=>handleChange(item,+1)}>+</button></td>
                    <td>{item.amount}</td>
                    <td><button onClick={()=>handleChange(item,-1)}>-</button></td>
                    <td>${item.price}</td>
                    <td><button onClick={()=>{handleRemove(item.id)}}>Remove</button></td>
                    </tr>
                )
            })}
            </tbody>

            <tfoot>
                <tr>
                    <td>Total Price of the Cart</td>
                    <td colSpan={5}>Total Price - <h5>${price}</h5></td>
                    <td><GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                      apiVersion: 2,
                      apiVersionMinor: 0,
                      allowedPaymentMethods: [
                        {
                          type: 'CARD',
                          parameters: {
                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                          },
                          tokenizationSpecification: {
                            type: 'PAYMENT_GATEWAY',
                            parameters: {
                              gateway: 'example',
                              gatewayMerchantId: 'exampleGatewayMerchantId',
                            },
                          },
                        },
                      ],
                      merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'Demo Merchant',
                      },
                      transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: '100.00',
                        currencyCode: 'USD',
                        countryCode: 'US',
                      },
                    }}
                    onLoadPaymentData={paymentRequest => {
                      console.log('load payment data', paymentRequest);
                    }}
                  /></td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}

export default Cart
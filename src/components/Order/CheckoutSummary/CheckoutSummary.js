import React from 'react';
import Burger from '../../Burger/Burger'
import Buttton from '../../UI/Button/Button'
import styles from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Buttton btnType="Danger" clicked={props.onCheckoutCancelled}>CANCEL</Buttton>
            <Buttton btnType="Success" clicked={props.onCheckoutContinued}>CONTINUE</Buttton>
        </div>
    )
}

export default checkoutSummary;

import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
class Checkout extends Component{
    state = {
        ingredients: null,
        totalPrice: null
    }

    checkoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinues = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = null;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1]
            }
            else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price});
    }

    render () {
        return (
            <div>
                <CheckoutSummary 
                    onCheckoutCancelled={this.checkoutCancelled}
                    onCheckoutContinued={this.checkoutContinues}
                    ingredients={this.state.ingredients}
                />
                <Route path={this.props.match.path + '/contact-data'} 
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>)}/>
            </div>
        )
    }
}

export default Checkout;
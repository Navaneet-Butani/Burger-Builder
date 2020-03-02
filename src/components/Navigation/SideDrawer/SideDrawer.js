import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationsItems from '../NavigationItems/NavigationItems'
import styles from './SideDrawer.module.css'
import BackDrop from './../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxillary/Auxillary'

const sideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div  className={styles.Logo} >
                    <Logo />
                </div>            

                <nav>
                    <NavigationsItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;
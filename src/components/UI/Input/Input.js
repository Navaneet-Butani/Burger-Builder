import React from 'react';
import styles from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    switch (props.inputtype) {
        case ('input'):
            inputElement = <input 
                className= {styles.InputElement}  
                value={props.value}
                onChange={props.changed}
                {...props.elementConfig}                  
            />;
            break;    
        
        case ('textarea'):
            inputElement = <input 
                className= {styles.InputElement} 
                value={props.value}
                onChange={props.changed}
                {...props.elementConfig}                  
            />;
            break;

        case ('select'):
            inputElement = (
            <select 
                className= {styles.InputElement} 
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
            )
            break;
        
        default:
            inputElement = <input 
                className= {styles.InputElement} 
                value={props.value}
                onChange={props.changed}
                {...props.elementConfig}                 
            />;
    } 
    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;
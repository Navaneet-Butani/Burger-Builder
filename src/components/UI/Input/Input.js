import React from 'react';
import styles from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [styles.InputElement]

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(styles.Invalid)
    }

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input 
                className= {inputClasses.join(' ')}  
                value={props.value}
                onChange={props.changed}
                {...props.elementConfig}                  
            />;
            break;    
        
        case ('textarea'):
            inputElement = <input 
                className= {inputClasses.join(' ')} 
                value={props.value}
                onChange={props.changed}
                {...props.elementConfig}                  
            />;
            break;

        case ('select'):
            inputElement = (
            <select 
                className= {inputClasses.join(' ')} 
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
                className= {inputClasses.join(' ')} 
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
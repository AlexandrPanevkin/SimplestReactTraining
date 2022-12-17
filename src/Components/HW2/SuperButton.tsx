import React from 'react';
import s from './SuperButton.module.css'

type PropsType = {
    callBack: () => void
    color?: string
    children?: React.ReactNode
    disabled?: boolean
}

export const SuperButton:  React.FC<PropsType> = (props) => {

    const {callBack, color, children, disabled, ...restProps} = props

    const finalClassName = `${s.button} ${color==='red' ? s.red : color==='secondary' ? s.secondary : s.default} ${disabled ? s.disabled : ''}`

    const callBackHandler = () => {
        callBack()
    }

    return (
        <div>
            <button className={finalClassName} onClick={callBackHandler}>{children}</button>
        </div>
    );
};

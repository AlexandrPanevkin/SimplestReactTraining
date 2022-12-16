import React from 'react';

type PropsType = {
    callBack: () => void
    color: string
    children?: React.ReactNode
}

export const SuperButton: React.FC<PropsType> = (props) => {

    const {callBack, color, children, ...restProps} = props

    const callBackHandler = () => {
        callBack()
    }

    return (
        <div>
            <button onClick={callBackHandler}>{children}</button>
        </div>
    );
};

import React from 'react';

type RublesType = {
    id: number
    banknotes: string
    isDone: boolean
}

type PropsType = {
    rubles: RublesType[]
    children: React.ReactNode
}

export const SuperRubles: React.FC<PropsType> = ({rubles, children, ...props}) => {
    const mappedTasks = rubles.map(el => {
        return (
            <li key={el.id}>
                {el.id}
                {el.banknotes}
                <input type="checkbox" checked={el.isDone}/>
            </li>
        )
    })
    return (
        <div>
            <ul>
                {mappedTasks}
            </ul>

            {children}
<div>---------------------</div>
        </div>
    );
};
import React, {useState} from 'react';
import './App.css';
import {Country} from "./Components/HW1/Country";
import {SuperButton} from "./Components/HW2/SuperButton";

export type BanknotsType = 'Dollars'| 'RUBLS' | 'All'
export type MoneyType = {
    banknotes: BanknotsType
    value: number
    number: string
}

let defaultMoney: MoneyType[] = [
    {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
    {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
]

// типизируем на входе и выходе
export const moneyFilter = (money: MoneyType[], filter: BanknotsType): MoneyType[] => {
    if(filter==='All'){
        return money
    }
    //если пришел filter со значением 'All', то возвращаем все банкноты
    //return money.filter... ну да, придется фильтровать
    return money.filter(el=>el.banknotes===filter)
}

function App() {
    // убираем заглушки в типизации и вставляем в качестве инициализационного значения defaultMoney
    const [filter, setFilter] = useState<BanknotsType>('All')   // по умолчанию указываем все банкноты

    // а вот сейчас притормаживаем. И вдумчиво: константа filteredMoney получает результат функции moneyFilter
    // в функцию передаем деньги и фильтр, по которому ихбудем выдавать(ретёрнуть)
    const filteredMoney = moneyFilter(defaultMoney, filter)
    return (
        <div className="App">
            <div> HW1
                <Country
                    data={filteredMoney}   //отрисовать будем деньги после фильтрации
                    setFilter={setFilter}  //useState передаем? Так можно было?!
                    filter={filter}       //если не будем использовать, может вообще не передавать?
                />
                <hr/></div>
           <div> HW2
               <SuperButton callBack={()=>{}} color={'red'}>Red super button</SuperButton>
               <hr/></div>

        </div>
    );
}

// Итого: в этой компоненте у нас мозги. А вот отрисовка где-то глубже. Погружаемся в Country


export default App;

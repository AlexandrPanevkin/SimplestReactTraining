import React from 'react';
import {MoneyType} from "../../App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <Banknote color={props.money.banknotes==='Dollars' ? 'darkseagreen' : 'indianred'}>
            {props.money.banknotes}
            <Value>{props.money.value}</Value>
        </Banknote>
    );
};
const Banknote = styled.div`
  background-color: ${props => {
    if (props.color === 'indianred') {
      return 'indianred'
    } else {
      return 'darkseagreen'
    }
  }
  };
  width: 400px;
  height: 200px;
  margin: 10px;
`
const BanknoteRed = styled.div`
  background-color: indianred;
  width: 400px;
  height: 200px;
  margin: 10px;
`
const BanknoteGreen = styled.div`
  background-color: darkseagreen;
  width: 400px;
  height: 200px;
  margin: 10px;
`
const Value = styled.div`
  justify-content: center;
`
import * as S from './styled'
import {useState} from "react";

export const Card = (color) => {

  return (
    <>
      <S.Card
        color={color.color}
        // onClick={() => onClickHandler}
      />
    </>
  )
}

import * as S from './styled'
import {useState} from "react";

export const Card = (color) => {
  // const onCardClickHandler = () => {
  //   if (active) {
  //     localStorage.removeItem('selectedColorOnCard')
  //   }
  //   if (!active) {
  //     localStorage.setItem('selectedColorOnCard', color.color)
  //   }
  //   setActive(!active)
  // }
  console.log(color)
  return (
    <>
      <S.Card
        color={color.color}
        active={color.active}
      />
    </>
  )
}

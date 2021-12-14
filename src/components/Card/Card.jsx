import * as S from './styled'
import {useState} from "react";

export const Card = (color) => {
  const [active, setActive] = useState(false)
  const onCardClickHandler = () => {
    if (active) {
      localStorage.removeItem('selectedColorOnCard')
    }
    if (!active) {
      localStorage.setItem('selectedColorOnCard', color.color)
    }
    setActive(!active)
  }
  return (
    <>
      <S.Card
        color={color.color}
        active={active}
        onClick={onCardClickHandler}
      />
    </>
  )
}

import * as S from './styled'
import {useState} from "react";
export const Card = (color) => {
  const [active, setActive] = useState(false)
  console.log(active)
  return (
    <>
    <S.Card
      color={color.color}
      active={active}
      onClick={()=>setActive(!active)}
    />
    </>
  )
}

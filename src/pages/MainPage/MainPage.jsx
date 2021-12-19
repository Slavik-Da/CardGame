import * as S from './styled'
import {Card} from "../../components/Card/Card";
import {useEffect, useState} from "react";

const allColors = [
  'AliceBlue',
  'AntiqueWhite',
  'Aqua',
  'Aquamarine',
  'Azure',
  'Beige',
  'Bisque',
  'Black',
  'BlanchedAlmond',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'Chocolate',
  'Coral',
  'CornflowerBlue',
  'Cornsilk',
  'Crimson',
  'Cyan',
  'DarkBlue',
  'DarkCyan',
  'DarkGoldenRod',
  'DarkGray',
  'DarkGrey',
  'DarkGreen',
  'DarkKhaki',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkOrchid',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSlateBlue',
  'DarkSlateGray',
  'DarkSlateGrey',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DimGray',
  'DimGrey',
  'DodgerBlue',
  'FireBrick',
  'FloralWhite',
  'ForestGreen',
  'Fuchsia',
  'Gainsboro',
  'GhostWhite',
  'Gold',
  'GoldenRod',
  'Gray',
  'Grey',
  'Green',
  'GreenYellow',
  'HoneyDew',
  'HotPink',
  'IndianRed',
  'Indigo',
  'Ivory',
  'Khaki',
  'Lavender',
  'LavenderBlush',
  'LawnGreen',
  'LemonChiffon',
  'LightBlue',
  'LightCoral',
  'LightCyan',
  'LightGoldenRodYellow',
  'LightGray',
  'LightGrey',
  'LightGreen',
  'LightPink',
  'LightSalmon',
  'LightSeaGreen',
  'LightSkyBlue',
  'LightSlateGray',
  'LightSlateGrey',
  'LightSteelBlue',
  'LightYellow',
  'Lime',
  'LimeGreen',
  'Linen',
  'Magenta',
  'Maroon',
  'MediumAquaMarine',
  'MediumBlue',
  'MediumOrchid',
  'MediumPurple',
  'MediumSeaGreen',
  'MediumSlateBlue',
  'MediumSpringGreen',
  'MediumTurquoise',
  'MediumVioletRed',
  'MidnightBlue',
  'MintCream',
  'MistyRose',
  'Moccasin',
  'NavajoWhite',
  'Navy',
  'OldLace',
  'Olive',
  'OliveDrab',
  'Orange',
  'OrangeRed',
  'Orchid',
  'PaleGoldenRod',
  'PaleGreen',
  'PaleTurquoise',
  'PaleVioletRed',
  'PapayaWhip',
  'PeachPuff',
  'Peru',
  'Pink',
  'Plum',
  'PowderBlue',
  'Purple',
  'RebeccaPurple',
  'Red',
  'RosyBrown',
  'RoyalBlue',
  'SaddleBrown',
  'Salmon',
  'SandyBrown',
  'SeaGreen',
  'SeaShell',
  'Sienna',
  'Silver',
  'SkyBlue',
  'SlateBlue',
  'SlateGray',
  'SlateGrey',
  'Snow',
  'SpringGreen',
  'SteelBlue',
  'Tan',
  'Teal',
  'Thistle',
  'Tomato',
  'Turquoise',
  'Violet',
  'Wheat',
  'White',
]

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomColorsNames = () => {
  const generatedColors = allColors.reduce((prev, item, index) => {
    if(index >= 25) {
      return prev
    } else {
      prev[index] = { color: item, id: index, isTouched: false ,isGuessed: false };
      return prev;
    }
  }, [])

  // for (let i = 0; i < 25; i++) {
  //   const randNumber = getRandomNumber(0, allColors.length)
  //   const randColor = allColors[randNumber]
  //   console.log('randColor: ', randColor, randNumber)
  //   allColors.splice(randNumber, 1)
  //
  //   generatedColors.push(randColor)
  // }
  return generatedColors
}

export const MainPage = () => {
  const [colorCards, setColorCards] = useState([])

  console.log('colorCards: ', colorCards)
  useEffect(() => {
      setColorCards(getRandomColorsNames())
    },
    [])
  const onCardClickHandler = () => {

  }
  const onColorNameClickHandler = () => {

  }

  return (
    <>
      <S.MainPage>
        <S.LeftSide>
          {colorCards && colorCards.map((c, index)=> {
            return (
              <div
                key={index}
                onClick={onColorNameClickHandler}
              >
                {c}
              </div>
            )
          })}
        </S.LeftSide>
        <S.RightSide>
          <S.CardsGroup>
            {colorCards && colorCards.map((color, index) => (
              <Card
                key={index}
                color={color}
                onClick={onCardClickHandler}
                active={false}
              />
            ))}
          </S.CardsGroup>
        </S.RightSide>
      </S.MainPage>
    </>
  )
}

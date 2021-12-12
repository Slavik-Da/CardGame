import styled from "@emotion/styled";

export const Card = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${props => (props.color ? props.color : 'red')};
  flex: 0 1 18.5%;
  border: ${props => (props.active ? '1px solid grey' : '')};
  box-sizing: border-box;
`

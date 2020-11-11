import styled, { css } from "styled-components";
import { colors } from "./colors";

export const cardStyle = css`
    border-radius: 5px;
    box-shadow: 1px 1px 6px 0px #0000002e;
    padding: 20px;
    @media (max-width: 600px){
        margin: 20px;
    }
`

export const defaultFlex = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const noSpace = css`
    margin: 0;
    padding: 0;
`

export const InputContainer = styled.form`
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 6px 0px #0000002b;
`

export const InputLabel = styled.h2`
    text-align: left;
    ${noSpace};
    padding-bottom: 40px;
`

export const Label = styled.label`
    width: fit-content;
    color: #333;
    font-weight: 500;
    text-align: left;
    font-size: 0.8em;
    padding-bottom: 5px;
`

const { input } = colors

const checkStatus = (props) => {
    if (props) {
        if (props.error) {
            return colors.ERROR
        }
        if (props.success) {
            return colors.SUCCESS
        }
    }

    return input.default.BORDER
}



export const Input = styled.input`
    padding: 5px 10px;
    min-width: 250px;
    border-radius: 5px;
    transition: all 0.3s;
    outline: none;
    margin-bottom: 10px;
    border: 2px solid ${props => checkStatus(props)};
`

const { button } = colors
export const Button = styled.button`
    background-color: ${props => props ? props.backgroundColor : button.default.BACKGROUND_COLOR};
    color: ${props => props ? props.color : button.default.TEXT};
    padding: 8px 20px;
    margin: ${props => props ? props.margin: '0'};
    border-style: none;
    border-radius: 5px;
    box-shadow: 1px 2px 5px 0px ${button.BOX_SHADOW};
    transition: all 0.3s;
    outline: none;
    cursor: pointer;
    
    &:disabled{
        opacity: 0.5;
        background-color:${button.disabled.BACKGROUND_COLOR};
        color: ${button.disabled.TEXT};
        box-shadow: none;
        cursor: not-allowed;
    }

    &:hover{
        box-shadow: 1px 2px 5px 0px ${button.BOX_SHADOW_HOVER};
    }
`

export const ErrorText = styled.p`
    width: fit-content;
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: 0.7em;
    color: red;
`

export const Icon = styled.img`
    height: 24px;
    width: 24px;
    cursor: pointer;
`

export const DisplayImage = styled.img`
    max-width: 400px;
    padding: 60px;
     @media (max-width: 768px) {
    display: none;
  }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const ContentLabel = styled.p`
    ${noSpace};
    text-align: left;
    font-size: 0.8em;
    font-weight: 500;
    color: #0000008f;
`

export const Content = styled.p`
    ${noSpace};
    color: #333;
    font-size: 1.2em;
    text-align: left;
    max-width: 300px;

`
export const ButtonContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 600px) {
        padding:0px 20px;
    }
`



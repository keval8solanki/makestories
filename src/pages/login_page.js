import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"
import { setAuthentication, setCurrentUser } from "../actions/user_actions"
import { api } from "../api"
import { InputContainer, Button, Input, Label, InputLabel, DisplayImage } from "../styles"
import { encryptData, validateEmail, validatePassword } from "../utils/helper_functions"
import { defaultToast } from '../components/Toast'
import LoginSVG from '../assets/images/login.svg'
import { colors } from "../styles/colors"

export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const submitHandler = async (e) => {
        e.preventDefault()
        const credentials = {
            email,
            password
        }

        const encryptedData = encryptData(JSON.stringify(credentials))
        try {
            const { data } = await axios.post(`${api.URL}/login`, { data: encryptedData }, { withCredentials: true })
            if (data) {
                dispatch(setCurrentUser(data.userData))
                dispatch(setAuthentication(true))
                history.push(`/user/${data.userData._id}`)
            }
        } catch (error) {
            defaultToast.error(error)
        }

    }

    const isInputValid = validateEmail(email) && validatePassword(password)

    return (
        <LoginContainer>
            <InputContainer onSubmit={submitHandler}>
                <InputLabel>Login</InputLabel>

                <Label htmlFor="email" >Email *</Label>
                <Input
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    required
                    error={email && !validateEmail(email)}
                    success={validateEmail(email)}
                />

                <Label htmlFor="password" >Password *</Label>
                <Input
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                    error={password && !validatePassword(password)}
                    success={validatePassword(password)} />

                <Button margin="10px 0px" color="white" backgroundColor={colors.SUCCESS} disabled={!isInputValid} type="submit">Login</Button>
                <Link style={{ marginTop: "20px" }} to="/signup">Need an account?</Link>
            </InputContainer>
            <DisplayImage src={LoginSVG} alt="Login" />

        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;  
`
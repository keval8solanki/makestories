import { useEffect, useState } from "react"
import styled from "styled-components"
import { Button, DisplayImage, Input, InputContainer, InputLabel, Label } from "../styles"
import axios from 'axios'
import { api } from "../api"
import { bannerToast, defaultToast } from '../components/Toast'
import { useDispatch } from "react-redux"
import { setAuthentication, setCurrentUser } from "../actions/user_actions"
import { Link, useHistory } from "react-router-dom"
import { encryptData, validateAge, validateEmail, validatePassword, validatePhoneNumber, validateText, validateZipcode } from "../utils/helper_functions"
import SigninSVG from '../assets/images/signup.svg'
import { colors } from "../styles/colors"

export default function SignInPage() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState()
    const [phoneNumber, setPhoneNumber] = useState('')

    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [profilePicture, setProfilePicture] = useState()
    const [step, setStep] = useState(0)

    const [isBannerOpen, setIsBannerOpen] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()

    const isPasswordMatch = password === confirmPassword
    const isInputValid = validateText(firstName) && validateText(lastName) && validateAge(age) && validatePhoneNumber(phoneNumber) && validateEmail(email) && validatePassword(password) && isPasswordMatch && validateText(street) && validateText(city) && validateText(state) && validateText(country) && validateZipcode(zipcode)

    const isPasswordValid = password && !validatePassword(password)

    if (isPasswordValid) {
        if (isBannerOpen !== isPasswordValid) {
            setIsBannerOpen(isPasswordValid)
        }
    }
    useEffect(() => {
        if (isBannerOpen) {
            bannerToast.dark(<div>
                <ul>
                    <li>Password must contain 8 letters</li>
                    <li>Password must contain 1 UPPERCASE character</li>
                    <li>Password must contain 1 lowercase character</li>
                    <li>Password must contain 1 special character (!@#$)</li>
                    <li>Password must contain 1 numeric character (1234)</li>
                </ul>
            </div>)
        } 
    }, [isBannerOpen])

    const submitHandler = async e => {
        e.preventDefault()

        const userData = {
            firstName,
            lastName,
            age,
            phoneNumber,
            address: {
                street,
                city,
                zipcode,
                state,
                country
            },
            email,
            password
        }

        const encryptedData = encryptData(JSON.stringify(userData))

        const formData = new FormData();
        formData.append('profile_pic', profilePicture)
        formData.append('data', encryptedData)

        try {
            const { data } = await axios.post(`${api.URL}/user`, formData, { withCredentials: true })
            dispatch(setCurrentUser(data.savedUserData))
            dispatch(setAuthentication(true))
            history.push(`/user/${data.savedUserData._id}`)
            defaultToast.success('Sign up Success')
        } catch (error) {
            defaultToast.success(error)
        }
    }

    const nextStep = () => {
        if (step < 2) {
            setStep(prevStep => prevStep + 1)
        }
    }

    const prevStep = () => {
        if (step > 0) {
            setStep(prevStep => prevStep - 1)
        }
    }

    const renderSteps = () => {
        switch (step) {
            case 0:
                return (
                    <>
                        <Label htmlFor="email" >Email *</Label>
                        <Input
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            error={email && !validateEmail(email)}
                            success={validateEmail(email)}
                        />

                        <Label htmlFor="password" >Password *</Label>
                        <Input
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            error={password && !validatePassword(password)}
                            success={validatePassword(password)} />

                        <Label htmlFor="confirm_password" >Confirm Password *</Label>
                        <Input
                            name="confirm_password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            error={confirmPassword && !isPasswordMatch && !validatePassword(confirmPassword)}
                            success={confirmPassword && isPasswordMatch && validatePassword(confirmPassword)}
                        />

                        <Label htmlFor="profile_picture" >Profile Picture *</Label>
                        <Input
                            name="profile_picture"
                            type="file"
                            onChange={(e) => setProfilePicture(e.target.files[0])}
                            error={profilePicture && !profilePicture}
                            success={profilePicture}
                        />
                    </>
                )
            case 1:
                return (
                    <>
                        <Label htmlFor="first_name" >First Name *</Label>

                        <Input
                            name="first_name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            success={validateText(firstName)}
                        />

                        <Label htmlFor="last_name" >Last Name *</Label>
                        <Input
                            name="last_name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            success={validateText(lastName)}
                        />

                        <Label htmlFor="age" >Age *</Label>
                        <Input value={age}
                            name="age"
                            onChange={(e) => setAge(e.target.value)}
                            type="number"
                            error={age && !validateAge(age)}
                            success={validateAge(age)}
                        />
                        <Label htmlFor="phone_number" >Phone Number *</Label>
                        <Input
                            name="phone_number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            type="text"
                            error={phoneNumber && !validatePhoneNumber(phoneNumber)}
                            success={validatePhoneNumber(phoneNumber)}
                        />
                    </>
                )

            case 2:
                return (
                    <>
                        <Label htmlFor="street" >Street *</Label>
                        <Input
                            name="street"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            type="text"
                            success={validateText(street)}
                        />

                        <Label htmlFor="city" >City *</Label>
                        <Input
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            type="text"
                            success={validateText(city)}
                        />

                        <Label htmlFor="zipcode" >Zip Code *</Label>
                        <Input
                            name="zipcode"
                            value={zipcode}
                            onChange={(e) => setZipcode(e.target.value)}
                            type="text"
                            error={zipcode && !validateZipcode(zipcode)}
                            success={validateZipcode(zipcode)}
                        />

                        <Label htmlFor="state" >State *</Label>
                        <Input
                            name="state"
                            value={lastName}
                            onChange={(e) => setState(e.target.value)}
                            type="text"
                            success={validateText(state)}
                        />

                        <Label htmlFor="country" >Country *</Label>
                        <Input
                            name="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            type="text"
                            success={validateText(country)}
                        />
                    </>
                )
            default:
                break;
        }
    }

    return (
        <SigninContainer>

            <DisplayImage src={SigninSVG} alt="Sign up" />

            <InputContainer onSubmit={submitHandler}>
                <InputLabel>Signup</InputLabel>

                {renderSteps()}

                <ButtonContainer>

                    {/* Prev */}
                    {step > 0 ? <Button margin="10px 0px" onClick={prevStep}>Back</Button> : null}
                    {/* Next */}
                    {step === 2 ?
                        <Button
                            color="white"
                            margin="10px 0px"
                            backgroundColor={colors.BLUE}
                            disabled={!isInputValid}
                            type="submit">Sign in
                        </Button> :
                        <Button
                            color="white"
                            margin="10px 0px"
                            backgroundColor={colors.BLUE}
                            onClick={nextStep}>
                            Next
                        </Button>}

                </ButtonContainer>
                <Link style={{ marginTop: "20px" }} to="/login">Already have an account?</Link>
            </InputContainer>
        </SigninContainer>
    )
}

const SigninContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;  
`

const ButtonContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`



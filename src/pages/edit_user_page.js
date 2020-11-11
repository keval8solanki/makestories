import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setCurrentUser } from "../actions/user_actions";
import { api } from "../api";
import { Button, ButtonContainer, cardStyle, Input, InputLabel, Label } from "../styles";
import { encryptData, validateAge, validateEmail, validatePassword, validatePhoneNumber, validateText, validateZipcode } from "../utils/helper_functions";
import { defaultToast } from '../components/Toast'
import styled from 'styled-components'
import { colors } from "../styles/colors";

export default function EditUserPage() {

    const userData = useSelector(state => state.user_reducer)
    const dispatch = useDispatch()
    const history = useHistory()
    const { currentUser } = userData || {}
    const {
        _id,
        firstName: _firstName,
        lastName: _lastName,
        age: _age,
        phoneNumber: _phoneNumber,
        address: _address,
        email: _email,
        profilePicture: _profilePicture
    } = currentUser || {}

    const {
        street: _street,
        city: _city,
        zipcode: _zipcode,
        state: _state,
        country: _country
    } = _address || {}

    const [firstName, setFirstName] = useState(_firstName)
    const [lastName, setLastName] = useState(_lastName)
    const [age, setAge] = useState(_age)
    const [phoneNumber, setPhoneNumber] = useState(_phoneNumber)

    const [street, setStreet] = useState(_street)
    const [city, setCity] = useState(_city)
    const [zipcode, setZipcode] = useState(_zipcode)
    const [state, setState] = useState(_state)
    const [country, setCountry] = useState(_country)


    const [email, setEmail] = useState(_email)
    const [profilePicture, setProfilePicture] = useState(_profilePicture)

    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [buttonText, setButtonText] = useState('Update')
    const [isLoading, setIsLoading] = useState(false)





    useEffect(() => {

        setFirstName(_firstName)
        setLastName(_lastName)
        setAge(_age)
        setPhoneNumber(_phoneNumber)

        setStreet(_street)
        setCity(_city)
        setZipcode(_zipcode)
        setState(_state)
        setCountry(_country)

        setEmail(_email)
        setProfilePicture(_profilePicture)


    }, [currentUser,
        _firstName,
        _lastName,
        _age,
        _phoneNumber,
        _street,
        _city,
        _zipcode,
        _state,
        _country,
        _email,
        _profilePicture
    ])


    const submitHandler = async (e) => {
        e.preventDefault()
        setButtonText('Updating...')
        setIsLoading(true)
        const userData = {
            firstName,
            lastName,
            age,
            address: {
                street,
                city,
                zipcode,
                state,
                country
            },
            email,
            phoneNumber,
            oldPassword,
            password,
        }
        const encryptedData = encryptData(JSON.stringify(userData))


        const formData = new FormData()
        formData.append('profile_pic', profilePicture)
        formData.append('data', encryptedData)

        try {
            const { data } = await axios.patch(`${api.URL}/user/${_id}`, formData, { withCredentials: true })
            setButtonText('Update')
            setIsLoading(false)
            dispatch(setCurrentUser(data.updatedUser))
            history.goBack()
            defaultToast.success('User Edited')
        } catch (error) {
            setButtonText('Update')
            setIsLoading(false)
            defaultToast.error('Cannot update profile')
        }

    }
    const isInputValid = validateText(firstName) && validateText(lastName) && validateAge(age) && validatePhoneNumber(phoneNumber) && validateEmail(email) && validateText(street) && validateText(city) && validateText(state) && validateText(state) && validateText(country) && validateZipcode(zipcode)

    const isPasswordMatch = password === confirmPassword
    const isPasswordValid = validateText(oldPassword) || validateText(password) || validateText(confirmPassword) ? validatePassword(oldPassword) && validatePassword(password) && validatePassword(confirmPassword) : true
    const cancelHandler = () => {
        history.goBack()
    }

    const resetHandler = () => {
        setFirstName(_firstName)
        setLastName(_lastName)
        setAge(_age)
        setPhoneNumber(_phoneNumber)

        setStreet(_street)
        setCity(_city)
        setZipcode(_zipcode)
        setState(_state)
        setCountry(_country)

        setEmail(_email)
        setProfilePicture(_profilePicture)
    }



    return (
        <EditContainer>

            <InputForm onSubmit={submitHandler}>

                <SectionCard>

                    <InputLabel>Personal Details</InputLabel>
                    <Label htmlFor="first_name" >First Name *</Label>


                    <Input
                        name="first_name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        required
                        success={validateText(firstName)}
                    />

                    <Label htmlFor="last_name" >Last Name *</Label>
                    <Input
                        name="last_name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        required
                        success={validateText(lastName)}
                    />

                    <Label htmlFor="age" >Age *</Label>
                    <Input value={age}
                        name="age"
                        onChange={(e) => setAge(e.target.value)}
                        type="number"
                        required
                        error={age && !validateAge(age)}
                        success={validateAge(age)}
                    />
                    <Label htmlFor="profile_picture" >Profile Picture *</Label>
                    <Input
                        name="profile_picture"
                        onChange={(e) => setProfilePicture(e.target.files[0])}
                        accept="image/png,image/jpeg"
                        type="file"
                        error={profilePicture && !profilePicture}
                        success={profilePicture}
                    />
                </SectionCard>

                <SectionCard>
                    <InputLabel>Contact Details</InputLabel>


                    <Label htmlFor="phone_number" >Phone Number *</Label>
                    <Input
                        name="phone_number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="text"
                        required
                        error={phoneNumber && !validatePhoneNumber(phoneNumber)}
                        success={validatePhoneNumber(phoneNumber)}
                    />


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
                </SectionCard>

                <SectionCard>
                    <InputLabel>Address</InputLabel>

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
                        value={state}
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


                </SectionCard>
                <SectionCard>
                    <InputLabel>Change Password</InputLabel>

                    <Label htmlFor="old_password" >Old Password</Label>
                    <Input
                        autoComplete="new-password"
                        name="old_password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        type="password"
                        error={oldPassword && !validatePassword(oldPassword)}
                        success={validatePassword(oldPassword)} />

                    <Label htmlFor="password" >New Password</Label>
                    <Input
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        error={password && !validatePassword(password)}
                        success={validatePassword(password)} />

                    <Label htmlFor="confirm_password" >Confirm New Password</Label>
                    <Input
                        name="confirm_password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        error={confirmPassword && !isPasswordMatch && !validatePassword(password)}
                        success={confirmPassword && isPasswordMatch && validatePassword(confirmPassword)}
                    />

                </SectionCard>

                <ButtonContainer>

                    <Button onClick={cancelHandler} type="button">Cancel</Button>
                    <ButtonContainer style={{ paddingRight: 0 }}>
                        <Button margin="0px 20px" onClick={resetHandler} color="white" backgroundColor="red" type="button">Reset</Button>
                        <Button color="white" backgroundColor={colors.SUCCESS} disabled={!(isInputValid && isPasswordValid) || isLoading} type="submit">{buttonText}</Button>

                    </ButtonContainer>
                </ButtonContainer>

            </InputForm>
        </EditContainer>
    )
}

const EditContainer = styled.div`
    padding: 20px 0px;

`

const InputForm = styled.form`
    //Future Styles
`

const SectionCard = styled.div`
    margin: 30px 0;
    ${cardStyle};
    display: flex;
    flex-direction: column;
`
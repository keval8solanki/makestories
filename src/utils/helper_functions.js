import axios from 'axios'
import cryptojs from 'crypto-js'
import { setCurrentUser } from '../actions/user_actions'
import { api } from '../api'

export const encryptData = (data) => cryptojs.AES.encrypt(data, process.env.REACT_APP_ENCRYPTION_SECRET_KEY).toString()

export const decryptData = (ciphertext) => cryptojs.AES.decrypt(ciphertext, process.env.REACT_APP_ENCRYPTION_SECRET_KEY).toString(cryptojs.enc.Utf8)

export const validateEmail = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return emailRegex.test(email)
}

export const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/
    return phoneNumberRegex.test(phoneNumber)
}

export const validateAge = (age) => age > 0 && age <= 150

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    return passwordRegex.test(password)
}

export const validateText = (text) => {
    if (text) return text.trim() !== ''
    
}

export const validateZipcode = (zipcode) => {
    const zipcodeRegex = /([0-9]{6}|[0-9]{3}\s[0-9]{3})/
    return zipcodeRegex.test(zipcode)
}

export const fetchUser = async (id, dispatch) => {
    const { data } = await axios.get(`${api.URL}/user/${id}`, { withCredentials: true })
    dispatch(setCurrentUser(data.userData))
}
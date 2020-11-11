import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { setAuthentication } from "../actions/user_actions"
import { api } from "../api"
import EditIcon from '../assets/icons/edit.svg'
import LogoutIcon from '../assets/icons/logout.svg'
import { cardStyle, Content, ContentContainer, ContentLabel, Icon } from "../styles"
import { defaultToast } from '../components/Toast'

export default function UserDetailsPage() {

    const userData = useSelector(state => state.user_reducer)
    const history = useHistory()
    const dispatch = useDispatch()

    const { currentUser } = userData || {}
    const { firstName, lastName, age, address, phoneNumber, email, _id } = currentUser || {}
    const { street, city, state, zipcode, country } = address || {}

    const editClickHandler = () => history.push(`/edit/${_id}`)

    const logoutHandler = async () => {
        try {
            await axios.post(`${api.URL}/logout`, {}, { withCredentials: true })
            dispatch(setAuthentication(false))
            history.push(`/login`)
        } catch (error) {
            defaultToast.error(error)
        }
    }

    return (
        <>
            <ControlContainer>
                <ButtonContainer>
                    <Icon onClick={logoutHandler} src={LogoutIcon} alt="Logout" />

                    <Icon onClick={editClickHandler} src={EditIcon} alt="Edit" />
                </ButtonContainer>
            </ControlContainer>

            <DetailCard>
                <ProfilePicture src={`${api.URL}/user/${_id}/pic`} alt="ProfilePic" />
                <DetailContainer>
                    <ContentContainer>
                        <ContentLabel>First Name</ContentLabel>
                        <Content>{firstName}</Content>
                    </ContentContainer>

                    <ContentContainer>
                        <ContentLabel>Last Name</ContentLabel>
                        <Content>{lastName}</Content>
                    </ContentContainer>

                    <ContentContainer>
                        <ContentLabel>Email</ContentLabel>
                        <Content>{email}</Content>
                    </ContentContainer>

                    <ContentContainer>
                        <ContentLabel>Phone Number</ContentLabel>
                        <Content>{phoneNumber}</Content>
                    </ContentContainer>

                    <ContentContainer>
                        <ContentLabel>Age</ContentLabel>
                        <Content>{age}</Content>
                    </ContentContainer>
                    <ContentContainer>
                        <ContentLabel>Street</ContentLabel>
                        <Content>{street}</Content>
                    </ContentContainer>
                    <ContentContainer>
                        <ContentLabel>City</ContentLabel>
                        <Content>{city}</Content>
                    </ContentContainer>

                    <ContentContainer>
                        <ContentLabel>Zip code</ContentLabel>
                        <Content>{zipcode}</Content>
                    </ContentContainer>

                    <ContentContainer>
                        <ContentLabel>State</ContentLabel>
                        <Content>{state}</Content>
                    </ContentContainer>

                    <ContentContainer>
                        <ContentLabel>Country</ContentLabel>
                        <Content>{country}</Content>
                    </ContentContainer>

                </DetailContainer>
            </DetailCard>
        </>
    )
}


const DetailCard = styled.div`
    ${cardStyle};
    display: flex;
    justify-content: center;
    width: fit-content;
    padding: 40px;

    @media (max-width:600px){
        flex-direction: column;
        margin:20px auto;
        padding: 20px;
    }
`
const DetailContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0px 20px;
    
    @media (max-width:650px){ 
        margin: 20px 0px;
    }
`

const ProfilePicture = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 200px;
    border: 3px solid #4CAF50;
    padding: 5px;
    margin-right: 20px;
    
    @media (max-width:600px){
        align-self: center;
        margin: 0;
        margin-bottom: 20px;
    }
`

const ControlContainer = styled.div`
    padding: 20px;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
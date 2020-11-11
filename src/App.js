import styled from 'styled-components'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from './pages/login_page';
import SignUpPage from './pages/signup_page';
import UserDetailsPage from './pages/user_details_page';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { api } from './api';
import EditUserPage from './pages/edit_user_page';
import { setAuthentication, setCurrentUser } from './actions/user_actions';

const App = () => {

  const { currentUser, isAuthenticated } = useSelector(state => state.user_reducer)

  const dispatch = useDispatch()
  const verifyUser = async () => {
    try {
      const { data } = await axios.post(`${api.URL}/verify`, {}, { withCredentials: true })
      if (data) {
        dispatch(setCurrentUser(data.userData))
        dispatch(setAuthentication(true))
      }
    } catch (error) {
      dispatch(setAuthentication(false))
      console.error(error)

    }
  }

  useEffect(() => {
    verifyUser()
  }, [isAuthenticated])

  const jumpTo = (component) => {
    return (isAuthenticated ? <Redirect to={`user/${currentUser._id}`} /> : component)
  }

  return (
    <AppContainer>
      <InnerContainer>

        <HashRouter>
          <Switch>
            <Route path="/" exact render={() => jumpTo(<Redirect to="/login" />)} />

            <Route path="/login" render={() => jumpTo(<LoginPage />)} />
            <Route path="/signup" render={() => jumpTo(<SignUpPage />)} />

            <Route path="/edit/:id" component={EditUserPage} />
            <Route path="/user/:id" component={UserDetailsPage} />
          </Switch>
        </HashRouter>
      </InnerContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  text-align: center;
`

const InnerContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

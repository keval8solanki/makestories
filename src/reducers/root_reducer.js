import {combineReducers} from 'redux'
import user_reducer from './user_reducer'


const root_reducer = combineReducers({
    user_reducer,
    //For Future Reducers ...
})

export default root_reducer
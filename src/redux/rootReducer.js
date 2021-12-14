import {combineReducers} from 'redux'
import charactersReducer from './reducers/charactersReducer'

const rootReducer = combineReducers({
    character: charactersReducer
})

export default rootReducer
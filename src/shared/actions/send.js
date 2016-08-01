import {DONT_USE_UNLESS_YOUR_NAME_IS_ACTION_CREATOR} from '../dispatcher'
import actions from './actions'

export default function send(type, data = null) {  
  if (!actions.hasOwnProperty(type)) {
    throw new Error(`Tried to send an unknown action. Action type: ${type}. Please make sure actions you use are in the 
                     list of known actions.`)
  }
  
  const action = {
    type,
    data
  }

  DONT_USE_UNLESS_YOUR_NAME_IS_ACTION_CREATOR.next(action)
}

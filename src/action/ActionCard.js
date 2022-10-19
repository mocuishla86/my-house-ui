import './ActionCard.css'
import dateFormat from "dateformat";

function ActionCard({action}){
   
    return(
        
        <div className='action-list_card'>
            <div>Date: {dateFormat(Date.parse(action.timestamp), "yyyy-mm-dd")}</div>
            <div>Action: {action.type}</div>
            <div>Humidity: {action.humidity}</div>
            <div>Temperature: {action.temperature}</div>
        </div>
    )
}

export default ActionCard;
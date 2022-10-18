import './ActionCard.css'

function ActionCard({action}){
   
    return(
        
        <div className='action-list_card'>
            <div>Date: {action.timestamp.toString().substring(0, 9)}</div>
            <div>Action: {action.type}</div>
            <div>Humidity: {action.humidity}</div>
            <div>Temperature: {action.temperature}</div>
        </div>
    )
}

export default ActionCard;
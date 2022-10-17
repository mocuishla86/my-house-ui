import { useEffect, useState } from "react";

function ActionList(){
    useEffect(() => {
fetch('http://localhost:8080/actions')
.then(response => response.json())
.then(data => setEvents(data))
    }, []);

    const [events, setEvents] = useState([]);
return(
<div>{JSON.stringify(events)}</div>
)
}

export default ActionList;
import { useEffect, useState } from "react";
import ActionCard from "./ActionCard";

function ActionList() {
  useEffect(() => {
    fetch("http://localhost:8080/actions")
      .then((response) => response.json())
      .then((data) => setActions(data));
  }, []);

  const [actions, setActions] = useState([]);
  return (
    <div>
      {actions.map((a) => (
        <ActionCard key="{a.id}" action={a} />
      ))}
    </div>
  );
}

export default ActionList;

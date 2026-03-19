import React, { useEffect, useState } from 'react'
import './Cards.css';

export const Cards = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
        async function consumoAPI() {
            const res = await fetch("https://valorant-api.com/v1/agents");
            const data = await res.json();
            setData(data.data);
            console.log(data.data);
        }
        consumoAPI();
    }, []);
  
    return (
    <div className="agentsSection">
        {data.map((agent) => {
            if (agent.role?.displayName === "Initiator") {
                return (
                    <div className="div2" key={agent.uuid}>
                        <img src={agent.displayIcon} alt={agent.displayName} />
                        <h2>{agent.displayName}</h2>
                        <p>{agent.description}</p>
                    </div>
                );
            }
        })}
    </div>
    );
};

export default Cards

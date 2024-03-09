import { useState } from "react";

export default function Team(){
    const teamStyle = {
        margin: '15px',
        padding: '15px',
        border: '2px solid purple',
        borderRadius: '15px'
    }
    const [player, setPlayer] = useState(11);
    const handleAdd = () => {
        const newPlayer = player + 1;
        setPlayer(newPlayer);
    }
    const handleRemove = () => {
        setPlayer(player - 1);
    }
    return (
        <div style={teamStyle}>
            <h3>Team: {player}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}
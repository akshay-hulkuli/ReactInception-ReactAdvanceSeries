import { useState } from "react";

const Shimmer = () => {
    const [arr] = useState(Array(9).fill(1));
    return (
    <div className="shimmer-container">
        {arr.map((a) => 
            <div className="shimer-card"></div>
        )}
    </div>)
}

export default Shimmer;
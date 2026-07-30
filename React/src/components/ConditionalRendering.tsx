import { useState } from "react";

export default function ToggleMessage(){
    const [isVisible, setIsVisible] = useState(false);

    return(
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle Message
            </button>
            {isVisible && <p>This Message is conditional rendered</p>}
        </div>
    )
}
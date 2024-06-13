import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";
import "./Loading.css"
const Loading = () => {
    return (
        <container>
            <div className='Loading'>
                <ScaleLoader     
                color="#f8f8f8"                
                height={70}
                margin={9}
                radius={14}
                speedMultiplier={1}
                width={8}
                />
            </div>
        </container>
    )
}

export default Loading

import { Component, useState} from "react"
import AuthorBar from "./AuthorBar"

const Feature = ({title}) => {
    return(
        <div class="feature">
            {/* everything being returned must be inclosed in a div */}
            <button>TIPS</button>
            <div class='featTitle'>{title}</div>
            <AuthorBar
                author = {'John Carter'}
                date = {'June 16,2022'}  
                className="featureAuthBar"
            />
        </div>
    )
}

export default Feature

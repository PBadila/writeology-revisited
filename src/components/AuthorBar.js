import Component from 'react'
import avatar from '../imgs/avatar.png'
import clock from '../imgs/clock.png'


  


const AuthorBar = ({author,date,className}) => {

    const style ={
        color : className == "articleAuthBar" ? 'black' : 'white'
    }


    return(
        <div style = {style} class="authorBarFeature">
            <img class='authBarImg abItem' src={avatar}/>
            <div class = 'abItem'>{author}</div>
            <img class="authBarImg abItem" src={clock}/>
            <div class='abItem'>{date}</div>
        </div>
    )
}





export default AuthorBar
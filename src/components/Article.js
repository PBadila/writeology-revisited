import AuthorBar from "./AuthorBar"



const Article= ({articleSrc,tag,title,info}) => {
return(
    <div class='articleDiv'>
        <img class="artImg" src={articleSrc}/>
        <h3>{tag}</h3>
        <h2>{title}</h2>
        <p>{info}</p>
        <AuthorBar
            author={'John Carter'}
            date={'June 18,2022'}
            className="articleAuthBar"
        />
    </div>
)
}

export default Article
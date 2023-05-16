import logo from './logo.svg';
import './App.css';
import Feature from './components/Feature'
import ArtLink from './components/ArtLink'
import Article from './components/Article'
// import { loremIpsum } from 'react-lorem-ipsum';
import artImg1 from './imgs/management-software.jpg'
// const lorem = new loremIpsum()
// const loremSentence = lorem.generateSentences(1)
 
function App() {
  return (
    <div className="App">
      <Feature 
        title={'5 ways to improve your digital project management'}
      />
      <ArtLink
        tag='TIPS'
        title="How to choose the best management software"
      />
      <hr/>
      <ArtLink
        tag='TIPS'
        title="3 tips to avoid Internet distractions at work"
      />
      <hr/>
      <ArtLink
        tag='RESOURCES'
        title="7 great productivity apps for your new iPad"
      />

      <Article 
        articleSrc={artImg1}
        tag="TIPS"
        title="How to choose the best management software"
        info="Eos omnis voluptatem vel numquam quia sit eius ipsum At doloribus quidem eos aperiam iure."
      />
      
    </div>
     
  );
}

export default App;

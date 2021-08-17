import logo from './logo.svg';
import './App.css';
import './style.css'
import photo1 from "./photo1.jpg"
import myvideo from "./React.mp4"

function App() {
  return (
    <div className="App">
        <div>
          <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
            <h1 className="title_red">Jallouli Jawher</h1>
            <br />
            <img src={photo1} alt="hhh" />
            <br />
            <img src="/photo2.png" />
          </div>
          <video width={320} height={240} controls>
            <source src={myvideo} type="video/mp4" />
          </video>
      </div>
    </div>
  );
}

export default App;

import backgroundImg from './img/login.jpg';
import './index.css';

function App() {
  return (
    <div className="loginPage">
      <head>
        <title>Programmus Opus</title>
      </head>
      <body>
        <img src={backgroundImg} alt="backgroundImg" />
        
        <div class = "quote">
          <p>"Not all those who wander are lost."</p>
          <p>- J.R.R. Tolkien, The Fellowship of the Ring</p>
        </div>

        <div class = "loginForm">
          <input type ="text" id="magicWord" size="50"  placeholder="Enter the magic words to access the Programmus Opus!"></input><br></br>
          <button type="submit" id="loginSubmit">Submit</button>
        </div>
      </body>
    </div>
  );
}

export default App;

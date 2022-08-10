import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Body} from "./components/Body";

const App = () => {
  return (
    <div>
      <Header/>

        <Body/>

      <div className={'row'} style={{justifyContent:'center', alignContent:'center'}}>
          <Footer/>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import AudioList from "./components/AudioList";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Tabs from "./components/Tabs";
import "./App.css";
import FixFooter from "./components/FixFooter";
import {baseUrl} from './config.js'
function App() {
  const [list, setList] = useState(false);

  const onBackButtonPress = () => {
    setList(false);
  };


  useEffect(() => {
    fetch(`${baseUrl}/song`)
      .then((res) => res.json())
      .then(appData=> {
        console.log({appData});
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  return (
    <div className="App m-20">
      <Header />
      <h2 className="mtb-20 app-quote">Find the best music for your code</h2>
      <SearchInput />
      <Tabs />
     
      {list && (
        <AudioList
          onBackButtonPress={onBackButtonPress}
        />
      )}

     <FixFooter
      />
    </div>
  );
}

export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import TinderIcons from "./TinderIcons";
import Chat from "./Chat";
import ConvoScreen from "./ConvoScreen";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/chat/:person"
            element={
              <>
                <Header backbutton="/chat" />
                <ConvoScreen />
              </>
            }
          />
          <Route
            path="/chat"
            element={
              <>
                <Header backbutton="/" />
                <Chat />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header forwardbutton="/" />
                <Profile />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <TinderCards />
                <TinderIcons />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

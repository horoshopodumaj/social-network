import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/Dialogs.container";

const App = (props) => {
    // debugger;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route
                            path="/dialogs/*"
                            element={<DialogsContainer store={props.store} />}
                        />
                        <Route
                            path="/profile"
                            element={<Profile store={props.store} />}
                        />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

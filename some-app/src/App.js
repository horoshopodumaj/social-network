import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

const App = ({ state, dispatch }) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route
                            path="/dialogs/*"
                            element={
                                <Dialogs
                                    state={state.dialogsPage}
                                    dispatch={dispatch}
                                />
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <Profile
                                    state={state.profilePage}
                                    dispatch={dispatch}
                                />
                            }
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

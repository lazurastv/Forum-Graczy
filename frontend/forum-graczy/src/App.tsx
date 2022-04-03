import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Navigation from "./components/Navigation"
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import getTheme from "./theme";
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route, Link, BrowserRouter, } from "react-router-dom";
import { Navigate, useLocation } from 'react-router';
import Articles from "./pages/Articles/Articles";
import Games from "./pages/Games/Games";
import Chat from "./pages/Chat";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Home from './pages/Home/Home';
import Reviews from './pages/Reviews/Reviews';
import Game from './pages/Game/Game';
import Article from './pages/Article/Article';
import Review from './pages/Review/Review';
import MyProfile from "./pages/Profile/MyProfile";
import Profile from "./pages/Profile/Profile";
import ProtectedRoute, { ProtectedRouteProps } from "./components/Authentication/ProtectedRoute";
import { useSessionContext } from "./components/Authentication/SessionContext";
import ScrollToTop from "./components/ScrollToTop";
import DraftEditor from "./components/DraftEditor";


export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  //theme
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      getTheme(mode),
    [mode],
  );
  //authentication redirects
  const [sessionContext, updateSessionContext] = useSessionContext();
  
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: !!sessionContext.isAuthenticated, // !! means if variable is null, it return false
    authenticationPath: '/logowanie'
  };

  return (
    <BrowserRouter>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <Navigation />
            <CssBaseline />
            <ScrollToTop/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="mockEditor" element={<DraftEditor />} />
              <Route path="artykuly" element={<Articles />} />
              <Route path="artykuly/:title" element={<Article />} />
              <Route path="recenzje" element={<Reviews />} />
              <Route path="recenzje/:title" element={<Review />} />
              <Route path="gry" element={<Games />} />
              <Route path="gry/:title" element={<Game />} />
              <Route path="chat" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Chat />} />} />
              <Route path="mojprofil" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<MyProfile />} />} />
              <Route path="logowanie" element={<Login />} />
              <Route path="profiletmp" element={<Profile />} />
              <Route path="rejestracja" element={<Registration />} />
            </Routes>
          </ThemeProvider>
        </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;

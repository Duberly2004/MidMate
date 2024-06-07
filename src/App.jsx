import "./App.css";
import { ThemeProvider } from "styled-components";
import Chat from "./components/Chat";
import Index from "./pages/Index";
import { Route, Routes } from "react-router-dom";
// all available props
const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#7ecef4",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#7ecef4",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={ <Index/> } />
        <Route path="chat" element={ <Chat/> } />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

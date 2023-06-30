import { BrowserRouter , Routes , Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import MainLayout from "./components/MainLayout";
import Show from "./pages/Show";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route element=<MainLayout/> >
        <Route path="/" element={<Home/>} />
        <Route path="/start" element={<Starred/>} />
      </Route>
  
      <Route path="/show/:showId" element={<Show/> }/>
      <Route path="/" element={<Home/>} />


    </Routes>
   </BrowserRouter>
  );
}

export default App;

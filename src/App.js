import { Routes , Route  , Link} from "react-router-dom";
import Home from './Pages/home';
import Html from './Pages/htmlPage';
import Css from './Pages/cssPage';
import JavaScript from './Pages/javascript';
function App() {
  return (
<div className="App">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/html" element={<Html/>} />
<Route path="/css" element={<Css/>} />
<Route path="javascript" element={<JavaScript/>} />
</Routes>
</div>
  
  );
}

export default App;

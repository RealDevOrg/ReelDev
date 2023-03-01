import ReactDOM from 'react-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Feed from './components/Feed';
import Camera from './components/Camera';

import { HashRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div>
            <h1>Hi There!</h1>
            <HashRouter>
           
            
                <Routes>
                    <Route path='/' element={<Login/>} />
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path='/feed' element={<Feed />} /> 
                    <Route path='/camera' element={<Camera />} /> 
                </Routes>

            </HashRouter>
    
            <div>
                {/* <button>Create a Post</button> */}
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root') 
)
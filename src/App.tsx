import ReactDOM from 'react-dom';
import SignUp from './components/SignUp'

const App = () => {
    return (
        <div>
            <h1>Hi There!</h1>
            <SignUp/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root') 
)
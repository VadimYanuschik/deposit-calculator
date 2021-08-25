import Header from './components/header/header.component';
import {GlobalStyle} from './App.styles';
import Calculator from './components/calculator/calculator.component';

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Header/>
            <Calculator/>
        </div>
    );
}

export default App;

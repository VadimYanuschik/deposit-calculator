import Header from './components/header/header.component';
import {GlobalStyle} from './App.styles';
import Calculator from './components/calculator/calculator.component';
import CalculationsBox from './components/calculations-box/calculations-box.component';

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Header/>
            <Calculator/>
            <CalculationsBox/>
        </div>
    );
}

export default App;

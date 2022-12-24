import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Test from './components/Test'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      {/* <Test /> */}
    </div>
  );
}

export default App;

import './App.css';
import Search from './components/search/search';

function App() {
  const handleSearchChange = (data) => {
    console.log(data);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange}/>
    </div>
  );
}

export default App;

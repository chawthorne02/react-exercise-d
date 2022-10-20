
import BookmarkingApp from './components/BookmarkingApp';
import Container from 'react-bootstrap/Container';
import './App.css';

const INITIAL_TAG = {
  id: 1,
  url: "https://www.npmjs.com/package/nanoid",
  tag: "Nano ID",
  title: "Nano ID Page",
};


function App() {
  return (
    <Container className="App">
      

      <BookmarkingApp />
    </Container>
  );
}

export default App;
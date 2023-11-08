import HomePage from "./page/Home";
import NewsPage from "./page/Contact";
import ContactPage from "./page/Contact";
import { Routes, Route, Link } from 'react-router-dom'


function App() {

  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>s
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </div>

  );
}

export default App;

import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./page/Home";
import NewsPage from "./page/News";
import ContactPage from "./page/Contact";

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Routes đặt nơi xảy ra sử thay đổi định tuyến */}
      <Routes>
        {/* chưa nhiều route nhỏ để định nghĩa ra component */}
        {/* path sẽ đối chiếu với trình duyệt để render ra component */}
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

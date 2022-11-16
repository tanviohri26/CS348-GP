import React from "react";
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import AccountInfo from "./components/UserAccInfo";
import UserTotals from "./components/UserTotals";
import UserExpenditure from "./components/UserExpenditure";

function App() {
  return (
      <BrowserRouter>
         <nav>
            <ul>
              <li>
                <Link to="/users/info">AccountInfo</Link>
              </li>
              <li>
                <Link to="/users/total">UserTotals</Link>
              </li>
              <li>
                <Link to="/users/expenditure">UserExpenditure</Link>
              </li>
            </ul>
          </nav>
        <Routes>
          <Route path="/users/info" element={<AccountInfo />} />
          <Route path="/users/total" element={<UserTotals />} />
          <Route path="/users/expenditure" element={<UserExpenditure />} />
        </Routes>
      </BrowserRouter>
  );
}


export default App;

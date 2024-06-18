import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';

const App = () => {
  return (




      <div>
      <h5 >
      <BrowserRouter>
          <Routes>
              <Route path="/" >
              <Route index element={<MainPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>

      </h5>
      </div>


  );
};

export default App;


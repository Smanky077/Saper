import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './Routes/AppRoutes';

function App() {
   return (
      <div>
         <BrowserRouter>
            <AppRoutes />
         </BrowserRouter>
      </div>
   );
}

export default App;

import  '@/sass/index.scss'
import Layouts from '@/layouts/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from './routers/routes';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        {
          publicRoute.map((route,index) =>{
            const Page = route.component
              let Layout = Layouts
              return(
                <Route key={index} path={route.path} element={<Layout><Page/></Layout>} />
              )
          })
        }
      </Routes>
    </div>
    </Router>
  );
}

export default App;

import SearchFood from './components/SearchFood';
import DisplayFood from './components/DisplayFood';
import RootLayout from './components/RootLayout';
import ProjectDetail from './components/ProjectDetail';
import ErrorPage from './components/ErrorPage';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} >
      <Route path='SearchFood' element={<SearchFood/>} />
      <Route path='FoodItems' element={<DisplayFood/>} />
      <Route path='ProjectDetail' element={<ProjectDetail/>} />
      <Route path='*' element={<ErrorPage/>}  />
    </Route>
  )
)

 function  App() {
  return (
    <>
      <RouterProvider router ={router} />   
    </>
  )
}

export default App;






import Header from './Components/Header'
import SearchPage from './Pages/SearchPage'
import { Routes,Route } from 'react-router-dom'
import Movie from './Pages/Movie'


function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<SearchPage />}/>
      <Route path='/movie/:id' element={<Movie />}/>
    </Routes>
    </>

  )
}

export default App

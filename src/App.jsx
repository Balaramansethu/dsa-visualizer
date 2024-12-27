import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SortingComponent from './components/SortingVisualizerComponent/SortingVisualizerComponent'
import LinkedListComponent from './components/LinkedListComponent/LinkedList';
import HomeInterface from './pages/HomePage/HomeInterface';
const App = () => {
  return (
    <React.Fragment>
<Router>
      <Routes>
        <Route exact path="/" element={<HomeInterface />} />  
        <Route exact path="/sorting-visualizer" element={<SortingComponent/>} /> 
        <Route exact path="/LinkedList" element={<LinkedListComponent/>}/>
      </Routes>
</Router>
    </React.Fragment>
  )
}

export default App
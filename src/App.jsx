import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SortingComponent from './components/SortingVisualizerComponent/SortingVisualizerComponent'
import LinkedListComponent from './components/LinkedListComponent/LinkedList';

const App = () => {
  return (
    <React.Fragment>
<Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />  
        <Route exact path="/sorting-visualizer" element={<SortingComponent/>} /> 
        <Route exact path="/LinkedList" element={<LinkedListComponent/>}/>
      </Routes>
    </Router>
    </React.Fragment>
  )
}

export default App
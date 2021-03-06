import React from 'react'
import './App.css'
// Fazer a importação do router
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from '../components/layouts/Menu'
import Content from '../components/layouts/Content'

const App = props => (
    <div className="app">
        <Router>
            <Menu />
            <Content />
        </Router>
    </div>
)
export default App
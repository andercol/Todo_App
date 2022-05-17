import React from 'react'
import Menu from '../template/Menu'
import AppRoutes from './Routes'
import { BrowserRouter, HashRouter  } from "react-router-dom"

require('bootstrap/dist/css/bootstrap.min.css')
require('font-awesome/css/font-awesome.min.css')


const App = props => (
    <HashRouter >
        <div className="container">
            <Menu />
            <AppRoutes />
        </div>
    </HashRouter >
)
export default App
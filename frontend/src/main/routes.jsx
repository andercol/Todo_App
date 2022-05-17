import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Todo from '../todo/Todo'
import About from '../about/About'

const AppRoutes = props => (
        <Routes>
            <Route path='/todos' element={<Todo />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Navigate to="/todos" />} />
        </Routes>
)

export default AppRoutes
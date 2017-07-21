import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Components/Common/Script/Router'

ReactDom.render(
    <Routes/>,
    document.getElementById('container')
);
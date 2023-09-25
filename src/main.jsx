import React from 'react'
import './index.css'


import { Routes } from '@generouted/react-router'
import { createRoot } from 'react-dom/client'

const app = document.getElementById('root')
createRoot(app).render(<Routes />)


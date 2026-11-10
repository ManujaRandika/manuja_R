import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App, { ProjectsPage } from './App'
import './styles.css'

const root = document.getElementById('root')
const Page = root.dataset.page === 'projects' ? ProjectsPage : App

createRoot(root).render(
  <StrictMode><Page /></StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TestComponent2 from 'components/testComponent2/testComponent2'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TestComponent2 />
  </StrictMode>,
)

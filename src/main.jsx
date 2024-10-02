import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import AppExercice4 from './components/Exercice 4/AppExercice4.jsx'
import AppExercice6 from './components/Exercice 6/AppExercice6.jsx'
import AppExercice7 from './components/Exercice 7/AppExercice7.jsx'
import AppExerciceRedux from './components/Exercice Redux/AppExerciceRedux.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppExerciceRedux />
  </StrictMode>,
)

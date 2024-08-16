import './App.css'
import Card from './components/Card'
import Form from './components/Form'
import { useState } from 'react'

function App() {

  const [formData, setFormData] = useState(null)

  const handleFormSubmit = (data) => {
    setFormData(data)
  }

  return (
    <>
      <div className='App'>
        <h1>Formulario de mangas</h1>
        <Form formSubmit={handleFormSubmit}/>
        {formData && <Card manga={formData.manga} author={formData.author}/>}
      </div>
    </>
  )
}

export default App

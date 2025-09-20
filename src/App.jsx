
import { Suspense } from 'react'
import Countries from './components/Countries/Countries'

const hello =fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {


  return (
    <>
      <Suspense fallback={<p>Nadir Vai Loading...</p>}>
        <Countries countriesPromise={hello}></Countries>
      </Suspense>
      
     
    </>
  )
}

export default App

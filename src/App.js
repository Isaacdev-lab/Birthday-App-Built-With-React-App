import React, { useState} from 'react'
import Data from './data'
import List from './components/List'

// A functional component
const App = () => {

  //Hooks!
  // UseState is a functions to declare a variable
  const [people, setPeople] = useState(Data) //Our glorified variable which is just a state to hold data

  
  // This is function is to clear datas when the button is clicked
  const clearAll = () => {
   setPeople([]);
  }

  return (
    <>
      <div>
        <main>
          <section className='container'>
            <h3>{people.length} birthday today</h3>
            <List humans ={people} />
            <button onClick={clearAll}>Clear All</button>
          </section>
        </main>
      </div>
    </>
  )
}

export default App

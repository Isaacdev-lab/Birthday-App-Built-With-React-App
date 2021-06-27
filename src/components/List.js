import React from 'react'




const List = (props) => {

   const peopleList = props.humans.map((person) => {
       return (
           <article key = {person.id} className='person'>
               <img src={person.image} alt={person.name} />
               <div>
                   <h4>{person.name}</h4>
                   <p>{person.age}</p>
               </div>
           </article>
       )
   })
   
    return (
        <div>
            {peopleList}
        </div>
    )
}

export default List

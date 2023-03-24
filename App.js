import React from 'react'
import  {destinationsData} from './destinationsData'
import Header from './Header'
import Card from './Card'

export default function App() {
    
    const mydestinations = destinationsData.map((destination) => {
         return <Card 
            img={destination.imageUrl}
            location={destination.location}
            title={destination.title}
            startDate={destination.startDate}
            endDate={destination.endDate}
            description={destination.description}
         />
    })
    
    // console.log(mydestinations)
    
    return (
        <div>
          <Header />
          {mydestinations}
        </div>
    )
}


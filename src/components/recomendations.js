import React from 'react';
import Recommendation from './recommendation'
import PDF1 from '../assets/filipe-arena-recommendation-1.pdf'
import PDF2 from '../assets/filipe-arena-recommendation-2.pdf'
import PDF3 from '../assets/filipe-arena-recommendation-3.pdf'

export default function Recommendations() {
  const recommendations = [{
    description: `During our time together, Filipe displayed great 
    talents in solving difficult technical problems, pioneering new 
    techniques, ensuring code quality remained high, and training junior developers.`,
    author: "John Board",
    position: "Managing Director at Eante",
    downloadURL: PDF1,
  },
  {
    description: `I can say he is a person who is never afraid to take risks as 
    he is a self-starter that is always creating new solutions to solve the problems`,
    author: "Thiago Villas Boas",
    position: "Manager at Accenture",
    downloadURL: PDF2,
  },
  {
    description: `I highly recommend him as a skilled professional, he is very dedicated 
    and compromised with the integrity and quality of the work. He is always available to 
    share his knowledge with the team`,
    author: "Denise Marczal",
    position: "Mobile Specialist at Banco Votorantim",
    downloadURL: PDF3,
  }]



  return (
    <div className="box-2">
      {recommendations.map((item) =>
        <Recommendation text={item.description}
          author={item.author}
          position={item.position}
          download={item.downloadURL}></Recommendation>)}
    </div>
  )
}
import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
      <div className="parent">
        <Card user='Akhi' age={19} img='https://i.pinimg.com/originals/b3/20/ef/b320ef99da012648f1c73c766482ffff.jpg'/>
        <Card user='Lalli' age={18} img='https://i.pinimg.com/originals/34/0a/7b/340a7badb1fee177ac73596c81b8348a.jpg'/>
        <Card user='Niki' age={17} img='https://tse1.mm.bing.net/th/id/OIP.ddZEkHegRSXAfGTWASqoAgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'/>
        <Card user='Pravali' age={16} img='https://i.pinimg.com/736x/a2/f0/20/a2f02096249062eac95b42065865891b.jpg'/>
    </div>
  )
}

export default App

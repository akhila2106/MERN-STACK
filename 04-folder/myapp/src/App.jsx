import React from 'react'
import Card from './components/Card'

const jobOpenings=[
  {
    img:"https://pngimg.com/uploads/meta/meta_PNG12.png",
    company:"Meta",
    duration:"3 days ago",
    role:"Frontend Engineer",
    tag1:"Remote",
    tag2:"Senior level",
    pay:"$8000",
    location:"Bangalore"
  },
  {
    img: "https://pngimg.com/uploads/google/google_PNG19635.png",
    company: "Google",
    duration: "1 day ago",
    role: "Full Stack Software Engineer",
    tag1: "Hybrid",
    tag2: "Mid level",
    pay: "$7500",
    location: "Hyderabad"
  },
  {
    img: "https://pngimg.com/uploads/microsoft/microsoft_PNG17.png",
    company: "Microsoft",
    duration: "Just now",
    role: "Backend Engineer (Java / Spring)",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$8200",
    location: "Bangalore"
  },
  {
    img: "https://pngimg.com/uploads/amazon/amazon_PNG27.png",
    company: "Amazon",
    duration: "5 days ago",
    role: "React & Cloud Developer",
    tag1: "On-site",
    tag2: "Junior level",
    pay: "$5500",
    location: "Chennai"
  },
  {
    img: "https://pngimg.com/uploads/netflix/netflix_PNG15.png",
    company: "Netflix",
    duration: "2 days ago",
    role: "UI/UX Engineer",
    tag1: "Remote",
    tag2: "Senior level",
    pay: "$9000",
    location: "Mumbai"
  },
  {
    img: "https://pngimg.com/uploads/apple/apple_PNG12503.png",
    company: "Apple",
    duration: "4 days ago",
    role: "iOS Frontend Specialist",
    tag1: "Hybrid",
    tag2: "Mid level",
    pay: "$7800",
    location: "Bangalore"
  },
  // {
  //   img: "https://pngimg.com/uploads/adobe/adobe_PNG1.png",
  //   company: "Adobe",
  //   duration: "1 week ago",
  //   role: "Technical Trainer & Developer Advocate",
  //   tag1: "Remote",
  //   tag2: "Mid level",
  //   pay: "$6500",
  //   location: "Noida"
  // },
  {
    img: "https://pngimg.com/uploads/uber/uber_PNG18.png",
    company: "Uber",
    duration: "6 hours ago",
    role: "Systems API Engineer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$8500",
    location: "Hyderabad"
  },
  // {
  //   img: "https://pngimg.com/uploads/spotify/spotify_PNG11.png",
  //   company: "Spotify",
  //   duration: "2 days ago",
  //   role: "Frontend Web Architect",
  //   tag1: "Remote",
  //   tag2: "Lead level",
  //   pay: "$9500",
  //   location: "Bangalore"
  // },
  {
    img: "https://pngimg.com/uploads/paypal/paypal_PNG7.png",
    company: "PayPal",
    duration: "4 hours ago",
    role: "Database & Security Engineer",
    tag1: "Hybrid",
    tag2: "Junior level",
    pay: "$5000",
    location: "Chennai"
  }
  
];
const App = () => {
  return (
    <div className='parent'>
      {/* <Card img="" company="" duration="" role="" tag1="" tag2="" pay="" location=""/> */}
      {jobOpenings.map((e)=>{
        <Card img={e.img} company={e.company} duration={e.duration} role={e.role} tag1={e.tag1} tag2={e.tag2} pay={e.pay} location={e.location}/>
      })}
      <Card/>
    </div>
  )
}

export default App

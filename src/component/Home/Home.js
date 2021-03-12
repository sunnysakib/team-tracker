import { useEffect, useState } from "react";
import Header from "../Header/Header";
import LeagueSection from "../LeagueSection/LeagueSection";
import './Home.css'

const Home = () => {
    
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
    const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain'
    
    fetch(url)
    .then(res => res.json())
    .then(data => setTeams(data.teams))
  },[])
    const first12 =teams.slice(0, 12);
  return (
   
    <div className = 'home'>
       <Header></Header>
     <div className='overflow-hidden'>
      <div className ='row teamSection d-flex justify-content-center'>
      {
        first12.map(team => <LeagueSection team ={team}></LeagueSection>)
      }
      </div>
     </div>
    </div>
  );
};

export default Home;
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './LeagueSection.css';
import { faLongArrowAltRight,faFacebook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const LeagueSection = (props) => {
    // console.log(props);
    const {strTeam, strTeamBadge, strSport, idTeam} = props.team;
    
    return (
                <div className = 'teamDiv col-6 col-md-4'>
                    <img src={strTeamBadge} alt=""/>
                    <h4>{strTeam}</h4>
                    <p><small>Sports Type: {strSport}</small></p>
                    <button><Link className='link' to={`/team/${idTeam}`}>Explore  <FontAwesomeIcon icon={faLongArrowAltRight} /></Link></button>
                   
                </div>
           
    );
};

export default LeagueSection;



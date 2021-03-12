import { faLongArrowAltRight, faTwitterSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Detail.css'
import male from './image/male.png'

const Detail = () => {
    let { teamId } = useParams();
    const [team, setTeam] = useState([]);
    useEffect(()=>
    {const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
    fetch(url)
    .then(res => res.json())
    .then(data => setTeam(data.teams[0])) 
},[])
    console.log(team);
    const {strTeam, strDescriptionEN, strGender, strCountry, strSport, strTeamBadge, intFormedYear, strTwitter,strWebsite,strYoutube} = team;
return (
        <div className='detailStyle' >
            <div className = 'detail-header d-flex align-items-center justify-content-center'>
                <img src={strTeamBadge} alt="" srcset=""/>
            </div>
           <div className = 'detail-card'>
                <div className = 'teamDetail'>
                    <h2>{strTeam}</h2>
                    <h6>Founded: {intFormedYear}</h6>
                    <h6>Country: {strCountry}</h6>
                    <h6>Sports type: {strSport}</h6>
                    <h6>Gender: {strGender}</h6>                   
                </div>
                    {/* <div className = 'detail-img'>
                        <img src={male} alt=""/>
                    </div>  */}
           </div>
            
            <div className = 'description'>
                {strDescriptionEN}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum dolorem perspiciatis, iste error aut totam. Voluptas, repellendus nulla asperiores iste fuga fugiat excepturi totam facilis nam! Placeat ut quis, nisi dicta temporibus asperiores exercitationem eum quod adipisci dolores enim expedita veniam iure minus quos, minima, unde reiciendis earum tempore blanditiis suscipit. Veniam possimus at, quidem eum ad nam quo cupiditate laudantium esse ipsa, repudiandae deserunt, incidunt itaque quia placeat ratione aspernatur porro. Corporis ad, magnam cum qui possimus obcaecati vero, recusandae minima temporibus dolores, nihil tempore similique accusamus doloremque totam quisquam. Obcaecati excepturi quod, sapiente sed maxime voluptas aperiam odit laborum tenetur molestiae harum dolorem tempora accusantium quo? Nobis, rem culpa? Modi dignissimos, soluta perspiciatis accusamus sunt, placeat iste dicta optio aspernatur, adipisci nam! Minus, optio inventore obcaecati, fuga accusantium tenetur laboriosam iste eius veniam quos animi commodi dolores ducimus odio. Quis, reiciendis sint voluptatum ipsa eveniet a illum!</p>
            </div>
            <div className= 'd-flex justify-content-center social-link'>
            <a className = 'twitter p-2' href={strTwitter} ><FontAwesomeIcon icon={faTwitter} /></a>
            <a  className = 'facebook p-2' href={strWebsite}><FontAwesomeIcon icon={faFacebook} /></a>
            <a className = 'youtube p-2' href={strYoutube}><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
        </div>
    );
};

export default Detail;
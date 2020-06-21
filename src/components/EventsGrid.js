import React, { Component } from 'react'
import fpoimg from '../assets/events/img_marketing_web_cardimg_marketing_web_card@2x (24).png';
import fpoavatar from '../assets/avatars/Avatar_32.png';
import iconwatch from '../assets/icons/icn_timer_line.svg';
import icondistance from '../assets/icons/icn_distance_line.svg';
import styles from './EventsGrid.module.css';

const cards = [
    {
        imgsrc:fpoimg,
        title:'Lake Inniscarra, Ireland - Pyramid',
        time:'30:53',
        distance:'6.24M',
        avatarsrc:fpoavatar
    },
    {
        imgsrc:'https://placeimg.com/288/164',
        title:'Performance Series',
        avatarsrc:'https://placeimg.com/48/48'
    },{
        imgsrc:'https://placeimg.com/288/164/people',
        title:'Slow Pulls and Fast Intervals',
        time:'44:12',
        distance:'9.948M',
        avatarsrc:'https://placeimg.com/48/48/people'
    },{
        imgsrc:'https://placeimg.com/288/165/nature',
        title:'20 Minutes to Toned',
        avatarsrc:'https://placeimg.com/48/48/nature'
    },{
        imgsrc:'https://placeimg.com/288/164/tech',
        title:'Charles Race, Boston, Massachusetts',
        time:'30:53',
        distance:'6.24M',
        avatarsrc:'https://placeimg.com/48/48/animals'
    },{
        imgsrc:'https://placeimg.com/288/164/nature',
        title:'Full-Body HIIT Series',
        avatarsrc:'https://placeimg.com/48/48/nature'
    },{
        imgsrc:'https://placeimg.com/289/164/nature',
        title:'Kafue River, Zambia - Power Stroke Pyramid',
        time:'30:53',
        distance:'6.24M',
        avatarsrc:'https://placeimg.com/48/48/tech'
    },{
        imgsrc:'https://placeimg.com/290/164/nature',
        title:'Shred & Burn Series',
        avatarsrc:'https://placeimg.com/48/48'
    }
];

export class Card extends Component {
    
    render() {
        var timesnippet = null;
        var distancesnippet = null;
        if(this.props.time){
            timesnippet = (
                <>
                <img src={iconwatch} alt="watch icon" className={styles.icon} /> {this.props.time}
                </>
            )
        }
        if(this.props.distance){
            distancesnippet = (
                <>
                <img src={icondistance} alt="distance icon" className={styles.icon} /> {this.props.distance}
                </>
            )
        }
        return (
            <li className="card">
                <a href="https://mcnally.info" title="title would go here">
                {/* WRAPPING WITH A TAG FOR ACCESSIBILITY/KEYBOARD TABBING */}
                <div className={styles.image}><img src={this.props.imgsrc} alt="avatar" /></div>
                <div className={styles.content}>
                    <p>
                        <strong>{this.props.title}</strong>
                        {timesnippet}
                        {distancesnippet}
                    </p>
                    <img className={styles.avatar} src={this.props.avatarsrc} alt="avatar" />
                </div>
                <p className={styles.hover}>View Details</p>
           </a>
         </li>
        )
    }
}

export default function EventsGrid() {
    return (
    <div className={styles.eventswrapper + " module-wrapper"}>
        <ul className={styles.events +" flex-ul"}>
           { cards.map((card) => {
              return (
                    <Card key={card.title} title={card.title} imgsrc={card.imgsrc} time={card.time} distance={card.distance} avatarsrc={card.avatarsrc} />
                )
             })
            }
        </ul>
    </div>
    )
}

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
        imgsrc:fpoimg,//http://placekitten.com/200/300
        title:'Performance Series',
        avatarsrc:fpoavatar
    },{
        imgsrc:fpoimg,
        title:'Slow Pulls and Fast Intervals',
        time:'44:12',
        distance:'9.948M',
        avatarsrc:fpoavatar
    },{
        imgsrc:fpoimg,
        title:'20 Minutes to Toned',
        avatarsrc:fpoavatar
    },{
        imgsrc:fpoimg,
        title:'Charles Race, Boston, Massachusetts',
        time:'30:53',
        distance:'6.24M',
        avatarsrc:fpoavatar
    },{
        imgsrc:fpoimg,
        title:'Full-Body HIIT Series',
        avatarsrc:fpoavatar
    },{
        imgsrc:fpoimg,
        title:'Kafue River, Zambia - Power Stroke Pyramid',
        time:'30:53',
        distance:'6.24M',
        avatarsrc:fpoavatar
    },{
        imgsrc:fpoimg,
        title:'Shref & Burn Series',
        avatarsrc:fpoavatar
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
                    <p className={styles.hover}>View Details</p>
                </div>
                <img className={styles.avatar} src={this.props.avatarsrc} alt="avatar" />
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

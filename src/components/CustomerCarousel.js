import React, { Component } from 'react';
import styles from './CustomerCarousel.module.css';
import fpogjlogo from '../assets/testimonial-logos/gearjunkie-vector-logo.svg';
import fpomashablelogo from '../assets/testimonial-logos/mashable_logo.svg';
import fpowiredlogo from '../assets/testimonial-logos/wired_logo.svg';
import careticon from '../assets/icons/chevron-right.svg';

const testimonials = [
    {
        imgsrc:fpogjlogo,
        copy:'"You focus on putting in the work, and the technology handles the rest."'
    },{
        imgsrc:fpowiredlogo,
        copy:'"Literally transports you from home to wherever you choose to run."'
    },{
        imgsrc:fpomashablelogo,
        copy:'"Breathes new life into a tired, old running routine."'
    },{
        imgsrc:fpogjlogo,
        copy:'"You focus on putting in the work, and the technology handles the rest."'
    },{
        imgsrc:fpowiredlogo,
        copy:'"Literally transports you from home to wherever you choose to run."'
    }
];

export class TestimonialCard extends Component {
    render() {
        return (
            <li className="card">
                <img src={this.props.src} alt="alt tag goes here" />
                <p>{this.props.copy}</p>
            </li>
        )
    }
}


export class CustomerCarousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            moveclass:'',
            testimonialarray:testimonials
        }
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }
    handleAnimationEnd(){
        if(this.state.moveclass === styles.carouselprev){
            this.shiftNext();
        }else if(this.state.moveclass === styles.carouselnext){
            this.shiftPrev();
        }
        this.setState({
            moveclass:''
        })
    }
    prev(){
        this.setState({
            moveclass:styles.carouselprev
        });
    }
    next(){
        this.setState({
            moveclass:styles.carouselnext
        });
    }
    shiftPrev(){
        this.setState((s) => {
            let array = s.testimonialarray.slice();//copy current array
            let card = array.pop();//remove last one
            array.splice(0,0,card); //insert at beginning
            return {
                testimonialarray: array
            }          
        })
    }
    shiftNext(){
        this.setState((s) => {
            let array = s.testimonialarray.slice();//copy current array
            let card = array.shift();//remove first one
            array.splice(array.length,0,card); //insert at beginning
            return {
                testimonialarray: array
            }          
        })
    }
    render() {
        return (
            <div className={styles.carouselwrapper +" module-wrapper"}>
            <div className={styles.ui}><button onClick={this.next} className={styles.prev}><img src={careticon} alt="previous" /></button><button onClick={this.prev} className={styles.next}><img src={careticon} alt="next" /></button></div>
                <ul onAnimationEnd={this.handleAnimationEnd} className={this.state.moveclass+ " "+styles.carousel + " flex-ul"}>
                    {
                        this.state.testimonialarray.map((t, index) => <TestimonialCard key={t.copy + index} src={t.imgsrc} copy={t.copy} />)
                    }
                    
                </ul>
            </div>
        )
    }
}

export default CustomerCarousel

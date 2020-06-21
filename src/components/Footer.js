import React, { Component } from 'react'
import styles from './Footer.module.css';


export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            lang:'English',
            open:false
        }
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
    }

    handleLanguageChange(e){
        this.setState({
            lang:e.target.value
        });
    }

    render() {
        return (
            <footer className={styles.footerwrapper + " module-wrapper"}>
                <div className={styles.sitelinks}>
                    <dl>
                        <dt>Company</dt>
                        <dd><a href="https://mcnally.info">About</a></dd>
                        <dd><a href="https://mcnally.info">Contact Us</a></dd>
                        <dd><a href="https://mcnally.info">Careers</a></dd>
                    </dl>
                    <dl>
                        <dt>Account</dt>
                        <dd><a href="https://mcnally.info">Log In</a></dd>
                        <dd><a href="https://mcnally.info">Create Account</a></dd>
                    </dl>
                    <dl>
                        <dt>Support</dt>
                        <dd><a href="https://mcnally.info">Help Center</a></dd>
                        <dd><a href="https://mcnally.info">Accessibility</a></dd>
                    </dl>
                </div>
                <ul className={styles.social+" flex-ul"}>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
                <ul className={styles.legal+" flex-ul"}>
                    <li>© copyright</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                </ul>
                <select className={styles.langbutton} value={this.state.lang} onChange={this.handleLanguageChange}>
                    <option value="English">English</option>
                    <option value="German">German</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Chinese">Chinese</option>
                </select>
            </footer>
        )
    }
}
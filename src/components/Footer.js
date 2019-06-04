import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component {
    render(){
        return (
            <footer className="footer" data-test='footer-component'>
                <div className="footer-heading" data-test='footer-heading-component'>
                      <h1 data-test='footer-heading-component'>ETT EVENT - EN MÖJLIGHET!</h1>
                </div>
                <p data-test='footer-heading-component'>
                    Vi leder alla till Sverige. To Sweden i samarbete med Svenska
                    Olympiska kommittén och den internationella olympiska kommittén.
                </p>
            </footer>
        )
    }
}

export default Footer;

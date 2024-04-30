import "../footer/FooterStyles.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>SassySpicy!!</h1>
                    <p>Your Taste.. Our Service</p>
                </div>
                
                <div>
                    <a href="https://github.com/Koduri-Nagasai">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                    <a href="https://instagram.com/nagasai_koduri">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/koduri-naga-sai/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Community</h4>
                    <a href="https://github.com/Koduri-Nagasai/INT-252-React-JS-PROJECT">Github</a>
                    <a href="https://forms.gle/pNZ6xDp4tDGbFGXu7">Issues</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Address</h4>
                    <p>12 floor, MG Road, New Complex Vallai, <br></br>Visakapatanam(Andhra Pradesh) India 456667</p>
                   
                    <h4>Contact Us</h4>
                    <p>Tel No. +91 9347254826</p>
                </div>
                
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
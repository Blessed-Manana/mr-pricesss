import "./Footer.css";

const Footer = () => {
    return ( 
        <div className="checkbox">
            <div className="block1">
                <h2>Hook me up with fashion news</h2>
            </div>
            <div className="block3">
                <input type="checkbox" name="alls" id="alls"/>
                <label for="alls">All</label>
                <input type="checkbox" name="Ladies" id="Ladiess"></input>
                <label for="Ladiess">Ladies</label>
                <input type="checkbox" name="Mens" id="Mens"></input>
                <label for="Mens">Men</label>
                <input type="checkbox" name="Kidss" id="Kidss"></input>
                <label for="Kidss">Kids</label>
                <input type="checkbox" name="babys" id="babys"></input>
                <label for="Babys">Baby</label>
                <div className="block3">
                    <input type="email" placeholder="Email Address"></input>
                </div>
            </div>
        </div>
    );
}

export default Footer;
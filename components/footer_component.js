const footerComponentTemplate = document.createElement('template');

footerComponentTemplate.innerHTML = `
<style>
#footerSection{
    position: relative;
    margin-bottom: 10px;
    height: 38vh;
    top: 25vh;
    background-color: #0093FF;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#bottomFooterLabel{
    position: relative;
    height: 35px;
    width: 100%;
    top: 15%;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: start;
    color: white;
    font-family: urbaneRounded, serif;
    font-size: 10px;
    padding-top: 10px;
    margin-bottom: 15px;
    padding-bottom: 10px;
}

.footerInside{
    display: flex;
    width: 70%;
    position: relative;
    left: -4%;
    flex-direction: row;
    justify-content: space-around;
}

.footerContent{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: start;
    margin-top: 35px;
    height: 25vh;
}

#blah {
    margin-left: 100px;
    width: 53.84px;
    height: 43.56px;
}

.footerTopic{
    color: white;
    font-size: 13px;
    font-family: urbaneRounded, serif;
    font-weight: bold;
    margin-bottom: 13px;
}

.footerContentSmall{
    color: white;
    font-size: 12px;
    font-family: Arial, serif;
    font-weight: normal;
    padding-left: 7px;
}

.contactSec{
    margin-bottom: 13px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
<section id="footerSection">
    <div class="footerInside">
        <div class="footerContent">
            <img id="blah" src="assets/star.png" alt=""/>

        </div>
        <div class="footerContent">
            <text class="footerTopic">Contact</text>
            <div class="contactSec">
                <img src="assets/f1.png" style="width: 20px">
                <text class="footerContentSmall">00 11 223233</text>
            </div>
            <div class="contactSec">
                <img src="assets/f2.png" style="width: 20px">
                <text class="footerContentSmall">info@domain.com</text>
            </div>
            <div class="contactSec">
                <img src="assets/f3.png" style="width: 20px">
                <text class="footerContentSmall">Street Address
                    City, and Postcode
                    Country
                </text>
            </div>
        </div>
        <div class="footerContent">
            <text class="footerTopic">Our products</text>
            <div class="contactSec">
                <img src="assets/f1.png" style="width: 20px">
                <text class="footerContentSmall">2 Step process</text>
            </div>
            <div class="contactSec">
                <img src="assets/f2.png" style="width: 20px">
                <text class="footerContentSmall">4 Step process</text>
            </div>
        </div>
        <div class="footerContent">
            <text class="footerTopic">Our products</text>
            <div class="contactSec">
                <img src="assets/ff.png" style="width: 20px">
                <text class="footerContentSmall">@facebookNZ</text>
            </div>
        </div>
    </div>
    <div id="bottomFooterLabel">
        Sitemap | Disclaimer | © Copyright 2022 | All Rights Reserved - Enterprise name. All Rights Reserved.
    </div>
</section>
`

class FooterSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(footerComponentTemplate.content.cloneNode(true));
    }
}

window.customElements.define('footer-component', FooterSection);
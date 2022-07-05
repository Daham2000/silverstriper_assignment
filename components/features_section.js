const features_section = document.createElement('template');

features_section.innerHTML = `
<style>
#featuresBoxSection{
    position: relative;
    top: 40vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 35px;
    padding-top: 35px;
    background-color: black;
}

.featuresBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: center;
    width: 153px;
    height: 162px;
    margin-right: 20px;
    background-color: #363636;
    border-radius: 30px;
}

.textFeature{
    font-size: 12px;
    color: white;
    padding-top: 12px;
    font-family: Arial;
}
</style>

<div id="featuresBoxSection">
    <div class="featuresBox">
        <img src="assets/i1.png" style="width: 30px">
        <text class="textFeature">Powerful</text>
    </div>
    <div class="featuresBox">
        <img src="assets/i2.png" style="width: 30px">
        <text class="textFeature">Reliable</text>
    </div>
    <div class="featuresBox">
        <img src="assets/i3.png" style="width: 30px">
        <text class="textFeature">Efficient</text>
    </div>
    <div class="featuresBox">
        <img src="assets/i4.png" style="width: 30px">
        <text class="textFeature">Silent</text>
    </div>
    <div class="featuresBox">
        <img src="assets/i5.png" style="width: 30px">
        <text class="textFeature">Clean</text>
    </div>
</div>
`

class FeaturesSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(features_section.content.cloneNode(true));
    }
}

window.customElements.define('features-section', FeaturesSection);
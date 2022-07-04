const template1 = document.createElement('template');

template1.innerHTML = `
    <style>
#textInSlider{
    position: absolute;
    bottom: 30%;
    left: 15%;
}

#textOne{
    color: white;
    width: 501px;
    font-size: 50px;
    font-weight: bold;
    font-family: Arial;
    margin-bottom: 10px;
}

#textTwo{
    width: 659px;
    color: white;
    font-size: 11px;
    font-weight: lighter;
    font-family: sans-serif;
}

.sliderBts{
    margin-right: 2px;
    margin-top: 15px;
    border-radius: 100px;
    padding: 5px 13px;
    background-color: #0093FF;
    color: white;
    border-color: transparent;
}
</style>

       <div id="textInSlider">
            <h2 id="textOne">
                Exceeds all
                expectations.</h2>
            <p id="textTwo">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div>
                <button class="sliderBts">Two stroke motors</button>
                <button class="sliderBts">Four stroke motors</button>
                <button class="sliderBts">Electric motors</button>
                <button class="sliderBts">4th button needed</button>
            </div>
       </div>
`

class SliderText extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template1.content.cloneNode(true));
    }
}

window.customElements.define('slider-text', SliderText);
const templatePowerFullText = document.createElement("template");

templatePowerFullText.innerHTML = `
    <style>
    #powerfulText{
    display: flex;
    flex-direction: column;
    position: relative;
    top: 40vh;
    padding: 45px 17% 40px;
    background-color: black;
}

.powerfulTopic{
    font-size: 25px;
    font-weight: bold;
    color: white;
    font-family: Arial;
}

#powerfulPar{
    display: flex;
    flex-direction: row;
}

.param{
    font-size: 10px;
    width: 400px;
    font-family: urbaneRounded, serif;
    color: white;
    margin-right: 25px;
    margin-top: 10px;
    font-weight: lighter;
}

#buttonDiv{
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.sliderBts{
    width: 120px;
    margin-right: 2px;
    margin-top: 15px;
    border-radius: 100px;
    padding: 5px 13px;
    background-color: #0093FF;
    color: white;
    border-color: transparent;
}
    </style>
    <section id="powerfulText">
    <text class="powerfulTopic">Powerful</text>
    <div id="powerfulPar">
        <p class="param">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.</p>
        <div id="buttonDiv">
            <p class="param">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <button class="sliderBts">Button</button>
        </div>
    </div>
</section>
`

class PowerfulTextSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templatePowerFullText.content.cloneNode(true));
    }
}

window.customElements.define('powerful-text-section', PowerfulTextSection);
const template = document.createElement('template');
template.innerHTML = `
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

body {
    font-family: montserrat;
}

nav {
    position: absolute;
    background: #0093FF;
    height: 80px;
    width: 100%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-bottom: 10px;
}

label.logo {
    color: white;
    font-size: 35px;
    line-height: 80px;
    padding: 0 100px;
    font-weight: bold;
}

nav ul {
    float: right;
    margin-right: 40px;
}

nav ul li {
    display: inline-block;
    line-height: 100px;
    margin: 0 5px;
}

nav ul li a {
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: bold;
    padding: 7px 7px;
    border-radius: 3px;
}

a.active, a:hover {
    background: #1b9bff;
    transition: .5s;
}

.checkbtn {
    font-size: 30px;
    color: white;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display: none;
}

#check {
    display: none;
}

@media (max-width: 952px) {
    label.logo {
        font-size: 30px;
        padding-left: 50px;
    }

    nav ul li a {
        font-size: 16px;
    }
}

@media (max-width: 858px) {
    .checkbtn {
        display: block;
    }

    ul {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #2c3e50;
        top: 80px;
        left: -100%;
        text-align: center;
        transition: all .5s;
    }

    nav ul li {
        display: block;
        margin: 50px 0;
        line-height: 30px;
    }

    nav ul li a {
        font-size: 20px;
    }

    a:hover, a.active {
        background: none;
        color: #0082e6;
    }

    #check:checked ~ ul {
        left: 0;
    }
}

#blah {
    margin-left: 100px;
    margin-top: 17px;
    width: 57.84px;
    height: 46.56px;
}

  </style>
   <nav>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
    </label>
    <img id="blah" src="assets/star.png" alt="" />
    <ul>
        <li><a href="#">Menu one</a></li>
        <li><a href="#">Menu two</a></li>
        <li><a href="#">Menu three</a></li>
        <li><a href="#">Menu four</a></li>
        <li><a href="#">Menu five</a></li>
        <li><a href="#">Menu six</a></li>
        <li><a href="#">Menu seven</a></li>
        <li><a href="#">Menu eight</a></li>
    </ul>
</nav>
`;

class NavBarComponent extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true;

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }
}

window.customElements.define('nav-bar-compo', NavBarComponent);
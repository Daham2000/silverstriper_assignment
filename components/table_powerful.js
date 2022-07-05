const templatePowerFulTable = document.createElement("template");

templatePowerFulTable.innerHTML = `
    <style>
#tablePowerful {
    position: relative;
    top: 40vh;
    width: 100vw;
    padding: 25px 17% 40px;
    display: flex;
    flex-direction: column;
    background-color: black;
}

.powerfulTopic {
    font-size: 25px;
    font-weight: bold;
    color: white;
    font-family: Arial;
    padding-bottom: 10px;
}

#tableSection {
    border-radius: 15px !important;
}

.headerOne {
    color: white;
    font-size: 13px;
    font-weight: normal;
    padding: 10px !important;
    font-family: Arial, serif;
    background: #0093FF !important;
}

.headerTwo {
    color: white;
    font-size: 13px;
    font-weight: normal;
    padding: 10px !important;
    font-family: Arial, serif;
    background-color: #0080DE !important;
}

.table-curved {
    border-radius: 10px;
}

.bdr {
    border-radius: 12px;
    overflow: hidden;
}

.rowOne{
    color: black;
    font-size: 12px;
    font-weight: normal;
    padding: 10px !important;
    font-family: Inter, serif;
    background: #EDEDED !important;
}

.rowTwo{
    color: black;
    font-size: 12px;
    font-weight: normal;
    padding: 10px !important;
    font-family: Inter, serif;
    background-color: #dcdcdc !important;
}

.rowThere{
    color: black;
    font-size: 12px;
    font-weight: normal;
    padding: 10px !important;
    font-family: Inter, serif;
    background: white !important;
}

    </style>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>
<body>
    <section id="tablePowerful">
    <text class="powerfulTopic">Powerful</text>

    <div class="tbl-container bdr">
        <table id="tableSection" class="table">
            <thead class="bg-red">
            <tr class="tableRowHeader">
                <th class="headerOne col-2" scope="col">Table heading 1</th>
                <th class="headerTwo col-2" scope="col">Table heading 2</th>
                <th class="headerOne col-2" scope="col">Table heading 3</th>
                <th class="headerTwo col-6" scope="col">Table heading 4</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="rowOne">Mark</td>
                <td class="rowTwo">Mark</td>
                <td class="rowOne">Otto</td>
                <td class="rowTwo"> ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </td>
            </tr>
            <tr>
                <td class="rowThere">Jacob</td>
                <td class="rowOne">Jacob</td>
                <td class="rowThere">Thornton</td>
                <td class="rowOne">@fat</td>
            </tr>
            <tr>
                <td class="rowOne">Mark</td>
                <td class="rowTwo">Mark</td>
                <td class="rowOne">Otto</td>
                <td class="rowTwo">@mdo</td>
            </tr>
            <tr>
                <td class="rowThere">Lorem</td>
                <td class="rowOne">Jacob</td>
                <td class="rowThere">Thornton</td>
                <td class="rowOne"> ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </td>
            </tr>
            </tbody>
        </table>
    </div>
</section>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>

`

class TablePowerful extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templatePowerFulTable.content.cloneNode(true));
    }
}

window.customElements.define('powerful-table', TablePowerful);
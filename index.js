const apiProperty = 'http://192.168.1.52:4000/property';


async function getApiData(){
    let dataProperty = await fetch(apiProperty);
    let dataPropertyJson = await dataProperty.json();

    const cardContainer = document.getElementById("sectionCard");

    dataPropertyJson.forEach(element => {
        cardContainer.innerHTML = cardContainer.innerHTML + 
        `<div class="card">
        <div class="housePhoto">
            <img src="${element.image}" alt="photo">
        </div>
        <div class="cardInfo">
            <div class="cardInfoGen">
                <div class="infoicon">
                    <p>${element.price}&nbsp;&nbsp;&nbsp;&nbsp;<strong>|</strong></p>
                    <img class="iconCard" src="./images/icons8-bath-64.png">${element.bathrooms}<strong>|</strong></img>
                    <img class="iconCard" src="./images/icons8-dormitorio-50.png">${element.bedrooms}</img>
                </div>
                <div class="addressCard">
                    <p>${element.address}</p>
                </div>
            </div>
            <div class="buttonCardContainer">
                <button class="buttonCard">More information</button>
            </div>
        </div>
    </div>`
    });

}

getApiData();
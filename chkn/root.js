const foodType = {
    3789: "1 Frite",
    3788: "1 Boisson 33 cl",
    3794: "1 Ice Street (Sunday)",
    3795: "1 Cheeseburger",
    3792: "3 Tenders",
    3793: "4 Nuggets",
    3791: "3 Wings",
    3790: "1 Cheese Naan",
}

const partyUrl = "https://api.luckylikes.fr/qrc/party/"

const iterationLabel = "Itération: "
const codeInfoLabel = "Codes générés: "


window.onload = function() {
    // Add selects

    const select = document.querySelector("#type");
    select.remove(0);

    for (let foodTypeKey in foodType) {
        console.log(foodTypeKey)

        const option = document.createElement("option");
        option.value = foodTypeKey;
        option.text = foodType[foodTypeKey];

        select.appendChild(option);
    }
}

let isGenerating = false
let iteration = 0

async function buttonClicked(){
    if(!isGenerating){
        // Reset infos
        isGenerating = true
        iteration = 0

        const codesInfoSelector = document.querySelector("#codesInfo")
        codesInfoSelector.innerHTML = codeInfoLabel + 0

        const iterationSelector = document.querySelector("#iterationInfo")
        iterationSelector.innerHTML = iterationLabel + 0


        //Clear qrcodes list
        const qrCodeList = document.querySelector("#codes")
        while (qrCodeList.firstChild) {
            qrCodeList.removeChild(qrCodeList.firstChild);
        }

        //Clear codeslink list
        const codeList = document.querySelector("#codesList")
        while (codeList.firstChild) {
            codeList.removeChild(codeList.firstChild);
        }

        const type = parseInt(document.querySelector("#type").value)
        const amount = document.querySelector("#quantity").value

        let results = []

        while (results.length < parseInt(amount)) {
            const res = await getCryptId();
            const gift = res.gift;

            if (gift != null && res.gift.id === type) {
                results.push(partyUrl + res.cryptId);

                const codesInfoSelector = document.querySelector("#codesInfo")
                codesInfoSelector.innerHTML = codeInfoLabel + results.length
            }

            iteration++
            const iterationSelector = document.querySelector("#iterationInfo")
            iterationSelector.innerHTML = iterationLabel + iteration
        }


        for (let codeUrl of results) {
            // Display qr codes
            let a = document.createElement("a")
            a.href = codeUrl
            a.target = "_blank"

            let img = document.createElement("img")
            img.src = codeUrl

            a.appendChild(img)
            qrCodeList.appendChild(a)

            // Display links

            let li = document.createElement("li")
            li.innerHTML = codeUrl
            codeList.appendChild(li)
        }

        console.log(results)
        isGenerating = false
    }
}

async function getCryptId() {
    const url = "https://api.luckylikes.fr/api/parties";
    const postData = {
        "customer": {
            "@id": "/api/customers/434",
            "@type": "Customer",
            "id": 434,
            "name": "Chicken Street Rouen",
            "textColor": "#fcca17",
            "wheelColor": "#fcca17",
            "backgroundColor": "#000000",
            "wheelCenterColor": "#fcca17",
            "buttonBackgroundColor": "#fcca17",
            "buttonTextColor": "#000000",
            "arrowColor": "#fcca17",
            "slug": "chickenstreetrouen",
            "isGameEnabled": true,
            "decorationColor": "#fcca17",
            "textSecondaryColor": "#ffffff",
            "confettiesColor": "#fcca17",
            "cycleSize": 16,
            "cyclesPerDayNumber": 999,
            "gifts": [
                {
                    "@id": "/api/gifts/3788",
                    "@type": "Gift",
                    "id": 3788,
                    "name": "1 Boisson 33 cl",
                    "rank": 1,
                    "slice": 1,
                    "cardBackgroundUrl": "https://storage.googleapis.com/files-splash360/daabda7d-ff6e-4197-81dd-6cfb951ffc79_cs-cann.png",
                    "isDeleted": null
                },
                {
                    "@id": "/api/gifts/3789",
                    "@type": "Gift",
                    "id": 3789,
                    "name": "1 Frite",
                    "rank": 3,
                    "slice": 3,
                    "cardBackgroundUrl": "https://storage.googleapis.com/files-splash360/906fd519-8f2c-49e2-a268-928f9625835e_cs-frite.png",
                    "isDeleted": null
                },
                {
                    "@id": "/api/gifts/3790",
                    "@type": "Gift",
                    "id": 3790,
                    "name": "1 Cheese Naan",
                    "rank": 5,
                    "slice": 4,
                    "cardBackgroundUrl": "https://storage.googleapis.com/files-splash360/705fe524-df8c-4ddd-80dc-072b30909143_cs-cheesenaan.png",
                    "isDeleted": null
                },
                {
                    "@id": "/api/gifts/3791",
                    "@type": "Gift",
                    "id": 3791,
                    "name": "3 Wings",
                    "rank": 7,
                    "slice": 6,
                    "cardBackgroundUrl": "https://storage.googleapis.com/files-splash360/42c47ace-abb1-406b-b5a4-ca8b993707cd_cs-wingss.png",
                    "isDeleted": null
                },
                {
                    "@id": "/api/gifts/3792",
                    "@type": "Gift",
                    "id": 3792,
                    "name": "3 Tenders",
                    "rank": 9,
                    "slice": 7,
                    "cardBackgroundUrl": "https://storage.googleapis.com/files-splash360/4310d17c-4ca8-45c5-9b41-47d9b373895b_cs-tenders.png",
                    "isDeleted": null
                },
                {
                    "@id": "/api/gifts/3793",
                    "@type": "Gift",
                    "id": 3793,
                    "name": "4 Nuggets",
                    "rank": 11,
                    "slice": 9,
                    "cardBackgroundUrl": "https://storage.googleapis.com/files-splash360/d1455d65-2d9e-4114-9869-906bd8ee551b_cs-nuggets.png",
                    "isDeleted": null
                },
                {
                    "@id": "/api/gifts/3794",
                    "@type": "Gift",
                    "id": 3794,
                    "name": "1 Ice Street",
                    "rank": 13,
                    "slice": 11,
                    "cardBackgroundUrl": "https://storage.googleapis.com/files-splash360/a971a9cf-0bc8-42e0-adc2-0e8ec793962c_cs-icestreet.png",
                    "isDeleted": null
                },
                {
                    "@id": "/api/gifts/3795",
                    "@type": "Gift",
                    "id": 3795,
                    "name": "1 Cheese",
                    "rank": 15,
                    "slice": 12,
                    "cardBackgroundUrl": "https://storage.googleapis.com/files-splash360/15629884-50dc-467d-afb8-de66abb5cf1e_cs-cheese.png",
                    "isDeleted": null
                }
            ],
            "logoUrl": "https://storage.googleapis.com/files-splash360/d9aea067-6cec-407e-ae54-10f027c15f55_cs-logo.png",
            "durationBeforeNewGame": 1440,
            "urlToPromotes": [
                {
                    "@id": "/api/url_to_promotes/650",
                    "@type": "UrlToPromote",
                    "id": 650,
                    "adress": "https://search.google.com/local/writereview?placeid=ChIJPURud2vf4EcRL9LcgtjVlAk",
                    "name": "Google",
                    "iconString": "fab fa-google",
                    "isDefault": true,
                    "punchline": "Notez Chicken Street Rouen sur Google puis revenez sur cette page pour participer à notre jeu."
                }
            ],
            "urlMode": "base",
            "delayGift": 15,
            "minimumBuyAmount": 10,
            "sliceBackgroundColor1": "#000000",
            "sliceTextColor1": "#ffffff",
            "sliceBackgroundColor2": "#ffffff",
            "sliceTextColor2": "#000000",
            "game": {
                "@id": "/api/games/2",
                "@type": "Game",
                "id": 2,
                "label": "Cartes"
            },
            "cardBackgroundUrl": null,
            "cardBackBorderColor": "#ffffff",
            "cardBackBackgroundColor": null,
            "cardBackgroundColor": "#ffffff",
            "cardTextColor": null,
            "cardBackgroundUrl01": null,
            "cardBackgroundUrl02": null,
            "cardBackgroundUrl03": null,
            "cardBackgroundUrl04": null,
            "cardBackgroundUrl05": null,
            "cardBackgroundUrl06": null,
            "cardBackgroundUrl07": null,
            "cardBackgroundUrl08": null,
            "cardBackgroundUrl09": null,
            "cardBackgroundUrl10": null,
            "cardBackgroundUrl11": null,
            "cardBackgroundUrl12": null,
            "defaultLanguage": {
                "@id": "/api/languages/1",
                "@type": "Language",
                "id": 1,
                "label": "Français"
            },
            "languages": [
                {
                    "@id": "/api/languages/1",
                    "@type": "Language",
                    "id": 1,
                    "label": "Français"
                }
            ],
            "optinColor": null,
            "googlePlaceId": "ChIJPURud2vf4EcRL9LcgtjVlAk",
            "rating": 4.6,
            "reviewsNumber": 424,
            "giftsNumber": 529,
            "partiesNumber": 1025,
            "emailCampaignsNumber": 0,
            "contactsNumber": 170
        }
    }

    return fetch(url, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json())
        .then((data) => {
            return data
        });
}
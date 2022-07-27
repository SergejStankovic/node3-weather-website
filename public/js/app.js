console.log('Client side javascript file is loaded!')

// fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/boston.json?access_token=pk.eyJ1Ijoic2VyZ2Vqc3RhbmtvdmljIiwiYSI6ImNsNW53b3B0NjE4MWIzY25tNnMwcXRnanEifQ.1rfuZgbUqFzJGsEMsHHLGw&limit=1').then((response) => {
//     response.json().then((data) => {
//         // console.log(data['features'][0]['center'][0])
//         const latitude = data['features'][0]['center'][0]
//         const longitude = data['features'][0]['center'][1]
//         console.log(latitude, longitude)
//         fetch('http://api.weatherstack.com/current?access_key=0e286d94df2e1afb4872a48512683751&query=' + longitude + ',' + latitude + '&units=m').then((response) => {
//         response.json().then((data) => {
//             console.log(data['current'])
//             })
//         })
//     })
// })

// fetch('http://localhost:3000/weather?address=subotica').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'From Sergius'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    console.log(location)

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})
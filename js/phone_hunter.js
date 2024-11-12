function dataLoad(searchText){
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
            .then(ras => ras.json())
            .then(phones => displayPhone(phones.data))
}

function displayPhone(phones) {
    const phoneContainer = document.getElementById('phone_container')
    phoneContainer.textContent = ''
    console.log(phones)
    phones = phones.slice(0,12)
    phones.forEach(phone => {
        console.log(phone)
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card bg-blue-100 p-4 shadow-xl`
        phoneCard.innerHTML = `
            <figure>
                <img src="${phone.image}" alt="Shoes">
            </figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>${phone.slug}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `
        phoneContainer.appendChild(phoneCard)
    })
}

function searchButton(){
    const searchField = document.getElementById('input-field')
    const searchText = searchField.value
    dataLoad(searchText)
}

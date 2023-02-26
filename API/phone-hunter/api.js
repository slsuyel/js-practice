const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data);
  };
  
  const displayPhone = (phones) => {
    console.log(phones);
    // 10 phones only
    phones = phones.slice(0,9)

    // No Phones
    const noPhone = document.getElementById('no-phone');
    if(phones.length == 0){
        document.getElementById('loader').classList.add('d-none')
     noPhone.classList.remove('d-none')
    }
    else{
        noPhone.classList.add('d-none')
    }
    const container = document.getElementById('phones-container');
    container.innerText = ''
    for (const phone of phones) {
      const phoneDiv = document.createElement('div');
      phoneDiv.classList.add('col');
      phoneDiv.innerHTML = `
        <div class="card">
          <img src="${phone.image}" class="card-img-top p-4" alt="${phone.title}">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      `;
      container.appendChild(phoneDiv);
      document.getElementById('loader').classList.add('d-none')
    }
  };
  
document.getElementById('search-btn').addEventListener('click',function(){
  document.getElementById('loader').classList.remove('d-none')
  const searchText = document.getElementById('search-field').value;
  if (searchText == ''){
     alert('alert'); 
     document.getElementById('loader').classList.add('d-none')
  } else  loadPhones(searchText);

})



  loadPhones('phone');
  
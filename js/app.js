const dog_api = 'https://dog.ceo/api/breeds/list/all';
const selectBreed = document.querySelector('#selectBreed');

const viewDog = document.querySelector('#viewDog');
const breedImage = document.querySelector('#breedImage');

const xhr = new XMLHttpRequest;
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const json = JSON.parse(xhr.responseText);
            for (let i in json.message) {
                const option = `<option value="${i}">${i}</option>`
                selectBreed.insertAdjacentHTML('beforeend', option);
            }
        }
    }
}
xhr.open('GET', dog_api, true);
xhr.send();

viewDog.addEventListener('click', function() {
    const breedName = selectBreed.value;
    const dog_api_randomImg = `https://dog.ceo/api/breed/${breedName}/images/random`;
    const xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const json = JSON.parse(xhr.responseText);
                breedImage.src = json.message;
            }
        }
    }
    xhr.open('GET', dog_api_randomImg, true);
    xhr.send();
});


$.ajax({
    url: dog_api,
    type: 'GET',
    dataType: "json",
    success: (data)=>{
        console.log(data)
    }

})


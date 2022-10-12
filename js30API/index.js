let switcher = 0;

function changeTheme() {
    const allElements = document.documentElement;
    if (!switcher) {
        allElements.setAttribute('data-theme', 'light');
        switcher = 1;
    } else {
        allElements.setAttribute('data-theme', 'dark');
        switcher = 0;
    }
}

let searchRequest = 'Belarus';

async function getData(searchRequest) {
    const url = `https://api.unsplash.com/search/photos/?per_page=12&query=${searchRequest}&client_id=GbHqBl8g_Lhulc8w1xSV5vUqFU4fRvdnmDxAvR_fzRA`;
    const res = await fetch(url);
    const data = await res.json();
    const results = data.results;
    results.map((num) => showData(num.urls));
}
getData(searchRequest);

function showData(pic) {
    const main = document.querySelector('main');
    const linkPic = document.createElement('a');
    linkPic.href = `${pic.regular}`;
    main.append(linkPic);
    linkPic.classList.add('picture-link');
    linkPic.setAttribute("download", '');
    linkPic.setAttribute("target", '_blank');
    let div = document.createElement('div');
    div.classList.add('picture');
    linkPic.append(div);
    div.style.backgroundImage = `url(${pic.small_s3})`;
}

const searchInput = document.querySelector('#input');
const searchBtn = document.querySelector('#search');

searchBtn.addEventListener('click', function (event) {
    searchRequest = searchInput.value;
    toDeletePictures();
    getData(searchRequest);
});


searchInput.addEventListener('keypress', function(e){
    if(e.which === 13){
        e.preventDefault();
        searchRequest = searchInput.value;
        toDeletePictures();
        getData(searchRequest);
    }
});

function toDeletePictures() {
    const toDelete = document.querySelectorAll('.picture-link');
    toDelete.forEach(element=>element.remove());
}
import gallery from'./gallery-items.js';

const listRef = document.querySelector("ul.js-gallery");

const createList = gallery =>{
const itemRef = document.createElement('li');
itemRef.classList.add('gallery__item');
itemRef.insertAdjacentHTML('beforeend', `<a class="gallery__link" href="${gallery.original}"> 
<img class="gallery__image"
src="${gallery.preview}" data-source="${gallery.original}"
alt="${gallery.description}"/></a>`);
listRef.append(itemRef);
return itemRef;
};

const imgCards = gallery.map(item => createList(item));

listRef.addEventListener ("click", handleUlClick);
function handleUlClick (event){
    event.preventDefault();
    const target = event.target;
    // console.dir(event.target);
    // console.log('hellloo');
    if (target.nodeName !=="A"){
        // console.log('ggggg');
        // return
    }
    return ;
    setActiveLink(target);
}
function setActiveLink(nextActiveLink){
    const currentActiveLink = listRef.querySelector("a.gallery__link");
    if (currentActiveLink){
        currentActiveLink.classList.remove('active');
    }
    nextActiveLink.classList.add('active');
}
import gallery from'./gallery-items.js';

const listRef = document.querySelector(".js-gallery");
const overlayRef = document.querySelector('.lightbox');
const activeImg = document.querySelector('.lightbox__image');
const lightboxRef = document.querySelector('.lightbox__overlay');
const buttonRef = document.querySelector('.lightbox__button');

listRef.addEventListener ("click", handleUlClick);

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

function handleUlClick (event){    
    event.preventDefault();
    const target = event.target;
    if (target.nodeName !== "IMG"){        
        return;
    };
    // console.log(target.nodeName);    
    setActiveLink(target); 
    activeImg.src = target.dataset.source;     
};
function setActiveLink(nextActiveLink){
    const currentActiveLink = listRef.querySelector(".gallery__link");
    if (currentActiveLink){
        currentActiveLink.classList.remove('gallery__link');
    }
    nextActiveLink.classList.add('gallery__link' );
};
// ===modal===

listRef.addEventListener('click', () => handleOpenModal());

overlayRef.addEventListener('click',event => {    
    // handleCloseModal(event);
    handleOverleyClick(event);
    closeOnButton (event);
});
function handleOpenModal(){
    overlayRef.classList.add('is-open');    
    window.addEventListener('keydown', onPressEscape);
}
function handleCloseModal(){    
    overlayRef.classList.remove('is-open');        
}

lightboxRef.addEventListener ("click");
function handleOverleyClick(event){
    
    if (event.target === lightboxRef){
        handleCloseModal(); 
      };      
}
buttonRef.addEventListener('click');
function closeOnButton (event){
    if (event.target === buttonRef){
        handleCloseModal(); 
      };
}
function onPressEscape (event){
    if (event.code ==='Escape'){
        handleCloseModal();
    };
};



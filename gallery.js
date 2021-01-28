import gallery from'./gallery-items.js';

const listRef = document.querySelector("ul.js-gallery");
// создание дин. разметки
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
// делаем что то непонятное
function handleUlClick (event){
    event.preventDefault();
    const target = event.target;
    // event.src = event.dataset.source;
    // 'src' === 'dataSource';
    console.log(gallery.source);
    console.dir(event.target);
    // console.dir(event.target);
    // console.log('hellloo');
    if (target.nodeName !== "A"){
        // console.log('ggggg');
        return;
    };
    // return ;
    setActiveLink(target);
};
function setActiveLink(nextActiveLink){
    const currentActiveLink = listRef.querySelector(".gallery__link");
    if (currentActiveLink){
        currentActiveLink.classList.remove('.gallery__link');
    }
    nextActiveLink.classList.add('.gallery__link', );
};
// ===modal===
// слушатель на лишку и открытие модалки
const modalRef = document.querySelector('li.gallery__item');
modalRef.addEventListener('click', () =>
    handleOpenModal());    
// document.body.classList.add('.is-open');
// document.body.classList.add('.lightbox__overlay');

//  закрытие модалке по клику на оверлей и ВИДИМО НУЖНО 
// ДОБАВИТЬ КНОПКУ ЗАКРЫТИЯ ПОВЕСИТЬ СЛУШАТЕЛЬ НА НЕЕ И ЗАСУНУТЬ В Ф-Ю
const overlayRef = document.querySelector('.lightbox__overlay');
overlayRef.addEventListener('click',event => {
    handleCloseModal(event);
    handleOverleyClick(event);
});
function handleOpenModal(){
    document.body.classList.add('.is-open');
    document.body.classList.add('.lightbox__overlay');
    window.addEventListener('keydown', onPressEscape);
}
function handleCloseModal(){    
    document.body.classList.remove('.is-open');        
}
function handleOverleyClick(event){
    if (event.target === event.currentTarget){
        document.body.classList.remove('.is-open');  
      };
}
// window.addEventListener('keydown', onPressEscape);
//   {

// });
function onPressEscape (event){
    if (event.code==='Escape'){
        handleCloseModal();
    };
};
const popupInput = document.querySelector('.popup__input');
const popupList = document.querySelector('.popup__list');
const popupButton = document.querySelector('.popup__button');
// const popupClose = document.querySelector('.popup__close');

class Popup {
    constructor (popupEl) {
        this.popupEl = popupEl;
        this.popupTitle = popupEl.querySelector('.popup__title');
        this.popupClose = popupEl.querySelector('.popup__close');
        // this.popupEditing.innerHTML = `
        // <button class="editing">0</button>
        // `;
        this.addEventListeners();
    }
    addEventListeners(){
        this.popupClose.addEventListener('click', this.closePopupItem.bind(this));
        this.popupEl.addEventListener('click', this.closePopupItem.bind(this));
    }

    openPopup(todoItem){
        this.popupEl.classList.add('popup_is-opened');
        this.popupTitle.innerText = todoItem.value;
    }

    completePopupItem(){
        // нужно чтобы из инпута данные попадали в li
        // после нажатия popupButton данные должны отправляться в карточку TodoItem(li), а popup закрываться
    }

    closePopupItem(event){
        // this.popupEl.classList.remove('popup_is-opened');
        if(!event.target.classList.contains('popup') && !event.target.classList.contains('popup__close')){
            return false;
          }
          this.popupEl.classList.remove('popup_is-opened');
    }
}

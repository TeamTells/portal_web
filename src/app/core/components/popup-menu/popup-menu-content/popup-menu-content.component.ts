import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-popup-menu-content',
  templateUrl: './popup-menu-content.component.html'
})
export class PopupMenuContentComponent{

  hidenStyle: string = "hidden";
  leftOffset: string = "0px";
  topOffset: string = "0px";

}
/*
function updateBlockPosition() {
  const block = document.getElementById('myBlock');
  const blockRect = block.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Проверяем, если нижняя граница блока находится за пределами видимой области
  if (blockRect.bottom > windowHeight) {
    const newTop = windowHeight - blockRect.height;
    block.style.top = `${newTop}px`;
  } else {
    // Возвращаем блок в исходное положение
    block.style.top = 'auto';
  }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.addEventListener('load', updateBlockPosition);
window.addEventListener('resize', updateBlockPosition);



 @HostListener('window:load', ['$event'])
  onLoad(event: Event) {
    // Обработка события загрузки окна
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    // Обработка события изменения размера окна
  }
*/
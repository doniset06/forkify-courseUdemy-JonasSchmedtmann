//Parent Class
import View from './View.js';
import icons from 'url:../../img/icons.svg'; //parcel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      console.log(btn);
      const goToGo = Number(btn.dataset.goto);
      handler(goToGo);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultPerPage
    );
    // console.log(this._data.result, this._data.resultPerPage);
    // console.log(numPages);

    // 1. Paage 1 ,and the other pages
    if (curPage === 1 && numPages > 1) {
      return `${this._generateMarkupButton(curPage, 'next')}
      <p>${curPage}</p>
      `;
    }
    // 2. Last Page
    if (curPage === numPages && numPages > 1) {
      return `${this._generateMarkupButton(curPage, 'prev')}
      <p>${curPage}</p>
      `;
    }
    // 3. Other Page
    if (curPage < numPages) {
      return `
        ${this._generateMarkupButton(curPage, 'prev')}
        <p>${curPage}</p>
        ${this._generateMarkupButton(curPage, 'next')}
      `;
    }
    // 4. Page 1, and there are NO other pages
    return `<p>${curPage}</p>`;
  }

  _generateMarkupButton(page, arrow) {
    return `
      <button data-goto="${
        arrow === 'prev' ? page - 1 : page + 1
      }" class="btn--inline pagination__btn--${arrow}">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-${
      arrow === 'prev' ? 'left' : 'right'
    }"></use>
        </svg>
        <span>Page ${arrow === 'prev' ? page - 1 : page + 1}</span>
      </button>
    `;
  }
}

export default new PaginationView();

//Parent Class
import View from './View.js';
import icons from 'url:../../img/icons.svg'; //parcel 2
import previewView from './previewView.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No Bookmarks yet. Find a nice recipe and bookmark it ';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    const data = this._data;
    return data.map(bookmarks => previewView.render(bookmarks, false)).join('');
  }
}

export default new BookmarksView();

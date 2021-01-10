//Parent Class
import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; //parcel 2

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your search! Please Try Again!';
  _message = '';

  _generateMarkup() {
    const data = this._data;
    return data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultView();

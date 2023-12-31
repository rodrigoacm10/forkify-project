import View from './View';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';

class RecipeResults extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
export default new RecipeResults();

import icons from 'url:../../img/icons.svg';
import View from './view';
import icons from 'url:../../img/icons.svg';

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `
    <li class="preview">
        <a class="preview__link ${
          id === this._data.id ? 'preview__link--active' : ''
        }" href="#${this._data.id}">
            <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__name">${this._data.title}
                </h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="recipe__user-generated ${
                  this._data.key ? '' : 'hidden'
                }">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
            </div>
        </a>
    </li>
    `;
  }
  /*
  <li class="preview">
    <a class="preview__link" href="#23456">
        <figure class="preview__fig">
            <img src="src/img/test-1.jpg" alt="Test" />
        </figure>
        <div class="preview__data">
            <h4 class="preview__name">Z
                Pasta with Tomato Cream ...
            </h4>
            <p class="preview__publisher">The Pioneer Woman</p>
        </div>
    </a>
  </li>
  */
}

export default new PreviewView();

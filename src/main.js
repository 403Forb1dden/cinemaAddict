import {QUANTITY_PREVIEW_CARDS, QUANTITY_RATED_CARDS, QUANTITY_COMMENTED_CARDS, films, ratedFilms, commentedFilms} from "./const.js";
import {createFilmsSectionTemplate} from "./components/films-section.js";
import {createSortElement} from "./components/sort.js";
import {createMainNavigationElement} from "./components/main-navigation.js";
import {createStatisticsElement} from "./components/create-statistics.js";
import {createUserNameElement} from "./components/user-name-element.js";
import {createShowMoreButton} from "./components/show-more-button.js";
// import {createFilmDetailsPopup} from "./components/film-details.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, createUserNameElement(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createMainNavigationElement(), `beforeend`);
render(siteMainElement, createSortElement(), `beforeend`);
render(siteMainElement, createFilmsSectionTemplate(), `beforeend`);

const filmsSectionElement = siteMainElement.querySelector(`.films-list`);
const filmsListBlock = filmsSectionElement.querySelector(`.films-list__container`);

const filmsRatedSectionElement = siteMainElement.querySelectorAll(`.films-list--extra`);
const filmsRatedBlock = filmsRatedSectionElement[0].querySelector(`.films-list__container`);
const filmsCommentedBlock = filmsRatedSectionElement[1].querySelector(`.films-list__container`);

const renderFilmsCard = (place, markupListArray, quantity) => {
  const createFilmsListTemplate = (index) => {
    return markupListArray[index];
  };
  for (let i = 0; i < quantity; i++) {
    render(place, createFilmsListTemplate(i), `beforeend`);
  }
};
renderFilmsCard(filmsListBlock, films, QUANTITY_PREVIEW_CARDS);
renderFilmsCard(filmsRatedBlock, ratedFilms, QUANTITY_RATED_CARDS);
renderFilmsCard(filmsCommentedBlock, commentedFilms, QUANTITY_COMMENTED_CARDS);

render(filmsSectionElement, createShowMoreButton(), `beforeend`);

const siteFooterStatisticsElement = document.querySelector(`.footer__statistics`);
render(siteFooterStatisticsElement, createStatisticsElement(), `beforeend`);

// Рендеринг попапа с описанием фильма
// const siteBodyElement = document.querySelector(`body`);
// render(siteBodyElement, createFilmDetailsPopup(), `beforeend`);

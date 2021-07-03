/* eslint-disable no-plusplus */
import CONFIG from '../../globals/config';

const getCategory = (categories) => {
  let lists = '';
  for (let i = 0; i < categories.length; i++) {
    lists += `<li class="list__category">${categories[i].name}</li>`;
  }

  return lists;
};

const getStar = (element) => {
  let star = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Math.floor(element.rating); i++) {
    star += '<i class="bi bi-star-fill"></i>';
  }
  return star;
};

const getCustomerReviews = (reviews) => {
  let lists = '';
  for (let i = 0; i < reviews.length; i++) {
    lists += `<div class="testimoni">
      <div class="person">
        <i class="bi bi-person-fill"></i>
        <h4>${reviews[i].name}</h4>
      </div>
      <p style="color:grey; margin-bottom: 10px">${reviews[i].date}</p>
      <p>${reviews[i].review}</p>
    </div>`;
  }
  return lists;
};

const getMenus = (menus) => {
  let lists = '';
  for (let i = 0; i < menus.length; i++) {
    lists += `<li class="menu">${menus[i].name}</li>`;
  }
  return lists;
};

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Name</h4>
    <p>${restaurant.name}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <div class="card_rating">${getStar(restaurant)}<span style="color: black;">&nbsp;${restaurant.rating}</span></div>
  </div>
  <div class="restaurant__overview">
    <ul class="restaurant__categories">${getCategory(restaurant.categories)}</ul>
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__menu">
    <div class="menus">
      <h4>Foods</h4>
      <ul class="foods">${getMenus(restaurant.menus.foods)}</ul>
    </div>
    <div class="menus">
      <h4>Drinks</h4>
      <ul class="drinks">${getMenus(restaurant.menus.drinks)}</ul>
    </div>
  </div><br>
  <h3>Customer Reviews</h3><br>
  <section class="list-testimoni">
    ${getCustomerReviews(restaurant.customerReviews)} 
  </section>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <li class="cards_item">
    <div class="card">
      <div class="card_image">
        <img class="lazyload" data-src=${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId} alt=${restaurant.name}/>
      </div>
      <div class="card_content">
        <div class="card_label">
          <div class="card_rating">${getStar(restaurant)}<span style="color: white;">${restaurant.rating}</span></div>
          <div class="card_city">${restaurant.city}</div>
        </div>
        <h2 class="card_title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h2>
        <p class="card_text">${restaurant.description}</p>
      </div>
    </div>
  </li>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createLikedRestaurantButtonTemplate,
};

import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <header class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Temukan Seleramu Disini</h1>

        <h2 class="hero-subtitle">
          Kami memberikan rekomendasi terbaik untukmu
        </h2>
      </div>
    </header>
    <main id="maincontent">
      <h1>Jelajahi Restoran</h1>
      <hr />
      <ul class="cards"></ul>
    </main>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantDbSource.listRestaurants();
    const restaurantsContainer = document.querySelector('.cards');
    restaurants.forEach((restaurans) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurans);
    });
  },
};

export default Home;

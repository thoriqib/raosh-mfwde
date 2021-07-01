/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = 'You\'re not have any favorite restaurant';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('.cards');
  I.see(firstCondition, '.cards');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(firstCondition, '.cards');

  I.amOnPage('/');

  I.seeElement('.card_title a');

  const firstCard = locate('.card_title a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.cards_item');
  const likedCardTitle = await I.grabTextFrom('.card_title');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(firstCondition, '.cards');

  I.amOnPage('/');

  // melihat card restaurant pertama dan mengkliknya ke detail
  I.seeElement('.card_title a');

  const firstCard = locate('.card_title a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  // melike restaurant di detail
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav dan membandingakan dg restaurant yg diklik
  I.amOnPage('/#/favorite');
  I.seeElement('.cards_item');
  const likedCardTitle = await I.grabTextFrom('.card_title');
  assert.strictEqual(firstCardTitle, likedCardTitle);

  // mengklik card restaurant yg ada di fav
  I.click(likedCardTitle);

  // mengunlike restaurant yang ada di fav
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav
  I.amOnPage('/#/favorite');
  I.seeElement('.cards');
  const noFavoriteRestaurant = await I.grabTextFrom('.cards');

  // mencek halaman fav dan berhasil menghapus (unlike)
  assert.strictEqual(noFavoriteRestaurant, firstCondition);
});

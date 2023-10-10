<template>
  <nav class="nav">
    <header class="nav__logo">
      <router-link to="/" class="custom-link">
        <div class="nav__logo__container">
          <i
            class="fa-solid fa-wave-square fa-lg nav__logo__container__icon"
          ></i>
          <h2 class="nav__logo__container__title">Grovvy</h2>
        </div>
      </router-link>
    </header>
    <div class="nav__sections">
      <section class="nav__sections__menu">
        <h3 class="nav__sections__menu__title">MENU</h3>
        <router-link to="/" class="custom-link">
          <div class="nav__sections__menu__title__option">
            <div class="nav__sections__menu__title__option-icon_div">
              <i class="fa-solid fa-compass fa-sm"></i>
            </div>
            <span class="nav__sections__menu__title__option-name">Explore</span>
          </div>
        </router-link>
        <div class="nav__sections__menu__title__option">
          <div class="nav__sections__menu__title__option-icon_div">
            <i class="fa-solid fa-volume-high fa-sm"></i>
          </div>
          <span class="nav__sections__menu__title__option-name">Genres</span>
        </div>
        <div class="nav__sections__menu__title__option">
          <div class="nav__sections__menu__title__option-icon_div">
            <i class="fa-solid fa-record-vinyl fa-sm"></i>
          </div>
          <span class="nav__sections__menu__title__option-name">Albums</span>
        </div>
        <div class="nav__sections__menu__title__option">
          <div class="nav__sections__menu__title__option-icon_div">
            <i class="fa-solid fa-microphone fa-sm"></i>
          </div>
          <span class="nav__sections__menu__title__option-name">Artists</span>
        </div>
      </section>
      <section class="nav__sections__playlist">
        <h3 class="nav__sections__menu__title">PLAYLIST</h3>
        <router-link to="/playlist/3155776842" class="custom-link">
          <div class="nav__sections__menu__title__option">
            <div class="nav__sections__menu__title__option-icon_div">
              <i class="fa-solid fa-circle-play fa-sm"></i>
            </div>
            <span class="nav__sections__menu__title__option-name"
              >Top 100 Worldwide</span
            >
          </div>
        </router-link>
        <router-link to="/playlist/6614423884" class="custom-link">
          <div class="nav__sections__menu__title__option">
            <div class="nav__sections__menu__title__option-icon_div">
              <i class="fa-solid fa-circle-play fa-sm"></i>
            </div>
            <span class="nav__sections__menu__title__option-name"
              >Trending</span
            >
          </div>
        </router-link>
        <div class="nav__sections__menu__title__option">
          <div class="nav__sections__menu__title__option-icon_div">
            <i class="fa-solid fa-circle-play fa-sm"></i>
          </div>
          <span class="nav__sections__menu__title__option-name">For You</span>
        </div>
        <div class="nav__sections__menu__title__option">
          <div class="nav__sections__menu__title__option-icon_div">
            <i class="fa-solid fa-circle-play fa-sm"></i>
          </div>
          <span class="nav__sections__menu__title__option-name"
            >Best Of Pop</span
          >
        </div>
      </section>
    </div>
    <section class="nav__bottom">
      <div class="nav__bottom__product">
        <div class="nav__bottom__product__image-container">
          <img
            src="../../assets/img/google_nest_mini.png"
            alt="Google nest mini product image"
            class="product-img"
          />
        </div>
        <p>Google<br />Nest Mini</p>
      </div>
      <div class="nav__bottom__option">
        <i class="fa-solid fa-tower-broadcast fa-sm" style="color: #b2b6b9"></i>
        <span>Playing on Device</span>
      </div>
    </section>
  </nav>
</template>

<style scoped>
/* NAV */

.nav {
  grid-row: 1 / -1;
  background-color: #18181d;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 2rem 0 3rem 3rem;
}

/* NAV-LOGO */

.nav__logo__container {
  display: flex;
  align-items: center;
  color: #fff;
  gap: 1rem;
}

/* NAV-SECTIONS */

.nav__sections {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.fa-solid {
  color: #fff;
}

.nav__sections__menu__title__option {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.2rem 0 1.2rem 0.5rem;
  font-weight: 700;
  font-size: 1.2rem;
}

.nav__sections__menu__title__option:hover {
  border-right: 0.4rem solid #516ae8;
  cursor: default;
}

.nav__sections__menu__title__option:hover .fa-solid {
  color: #516ae8;
}

.nav__sections__menu__title__option:hover
  .nav__sections__menu__title__option-name {
  color: #516ae8;
}

.nav__sections__menu__title__option-name {
  color: #fff;
}

.nav__sections__menu__title {
  margin-bottom: 2rem;
  color: #9a9d9f;
}

.nav__sections__menu__title__option-icon_div {
  width: 3rem;
}

/* NAV-BOTTOM */
.nav__bottom {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  width: 60%;
  border-radius: 0.3rem;
  background-color: #25252d;
}

.nav__bottom__product {
  display: flex;
  align-items: center;
  height: 5rem;
  background-color: #4b4b5c;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2rem;
  border-radius: 0.3rem;
}

.nav__bottom__product__image-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
  padding: 0.8rem;
}

.product-img {
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
}

.nav__bottom__option {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 0;
  color: #b2b6b9;
}

.custom-link {
  text-decoration: none;
  color: #fff;
}
</style>

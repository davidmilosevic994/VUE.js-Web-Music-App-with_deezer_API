<template>
  <header class="header">
    <div class="header__search">
      <i class="fa-solid fa-magnifying-glass fa-xs header__search__icon" ></i>
      <input type="text" placeholder="Type here to search" class="header__search__input">
    </div>
    <div class="header__user">
      <button class="header__user__button">
        <i class="fa-solid fa-bell" style="color: #b2b6b9"></i>
      </button>
      <button class="header__user__button">
        <i class="fa-solid fa-gear" style="color: #b2b6b9"></i>
      </button>
      <div class="header__user__user-details">
        <div class="header__user__user-details__image-container">
          <img
            src="https://yt3.ggpht.com/yti/ADpuP3P4gITgwVYmvEuFhBpnJgtitE3BXvIMkNNVzolz=s88-c-k-c0x00ffffff-no-rj"
            alt="User image"
            class="user-img"
          />
        </div>
        <span>David Milosevic</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  grid-column: 2 / -1;
  background-color: #18181d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
}

.header__search {
  height: 3rem;
  width: 35rem;
  background-color: #343434;
  border: 0.1rem solid #666768;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  color: #b5b8b9;
}

.header__search__icon{
  padding-left: 1rem;
}

.header__search__input{
  background-color: transparent;
  border: none;
  color: #b5b8b9;
}

.header__search__input::placeholder {
  color: #b5b8b9;
}

.header__search__input:focus{
  border: none;
  outline: none;
}

.header__user {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  gap: 2rem;
}

.header__user__button {
  background-color: transparent;
  border: none;
}

.header__user__user-details {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #fff;
  background-color: #25252d;
  height: 100%;
  border-radius: 0.3rem;
  padding-right: 0.5rem;
  font-weight: 700;
  font-size: 1.1rem;
}

.header__user__user-details__image-container {
  height: 100%;
  padding: 0.5rem;
  background-color: #4b4b5c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
}

.user-img {
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
}

.fa-solid {
  font-size: 1.2rem;
}
</style>

<template>
  <ul class="menu">
    <li class="menu-item">
      <nuxt-link to="#" class="menu-link">Multimedia</nuxt-link>
      <div class="dropdown">
        <ul>
          <li><nuxt-link to="/galleries">Fotoqalereya</nuxt-link></li>
          <li><nuxt-link to="#">Video</nuxt-link></li>
          <li><nuxt-link to="#">PFL-in himni</nuxt-link></li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "DropdownMenu.vue",
  mounted() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.addEventListener('mouseover', function() {
        const dropdown = this.querySelector('.dropdown');
        dropdown.style.maxHeight = '300px';
        dropdown.style.opacity = '1';
      });
      item.addEventListener('mouseout', function() {
        const dropdown = this.querySelector('.dropdown');
        dropdown.style.maxHeight = '0';
        dropdown.style.opacity = '0';
      });
    });
  }
}
</script>

<style scoped>
.menu-item {
  position: relative;
}

.menu-link {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  border-right: 1px solid var(--dark-font-color);
  padding-right: 20px;
  cursor: pointer;
  color: var(--dark-font-color);
  text-decoration: none;
}

.dropdown {
  position: absolute;
  top: 120%;
  left: -21px;
  z-index: 1;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
}

.dropdown li {
  padding: 5px 10px;
}

.dropdown li a {
  transition: 0.5s;
  color: var(--dark-font-color);
}

.dropdown li a:hover {
  transition: 0.5s;
  border-bottom: 1px solid var(--main-theme-color);
}
</style>

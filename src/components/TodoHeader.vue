<script setup>
</script>

<template>
  <header>
    <nav class="container">
      <div class="branding">
        <img src="@/assets/Vue_Logo_Black.png" alt="" />
        <h1>| &#160 Vue Todos</h1> 
      </div>
      <li class="nav-routes">
        <router-link :to="{ name: 'home' }" class="bold">Home</router-link>
        <router-link :to="{ name: 'about' }" class="bold">About</router-link>
      </li>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #f2f2f2;
  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        max-width: 50px;
      }

      h1 {
        font-size: 24px;
        color: #22ab7a;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;

      a {
        font-size: 1.2rem;
        text-decoration: none;
        color: inherit;

        &:hover {
          // font-weight: bold;
        }
      }
    }
  }
}
</style>

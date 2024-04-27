<template>
  <main>
    <h1>This is about vueTodo page</h1>
    <p>Vue 3 Crash Course | Project From Scratch</p>
    <span>John Komarnicki Channel</span>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1,
  p,
  span {
    text-align: center;
  }
  h1 {
    margin: 6rem 0 16px;
    border-bottom: 2px solid black;
  }
  p {
    margin-bottom: 8px;
    overflow: hidden;
  }
}
</style>

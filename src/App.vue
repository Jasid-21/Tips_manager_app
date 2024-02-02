<template>
  <router-view/>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  color: $text;
}

html, body {
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav a.router-link-exact-active {
  color: #42b983;
}

span.title {
  font-size: 1.2rem;
  font-weight: 600;
  color: inherit;
}
</style>

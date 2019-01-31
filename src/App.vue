<template>
  <div id="app">
    <h1>Fun Quotes!</h1>
    <QuoteList />
  </div>
</template>

<script>
import QuoteList from './components/QuoteList'

export default {
  name: 'app',
  components: {
    QuoteList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

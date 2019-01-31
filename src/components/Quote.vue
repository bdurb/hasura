<template>
  <div>
    <h1>{{quote.quote}}</h1>
    <h3>by {{quote.author}} </h3>
  </div>
</template>

<script>
export default {
  name: 'Quote',
  props: ['quote']
}
</script>


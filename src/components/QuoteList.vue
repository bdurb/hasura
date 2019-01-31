<template>
  <div>
    <quote
      v-for="quote in quotes"
      :key="quote.id"
      :quote="quote">
    </quote>
  </div>
</template>


<script>
import { ALL_QUOTES_QUERY } from '../query-helpers/graphql.js'
import Quote from './Quote'

export default {
  name: 'QuoteList',
  data() {
    return {
      quotes: [],
      loading: 0
    }
  },
  components: {
    Quote
  },
  apollo: {
    quotes: {
      query: ALL_QUOTES_QUERY
    }
  }
}
</script>

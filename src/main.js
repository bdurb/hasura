import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Vue from 'vue'

import VueApollo from 'vue-apollo'
import App from './App.vue'

Vue.config.productionTip = false

const httpLink = new HttpLink({
  uri: 'hasura-vue-proj.herokuapp.com'
})

const apolloClient = new ApolloClient({
  link: HttpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')

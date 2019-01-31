import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Vue from 'vue'

import VueApollo from 'vue-apollo'
import App from './App.vue'

Vue.config.productionTip = false

const httpLink = new HttpLink({
  uri: 'http://hasura-vue-proj.herokuapp.com/v1alpha1/graphql'
})

const apolloClient = new ApolloClient({
  link: httpLink,
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

export let apihost = '/'

if (process.env.NODE_ENV === 'development') {
  apihost = 'http://localhost:4000/'
}
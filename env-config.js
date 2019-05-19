const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://arturportfolio.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://arturportfolio.herokuapp.com',
  'process.env.CLIENT_ID': 'vt92k4NLOXP2nG2SJSAePi7KOHZSojOT'
}

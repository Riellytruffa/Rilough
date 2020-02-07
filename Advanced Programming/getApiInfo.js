fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=fight%20club&api-key=XHsykWMFyo70kbW0cZKAMHAzJX7Ax4ls')
.then(response => {
  return repsonse.json()
})
.then( data => {
  console.log(data.response.docs[0].headline.main)
})
.catch(err => {

})

const core = require('@actions/core')

let quote;

fetch('https://dummyjson.com/quotes/random').
  then((res) => res.json()).
  then(
    (jsonRes) => {
      console.log('Custom action:: ', quote);    
      core.setOutput('quote', jsonRes.quote)
    }
  ).
  catch(console.error);
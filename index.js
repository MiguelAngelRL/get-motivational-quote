const core = require('@actions/core')

let quote;

fetch('https://dummyjson.com/quotes/random').
  then((res) => res.json()).
  then(
    (jsonRes) => {
      console.log('Custom action retrieved quote:: ', jsonRes.quote);    
      core.setOutput('quote', jsonRes.quote)
    }
  ).
  catch(console.error);
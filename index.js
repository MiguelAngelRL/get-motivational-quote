const core = require('@actions/core')

let quote;

fetch('https://dummyjson.com/quotes/random').
  then((res) => res.json()).
  then((jsonRes) => quote = jsonRes.quote).
  catch(console.error);

core.setOutput('quote', quote);
const express = require('express');
const router = express.Router(); // express for defining routes
const { data } = require('../data/flashcardData.json'); // => const data = require('../data/flashcardData.json').data;  
const { cards } = data; // => const cards = data.cards;  ---> because the ../data/flashcardData.json data has a cards property which is an array 

//④.../cards/
router.get( '/', ( req, res ) => {
  const numberOfCards = cards.length;  // => cards is an array
  const flashcardId = Math.floor( Math.random() * numberOfCards ); // => setting a random id
  res.redirect( `/cards/${flashcardId}` ) //=> redirect to cards/:id where :id is random
});

router.get('/:id', (req, res) => {
    const { side } = req.query; // => const side = req.query.side; The side is the query property (:id?side=xx)
    const { id } = req.params; // const id = req.params.id; the :id params 

    if ( !side ) { //=> if there is no request key which is ../cards/:id is being called 
        return res.redirect(`/cards/${id}?side=question`); // we use return here to end this function here
    }
    const name = req.cookies.username;  // => username cookie inside request refer readme and app.js
    const text = cards[id][side];
    const { hint } = cards[id]; // =>const　hint = cards[id].hint;
    
    const templateData = { id, text, name, side }; 

    if ( side === 'question' ) {
      templateData.hint = hint;
      templateData.sideToShow = 'answer';
      templateData.sideToShowDisplay = 'Answer';
    } else if ( side === 'answer' ) {
      templateData.sideToShow = 'question';
      templateData.sideToShowDisplay = 'Question';
    }
    res.render('card', templateData);
    // console.log(templateData);
    
/* the json that is return by this routes
  { id: '2',
    text: 'What is a common way to shorten the response object\'s name inside middleware?',
    name: 'ihsan',
    side: 'question',
    hint: 'It has the same abbreviation as "resolution"',
    sideToShow: 'answer',
    sideToShowDisplay: 'Answer' }
  { id: '2',
    text: 'res',
    name: 'ihsan',
    side: 'answer',
    sideToShow: 'question',
    sideToShowDisplay: 'Question' }
     */    
    // console.log(templateData);


});

module.exports = router;  //=> we need this so app.js can require the routes
var api = {};

var frases = [
	{_id: 0, texto:"To be, or not to be: that is the question: Whether ’tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles, And by opposing end them. To die: to sleep...", tempo: 22 },
	{_id: 1, texto:'This above all: to thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man.',tempo: 15 },
	{_id: 2, texto:'Cowards die many times before their deaths; The valiant never taste of death but once.', tempo: 10 },
	{_id: 3, texto:'Men at some time are masters of their fates: The fault, dear Brutus, is not in our stars, But in ourselves, that we are underlings.', tempo: 15 },
	{_id: 4, texto:"What's in a name? That which we call a rose By any other word would smell as sweet...", tempo: 15 },
	{_id: 5, texto:'Good night, good night! Parting is such sweet sorrow, That I shall say good night till it be morrow.', tempo: 16 },
	{_id: 6, texto:"All the world's a stage, And all the men and women merely players They have their exits and their entrances; And one man in his time plays many parts..", tempo: 18 },
	{_id: 7, texto:'The robbed that smiles, steals something from the thief.', tempo: 10 },
	{_id: 8, texto:'Uneasy lies the head that wears the crown.', tempo: 7},
	{_id: 9, texto:'All that glitters is not gold.', tempo: 6},

	];

api.lista = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(frases[req.query.id]);

		res.json(frases);
	},1500);

};

module.exports = api;

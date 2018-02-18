function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		console.log('What is the quote', quote)
	var quoteElem = document.getElementById('quote')
		template =''
	template = `
	<div class="quote text-center">
	<h4>${quote.quote}</h4>
	<h6>${quote.author}</h6>
	</div>
	`
	quoteElem.innerHTML =template
	})
}

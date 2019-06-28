<template>
	<div class="container">
		<quote-header :numberOfQuotes="numberOfQuotes"></quote-header>
		<new-quote
			:quotes="quotes"
			:numberOfQuotes="numberOfQuotes"
            :maxQuotes="maxQuotes"
			@updateQuoteNumber="numberOfQuotes=$event"
		></new-quote>
        <all-quote 
            :quotes="quotes"
            :numberOfQuotes="numberOfQuotes"
            @updateQuoteNumber="numberOfQuotes=$event"></all-quote>
        <p style="text-align: center">Click the quote to delete it!</p>
	</div>
</template>

<script>
	import Header from "./components/Header.vue";
    import New from "./components/NewQuote.vue";
    import All from "./components/AllQuote.vue";
	export default {
		data: function() {
			return {
				maxQuotes: 10,
				quotes: [],
				numberOfQuotes: 0
			};
		},
		components: {
			"quote-header": Header,
            "new-quote": New,
            "all-quote": All,
		}
	};
</script>

<style>
div{
    font-family: 'Quicksand', sans-serif;
}
</style>

<template>
	<div>
		<div class="textarea">
			<h4>Quote</h4>
			<textarea rows="4" cols="50"></textarea>
			<button @click="addQuote">Add quote</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["quotes", "numberOfQuotes","maxQuotes"],
		methods: {
			addQuote() {
				let quoteToBeAdded = document.querySelector("textarea").value;
				if (quoteToBeAdded != "" && this.numberOfQuotes < this.maxQuotes) {
					this.quotes.push(quoteToBeAdded);
					quoteToBeAdded = "";
                    document.querySelector("textarea").value = "";
                    this.numberOfQuotes++;
                    this.$emit('updateQuoteNumber',this.numberOfQuotes);
                }
                if(this.numberOfQuotes == this.maxQuotes){
                    
                }
			}
		}
	};
</script>

<style scoped>
	.textarea {
		text-align: center;
	}
	textarea {
		border-radius: 5px;
        border-color:grey;
		resize: none;
		display: block;
		margin: 0 auto;
        font-family: 'Quicksand', sans-serif;
        font-size:1.2em;
	}
	button {
		background: rgba(151, 151, 223, 0.904);
		margin: 20px 0;
	}
</style>

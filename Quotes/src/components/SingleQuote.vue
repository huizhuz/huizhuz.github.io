<template>

		<div class="quote-box">
			<p>{{eachQuote}}</p>
		</div>

</template>

<script>
	export default {
		props: ["eachQuote"]
	};
</script>

<style scoped>

	.quote-box {
		display: inline-block;
		width: 30%;
		border: 1px solid grey;
		border-radius: 5px;
		padding: 10px;
        margin: 5px;
        justify-content: stretch;
        font-family: 'Dancing Script', cursive;
        font-size: 1.5em;
	}
    
</style>

<template>
	<div>
		<div class="list">
			<single-quote 
                v-for="(eachQuote,index) in quotes"
                :eachQuote="eachQuote"
                @click.native="deleteQuote(index)"></single-quote>
		</div>
	</div>
</template>

<script scoped>
	import Single from "./SingleQuote.vue";
	export default {
        props:['quotes','numberOfQuotes'],
        data: function(){
            return{

            }
        },
		components: {
			"single-quote": Single
        },
        methods:{
            deleteQuote(index){
                this.quotes.splice(index,1);
                this.numberOfQuotes--;
                this.$emit('updateQuoteNumber',this.numberOfQuotes);
            }
        }
	};
</script>

<style>
</style>

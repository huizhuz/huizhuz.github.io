<template>
	<div class="teaching-wrapper">
		<div class="col-left">
			<h3>{{eachJob.title}}</h3>
			<p>{{eachJob.institution}}</p>
			<p>{{eachJob.year}}</p>
		</div>
		<div class="col-right">
			<p>{{eachJob.summary}}</p>
			<ol>
				<li v-for="i in eachJob.description">{{i}}</li>
			</ol>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["eachJob"]
	};
</script>

<style scoped>
	.teaching-wrapper {
		max-width: 80vw;
		margin: 0 auto;
	}
    h3{
        margin-top: 2.5rem;
    }
	@media screen and (min-width: 870px) {
		.teaching-wrapper {
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
		}
		.col-left {
			min-width: 230px;
			margin-right: 15px;
        }
        .col-right p{
            margin-top: 2.5rem;
        }
	}
</style>

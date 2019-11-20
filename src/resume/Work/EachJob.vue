<template>
	<div>
        <h3>{{eachJob.title}}</h3>
        <p>{{eachJob.company}} - <a :href="eachJob.link" target="_blank">Company site</a></p>
        <p>{{eachJob.time}}</p>
        <p>{{eachJob.description}}</p>
	</div>
</template>

<script>
	export default {
		props: ["eachJob"]
	};
</script>

<style scoped>
    a{
        text-decoration: none;
        border-radius: 10px;
        border: 1px solid #ccc;
        padding: 0.5rem;
        transition: all 0.4s ease;
    }
    a:visited{
        color: black;
    }
    a:hover{
        box-shadow: #eee 3px 4px 3px;
    }
</style>
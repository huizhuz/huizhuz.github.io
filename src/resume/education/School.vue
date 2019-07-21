<template>
	<div class="school-wrapper">
		<h3>{{eachSchool.name}}</h3>
		<p>{{eachSchool.year}}</p>
		<p>{{eachSchool.degree}}</p>
		<ol>
			<li v-for="i in eachSchool.description">{{i}}</li>
		</ol>
	</div>
</template>

<script>
	export default {
		props: ["eachSchool"]
	};
</script>

<style scoped>
.school-wrapper{
    max-width: 80vw;
    margin: 0 auto;
}
h3{
    margin-top: 2.5rem;
}
</style>

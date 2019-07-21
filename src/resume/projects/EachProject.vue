<template>
	<div>
		<h3>{{project.name}}</h3>
		<ul style="list-style-type:none;padding: 0;">
			<li
				v-for="item in project.description"
				style="margin-bottom: 10px; text-align: justify; word-break: break-word;"
			>{{item}}</li>
		</ul>
		<line-break></line-break>
		<v-button 
            :buttonName="project.buttonName"
            @click.native="goToLink"></v-button>
	</div>
</template>



<script>
	export default {
        props: ["project"],
        methods: {
            goToLink(){
				window.open(this.project.link);
            }
        }
	};
</script>

<style scoped>
	h3 {
		margin-top: 2.5rem;
	}
	a {
		text-decoration: none;
		padding-bottom: 1rem;
	}
	a:hover {
		color: gray;
		font-weight: 600;
	}
	a:visited {
		color: black;
	}
	a:selected {
		color: gray;
	}
</style>

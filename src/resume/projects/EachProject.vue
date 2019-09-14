<template>
	<div class="each-project">
		<div>
			<h3>{{project.name}}</h3>
		<ul style="list-style-type:none;padding: 0;">
			<li
				v-for="item in project.description"
				style="margin-bottom: 10px; text-align: justify; word-break: break-word;"
			>{{item}}</li>
		</ul>
		</div>
		<div>
			<line-break></line-break>
			<v-button :buttonName="project.buttonName" @click.native="goToLink"></v-button>
		</div>
	</div>
</template>



<script>
	export default {
		props: ["project"],
		methods: {
			goToLink() {
				window.open(this.project.link);
			}
		}
	};
</script>

<style scoped>
	.each-project {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
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

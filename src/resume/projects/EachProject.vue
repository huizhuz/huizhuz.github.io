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
		<div class="button">
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
		padding: 1rem;
		border: 1px solid #ccc;
		margin: 0.8rem;
		border-radius: 10px;
		transition: all 0.4s ease;
	}
	.each-project:hover{
		box-shadow: #ccc 3px 4px 4px;
		cursor: default;
		transform: translateY(-1px);
	}
	h3 {
		margin-top: 1rem;
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
	.button{
		margin: 2rem 0;
	}
</style>

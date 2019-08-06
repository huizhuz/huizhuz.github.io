<template>
	<div>
		<div class="cover">
			<p class="title">Project Showcase</p>
		</div>
		<div class="project-wrapper">
			<each-project class="project-item" :project="project" v-for="(project, index) in projects"></each-project>
		</div>
		<v-block></v-block>
	</div>
</template>

<script>
	import EachProject from "./EachProject.vue";
	export default {
		data() {
			return {
				projects: [
					{
						name: "Musec - an Eshop for musical instruments",
						link: "https://huizhuz.github.io/Vue-Eshop",
						buttonName: "Go shopping",
						description: [
							"Developed by Vue.js with Vue-Router and Vuex.",
							"Responsive design using flex, grid and media query.",
							"Connected to Firebase database management system.",
							"Functionality: Register, login, shopping and checkout. "
						]
					},
					{
						name: "A stock trading app",
						link: "https://github.com/huizhuz/Vue-StockApp",
						buttonName: "See code on Github",
						description: [
							"Developed by Vue.js with Vue-Router and Vuex.",
							"Connected to Firebase database management system.",
							"Functionality: Buy and sell stocks; save to and retrieve from the online database."
						]
					},
					{
						name: "A word test app",
						link: "https://huizhuz.github.io/WordTest",
						buttonName: "Try it yourself",
						description: [
							"Created with HTML/CSS and vanilla javascript.",
							"Responsive design suitable for portable devices.",
							"This app was designed for my students, who were supposed to enter the words according to given prompts as quickly as possible within the one-munite countdown."
						]
					},
					{
						name: "Quotes notebook",
						link: "https://huizhuz.github.io/Quotes",
						buttonName: "Try it yourself",
						description: [
							"Created with HTML/CSS and Vue.js.",
							"Functionality: Manage quotes collection by adding and deleting. "
						]
					},
					{
						name: "Monster Slayer",
						link: "https://huizhuz.github.io/MonsterSlayer",
						buttonName: "Try it yourself",
						description: [
							"Created with HTML/CSS and Vue.js.",
							"A creative use of progress bar.",
							"Functionality: Battle with a monster! You can attack, special attack, heal and start over!"
						]
					}
				]
			};
		},
		components: {
			"each-project": EachProject
		}
	};
</script>



<style scoped>
	.cover {
		height: 70vmin;
		max-width: 100vw;
		background: linear-gradient(
				rgba(248, 250, 227, 0.315),
				rgba(243, 235, 212, 0.1)
			),
			url("./../../images/projects.jpg") no-repeat fixed;
		background-position: center;
		background-size: cover;
		display: flex;
		flex-flow: row-reverse;
		justify-content: flex-start;
		align-items: center;
	}
	.title {
		margin: 0;
		padding: 20px;
		font-family: "Amatic SC", cursive;
		font-size: 5rem;
		max-width: 400px;
		text-align: right;
	}
	@media screen and (max-width: 414px) {
		.cover {
			justify-content: flex-end;
		}
		.title {
			text-align: left;
		}
	}
	.project-wrapper {
		max-width: 80vw;
		margin: 0 auto;
		display: grid;
		justify-content: space-between;
	}
	.project-item {
		padding: 1rem;
	}
	@media screen and (min-width: 720px) {
		.project-wrapper {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media screen and (min-width: 1125px) {
		.project-wrapper {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
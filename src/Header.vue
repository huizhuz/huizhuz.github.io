<template>
	<div>
		<div class="nav">
			<div class="title-wrapper">
				<img src="./images/bamboo.png" alt="icon" class="icon" />
				<router-link to="/" class="title">Huizhu Zhang</router-link>
			</div>

			<div class="nav-wrapper">
				<router-link to="/education" class="nav-item">Education</router-link>
				<router-link to="/projects" class="nav-item">Projects</router-link>
				<router-link to="/teaching" class="nav-item">Teaching Experience</router-link>
				<router-link to="/contact" class="nav-item">Contact Me</router-link>
			</div>

			<div class="mini-nav-wrapper">
				<span @click="showMenu">
					<font-awesome-icon style="font-size: 1.2rem" icon="bars" />
				</span>

				<div v-if="show" class="mini-nav-content">
					<router-link to="/education" class="mini-nav-item" @click.native="hideMenu">Education <font-awesome-icon style="font-size: 0.7rem" icon="angle-double-right"></font-awesome-icon></router-link>
					<router-link to="/projects" class="mini-nav-item" @click.native="hideMenu">Projects <font-awesome-icon style="font-size: 0.7rem" icon="angle-double-right"></font-awesome-icon></router-link>
					<router-link to="/teaching" class="mini-nav-item" @click.native="hideMenu">Teaching Experience <font-awesome-icon style="font-size: 0.7rem" icon="angle-double-right"></font-awesome-icon></router-link>
					<router-link to="/contact" class="mini-nav-item" @click.native="hideMenu">Contact Me <font-awesome-icon style="font-size: 0.7rem" icon="angle-double-right"></font-awesome-icon></router-link>
				</div>
			</div>
			<!--nav wrapper-->
		</div>
		<!--nav-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			};
		},
		methods: {
			showMenu: function() {
				this.show = true;
			},
			hideMenu: function() {
				this.show = false;
			}
		}
	};
</script>


<style scoped>
	.nav {
		color: black;
		margin: 0 auto;
		width: 80vw;
		flex-direction: row;
		justify-content: space-between;
		padding: 20px;
		align-items: center;
	}

	.title-wrapper {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.icon {
		width: 30px;
		height: 50px;
	}
	.title {
		color: black;
		text-decoration: none;
		margin: 10px;
		font-family: "Amatic SC", cursive;
		font-size: 2rem;
		min-width: 120px;
	}
	.nav-wrapper {
		display: grid;
		justify-content: space-between;
		grid-template-columns: auto auto auto auto;
	}
	.nav-item {
		text-decoration: none;
		padding: 10px;
		margin: 10px;
		font-family: "Open Sans", sans-serif;
		font-size: 1rem;
		opacity: 1;
		transition: 0.5s;
		text-transform: uppercase;
		color: black;
	}

	.mini-nav-wrapper {
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		font-family: "Open Sans", sans-serif;
		font-size: 1rem;
		text-transform: uppercase;
	}
	.mini-nav-item {
		height: 2rem;
		text-decoration: none;
		text-align: right;
		color: white;
	}
	.mini-nav-content {
		position: absolute;
		top: 4rem;
		right: 3.8rem;
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		background-color: #052855b6;
		min-width: 160px;
		padding: 12px 16px;
		z-index: 1;
	}
	.mini-nav-wrapper:hover {
		color: gray;
	}

	/* pseudo */
	.title:hover {
		font-weight: 600;
	}
	.title:visited {
		color: black;
	}
	.title:active {
		color: black;
	}
	.nav-item:hover {
		color: gray;
		opacity: 0.6;
	}
	.nav-item:visited {
		color: black;
	}
	.nav-item:active {
		color: gray;
	}
	.mini-nav-item:hover {
		color: white;
		opacity: 0.6;
	}
	.mini-nav-item:visited {
		color: white;
	}
	.mini-nav-item:active {
		color: white;
	}

	@media screen and (min-width: 1130px) {
		.nav {
			display: flex;
		}
	}
	@media screen and (min-width: 889px) {
		.mini-nav-wrapper {
			display: none;
		}
	}
	@media screen and (max-width: 888px) {
		.nav-wrapper {
			display: none;
		}
		.nav {
			display: flex;
		}
	}
</style>

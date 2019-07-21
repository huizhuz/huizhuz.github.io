<template>
	<div>
		<div v-if="show" class="page-cover" @click="hideMenu"></div>
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
				<transition name="slide">
					<div v-if="show" class="mini-nav-content">
						<router-link to="/" class="mini-nav-item" @click.native="hideMenu">
							Home
							<font-awesome-icon style="font-size: 0.7rem" icon="angle-double-right"></font-awesome-icon>
						</router-link>
						<router-link to="/education" class="mini-nav-item" @click.native="hideMenu">
							Education
							<font-awesome-icon style="font-size: 0.7rem" icon="angle-double-right"></font-awesome-icon>
						</router-link>
						<router-link to="/projects" class="mini-nav-item" @click.native="hideMenu">
							Projects
							<font-awesome-icon style="font-size: 0.7rem" icon="angle-double-right"></font-awesome-icon>
						</router-link>
						<router-link to="/teaching" class="mini-nav-item" @click.native="hideMenu">
							Teaching Experience
							<font-awesome-icon style="font-size: 0.7rem" icon="angle-double-right"></font-awesome-icon>
						</router-link>
						<router-link to="/contact" class="mini-nav-item" @click.native="hideMenu">
							Contact Me
							<font-awesome-icon style="font-size: 0.7rem" icon="angle-double-right"></font-awesome-icon>
						</router-link>
					</div>
				</transition>
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
				this.show = !this.show;
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

	.mini-nav-content {
		position: absolute;
		top: 4rem;
		right: 3.8rem;
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		background: linear-gradient(#050320be, #1a0224d7);
		background-repeat: no-repeat;
		background-attachment: scroll;
		background-position: bottom;
		min-width: 160px;
		padding: 1rem 1rem 0 1rem;
		border-radius: 3px;
		transition: 0.5s;
		z-index: 3;
	}
	.mini-nav-item {
		height: 3rem;
		text-decoration: none;
		text-align: right;
		color: white;
		z-index: 4;
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
		.page-cover {
			position: fixed;
			top: 0;
			left: 0;
			opacity: 0;
			height: 100vh;
			width: 100vw;
			z-index: 2;
		}
	}
	@media screen and (max-width: 415px) {
		.nav {
			width: 90vw;
			overflow: hidden;
		}
		.mini-nav-content {
			padding: 4rem 1rem 0 1rem;
			position: fixed;
			top: 0rem;
			left: 0rem;
			height: 100vh;
			width: 75vw;
			border-radius: 0;
			background-color: yellow;
		}
		.mini-nav-item {
			text-align: left;
		}
		.slide-enter-active {
			transition: all 0.3s ease;
		}
		.slide-leave-active {
			transition: all 0.3s ease;
		}
		.slide-enter {
			transform: translate(-100%, 0);
		}
		.slide-leave-to {
			transform: translate(-100%, 0);
		}
	}
</style>

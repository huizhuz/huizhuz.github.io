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
				<router-link to="/work" class="nav-item">Work</router-link>
				<router-link to="/projects" class="nav-item confetti-button">Projects</router-link>
				<router-link to="/teaching" class="nav-item">Teaching</router-link>
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
						<router-link to="/work" class="mini-nav-item" @click.native="hideMenu">
							Work
							<font-awesome-icon style="font-size: 0.7rem" icon="angle-double-right"></font-awesome-icon>
						</router-link>
						<router-link to="/projects" class="mini-nav-item" @click.native="hideMenu">
							Projects
							<font-awesome-icon style="font-size: 0.7rem" icon="angle-double-right"></font-awesome-icon>
						</router-link>
						<router-link to="/teaching" class="mini-nav-item" @click.native="hideMenu">
							Teaching
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
		grid-template-columns: auto auto auto auto auto;
		align-items: baseline;
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
	.router-link-active{
		font-size: 1.3rem;
		border-bottom: 1px dashed #ccc;
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

	body {
		font-size: 16px;
		font-family: "Roboto", "Arial", sans-serif;
		text-align: center;
		background-color: #f8faff;
	}
	h1 {
		margin-top: 150px;
	}
	.confetti-button {
		position: relative;
	}

	.confetti-button:before,
	.confetti-button:after {
		position: absolute;
		content: "";
		display: block;
		width: 140%;
		height: 100%;
		left: -10%;
		z-index: -1000;
		transition: all ease-in-out 0.5s;
		background-repeat: no-repeat;
	}

	.confetti-button:before {
		display: none;
		top: -75%;
		background-image: radial-gradient(circle, #ff8800 20%, transparent 20%),
			radial-gradient(circle, transparent 20%, #ff0081 20%, transparent 30%),
			radial-gradient(circle, #8ef03e 20%, transparent 20%),
			radial-gradient(circle, #3f2bf6 20%, transparent 20%),
			radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%),
			radial-gradient(circle, #0051ff 20%, transparent 20%),
			radial-gradient(circle, #f7401f 20%, transparent 20%),
			radial-gradient(circle, #ffa600 20%, transparent 20%),
			radial-gradient(circle, #ffe70b 20%, transparent 20%);
		background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
			15% 15%, 10% 10%, 18% 18%;
	}

	.confetti-button:after {
		display: none;
		bottom: -75%;
		background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),
			radial-gradient(circle, #ff9900 20%, transparent 20%),
			radial-gradient(circle, transparent 10%, #ff1e00 15%, transparent 20%),
			radial-gradient(circle, #ffee00 20%, transparent 20%),
			radial-gradient(circle, #d0ff00 20%, transparent 20%),
			radial-gradient(circle, #0044ff 20%, transparent 20%),
			radial-gradient(circle, #ffffff 20%, transparent 20%);
		background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,
			20% 20%;
	}

	.confetti-button:before {
		display: block;
		animation: topBubbles ease-in-out 0.75s forwards infinite;
	}

	.confetti-button:after {
		display: block;
		animation: bottomBubbles ease-in-out 0.75s forwards infinite;
	}
	@keyframes topBubbles {
		0% {
			background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
				40% 90%, 55% 90%, 70% 90%;
		}
		50% {
			background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
				50% 50%, 65% 20%, 90% 30%;
		}
		100% {
			background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
				50% 40%, 65% 10%, 90% 20%;
			background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
		}
	}
	@keyframes bottomBubbles {
		0% {
			background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
				70% -10%, 70% 0%;
		}
		50% {
			background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%,
				95% 60%, 105% 0%;
		}
		100% {
			background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%,
				95% 70%, 110% 10%;
			background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
		}
	}
</style>

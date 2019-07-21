<template>
	<div id="app">
		<site-header></site-header>
		<transition
			name="fade"
			mode="out-in"
			@beforeLeave="beforeLeave"
			@enter="enter"
			@afterEnter="afterEnter"
		>
			<router-view></router-view>
		</transition>

		<site-footer></site-footer>
	</div>
</template>

<script>
	import Header from "./Header.vue";
	import Footer from "./Footer.vue";
	export default {
		data() {
			return {
				prevHeight: 0
			};
		},
		components: {
			"site-header": Header,
			"site-footer": Footer
		},
		methods: {
			beforeLeave(element) {
				this.prevHeight = getComputedStyle(element).height;
			},
			enter(element) {
				const { height } = getComputedStyle(element);

				element.style.height = this.prevHeight;

				setTimeout(() => {
					element.style.height = height;
				});
			},
			afterEnter(element) {
				element.style.height = "auto";
			}
		}
	};
</script>

<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition-duration: 0.4s;
		transition-property: height opacity;
    transition-timing-function: ease;
    overflow: hidden;
	}

	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}
</style>

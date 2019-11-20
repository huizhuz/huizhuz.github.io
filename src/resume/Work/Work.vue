<template>
	<div>
		<div class="cover">
			<div class="intro">
				<p class="title">Work Experience</p>
			</div>
		</div>
		<div class="jobs-container">
			<eachJob :eachJob="eachJob" v-for="(eachJob, index) in jobs"></eachJob>
		</div>
	</div>
</template>

<script>
	import EachJob from "./EachJob.vue";
	export default {
		data() {
			return {
				jobs: [
                    {
                        title: "Frontend Developer Volunteer",
                        company: "Disaster Accountability Project",
                        link: "https://www.smartresponse.org/",
                        time: "October 2019 ~ present",
                        description: 'Participated in the development of smartresponse.org. Used Angular 8 and TypeScript.',
                    }
                ]
			};
		},
		components: { eachJob: EachJob }
	};
</script>

<style scoped>
	.cover {
		height: 70vmin;
		max-width: 100vw;
		background: linear-gradient(
				rgba(253, 253, 251, 0.3),
				rgba(241, 234, 240, 0.562)
			),
			url("./../../images/work.jpg") no-repeat center center fixed;
		background-size: cover;
		display: flex;
		align-items: center;
	}
	.title {
		padding: 15px;
		font-family: "Amatic SC", cursive;
		font-size: 5rem;
	}
	.jobs-container {
        margin: 0 auto;
		width: 80vw;
        margin-top: 2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
	}
</style>


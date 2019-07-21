<template>
	<div>
		<div class="cover">
			<p class="title">Education</p>
		</div>
		<div>
			<schools :eachSchool="eachSchool" v-for="(eachSchool, index) in schoolInfo"></schools>
		</div>
		<v-block></v-block>
	</div>
</template>

<script>
	import School from "./School.vue";
	export default {
		data() {
			return {
				schoolInfo: [
					{
						name: "Harrisburg University",
						year: "2019 ~ present",
						degree: "MS in Computer Science",
						description: ""
					},
					{
						name: "Carnegie Mellon University",
						year: "2017 ~ 2018",
						degree: "MA in Applied Second Language Acquisition",
						description: [
							"Learned theories and research in the discipline of SLA, and teaching pedagogies.",
							"Had experience in linguistic data analysis, both qualitative (CA) and quantitative (R).",
							"Taught 10 academic hours of ESL in the ELP program at Chatham University.",
							"Finished 5 term projects independently, including a replication study of my interest, a qualitative research using R, a quantitative research using discourse analysis, an ARIS game, a LiveCode quiz.",
							"Designed my own concept-based curriculum regarding the concept of focus."
						]
					},
					{
						name: "Nankai University",
						year: "2011 ~ 2015",
						degree: "BE in Computer Science",
						description: [
							"Majored in Computer Science, courses including database management, data structure, data analysis, mathematics, etc.",
							"Worked as a Research Assistant in Intelligent Information Processing Laboratory.",
							"Participated in a research about Chinese characters recognization."
						]
					}
				]
			};
		},
		components: {
			schools: School
		}
	};
</script>

<style scoped>
	.cover {
		height: 70vmin;
		max-width: 100vw;
		background: linear-gradient(
				rgba(255, 253, 208, 0.3),
				rgba(255, 253, 208, 0)
			),
			url("./../../images/education.jpeg") no-repeat fixed;
		background-size: cover;
		display: flex;
		flex-flow: row-reverse;
		align-items: center;
	}
	.title {
		padding: 15px;
		font-family: "Amatic SC", cursive;
		font-size: 5rem;
	}
</style>

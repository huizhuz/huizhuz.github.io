<template>
	<div>
		<div class="cover">
			<p class="title">Teaching Experience</p>
		</div>
		<div>
			<teaching :eachJob="eachJob" v-for="(eachJob, index) in teachingInfo"></teaching>
		</div>
		<v-block></v-block>
	</div>
</template>

<script>
	import Teaching from "./Teaching.vue";
	export default {
		data() {
			return {
				teachingInfo: [
					{
						title: "Chinese Instructor",
						institution: "University of Pittsburgh",
						year: "August 2018 ~ April 2019",
						summary:
							"I worked as a part-time Chinese instructor at the University of Pittsburgh. My responsibility includes:",
						description: [
							"Teaching recitation classes of elementary Chinese",
							"Leading and grading oral performance, oral test and homework.",
							"Developing and improving established curriculum, lesson plans and teaching materials.",
							"Helping in organizing cultural events."
						]
					},
					{
						title: "Academic Tutor",
						institution: "Wholeren Education",
						year: "July 2018 ~ May 2019",
						summary:
							"While I was teaching at Wholeren Education, I provided mostly one-on-one social science or English tutoring sessions for Chinese internatinal students. Key contributions:",
						description: [
							"Developed technology enhanced learning tools.",
							"Tutored social science subjects for high school or college students.",
							"Designed course materials for SAT, TOEFL prep courses.",
							"Taught SAT, TOEFL prep courses.",
							"Taught academic writing to college-level students.",
							"Taught ESL using a content-based approach."
						]
					},
					{
						title: "Graduate Research Assistant",
						institution: "Carnegie Mellon University",
						year: "May 2018 ~ August 2018",
						summary: "What I did:",
						description: [
							"Made videos for Chinese Online, a free online Chinese teaching course on Open Learning Initiative of CMU.",
							"Designed activities for the extensive practice.",
							"Edited videos for Chinese Oral Communication course."
						]
					},
					{
						title: "Assistant English Instructor",
						institution: "Chatham University",
						year: "December 2017 ~ May 2018",
						summary:
							"I was mentored by Dr. Linh Phung, an ESL professional with expertise and experience in ESL teaching, ESL materials development, language assessment, and task-based language learning and teaching. I",
						description: [
							"Taught segments in the course Academic Communication and Advanced Grammar.",
							"Developed online quizzes using HTML/CSS.",
							"Designed vocabulary activities and discussion questions."
						]
					},
					{
						title: "English Teacher",
						institution: "BFSU International",
						year: "March 2016 ~ June 2017",
						summary: "Key contributions:",
						description: [
							"Taught 4 different courses aimed at three different age groups; textbooks including Playway, Kids’ Box, Our Discovery Island and English in Mind.",
							"Taught English phonics from level one to three to students in different ages during the summer semester, using textbook Uncle Craig’s phonics.",
							"Seeked for my own teaching style and adapted my lessons according to the characteristics of my students.",
							"Held class activities like storytelling competition and drama performance."
						]
					}
				]
			};
		},
		components: {
			teaching: Teaching
		}
	};
</script>


<style scoped>
	.cover {
		height: 70vmin;
		max-width: 100vw;
		background: linear-gradient(
				rgba(251, 240, 208, 0.822),
				rgba(250, 224, 200, 0.7)
			),
			url("./../../images/teaching.jpeg")
				no-repeat fixed;
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
</style>
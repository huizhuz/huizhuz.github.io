<template>
	<div>
		<div class="cover">
			<div class="intro">
				<h1>Huizhu Zhang</h1>
				<h2>Welcome to my page</h2>
				<h3>Front-end Developer | Language Educator</h3>
				<p>A Software Engineer focused on Frontend development, experienced with building granular single page application. Actively searching fulltime positions or internships in front end development.</p>
                <v-block></v-block>
				<p><i>Skill set: <i></p>
                <ul>
                    <li>Proficient front-end developing skills with standardized HTML5, CSS3, JavaScript.
Familiar with ES6 standard.</li>
                    <li>Single page application development experience with ReactJS (JSX) and Vue.js.</li>
                    <li>Great sensibility to web application design and responsive web development.
Comfortable with Sass and third-party packages like Element and Bootstrap.</li>
                    <li>Experience with Restful API, and study experience with R and Python.</li>
                    <li>Comfortable with version control system (Git).</li>
                    </ul>
                <v-block></v-block>
                <v-block></v-block>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.cover {
		max-width: 100vw;
		background: linear-gradient(
				rgba(20, 45, 116, 0.637),
				rgba(20, 45, 116, 0.2)
			),
			url("./../images/welcome.jpeg")
				no-repeat fixed;
		background-size: cover;
    }	
    
	.intro {
		color: white;
		display: grid;
		justify-content: center;
		font-family: "Amatic SC", cursive;
		padding: 1.5rem;
		text-align: center;
    }
    h1 {
		font-size: 4rem;
	}
	h2 {
		font-size: 2.5rem;
	}
    .intro p{
        padding-top: 2rem;
        font-family: 'Quicksand', sans-serif;
        text-align: justify;
        width: 70%;
        margin: 0 auto;
    }
    ul{
        list-style-type:none;
        padding:0;
    }
</style>
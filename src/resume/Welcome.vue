<template>
	<div>
		<div class="cover">
			<div class="intro">
				<h1>Huizhu Zhang</h1>
				<h2>Welcome to my page</h2>
				<h3>Front-end Developer | Language Educator</h3>
				<p>As a front-end developer, I specialize in designing and creating web pages using HTML/CSS and Javascript. As a language educator, I focus on creating warm and inviting learning environments and content-based curriculum development.</p>
                <v-block></v-block>
                <p><i>My skills: </i>
                    <ul>
                        <li>HTML/CSS, JavaScript, Vue.js</li>
                        <li>Python, R</li>
                        <li>Npm, Webpack, Bootstrap, jQuery, Sass</li>
                        <li>Version control system (Git)</li>
                        <li>Data structure and algorithm</li>
                        <li>Wix.com, Wordpress</li>
                    </ul>
                </p>
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
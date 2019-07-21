<template>
	<div>
        <h1 class="cover">Let's keep in touch!</h1>
    </div>
</template>

<style scoped>
	.cover {
        margin: 0 auto;
		height: 10rem;
		max-width: 80vw;
		background: linear-gradient(
				rgba(20, 45, 116, 0.637),
				rgba(20, 45, 116, 0.2)
			),
			url("./../../images/welcome.jpeg")
				no-repeat fixed;
		background-size: cover;
		color: white;
		display: flex;
		justify-content: center;
		font-family: "Amatic SC", cursive;
		padding: 1.5rem;
        text-align: center;
        align-items: center;
        border-radius: 10px;
    }
    h1 {
		font-size: 3rem;
	}
</style>
<template>
    <div class="footer">
        <div class="contact-wrapper">
            <a href="mailto:huizhuz@outlook.com" class="contact-item"><font-awesome-icon icon="envelope"></font-awesome-icon></a>
            <a href="https://github.com/huizhuz" class="contact-item"><font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon></a>  
            <a href="https://www.linkedin.com/in/huizhuzhangfosfos" class="contact-item"><font-awesome-icon :icon="['fab', 'linkedin-in']"></font-awesome-icon></a>
        </div>
        <p>&#169; 2019 Huizhu Zhang</p>
    </div>
</template>

<style scoped>
    .footer{
        text-align:center;
        font-family: "Open Sans", sans-serif;
        font-size: 1rem;
        opacity: 1;
        transition: 0.5s;
        text-transform: uppercase;
    }
    .contact-wrapper{
        width: 50vw;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        margin-top:2rem;
    }
    .contact-item{
        padding: 10px;
        text-decoration: none;
        color: black;
        opacity: 1;
        transition: 0.5s;
    }
    a:hover {
        color: gray;
        opacity: 0.6;
	}
	a:visited {
		color: black;
	}
	a:active {
		color: gray;
	}
</style>

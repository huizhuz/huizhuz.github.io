<template>
	<div>
		<h3>Quotes added</h3>
		<div class="progress-wrapper">
			<div class="progress-bar" :style="{width: 10*numberOfQuotes +'%'}">
                <p>{{numberOfQuotes}}/10</p>
            </div>
		</div>
	</div>
</template>

<script>
	export default {
        props: ["numberOfQuotes"],
    };
</script>

<style scoped>
    h3{
        margin: 30px, 0, 0;
    }
    .progress-wrapper {
        background-color:rgb(243, 244, 241);
        height: 30px;
        border: 1px solid grey;
        border-radius: 5px;
        margin: 10px 0px;
    }
    .progress-bar {
        width: 0%;
        background-color: rgba(151, 151, 223, 0.904);
        text-align: center;
        border-radius: 4px;
    }
</style>

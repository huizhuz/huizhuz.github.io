<template>
    <div class="btn-wrapper">
        <div class="btn">{{buttonName}}</div>
    </div>
</template>

<script>
export default {
    props:["buttonName"],
}
</script>

<style scoped>
    .btn-wrapper{
        display: flex;
        justify-content: center;
    }
    .btn{
        padding: 1rem 0;
        border: 3px solid black;
        color: black;
        width: 70%;
        text-align: center;
        transition: 0.4s;
    }
    .btn:hover{
        background-color: black;
        color: white;
        cursor: pointer;
    }
</style>

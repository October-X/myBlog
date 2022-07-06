<template>
    <div class="test-container">
        <div class="item" v-for="(n,i) in types" :key="i">
            <Icon :type="n"></Icon>
            <label>{{ n }}</label>
        </div>
    </div>
</template>

<script>
import Icon,{ types } from './'
export default {
    components: {
        Icon,
    },
    data() {
        return {
            types,
        }
    }
}
</script>

<style>
.test-container{
    display:grid;
    grid-template-columns: repeat(5,1fr);
    gap: 10px;
    justify-content: center;
}
.item{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin: 10px 0;
}
</style>
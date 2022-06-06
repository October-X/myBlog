<template>
    <div class="test">
        <ImageLoader
            src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
            placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" 
            @load="handleLoaded"
            :duration="1"></ImageLoader>
    </div>
</template>

<script>
import ImageLoader from './'
export default {
    components: {
        ImageLoader,
    },
    methods:{
        handleLoaded(){
            console.log('一切准备完成！');
        }
    }
}
</script>

<style>
    .test{
        width: 500px;
        height: 400px;
        /* border: 2px solid black; */
        margin: 0 auto;
    }
</style>
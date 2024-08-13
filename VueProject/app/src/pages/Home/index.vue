<template lang="">
    <div>
        <button>click me to increase one</button>
        <span>the data:{{count}}</span>
        <button>click me to sub one</button>
        <TypeNav />
        <ListContainer/>
        <Recommend />
        <Rank />
        <Like />
        <Floor />
        <Floor />
        <Brand />
    </div>
</template>
<script>
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import { mapState } from 'vuex';

console.log('Hell');
console.log('@',Recommend);
export default {
    name: 'Home',
    components: {
        Recommend,
        ListContainer,
        Rank,
        Like,
        Floor,
        Brand

   
    },
    computed: {
        ...mapState(['count'])
    }
}
</script>
<style lang="">
    
</style>
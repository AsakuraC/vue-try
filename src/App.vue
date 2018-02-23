<template>
    <div id="app">
        <div class="tips">{{winnerText[winner]}}</div>
        <chess-board></chess-board>
        <div>
            <button @click="initState">重置</button>
            <button @click="back">后退一步</button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import ChessBoard from './components/ChessBoard.vue'

export default {
    name: 'app',
    computed: {
        winner() {
            return this.$store.state.winner;
        },
        next() {
            const history = this.$store.state.history;
            return history[history.length - 1].next
        },
        winnerText() {
            return {
                "-1": '白子胜利',
                "0": '下一步：' + (this.next == 1 ? '黑子' : '白子'),
                "1": '黑子胜利'
            }
        }
    },
    methods:{
        ...mapMutations(['initState', 'back'])
    },
    components: {
        ChessBoard
    }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tips{
    color: #1762A6;
    margin-bottom: 5px;
}

button {
    margin: 3px;
}
</style>

<template>
	<div class="chess-wrap">
		<div v-for="(row, x) in showMap" class="chess-row">
			<grid v-for="(item, y) in row" :key="x + '_' + y" :site="{x, y}" :data="item" ></grid>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Grid from './Grid.vue'

export default {
	name: 'chessBoard',
	computed: {
		...mapGetters(['showMap']),
	},
	components: {
		Grid
	},
}
</script>

<style>
.chess-wrap{
	display: inline-block;
	min-width: 615px;
	background-color: #FFE5BD;
	border: 1px solid #333;
}
.chess-wrap .chess-row{
	font-size: 0;
}
</style>
<template>
  	<span class="back-line" @click="clickGrid">
  		<span v-if="data" class="grid" :style="background"></span>
  	</span>
</template>

<script>

export default {
	name: 'grid',
	props: ['data', 'site'],
	computed: {
		background() {
			return {
				backgroundColor: this.data === 1 ? 'black' : 'white'
			}
		}
	},
	methods: {
		clickGrid: function() {
			if(this.data !== 0)
				return;
			this.$store.commit('clickGrid', this.site);
		}
	}
}

</script>

<style scoped>
.back-line{
	display: inline-block;
	position: relative;
	width: 41px;
	height: 41px;
	cursor: pointer;
}
.back-line:after{
	content: ' ';
	position: absolute;
	width: 1px;
	height: 41px;
	background-color: #666;
	right: 20px;
	top: 0;
	z-index: 10;
}
.back-line:before{
	content: ' ';
	position: absolute;
	width: 41px;
	height: 1px;
	background-color: #666;
	bottom: 20px;
	left: 0;
	z-index: 10;
}
.grid{
	position: absolute;
	width: 31px;
	height: 31px;
	border-radius: 15.5px;
	left: 5px;
	top: 5px;
	z-index: 100;
}
</style>

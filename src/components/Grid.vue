<template>
  	<span class="back-line" @click="clickGrid">
  		<span v-if="data" :class="['grid', color]"></span>
  	</span>
</template>

<script>

export default {
	name: 'grid',
	props: ['data', 'site'],
	computed: {
		color() {
			return this.data === 1 ? 'black' : 'white'
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
	border-radius: 50%;
	left: 5px;
	top: 5px;
	z-index: 100;
	box-shadow:2px 2px 4px rgba(0, 0, 0, 0.3);
}
.black{
	background: radial-gradient(circle, #444, #222);
}
.grid:after{
	content: "";
    position: absolute;
    width: 13px;
    height: 7px;
    border-radius: 50%;
    top: 6px;
    left: 2px;
    transform: rotate(-45deg);
    background: radial-gradient(circle at 6px 1px, #fff, rgba(255, 255, 255, 0.9));
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
}
.white{
	background: #f1f1f1;
}
</style>

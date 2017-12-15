/**
 * 确认框组件
 */
<template>
	<div class="confirm">
		<div class="tips-wrapper">
			<div class="text">{{message}}</div>
			<div class="button-wrapper">
				<p class="yes">确认</p>
				<p class="no">取消</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				message: ''
			}
		}
	}
</script>

<style lang="scss">
	.confirm {
		position: fixed;	
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: transparent;
		z-index: 10011;
		.tips-wrapper {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
			width: 25%;
			padding: 20px;
			border: 1px solid #aaa;
			border-radius: 5px;
			background: #eee;
			.text {
				padding: 5px 0;
				text-align: center;
			}
			.button-wrapper {
				position: relative;
				margin-top: 10px;
				height: 20px;
				.yes {
					position: absolute;
					left: 5px;
					padding: 3px;
					cursor: pointer;
				}
				.no {
					position: absolute;
					right: 5px;
					padding: 3px;
					cursor: pointer;
				}
			}
				
		}
	}
</style>
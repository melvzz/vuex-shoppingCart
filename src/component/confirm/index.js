import ConfirmComponent from './confirm.vue';

let Confirm = {};

Confirm.install = function(Vue) {
	Vue.prototype.$confirm = function(message, cb){
		// 继承模板 得到实例
		const ConfirmController = Vue.extend(ConfirmComponent);
		let instance = new ConfirmController().$mount(document.createElement('div'));
		document.body.appendChild(instance.$el);
		instance.message = message;
		let confirmButton = instance.$el.getElementsByClassName('yes')[0],
			cancelButton = instance.$el.getElementsByClassName('no')[0];
		confirmButton.addEventListener('click', function(){
			document.body.removeChild(instance.$el);
			if (cb && typeof cb === 'function') {
				cb({'check': '1'});
			}
		});
		cancelButton.addEventListener('click', function(){
			document.body.removeChild(instance.$el);
		})
	}
}

export default Confirm;
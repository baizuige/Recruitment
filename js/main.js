// let xhr = null;
let vm = new Vue({
	el: '#app',
	data: {
		data: '',
		isLoad: false,
		xhr: '',
	},
	created: function(){
		this.xhr = new XMLHttpRequest();
		this.xhr.responseType = 'json';
		this.xhr.open('POST','http://127.0.0.1:8000/data');
		this.xhr.send();
		let that = this;
		setTimeout(function(){
			if(that.xhr.readyState === 4){
				that.isLoad = true;
				if(that.xhr.status>=200&&that.xhr.status<300){
					that.data = that.xhr.response;
				}
			}
		},500)
		
		
	}
})
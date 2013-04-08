var qlog = this;

var config = {
	url : 'http://qlog.io',
	clientId : '1234567890ABCDEF',
	secretKey : '1234567890ABCDEF1234567890ABCDEF'
};

var qlog_url = config.url + 'app/' + config.clientId + '/log';

function _notify(message, tags, f_success, f_error){
	var params = {
		msg : message,
		tags : tags,
		time : (new Date()).getTime()
	};

	iris.ajax('PUT', qlog_url, params, f_success, f_error);
}

qlog.notify = _notify;

iris.qlog = qlog;

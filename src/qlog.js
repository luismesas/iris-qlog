/*! Iris-Qlog - v0.1 - 2013-04-08
* https://github.com/luismesas/iris-qlog
* Copyright (c) 2013 Iris-Qlog; Licensed New-BSD */

var qlog = {};

var config = {
	url : 'http://qlog.io',
	clientId : '1234567890ABCDEF',
	secretKey : '1234567890ABCDEF1234567890ABCDEF'
};

var qlog_url = '/app/' + _config.clientId + '/log';

function _ajax(p_method, p_path, p_params, f_success, f_error) {
	return iris.ajax({
		"url": _config.url + p_path,
		"type": p_method,
		"data": p_params,
		"cache": false,
		"dataType": 'json',
		"async": true,
		"success": f_success,
		"error": function (p_request, p_textStatus, p_errorThrown) {

			iris.notify(iris.QLOG_ERROR, {request: p_request, status: p_textStatus, error: p_errorThrown});

			if ( f_error !== undefined ) {
				f_error();
			}
		}
	});
}

function _notify(message, tags, f_success, f_error){
	var params = {
		msg : message,
		tags : tags,
		time : (new Date()).getTime(),
		secretKey : _config.secretKey
	};

	return _ajax('PUT', qlog_url, params, f_success, f_error);
}
qlog.notify = _notify;

qlog.config = function(config){
	if(config.url !== undefined) _config.url = config.url;
	if(config.clientId !== undefined) _config.clientId = config.clientId;
	if(config.secretKey !== undefined) _config.secretKey = config.secretKey;
};

iris.qlog = qlog;
iris.QLOG_ERROR = 'QLOG_ERROR';

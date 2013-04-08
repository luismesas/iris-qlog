iris-qlog
=========

iris pluggin for connecting to qlog

HOW-TO USE
==========

* Import qlog.js into your iris project:

* Config it:

<pre><code>iris.qlog.config({
	url : 'url_to_log',
	clientId : 'your_app_client_id',
	secretKey : 'your_app_secret_key'
});</code></pre>

* Use it:
<pre><code>iris.qlog.notify('message','tag1,tag2,...,tagN');</code></pre>
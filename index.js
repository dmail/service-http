import transport from './transporter-#{platform-type}.js';
import rest from './node_modules/@dmail/rest/index.js';

var HttpService = rest.createService({
	name: 'http',

	handleRequest(request){
		if( request.url.protocol === 'http://' || request.url.protocol === 'https://' ){
			var promise = transport(request);

			// how to cancel response generation ? 
			promise.oncancel = function(){

			};

			return promise;
		}		
	}
});

export default HttpService;
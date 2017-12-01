var http = require('http')
  , name = 'My App';
 
const logger = require('logger');

// fake app
 
logger.log('info', 'booting ',{
  app: name
});
 
http.createServer(function(req, res){
  logger.log('info','requests:',{
  		'method':req.method,
  		'url':req.url
  	}
  );
  res.end('hello\n');
}).listen(3000, function(){
  logger.log('info', 'listening...',{
  	port: 3000
  });
});
 
// fake worker of some kind
 
// require('./worker');
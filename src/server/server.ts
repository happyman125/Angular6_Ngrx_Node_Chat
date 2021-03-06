const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

var { apiGetUserThreads } = require( './api/apiGetUserThreads' );
var { apiUpdateThread } = require( './api/apiMarkThreadAsReadByUser' );
var { apiMessageNotificationsPerUser } = require('./api/apiMessageNotificationsPerUser' );
var { apiSaveNewMessage } = require('./api/apiSaveNewMessage' );

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 3001;
app.set('port', port);

app.use( bodyParser.json());

apiGetUserThreads( app );
apiUpdateThread( app );
apiMessageNotificationsPerUser( app );
apiSaveNewMessage( app );

app.listen( port, () => {
	console.log(`Server is running on port 3001`)
});

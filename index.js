const AWS = require('aws-sdk');
AWS.config.update({ region: process.env.AWS_REGION });

exports.handler = async (event, context, callback) => {

  const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

  const params = {
    MessageBody: JSON.stringify(event),
    QueueUrl: "https://sqs.us-east-1.amazonaws.com/806302365898/CreateMessage"
  };

  sqs.sendMessage(params, function (err, data) {
    if(err) {
      console.log('error:',"Fail Send Message" + err);
      callback("ERROR Put SQS");  // ERROR with message
    }else{
      console.log('data:',data.MessageId);
      callback(null, '');  // SUCCESS 
    }
  });
};

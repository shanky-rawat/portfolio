// PING API

exports.ping = (_, res) => {
  /*
    #swagger.summary = 'API to check connectivity'
    #swagger.tags = ["health check"]
    #swagger.description = "Health check API, to check server connectivity."
    #swagger.responses[200] = {
     description: "server is up.",
     content: {
       "application/json": {
         schema: {
           $msg: "pong"
         },
         example: {
          msg: "pong"
         }
       }
     }
   }
   */
  res.send({ msg: "pong" });
};

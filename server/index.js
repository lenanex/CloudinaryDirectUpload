/* 

[...]

 all the link to the modules and set up of middleware
 it seems to work fine
 

*/

api.get('/img_signature', wagner.invoke(function(Event, Config) {

  return function(req, res) {

    var timestamp = cloudinary.utils.timestamp();
    var signature = cloudinary.utils.api_sign_request(timestamp, cloudinary.api_secret);

    res.json({ timestamp: timestamp, callback: "http://localhost:3000/cloudinary_cors.html", signature: signature, api_key: "746523838173773" });
  }

}));



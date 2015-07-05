var express = require('express'),
    profile = require('../models/profile.json'),
    request = require('request'),
    cheerio = require('cheerio'),
    router = express.Router();

var url = "http://www.loveme.com";

    /* GET users listing. */
    router.get('/loveme', function(req, res, next) {
      lovemeProfiles(url,profile, function(a) {
        res.json(a);
      });
    });

    router.get('/loveme/generate', function(req, res, next) {
      lovemeProfile(url, function(a) {        
        lovemeProfile(profile[randomInt(0,992)], function(a) {          
          lovemeProfile(profile[randomInt(0,992)], function(b) {
            res.json([a,b]);
          });
        });

      });
    });

    function lovemeProfiles(url,a,cb) {
      var url_profile = url + "/women/info";
      var profiles = [];
      a.map(function(val, key) {
        profiles.push({profile: url_profile + val + ".htm"});
      });
      cb(profiles);
    }

    function lovemeProfile(id,cb) {
      var url_profile = url + "/women/info" + id + ".htm";
      var profileId = id;
      request(url_profile, function(err,res,body) {
        var $ = cheerio.load(body);
        payload = {name: "", country: "", id: profileId};
        payload.name = $(".profName").text().replace(/ /g,'').replace(/\n/g,'');
        payload.country = $(".profCountry").text().replace(/ /g,'').replace(/\n/g,'');
        cb(payload);
      });
    }

    // function lovemeProfilePhotos(url,id,cb) {
    //   // This routine returns an array of photos
    //   var url_pattern = url + "/images/p";
    //   var photos = [];
    //   for(var count = 1; count < 7; count++) {
    //     photos.push(url_pattern + id + "-" + count + ".jpg");
    //   }      
    //   cb(photos);
    // }

    // function checkUrlStatus(url, cb) {
    //   request(url, function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //       cb({status: true});
    //     } else {
    //       cb({status: false});
    //     }
    //   });
    // }

    function randomInt (low, high) {
      // return Math.floor(Math.random() * (high - low) + low);
      return Math.floor(Math.random() * (high - low + 1)) + low;
    }

module.exports = router;
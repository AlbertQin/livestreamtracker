'use strict';
var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");

/* GET home page. */
router.get('/', function (req, res) {


    let promises = [];
    for (let i = 0; i <= 10; i++) {
        promises.push(
            fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCvaTdHTWBGv3MKj3KVqJVCw&eventType=live&type=video&key=' + process.env.API_KEY, {
                method: 'GET'
            }).then(function (response) {
                return response.json();
            })
        );
    }

    Promise.all(promises).then(() => {
        res.render('index', { title: promises });
    }).catch(err => {
        // error here
    });
});

module.exports = router;

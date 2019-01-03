const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.get('/latestVideos', (req, res) => {
  res.send({
    "videos": [
        {
            "thumbnail":"https://i.ytimg.com/vi/R-9i5NJsiL0/maxresdefault.jpg",
            "source": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-85.mp4",
            "title": "Lambhorghini",
            "channelName":"Auto Car",
            "views":"7 million views",
            "lastUpdated":"3 weeks ago"
        },
        {
            "thumbnail":"https://theawesomer.com/photos/2016/09/n6pdwdmjkze.jpg",
            "source": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/motion-20120802-85.mp4",
            "title": "Porche",
            "channelName":"LoudWire",
            "views":"1 million views",
            "lastUpdated":"4 weeks ago"
        },
        {
            "thumbnail":"https://i.ytimg.com/vi/bsSK1DccV_Y/maxresdefault.jpg",
            "source": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/oops-20120802-85.mp4",
            "title": "Havana",
            "channelName":"Camila Cabello",
            "views":"7 million views",
            "lastUpdated":"6 weeks ago"
        },
        {
            "thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6njcfy1wTsPr8WAs5CubtCommlw2HAfYFIp1IY2yWRU2Oj1uM4A",
            "source": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-85.mp4",
            "title": "See You Again",
            "channelName":"Charlie Puth",
            "views":"3 million views",
            "lastUpdated":"1 week ago"
        },
        {
            "thumbnail":"https://i.ytimg.com/vi/Z0P9KW9B7nw/maxresdefault.jpg",
            "source": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/motion-20120802-85.mp4",
            "title": "Manali To Leh",
            "channelName":"Mumbiker Nikhil",
            "views":"5 million views",
            "lastUpdated":"2 weeks ago"
        },
        {
            "thumbnail":"https://mm.aiircdn.com/5/679578.jpg",
            "source": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/oops-20120802-85.mp4",
            "title": "Don't Talk To Strangers",
            "channelName":"Ronnie James Dio",
            "views":"1 million views",
            "lastUpdated":"4 weeks ago"
        }

    ]
});
});


app.get('/musicVideos', (req, res) => {
    res.send({
      "videos": [
          {
              "thumbnail":"http://ste.india.com/sites/default/files/2018/09/28/723432-vicky-kaushal.jpg",
              "source": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-85.mp4",
              "title": "Challa|URI|Vicky Kaushal",
              "channelName":"T Series",
              "views":"7 million views",
              "lastUpdated":"3 weeks ago"
          },
          {
              "thumbnail":"https://media.altpress.com/uploads/2018/06/07adff0c-iron_maiden_2015-696x385.jpg",
              "source": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/oops-20120802-85.mp4",
              "title": "WastingLove",
              "channelName":"Iron Maiden",
              "views":"1 million views",
              "lastUpdated":"4 weeks ago"
          },
          {
              "thumbnail":"https://www.kerrang.com/assets/images/54200/Disturbed_band_promo_248ed78b6649d6cda0fcadc1ac9bc23e.jpg",
              "source": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/motion-20120802-85.mp4",
              "title": "Indestructible",
              "channelName":"Disturbed",
              "views":"7 million views",
              "lastUpdated":"6 weeks ago"
          },
          {
              "thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjKXl5V_MKdKrlUnqxtya48MGT3hIb-qq22mviaqFUEauhLMGRg",
              "source": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-85.mp4",
              "title": "Lazarus",
              "channelName":"Porcupine Tree",
              "views":"3 million views",
              "lastUpdated":"1 week ago"
          },
          {
              "thumbnail":"http://www.guitarnoise.com/images/features/pink-floyd-wallpaper-1024x585.jpg",
              "source": "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/oops-20120802-85.mp4",
              "title": "Coming Back To Life",
              "channelName":"Pink Floyd",
              "views":"5 million views",
              "lastUpdated":"2 weeks ago"
          }
      ]
  });
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
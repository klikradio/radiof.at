# radiof.at

Make your music sound like the radio.

## Dependencies

RadioFat will only run on **32-bit** Linux machines.  This is because [Stereo Tool](http://stereotool.com/) is not compiled for 64-bit machines.

There are quite a few other dependencies that the INSTALL script will take care of for you (including Python, Node.js, sox, lame, lib-conv, and others)

## Configuration File
In order to make the full web interface work, you'll need to make your own `config.json` file.  There is a `config.json.template` that you should start with.  This is where you'll define the port number, SendGrid information, and other variables needed to run RadioFat.
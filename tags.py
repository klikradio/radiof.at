#!/usr/bin/python

import sys
from mutagen.easymp4 import EasyMP4
from mutagen.easyid3 import EasyID3
source = EasyMP4(sys.argv[1])
dest = EasyID3()
for key in source:
	if (key in EasyID3.valid_keys.keys()):
		dest[key] = source[key]

dest.save(sys.argv[2])

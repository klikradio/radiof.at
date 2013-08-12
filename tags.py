#!/usr/bin/python

"""
tags.py

Converts the tags from an M4A file to an MP3 file

usage:  ./tags.py <SOURCE FILE>.m4a <DESTINATION>.mp3

This script only works in the M4A->MP3 direction.
Other magic works for MP3->MP3.
"""

import sys
from mutagen.easymp4 import EasyMP4
from mutagen.easyid3 import EasyID3
source = EasyMP4(sys.argv[1])
dest = EasyID3()
for key in source:
	if (key in EasyID3.valid_keys.keys()):
		dest[key] = source[key]

dest.save(sys.argv[2])

#!/usr/bin/python

"""
mp3_tags.py

Converts the tags from an MP3 file to an MP3 file

usage:  ./mp3_tags.py <SOURCE FILE>.mp3 <DESTINATION>.mp3
"""

import sys
from mutagen.easyid3 import EasyID3
source = EasyID3(sys.argv[1])
dest = EasyID3()
for key in source:
	dest[key] = source[key]

dest.save(sys.argv[2])

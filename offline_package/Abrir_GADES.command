#!/bin/bash
cd "$(dirname "$0")"

URL="http://localhost:8080"

# Open the default browser shortly after the local server starts.
( sleep 1; open "$URL" ) &

python3 -m http.server 8080

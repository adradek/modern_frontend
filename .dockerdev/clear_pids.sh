#!/bin/bash

# Stops the execution of a script in case of error
set -e

rm -f /app/tmp/pids/server.pid

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"

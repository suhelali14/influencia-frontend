#!/bin/sh
set -e

# Substitute environment variables in nginx config
envsubst '${PORT}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf

# Start nginx in background
nginx

# Wait for nginx to be ready
sleep 1

# Check if nginx is responding
if ! curl -sf http://localhost:${PORT}/health > /dev/null; then
    echo "ERROR: Nginx health check failed"
    exit 1
fi

echo "Nginx is ready and responding on port ${PORT}"

# Keep nginx running in foreground
exec nginx -g 'daemon off;'

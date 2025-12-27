#!/bin/bash
# Script to download unDraw illustrations
# Usage: ./scripts/download-undraw.sh illustration-name color
# Example: ./scripts/download-undraw.sh searching 6366f1

ILLUSTRATION=$1
COLOR=${2:-6366f1}
OUTPUT_DIR="public/illustrations"

mkdir -p "$OUTPUT_DIR"

# Download from unDraw.co
curl -L "https://undraw.co/api/illustrations/${ILLUSTRATION}?color=${COLOR}" \
  -o "${OUTPUT_DIR}/${ILLUSTRATION}.svg"

echo "Downloaded ${ILLUSTRATION}.svg to ${OUTPUT_DIR}/"


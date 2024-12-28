#!/bin/bash

PAGES_DIR="src/pages"
EXCLUDED_FILES=("_*" "en" "ru" "manifest.json.ts" "robots.txt.ts" "favicon.ico.ts")

# Create exclude parameters for find command
EXCLUDE_PARAMS=""
for item in "${EXCLUDED_FILES[@]}"; do
    EXCLUDE_PARAMS="$EXCLUDE_PARAMS ! -name '$item'"
done

# Function to create language directory
create_lang_dir() {
    local lang=$1
    
    # Remove and recreate language directory
    rm -rf "$PAGES_DIR/$lang"
    mkdir -p "$PAGES_DIR/$lang"
    
    # Copy files
    cd "$PAGES_DIR" && eval "find . -maxdepth 1 -mindepth 1 $EXCLUDE_PARAMS -exec cp -r {} $lang/ \;"
}

# Create directories for each language
create_lang_dir "en"
create_lang_dir "ru"

#!/bin/bash
# Install node packages
npm install

#Install supervisor
npm install supervisor -g

# Set up heroku configuration variables
# https://devcenter.heroku.com/articles/config-vars
# - Edit .env to include your own COINBASE_API_KEY and HEROKU_POSTGRES_URL.
# - Modify the .env.dummy file, and DO NOT check .env into the git repository.
# - See .env.dummy for details.

cp .env.dummy .env

STRING=$( cat <<EOF
Future instructions
EOF
)
echo -e $STRING


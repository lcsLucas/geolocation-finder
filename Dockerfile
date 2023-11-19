FROM alpine:latest AS alpine-npm

WORKDIR /var/www/

# Arguments
ARG user=lucas
ARG uid=1000

RUN apk --update-cache add \
    bash \
    npm \
    nodejs; \
    set -x && \
    adduser -D -u 1000 -s /bin/bash ${user} -G www-data && \
    chown -R ${user}:www-data . && \
    mkdir -p /var/www/html && chown ${user}:www-data /var/www/html && \
    find . -type f | xargs -I{} chown ${user} {} && \
    find . -type d | xargs -I{} chown ${user} {} && \
    find . -type f | xargs -I{} chmod -v 644 {} && \
    find . -type d | xargs -I{} chmod -v 755 {};

RUN sed -i 's/bin\/ash/bin\/bash/g' /etc/passwd

# RUN npm install

FROM alpine-npm

WORKDIR /var/www/

USER ${user}

# RUN npm install

# ENTRYPOINT [ "npm", "run", "dev", "--host" ]

STOPSIGNAL SIGQUIT
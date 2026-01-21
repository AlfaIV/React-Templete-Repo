FROM node:24-alpine

RUN apk update && \
    apk add --no-cache \
    git \
    bash \
    curl \
    wget \
    && rm -rf /var/cache/apk/*

RUN mkdir /workspace

WORKDIR /workspace

CMD ["/bin/bash"]

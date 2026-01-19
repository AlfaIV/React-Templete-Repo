FROM node:24-alpine

RUN apt-get update && \
    apt-get install -y git

RUN mkdir /workspace

WORKDIR /workspace

CMD ["/bin/bash"]

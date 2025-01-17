FROM ubuntu:18.10

COPY /app /home/app
COPY /dana /home/dana

# Dana instalattion
ENV DANA_HOME=/home/dana/
ENV PATH "$PATH:${DANA_HOME}"
RUN echo "${PATH}" >> /etc/bash.bashrc
RUN chmod +x /home/dana/dana && chmod +x /home/dana/dnc

WORKDIR /home/app/server

EXPOSE 5000

CMD ["dana", "main.o"]

FROM openjdk:8-jre
COPY ./target/hello-world-demo-1.0-SNAPSHOT-jar-with-dependencies.jar /usr/app/app.jar
WORKDIR /usr/app
EXPOSE 7000
CMD java -jar app.jar
FROM eclipse-temurin:21-jdk-alpine

COPY /target/*.jar /opt/app/app.jar

LABEL maintainer="rodolfobortolozo@gmail.com"

ENTRYPOINT ["java","-jar","/opt/app/app.jar"]

EXPOSE 8080
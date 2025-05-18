# Use a lightweight Java runtime image
FROM openjdk:17-jdk-slim

# Set working directory inside container
WORKDIR /app

# Copy the jar file from target folder to /app in container
COPY target/*.jar gemini-app.jar

# Expose the port to 8080
EXPOSE 8080

# run the jar file
ENTRYPOINT ["java", "-jar", "gemini-app.jar"]

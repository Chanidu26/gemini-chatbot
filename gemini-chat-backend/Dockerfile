# OpenJDK 17 image as the base image
FROM openjdk:17

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file to the container
COPY target/gemini-app-backend.jar .

# Expose the port
EXPOSE 8080

# Start the application
CMD ["java", "-jar", "gemini-app-backend.jar"]
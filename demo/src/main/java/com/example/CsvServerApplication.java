package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@SpringBootApplication
@RestController
public class CsvServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(CsvServerApplication.class, args);
    }

    @GetMapping(value = "/data.csv", produces = MediaType.TEXT_PLAIN_VALUE)
    public String getCsvFile() throws IOException {
        // Load the CSV file from the resources folder
        ClassPathResource resource = new ClassPathResource("data.csv");
        return new String(Files.readAllBytes(Path.of(resource.getURI())));
    }
}
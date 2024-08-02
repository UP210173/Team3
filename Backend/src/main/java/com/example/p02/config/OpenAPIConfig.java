package com.example.p02.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
    info = @Info(
        title = "API Full",
        description = "API para la administración de Full",
        version = "v0.1.0"
    )
)
public class OpenAPIConfig {
}

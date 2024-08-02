package com.example.p02.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
    info = @Info(
        title = "API Full",
        description = "API para la administración de Full",
        version = "v0.1.0"
    )
)
@Configuration
public class APIConfig {
    // Clase de configuración para la documentación de la API con Swagger.
}

// URL para acceder a Swagger UI:
// http://localhost:8080/swagger-ui/index.html

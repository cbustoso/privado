-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL UNIQUE,
    `contrasena` VARCHAR(191) NULL,
    `fecha_nacimiento` DATETIME(3) NULL,
    `genero` INTEGER NULL,
    `tipo_usuario` VARCHAR(191) NULL,
    `estado` VARCHAR(191) NULL,
    `rut` TEXT NULL,
    `carrera` VARCHAR(191) NULL,
    `anoIngresoCarrera` VARCHAR(191) NULL,
    `jornada` VARCHAR(191) NULL,
    `direccion` VARCHAR(191) NULL,
    `region` VARCHAR(191) NULL,
    `comuna` VARCHAR(191) NULL,
    `fechamod` DATETIME(3) NULL,
         
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `citas` (
    `id` INTEGER NOT NULL,
    `profesional_id` INTEGER NOT NULL,
    `alumno_id` INTEGER NOT NULL,
    `fecha` DATETIME(191) NULL,
    `hora` DATETIME(191) NULL,
    `estado` VARCHAR(191) NULL,
    `fechamod` DATETIME(191) NULL,
    `modalidad` VARCHAR(191) NULL,
    `campus` VARCHAR(191) NULL,
    `notas` VARCHAR(191) NULL,
    `motivo` VARCHAR(191) NULL,
    `como` VARCHAR(191) NULL,
    `derivado_desde` VARCHAR(191) NULL,
    `tratamiento` VARCHAR(191) NULL,
    `diagnostico_previo` VARCHAR(191) NULL

    PRIMARY KEY (`id`)
    FOREIGN KEY (`profesional_id`) REFERENCES `usuarios`(`id`)
    FOREIGN KEY (`alumno_id`) REFERENCES `usuarios`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `especialidades` (
    `id` INTEGER NOT NULL,
    `usuario_id` INTEGER NULL,
    `especialidad` VARCHAR(191) NULL,
    `fechamod` DATETIME(3) NULL

    PRIMARY KEY (`id`)
    FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `horarios` (
    `id` INTEGER NOT NULL,
    `usuario_id` INTEGER NOT NULL,
    `dia_semana` VARCHAR(191) NOT NULL,
    `hora_inicio` DATETIME(3) NOT NULL,
    `hora_fin` DATETIME(3) NOT NULL,
    `fechamod` DATETIME(3) NOT NULL

    PRIMARY KEY (`id`),
    FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


-- CreateTable
CREATE TABLE `blog` (
    `id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `author_name` VARCHAR(191) NOT NULL,
    `tags` VARCHAR(191) NOT NULL,
    `status_blog` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `subcategory` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `publication_date` DATETIME(3) NOT NULL,
    `fechamod` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

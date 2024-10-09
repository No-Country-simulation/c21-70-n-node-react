-- CreateTable
CREATE TABLE `Usuarios` (
    `idUsuarios` INTEGER NOT NULL AUTO_INCREMENT,
    `TipoDocumento` VARCHAR(191) NOT NULL,
    `NumeroDocumento` VARCHAR(191) NOT NULL,
    `Nombres` VARCHAR(191) NOT NULL,
    `Apellidos` VARCHAR(191) NOT NULL,
    `Correo` VARCHAR(191) NOT NULL,
    `FechaNacimiento` DATETIME(3) NOT NULL,
    `FechaExpedicion` DATETIME(3) NOT NULL,
    `NumeroTelefono` VARCHAR(191) NOT NULL,
    `NumeroPin` INTEGER NOT NULL,

    UNIQUE INDEX `Usuarios_Correo_key`(`Correo`),
    UNIQUE INDEX `Usuarios_FechaNacimiento_key`(`FechaNacimiento`),
    UNIQUE INDEX `Usuarios_FechaExpedicion_key`(`FechaExpedicion`),
    PRIMARY KEY (`idUsuarios`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cuenta` (
    `idCuenta` INTEGER NOT NULL AUTO_INCREMENT,
    `Saldo` DOUBLE NOT NULL,

    PRIMARY KEY (`idCuenta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaccion` (
    `idTransaccion` INTEGER NOT NULL AUTO_INCREMENT,
    `TipoTransaccion` VARCHAR(191) NOT NULL,
    `FechaTransaccion` DATETIME(3) NOT NULL,

    PRIMARY KEY (`idTransaccion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

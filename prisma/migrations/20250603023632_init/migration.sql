-- CreateTable
CREATE TABLE `Usuario` (
    `email` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Telefone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `usuarioEmail` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Turma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `disciplinaCod` VARCHAR(191) NOT NULL,
    `semestre` VARCHAR(191) NOT NULL,
    `professorEmail` VARCHAR(191) NOT NULL,
    `horario` VARCHAR(191) NOT NULL,
    `vagas` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Avaliacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `enunciado` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `turmaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlunoTurma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `alunoEmail` VARCHAR(191) NOT NULL,
    `turmaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aula` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `salaId` INTEGER NOT NULL,
    `turmaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Conteudo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `aulaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chamada` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `alunoEmail` VARCHAR(191) NOT NULL,
    `aulaId` INTEGER NOT NULL,
    `presenca` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reserva` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aulaId` INTEGER NOT NULL,
    `recursoId` INTEGER NOT NULL,
    `observacao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recurso` (
    `idRecurso` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `status` ENUM('disponivel', 'em_manutencao') NOT NULL,
    `tipoRecursoId` INTEGER NULL,

    PRIMARY KEY (`idRecurso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Caracteristica` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `recursoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoRecurso` (
    `idTipoRecurso` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idTipoRecurso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Predio` (
    `numPredio` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `rua` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `complemento` VARCHAR(191) NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `uf` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`numPredio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sala` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numSala` VARCHAR(191) NOT NULL,
    `capacidade` INTEGER NOT NULL,
    `andar` INTEGER NOT NULL,
    `predioNum` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SalaRecurso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `salaId` INTEGER NOT NULL,
    `recursoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Disciplina` (
    `codDisciplina` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `creditos` INTEGER NOT NULL,
    `programa` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`codDisciplina`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ItemBibliografico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `disciplinaCod` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Curriculo` (
    `idCurriculo` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeCurso` VARCHAR(191) NOT NULL,
    `dataInicioVigencia` DATETIME(3) NOT NULL,
    `dataFimVigencia` DATETIME(3) NOT NULL,

    PRIMARY KEY (`idCurriculo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CurriculoDisciplina` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `curriculoId` INTEGER NOT NULL,
    `disciplinaCod` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Requisito` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `curriculoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Seriacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `periodo` VARCHAR(191) NOT NULL,
    `curriculoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Telefone` ADD CONSTRAINT `Telefone_usuarioEmail_fkey` FOREIGN KEY (`usuarioEmail`) REFERENCES `Usuario`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turma` ADD CONSTRAINT `Turma_disciplinaCod_fkey` FOREIGN KEY (`disciplinaCod`) REFERENCES `Disciplina`(`codDisciplina`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turma` ADD CONSTRAINT `Turma_professorEmail_fkey` FOREIGN KEY (`professorEmail`) REFERENCES `Usuario`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Avaliacao` ADD CONSTRAINT `Avaliacao_turmaId_fkey` FOREIGN KEY (`turmaId`) REFERENCES `Turma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlunoTurma` ADD CONSTRAINT `AlunoTurma_alunoEmail_fkey` FOREIGN KEY (`alunoEmail`) REFERENCES `Usuario`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlunoTurma` ADD CONSTRAINT `AlunoTurma_turmaId_fkey` FOREIGN KEY (`turmaId`) REFERENCES `Turma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aula` ADD CONSTRAINT `Aula_salaId_fkey` FOREIGN KEY (`salaId`) REFERENCES `Sala`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aula` ADD CONSTRAINT `Aula_turmaId_fkey` FOREIGN KEY (`turmaId`) REFERENCES `Turma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Conteudo` ADD CONSTRAINT `Conteudo_aulaId_fkey` FOREIGN KEY (`aulaId`) REFERENCES `Aula`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chamada` ADD CONSTRAINT `Chamada_alunoEmail_fkey` FOREIGN KEY (`alunoEmail`) REFERENCES `Usuario`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chamada` ADD CONSTRAINT `Chamada_aulaId_fkey` FOREIGN KEY (`aulaId`) REFERENCES `Aula`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_aulaId_fkey` FOREIGN KEY (`aulaId`) REFERENCES `Aula`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_recursoId_fkey` FOREIGN KEY (`recursoId`) REFERENCES `Recurso`(`idRecurso`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recurso` ADD CONSTRAINT `Recurso_tipoRecursoId_fkey` FOREIGN KEY (`tipoRecursoId`) REFERENCES `TipoRecurso`(`idTipoRecurso`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Caracteristica` ADD CONSTRAINT `Caracteristica_recursoId_fkey` FOREIGN KEY (`recursoId`) REFERENCES `Recurso`(`idRecurso`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sala` ADD CONSTRAINT `Sala_predioNum_fkey` FOREIGN KEY (`predioNum`) REFERENCES `Predio`(`numPredio`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalaRecurso` ADD CONSTRAINT `SalaRecurso_salaId_fkey` FOREIGN KEY (`salaId`) REFERENCES `Sala`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalaRecurso` ADD CONSTRAINT `SalaRecurso_recursoId_fkey` FOREIGN KEY (`recursoId`) REFERENCES `Recurso`(`idRecurso`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemBibliografico` ADD CONSTRAINT `ItemBibliografico_disciplinaCod_fkey` FOREIGN KEY (`disciplinaCod`) REFERENCES `Disciplina`(`codDisciplina`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CurriculoDisciplina` ADD CONSTRAINT `CurriculoDisciplina_curriculoId_fkey` FOREIGN KEY (`curriculoId`) REFERENCES `Curriculo`(`idCurriculo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CurriculoDisciplina` ADD CONSTRAINT `CurriculoDisciplina_disciplinaCod_fkey` FOREIGN KEY (`disciplinaCod`) REFERENCES `Disciplina`(`codDisciplina`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Requisito` ADD CONSTRAINT `Requisito_curriculoId_fkey` FOREIGN KEY (`curriculoId`) REFERENCES `Curriculo`(`idCurriculo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Seriacao` ADD CONSTRAINT `Seriacao_curriculoId_fkey` FOREIGN KEY (`curriculoId`) REFERENCES `Curriculo`(`idCurriculo`) ON DELETE RESTRICT ON UPDATE CASCADE;

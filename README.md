# Como configurar o ambiente

- Configure um ambiente de banco de dados mysql na sua máquina
- Criar um banco de dados mysql
- Executar o script abaixo no banco
```sql
-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.32 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.4.0.6659
-- --------------------------------------------------------

-- Copiando estrutura do banco de dados para todolist
CREATE DATABASE IF NOT EXISTS `todolist` /*!40100 DEFAULT CHARACTER SET latin1 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `todolist`;

-- Copiando estrutura para tabela todolist.tarefas
CREATE TABLE IF NOT EXISTS `tarefas` (
  `id_tarefa` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) NOT NULL DEFAULT '0',
  `executado` int NOT NULL DEFAULT '0',
  `ordem` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_tarefa`)
) ENGINE=InnoDB AUTO_INCREMENT=182 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela todolist.tarefas: ~0 rows (aproximadamente)
INSERT INTO `tarefas` (`id_tarefa`, `descricao`, `executado`, `ordem`) VALUES
	(175, 'Arrumar a cama', 1, 0),
	(176, 'Escovar os dentes', 1, 0),
	(177, 'Tomar café da manhã', 1, 0),
	(178, 'Fazer exercícios físicos', 0, 0),
	(179, 'Ler um livro', 0, 0),
	(180, 'Responder e-mails', 0, 0),
	(181, 'Fazer compras no mercado', 0, 0);

```
- Acesse o arquivo db.js e configure a sua conexão com o banco de dados
- Execute o código no prompt de comando "node index.js"
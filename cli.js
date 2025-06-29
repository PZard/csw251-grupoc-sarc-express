#!/usr/bin/env node

import { program } from 'commander';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

// Função helper para fazer requisições
async function makeRequest(method, endpoint, data = null) {
  try {
    const config = {
      method,
      url: `${API_BASE_URL}${endpoint}`,
      headers: { 'Content-Type': 'application/json' }
    };
    
    if (data) {
      config.data = data;
    }
    
    const response = await axios(config);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(JSON.stringify(error.response.data, null, 2));
    } else {
      throw new Error(`Erro de conexão: ${error.message}`);
    }
  }
}

program
  .name('sarc-cli')
  .description('CLI para interagir com a API SARC')
  .version('1.0.0');

// ===== USUÁRIOS =====
const usuarios = program.command('usuarios');

usuarios
  .command('criar')
  .description('Cria um novo usuário')
  .requiredOption('-n, --nome <nome>', 'Nome do usuário')
  .requiredOption('-e, --email <email>', 'Email do usuário')
  .requiredOption('-d, --data-nascimento <data>', 'Data de nascimento (YYYY-MM-DD)')
  .requiredOption('--sexo <sexo>', 'Sexo do usuário (ex: M ou F)')
  .action(async (options) => {
    try {
      const dataNascimento = new Date(options.dataNascimento + 'T00:00:00.000Z').toISOString();
      const result = await makeRequest('POST', '/usuarios', {
        nome: options.nome,
        email: options.email,
        dataNascimento: dataNascimento,
        sexo: options.sexo
      });
      console.log('Usuário criado com sucesso:', result);
    } catch (error) {
      console.error('Erro ao criar usuário:', error.message);
    }
  });

usuarios
  .command('listar')
  .description('Lista todos os usuários')
  .action(async () => {
    try {
      const result = await makeRequest('GET', '/usuarios');
      console.log('Usuários:', result);
    } catch (error) {
      console.error('Erro ao listar usuários:', error.message);
    }
  });

usuarios
  .command('buscar')
  .description('Busca um usuário por email')
  .requiredOption('-e, --email <email>', 'Email do usuário')
  .action(async (options) => {
    try {
      const result = await makeRequest('GET', `/usuarios/${options.email}`);
      console.log('Usuário encontrado:', result);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error.message);
    }
  });

usuarios
  .command('atualizar')
  .description('Atualiza um usuário')
  .requiredOption('-e, --email <email>', 'Email do usuário')
  .option('-n, --nome <nome>', 'Nome do usuário')
  .option('-d, --data-nascimento <data>', 'Data de nascimento (YYYY-MM-DD)')
  .option('--sexo <sexo>', 'Sexo do usuário')
  .action(async (options) => {
    try {
      const data = {};
      if (options.nome) data.nome = options.nome;
      if (options.dataNascimento) {
        data.dataNascimento = new Date(options.dataNascimento + 'T00:00:00.000Z').toISOString();
      }
      if (options.sexo) data.sexo = options.sexo;
      
      const result = await makeRequest('PUT', `/usuarios/${options.email}`, data);
      console.log('Usuário atualizado com sucesso:', result);
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error.message);
    }
  });

usuarios
  .command('deletar')
  .description('Deleta um usuário')
  .requiredOption('-e, --email <email>', 'Email do usuário')
  .action(async (options) => {
    try {
      await makeRequest('DELETE', `/usuarios/${options.email}`);
      console.log('Usuário deletado com sucesso');
    } catch (error) {
      console.error('Erro ao deletar usuário:', error.message);
    }
  });

// ===== DISCIPLINAS =====
const disciplinas = program.command('disciplinas');

disciplinas
  .command('criar')
  .description('Cria uma nova disciplina')
  .requiredOption('-c, --codigo <codigo>', 'Código da disciplina')
  .requiredOption('-n, --nome <nome>', 'Nome da disciplina')
  .requiredOption('-r, --creditos <creditos>', 'Número de créditos')
  .requiredOption('-p, --programa <programa>', 'Programa da disciplina')
  .action(async (options) => {
    try {
      const result = await makeRequest('POST', '/disciplinas', {
        codDisciplina: options.codigo,
        nome: options.nome,
        creditos: parseInt(options.creditos),
        programa: options.programa
      });
      console.log('Disciplina criada com sucesso:', result);
    } catch (error) {
      console.error('Erro ao criar disciplina:', error.message);
    }
  });

disciplinas
  .command('listar')
  .description('Lista todas as disciplinas')
  .action(async () => {
    try {
      const result = await makeRequest('GET', '/disciplinas');
      console.log('Disciplinas:', result);
    } catch (error) {
      console.error('Erro ao listar disciplinas:', error.message);
    }
  });

disciplinas
  .command('buscar')
  .description('Busca uma disciplina por código')
  .requiredOption('-c, --codigo <codigo>', 'Código da disciplina')
  .action(async (options) => {
    try {
      const result = await makeRequest('GET', `/disciplinas/${options.codigo}`);
      console.log('Disciplina encontrada:', result);
    } catch (error) {
      console.error('Erro ao buscar disciplina:', error.message);
    }
  });

disciplinas
  .command('deletar')
  .description('Deleta uma disciplina por código')
  .requiredOption('-c, --codigo <codigo>', 'Código da disciplina')
  .action(async (options) => {
    try {
      await makeRequest('DELETE', `/disciplinas/${options.codigo}`);
      console.log('Disciplina deletada com sucesso');
    } catch (error) {
      console.error('Erro ao deletar disciplina:', error.message);
    }
  });

// ===== TURMAS =====
const turmas = program.command('turmas');

turmas
  .command('criar')
  .description('Cria uma nova turma')
  .requiredOption('-d, --disciplina <cod>', 'Código da disciplina')
  .requiredOption('-s, --semestre <semestre>', 'Semestre')
  .requiredOption('-p, --professor <email>', 'Email do professor')
  .requiredOption('-h, --horario <horario>', 'Horário da turma')
  .requiredOption('-v, --vagas <vagas>', 'Número de vagas')
  .action(async (options) => {
    try {
      const result = await makeRequest('POST', '/turmas', {
        disciplinaCod: options.disciplina,
        semestre: options.semestre,
        professorEmail: options.professor,
        horario: options.horario,
        vagas: parseInt(options.vagas)
      });
      console.log('Turma criada com sucesso:', result);
    } catch (error) {
      console.error('Erro ao criar turma:', error.message);
    }
  });

turmas
  .command('listar')
  .description('Lista todas as turmas')
  .action(async () => {
    try {
      const result = await makeRequest('GET', '/turmas');
      console.log('Turmas:', result);
    } catch (error) {
      console.error('Erro ao listar turmas:', error.message);
    }
  });

turmas
  .command('buscar')
  .description('Busca uma turma por ID')
  .requiredOption('-i, --id <id>', 'ID da turma')
  .action(async (options) => {
    try {
      const result = await makeRequest('GET', `/turmas/${options.id}`);
      console.log('Turma encontrada:', result);
    } catch (error) {
      console.error('Erro ao buscar turma:', error.message);
    }
  });

turmas
  .command('atribuir-professor')
  .description('Atribui um professor a uma turma')
  .requiredOption('-i, --id <id>', 'ID da turma')
  .requiredOption('-p, --professor <email>', 'Email do professor')
  .action(async (options) => {
    try {
      const result = await makeRequest('PUT', `/turmas/${options.id}/atribuir-professor`, {
        professorEmail: options.professor
      });
      console.log('Professor atribuído com sucesso:', result);
    } catch (error) {
      console.error('Erro ao atribuir professor:', error.message);
    }
  });

// ===== AULAS =====
const aulas = program.command('aulas');

aulas
  .command('criar')
  .description('Cria uma nova aula')
  .requiredOption('-d, --data <data>', 'Data da aula (YYYY-MM-DD)')
  .requiredOption('-s, --sala <id>', 'ID da sala')
  .requiredOption('-t, --turma <id>', 'ID da turma')
  .action(async (options) => {
    try {
      const data = new Date(options.data + 'T00:00:00.000Z').toISOString();
      const result = await makeRequest('POST', '/aulas', {
        data: data,
        salaId: parseInt(options.sala),
        turmaId: parseInt(options.turma)
      });
      console.log('Aula criada com sucesso:', result);
    } catch (error) {
      console.error('Erro ao criar aula:', error.message);
    }
  });

aulas
  .command('listar')
  .description('Lista todas as aulas')
  .action(async () => {
    try {
      const result = await makeRequest('GET', '/aulas');
      console.log('Aulas:', result);
    } catch (error) {
      console.error('Erro ao listar aulas:', error.message);
    }
  });

aulas
  .command('calendario')
  .description('Obtém o calendário de aulas de um aluno')
  .requiredOption('-a, --aluno <email>', 'Email do aluno')
  .action(async (options) => {
    try {
      const result = await makeRequest('GET', `/aulas/calendario/${options.aluno}`);
      console.log('Calendário do aluno:', result);
    } catch (error) {
      console.error('Erro ao obter calendário:', error.message);
    }
  });

// ===== CHAMADAS =====
const chamadas = program.command('chamadas');

chamadas
  .command('criar')
  .description('Cria uma nova chamada')
  .requiredOption('-a, --aluno <email>', 'Email do aluno')
  .requiredOption('-u, --aula <id>', 'ID da aula')
  .requiredOption('-p, --presenca <boolean>', 'Presença (true/false)')
  .action(async (options) => {
    try {
      const result = await makeRequest('POST', '/chamadas', {
        alunoEmail: options.aluno,
        aulaId: parseInt(options.aula),
        presenca: options.presenca === 'true'
      });
      console.log('Chamada criada com sucesso:', result);
    } catch (error) {
      console.error('Erro ao criar chamada:', error.message);
    }
  });

chamadas
  .command('listar')
  .description('Lista todas as chamadas')
  .action(async () => {
    try {
      const result = await makeRequest('GET', '/chamadas');
      console.log('Chamadas:', result);
    } catch (error) {
      console.error('Erro ao listar chamadas:', error.message);
    }
  });

chamadas
  .command('historico')
  .description('Obtém o histórico de chamadas de um aluno')
  .requiredOption('-a, --aluno <email>', 'Email do aluno')
  .action(async (options) => {
    try {
      const result = await makeRequest('GET', `/chamadas/historico/${options.aluno}`);
      console.log('Histórico de chamadas:', result);
    } catch (error) {
      console.error('Erro ao obter histórico:', error.message);
    }
  });

// ===== AVALIAÇÕES =====
const avaliacoes = program.command('avaliacoes');

avaliacoes
  .command('criar')
  .description('Cria uma nova avaliação')
  .requiredOption('-d, --data <data>', 'Data da avaliação (YYYY-MM-DD)')
  .requiredOption('-e, --enunciado <enunciado>', 'Enunciado da avaliação')
  .requiredOption('-t, --tipo <tipo>', 'Tipo da avaliação')
  .requiredOption('-u, --turma <id>', 'ID da turma')
  .action(async (options) => {
    try {
      const data = new Date(options.data + 'T00:00:00.000Z').toISOString();
      const result = await makeRequest('POST', '/avaliacoes', {
        data: data,
        enunciado: options.enunciado,
        tipo: options.tipo,
        turmaId: parseInt(options.turma)
      });
      console.log('Avaliação criada com sucesso:', result);
    } catch (error) {
      console.error('Erro ao criar avaliação:', error.message);
    }
  });

avaliacoes
  .command('listar')
  .description('Lista todas as avaliações')
  .action(async () => {
    try {
      const result = await makeRequest('GET', '/avaliacoes');
      console.log('Avaliações:', result);
    } catch (error) {
      console.error('Erro ao listar avaliações:', error.message);
    }
  });

avaliacoes
  .command('programadas')
  .description('Obtém as avaliações programadas de um aluno')
  .requiredOption('-a, --aluno <email>', 'Email do aluno')
  .action(async (options) => {
    try {
      const result = await makeRequest('GET', `/avaliacoes/programadas/${options.aluno}`);
      console.log('Avaliações programadas:', result);
    } catch (error) {
      console.error('Erro ao obter avaliações programadas:', error.message);
    }
  });

// ===== RECURSOS =====
const recursos = program.command('recursos');

recursos
  .command('criar')
  .description('Cria um novo recurso')
  .requiredOption('-d, --descricao <descricao>', 'Descrição do recurso')
  .requiredOption('-s, --status <status>', 'Status (disponivel/em_manutencao)')
  .option('-t, --tipo <id>', 'ID do tipo de recurso')
  .action(async (options) => {
    try {
      const data = {
        descricao: options.descricao,
        status: options.status
      };
      if (options.tipo) {
        data.tipoRecursoId = parseInt(options.tipo);
      }
      
      const result = await makeRequest('POST', '/recursos', data);
      console.log('Recurso criado com sucesso:', result);
    } catch (error) {
      console.error('Erro ao criar recurso:', error.message);
    }
  });

recursos
  .command('listar')
  .description('Lista todos os recursos')
  .action(async () => {
    try {
      const result = await makeRequest('GET', '/recursos');
      console.log('Recursos:', result);
    } catch (error) {
      console.error('Erro ao listar recursos:', error.message);
    }
  });

// ===== RESERVAS =====
const reservas = program.command('reservas');

reservas
  .command('criar')
  .description('Cria uma nova reserva')
  .requiredOption('-a, --aula <id>', 'ID da aula')
  .requiredOption('-r, --recurso <id>', 'ID do recurso')
  .option('-o, --observacao <observacao>', 'Observação da reserva')
  .action(async (options) => {
    try {
      const data = {
        aulaId: parseInt(options.aula),
        recursoId: parseInt(options.recurso)
      };
      if (options.observacao) {
        data.observacao = options.observacao;
      }
      
      const result = await makeRequest('POST', '/reservas', data);
      console.log('Reserva criada com sucesso:', result);
    } catch (error) {
      console.error('Erro ao criar reserva:', error.message);
    }
  });

reservas
  .command('listar')
  .description('Lista todas as reservas')
  .action(async () => {
    try {
      const result = await makeRequest('GET', '/reservas');
      console.log('Reservas:', result);
    } catch (error) {
      console.error('Erro ao listar reservas:', error.message);
    }
  });

// ===== CURRÍCULOS =====
const curriculos = program.command('curriculos');

curriculos
  .command('criar')
  .description('Cria um novo currículo')
  .requiredOption('-n, --nome <nome>', 'Nome do curso')
  .requiredOption('-i, --inicio <data>', 'Data de início da vigência (YYYY-MM-DD)')
  .requiredOption('-f, --fim <data>', 'Data de fim da vigência (YYYY-MM-DD)')
  .action(async (options) => {
    try {
      const inicio = new Date(options.inicio + 'T00:00:00.000Z').toISOString();
      const fim = new Date(options.fim + 'T00:00:00.000Z').toISOString();
      
      const result = await makeRequest('POST', '/curriculos', {
        nomeCurso: options.nome,
        dataInicioVigencia: inicio,
        dataFimVigencia: fim
      });
      console.log('Currículo criado com sucesso:', result);
    } catch (error) {
      console.error('Erro ao criar currículo:', error.message);
    }
  });

curriculos
  .command('listar')
  .description('Lista todos os currículos')
  .action(async () => {
    try {
      const result = await makeRequest('GET', '/curriculos');
      console.log('Currículos:', result);
    } catch (error) {
      console.error('Erro ao listar currículos:', error.message);
    }
  });

program.parse(process.argv); 
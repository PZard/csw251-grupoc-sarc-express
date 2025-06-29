import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';
import DisciplinaController from '../controllers/DisciplinaController.js';
import TelefoneController from '../controllers/TelefoneController.js';
import TurmaController from '../controllers/TurmaController.js';
import AvaliacaoController from '../controllers/AvaliacaoController.js';
import AlunoTurmaController from '../controllers/AlunoTurmaController.js';
import AulaController from '../controllers/AulaController.js';
import ConteudoController from '../controllers/ConteudoController.js';
import ChamadaController from '../controllers/ChamadaController.js';
import ReservaController from '../controllers/ReservaController.js';
import RecursoController from '../controllers/RecursoController.js';
import CaracteristicaController from '../controllers/CaracteristicaController.js';
import CurriculoController from '../controllers/CurriculoController.js';

const router = express.Router();

router.post('/usuarios', (req, res) => UsuarioController.create(req, res));
router.get('/usuarios', (req, res) => UsuarioController.getAll(req, res));
router.get('/usuarios/:email', (req, res) => UsuarioController.getById(req, res));
router.put('/usuarios/:email', (req, res) => UsuarioController.update(req, res));
router.delete('/usuarios/:email', (req, res) => UsuarioController.delete(req, res));

router.post('/disciplinas', (req, res) => DisciplinaController.create(req, res));
router.get('/disciplinas', (req, res) => DisciplinaController.getAll(req, res));
router.get('/disciplinas/:codDisciplina', (req, res) => DisciplinaController.getById(req, res));
router.put('/disciplinas/:codDisciplina', (req, res) => DisciplinaController.update(req, res));
router.delete('/disciplinas/:codDisciplina', (req, res) => DisciplinaController.delete(req, res));

router.post('/telefones', (req, res) => TelefoneController.create(req, res));
router.get('/telefones', (req, res) => TelefoneController.getAll(req, res));
router.get('/telefones/:id', (req, res) => TelefoneController.getById(req, res));
router.put('/telefones/:id', (req, res) => TelefoneController.update(req, res));
router.delete('/telefones/:id', (req, res) => TelefoneController.delete(req, res));

router.post('/turmas', (req, res) => TurmaController.create(req, res));
router.get('/turmas', (req, res) => TurmaController.getAll(req, res));
router.get('/turmas/:id', (req, res) => TurmaController.getById(req, res));
router.put('/turmas/:id', (req, res) => TurmaController.update(req, res));
router.delete('/turmas/:id', (req, res) => TurmaController.delete(req, res));

router.post('/avaliacoes', (req, res) => AvaliacaoController.create(req, res));
router.get('/avaliacoes', (req, res) => AvaliacaoController.getAll(req, res));
router.get('/avaliacoes/:id', (req, res) => AvaliacaoController.getById(req, res));
router.put('/avaliacoes/:id', (req, res) => AvaliacaoController.update(req, res));
router.delete('/avaliacoes/:id', (req, res) => AvaliacaoController.delete(req, res));

router.post('/aluno-turmas', (req, res) => AlunoTurmaController.create(req, res));
router.get('/aluno-turmas', (req, res) => AlunoTurmaController.getAll(req, res));
router.get('/aluno-turmas/:id', (req, res) => AlunoTurmaController.getById(req, res));
router.put('/aluno-turmas/:id', (req, res) => AlunoTurmaController.update(req, res));
router.delete('/aluno-turmas/:id', (req, res) => AlunoTurmaController.delete(req, res));

router.post('/aulas', (req, res) => AulaController.create(req, res));
router.get('/aulas', (req, res) => AulaController.getAll(req, res));
router.get('/aulas/:id', (req, res) => AulaController.getById(req, res));
router.put('/aulas/:id', (req, res) => AulaController.update(req, res));
router.delete('/aulas/:id', (req, res) => AulaController.delete(req, res));

router.post('/conteudos', (req, res) => ConteudoController.create(req, res));
router.get('/conteudos', (req, res) => ConteudoController.getAll(req, res));
router.get('/conteudos/:id', (req, res) => ConteudoController.getById(req, res));
router.put('/conteudos/:id', (req, res) => ConteudoController.update(req, res));
router.delete('/conteudos/:id', (req, res) => ConteudoController.delete(req, res));

router.post('/chamadas', (req, res) => ChamadaController.create(req, res));
router.get('/chamadas', (req, res) => ChamadaController.getAll(req, res));
router.get('/chamadas/:id', (req, res) => ChamadaController.getById(req, res));
router.put('/chamadas/:id', (req, res) => ChamadaController.update(req, res));
router.delete('/chamadas/:id', (req, res) => ChamadaController.delete(req, res));

router.post('/reservas', (req, res) => ReservaController.create(req, res));
router.get('/reservas', (req, res) => ReservaController.getAll(req, res));
router.get('/reservas/:id', (req, res) => ReservaController.getById(req, res));
router.put('/reservas/:id', (req, res) => ReservaController.update(req, res));
router.delete('/reservas/:id', (req, res) => ReservaController.delete(req, res));

router.post('/recursos', (req, res) => RecursoController.create(req, res));
router.get('/recursos', (req, res) => RecursoController.getAll(req, res));
router.get('/recursos/:idRecurso', (req, res) => RecursoController.getById(req, res));
router.put('/recursos/:idRecurso', (req, res) => RecursoController.update(req, res));
router.delete('/recursos/:idRecurso', (req, res) => RecursoController.delete(req, res));

router.post('/caracteristicas', (req, res) => CaracteristicaController.create(req, res));
router.get('/caracteristicas', (req, res) => CaracteristicaController.getAll(req, res));
router.get('/caracteristicas/:id', (req, res) => CaracteristicaController.getById(req, res));
router.put('/caracteristicas/:id', (req, res) => CaracteristicaController.update(req, res));
router.delete('/caracteristicas/:id', (req, res) => CaracteristicaController.delete(req, res));

router.post('/curriculos', (req, res) => CurriculoController.create(req, res));
router.get('/aulas/calendario/:alunoEmail', (req, res) => AulaController.getCalendario(req, res));
router.get('/chamadas/historico/:alunoEmail', (req, res) => ChamadaController.getHistorico(req, res));
router.get('/avaliacoes/programadas/:alunoEmail', (req, res) => AvaliacaoController.getProgramadas(req, res));
router.put('/turmas/:id/atribuir-professor', (req, res) => TurmaController.atribuirProfessor(req, res));

export default router;
import { ERROR_INVALID_ID } from "../errors/errors";
import { findPacienteById } from "../repositories/pacientes/pacientes.repository";

export default async function verifyValidId(req, res, next) {
  const { id } = req.params;

  const paciente = await findPacienteById(id);

  if (paciente) {
    return res.status(404).json({ err: ERROR_INVALID_ID });
  }

  next();
}

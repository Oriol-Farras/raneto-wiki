/*
Title: 7. Arquitectura Tècnica
Sort: 7
*/

# Arquitectura Tècnica (Breu resum)

Per entendre la potència d'Open WebUI, cal mirar què hi ha sota la caputxa:

- **Frontend:** Desenvolupat amb **SvelteKit**, que permet una interfície extremadament ràpida i fluida.
- **Backend:** Utilitza **Python** amb **FastAPI**, ideal per gestionar les crides a models d'IA amb baixa latència.
- **Base de dades:** SQLite o PostgreSQL per a la gestió d'usuaris i historials de xat.
- **Contenidors:** Està dissenyat per ser executat amb **Docker**, cosa que garanteix que funcioni igual en qualsevol sistema operatiu (Windows, Linux, Mac).

### Integracions clau:
- **Ollama:** Per a models locals.
- **OpenAI/Anthropic APIs:** Per a models híbrids.
- **ComfyUI/Automatic1111:** Per a la generació d'imatges dins del mateix xat.
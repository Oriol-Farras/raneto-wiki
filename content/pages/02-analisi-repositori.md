/*
Title: 2. Anàlisi del Repositori (Arqueologia de Codi)
Description: Dades del GitHub, anàlisi de commits històrics, conflictes i fites tècniques.
Sort: 2
*/

## Dades Vives (Gener 2025)
*   **Popularitat:** +80k Stars, +20k Forks.
*   **Velocitat:** El projecte es mou a una velocitat vertiginosa, tancant centenars de Pull Requests setmanals. Això demostra que no està en "mode manteniment", sinó en expansió agressiva.

## Fites Històriques i Curiositats del Codi

### 1. La "Gran Unificació": Variable i Tensor (v0.4.0 - Abril 2018)

Si reviseu la història del git, trobareu un punt d'inflexió massiu el 2018.

*   **El problema:** Antigament, per calcular gradients, havies d'embolicar les dades: `Variable(Tensor(data))`. Això era redundant i confús per als júniors.
*   **La solució (Refactor Èpic):** Els desenvolupadors van fusionar les classes `Tensor` i `Variable` en el codi C++ (llibreria ATen). Això va simplificar enormement l'API, però va requerir reescriure el nucli del sistema.

### 2. El conflicte "Caffe2 Merge" (Març 2018)

Aquest és un exemple fascinant de política d'empresa reflectida al codi.

*   **Context:** Facebook tenia dos fills: PyTorch (Recerca/Lent) i Caffe2 (Producció/Ràpid/Mòbil).
*   **El Merge:** Per evitar duplicar feina, van decidir fusionar Caffe2 *dins* del repositori de PyTorch.
*   **Resultat:** Avui dia, si mireu el codi font a `csrc/`, encara hi trobareu vestigis d'aquesta fusió. Va ser un moviment crític per convertir PyTorch en una eina "end-to-end", capaç d'anar del laboratori al telèfon mòbil.

### 3. El drama del suport a Windows

Durant els primers 2 anys, PyTorch era "Linux/Mac only".

*   **El conflicte:** Els fils d'Issues a GitHub estaven plens d'usuaris de Windows enfadats. Els *Core Devs* (que treballaven amb servidors Linux) eren reticents a mantenir la complexitat de Windows.
*   **La comunitat al rescat:** Va ser la comunitat externa qui va forçar i liderar els primers ports a Windows, fins que finalment es va acceptar oficialment.

### 4. La resposta a JAX: PyTorch 2.0 (2022-2023)

L'últim gran canvi al repositori ha estat la introducció de `torch.compile`.

*   **El motiu:** Google va treure JAX, que era molt més ràpid gràcies a la compilació XLA.
*   **La reacció:** PyTorch va haver de trencar la seva filosofia de "només Python pur" per introduir un compilador JIT seriós i no perdre la corona del rendiment.

## Infraestructura de Desenvolupament

### Control de Versions: Git i GitHub
PyTorch utilitza **Git** com a sistema de control de versions, amb el repositori principal allotjat a **GitHub** (`pytorch/pytorch`). L'ús de GitHub no és casual: facilita la col·laboració oberta i l'automatització de processos.

**Workflow de desenvolupament:**

*   **Branques principals:** `main` (desenvolupament), `viable/strict` (versions estables)
*   **Model de PR:** Obligatori passar revisió de codi + tests automàtics abans de fusionar
*   **Politica de commits:** Squash commits per mantenir l'historial net
*   **Signatura de commits:** No obligatòria, però recomanada per a core contributors

### Bug Tracking i Gestió de Tasques: GitHub Issues

El sistema de **GitHub Issues** actua com a hub centralitzat per a múltiples propòsits:

*   **Bugs:** Etiquetats amb labels com `bug`, `high priority`, `triaged`
*   **Feature Requests:** La comunitat proposa noves funcionalitats (label: `enhancement`)
*   **Discussions:** Issues marcades com `question` per a dubtes tècnics
*   **Volum:** ~10.000 issues obertes simultàniament, amb temps de resposta mitjà de 2-3 dies per a bugs crítics
*   **Triage:** Equip dedicat que classifica i assigna prioritats diàriament

**Particularitat:** PyTorch també utilitza **Discussions** de GitHub per a converses més llargues sobre arquitectura o roadmap, separant-les dels bugs concrets.

### Documentació: Sphinx i Hosting Oficial

La documentació de PyTorch es genera amb **Sphinx**, l'eina estàndard de Python per a documentació tècnica:

*   **Font:** Fitxers `.rst` (reStructuredText) i docstrings en el codi Python
*   **Build automatitzat:** Cada PR que modifica docstrings desencadena una preview de la documentació
*   **Hosting:** [pytorch.org/docs](https://pytorch.org/docs) - allotjat en CDN per a velocitat global
*   **Versionat:** Documentació separada per a cada versió major (1.x, 2.0, 2.1, etc.)
*   **Multiidioma:** Suport per a traduccions comunitàries (Xinès, Coreà, Japonès)

**Curiositat:** La documentació s'actualitza automàticament cada 6 hores des de la branca `main`, permetent veure canvis recents abans del release oficial.

### CI/CD: GitHub Actions i PyTorch HUD
PyTorch té un dels sistemes de **Continuous Integration** més complexos de l'ecosistema Python:

**GitHub Actions (Build i Tests):**

*   **Matriu de tests massiva:** Cada PR executa +100.000 tests en ~50 configuracions diferents
    *   Sistemes operatius: Linux (Ubuntu, CentOS), Windows, macOS
    *   Versions Python: 3.8, 3.9, 3.10, 3.11, 3.12
    *   Hardware: CPU, CUDA 11.8, CUDA 12.1, ROCm (AMD), CPU-only
*   **Temps d'execució:** Un cicle complet de CI triga 4-6 hores
*   **Infraestructura:** Utilitzen runners self-hosted amb GPUs NVIDIA proporcionades per Meta

**PyTorch HUD (Health Dashboard):**

*   **Eina pròpia:** [hud.pytorch.org](https://hud.pytorch.org) - dashboard interna per monitoritzar la salut del repositori
*   **Funcionalitat:**
    *   Visualització de flakiness tests (tests intermitents que fallen aleatòriament)
    *   Tracking de temps de build per identificar regressions de rendiment
    *   Alertes automàtiques quan la success rate de CI baixa del 95%
*   **Accés:** Públic en mode lectura, permet a la comunitat veure l'estat real del projecte

**Deployment:**

*   **PyPI:** Builds automàtics de wheels per a totes les plataformes cada release
*   **Conda:** Integració amb conda-forge per a distribució alternativa
*   **Docker:** Imatges oficials a Docker Hub, actualitzades amb cada nightly build

---
**Següent:** [3. Governança i Comunitat](/cas-estudi-pytorch/03-governanca-comunitat)

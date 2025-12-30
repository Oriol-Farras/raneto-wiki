/*
Title: 1. Introducció i Història: De Lua a Python
Description: Orígens de PyTorch, filosofia tècnica i evolució des de Torch7.
Sort: 1
*/

## Introducció: Què és realment PyTorch?
Més enllà de ser una simple llibreria, **PyTorch** s'ha convertit en el "sistema operatiu" de la recerca en Intel·ligència Artificial moderna. Tècnicament, es defineix com una llibreria de tensors optimitzada per a GPU (basada en nuclis CUDA) unida a un sistema de diferenciació automàtica de "cinta" (*tape-based autograd*).

El seu domini és absolut en l'àmbit acadèmic: més del 75% dels *papers* publicats a conferències com NeurIPS o ICML utilitzen PyTorch, havent desplaçat completament a TensorFlow (Google) en el món de la recerca.

### Informació Tècnica Actual
*   **Pàgina Web Oficial:** [pytorch.org](https://pytorch.org)
*   **Versió Estable Actual:** PyTorch 2.5.1 (llançada el desembre de 2024)
*   **Llicència:** BSD-3-Clause (codi obert)
*   **Repositori Principal:** [github.com/pytorch/pytorch](https://github.com/pytorch/pytorch)

### Requisits Funcionals

Per executar PyTorch correctament, es requereix:

*   **Python:** Versions 3.8 a 3.12 (suport oficial)
*   **Sistema Operatiu:** Linux, macOS, Windows
*   **Hardware:**
    *   CPU: Qualsevol processador x86_64 modern (suport AVX2 recomanat)
    *   GPU: NVIDIA amb CUDA 11.8+ o 12.1+ / AMD amb ROCm 5.7+ / Apple Silicon (MPS)
*   **Dependencies Core:** NumPy, typing-extensions
*   **Memòria:** Mínim 8GB RAM (16GB+ recomanat per a models grans)
*   **Espai en Disc:** ~1-2GB per a instal·lació bàsica (fins a 10GB amb eines de desenvolupament)


## Els Orígens: L'Avi "Torch" i el problema de Lua

La història no comença el 2016. PyTorch és el successor espiritual de **Torch7**, un framework desenvolupat a principis dels 2000 que utilitzava **Lua** com a llenguatge d'interfície.

*   **El Llegat:** Torch7 era molt ràpid i usat internament per Facebook i DeepMind.
*   **El Problema:** Lua és un llenguatge excel·lent però minoritari. Quan Python va començar a dominar la ciència de dades (amb Pandas, NumPy, Scikit-Learn), Torch es va quedar aïllat. No tenia ecosistema.

## El Naixement (2016-2017) i la Filosofia "Python First"

El 2016, **Soumith Chintala** (FAIR), juntament amb **Adam Paszke** i **Sam Gross**, van decidir reescriure el concepte de Torch per a l'ecosistema Python.

*   **La Clau de l'Èxit:** A diferència de TensorFlow 1.x, que obligava a aprendre un "nou llenguatge" basat en grafs estàtics, PyTorch es comportava com Python natiu. Podies fer servir `pdb` (Python Debugger) o simples `print()` per veure què passava dins la xarxa neuronal.
*   **Grafs Dinàmics (Eager Execution):** Aquesta va ser la gran innovació. La xarxa es construeix mentre s'executa, la qual cosa permetia arquitectures variables (molt útils per a NLP) que a TensorFlow eren un malson d'implementar.

## Fites Històriques Clau
*   **2016:** Llançament inicial (v0.1.0) com a projecte de Facebook AI Research
*   **2017:** PyTorch 0.2 introdueix suport per a Windows i millores en autograd
*   **2018:** PyTorch 1.0 fusiona Caffe2 i introdueix TorchScript per a producció
*   **2020:** Transició de Facebook a la Linux Foundation (neutralitat)
*   **2023:** PyTorch 2.0 amb `torch.compile()` - revoluciona el rendiment mitjançant compilació JIT


---
**Següent:** [2. Anàlisi del Repositori i Arqueologia](/cas-estudi-pytorch/02-analisi-repositori)

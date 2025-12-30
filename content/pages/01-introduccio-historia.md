/*
Title: 1. Introducció i Història: De Lua a Python
Description: Orígens de PyTorch, filosofia tècnica i evolució des de Torch7.
Sort: 1
*/

## Introducció: Què és realment PyTorch?
Més enllà de ser una simple llibreria, **PyTorch** s'ha convertit en el "sistema operatiu" de la recerca en Intel·ligència Artificial moderna. Tècnicament, es defineix com una llibreria de tensors optimitzada per a GPU (basada en nuclis CUDA) unida a un sistema de diferenciació automàtica de "cinta" (*tape-based autograd*).

El seu domini és absolut en l'àmbit acadèmic: més del 75% dels *papers* publicats a conferències com NeurIPS o ICML utilitzen PyTorch, havent desplaçat completament a TensorFlow (Google) en el món de la recerca.

## Els Orígens: L'Avi "Torch" i el problema de Lua
La història no comença el 2016. PyTorch és el successor espiritual de **Torch7**, un framework desenvolupat a principis dels 2000 que utilitzava **Lua** com a llenguatge d'interfície.
*   **El Llegat:** Torch7 era molt ràpid i usat internament per Facebook i DeepMind.
*   **El Problema:** Lua és un llenguatge excel·lent però minoritari. Quan Python va començar a dominar la ciència de dades (amb Pandas, NumPy, Scikit-Learn), Torch es va quedar aïllat. No tenia ecosistema.

## El Naixement (2016-2017) i la Filosofia "Python First"
El 2016, **Soumith Chintala** (FAIR), juntament amb **Adam Paszke** i **Sam Gross**, van decidir reescriure el concepte de Torch per a l'ecosistema Python.
*   **La Clau de l'Èxit:** A diferència de TensorFlow 1.x, que obligava a aprendre un "nou llenguatge" basat en grafs estàtics, PyTorch es comportava com Python natiu. Podies fer servir `pdb` (Python Debugger) o simples `print()` per veure què passava dins la xarxa neuronal.
*   **Grafs Dinàmics (Eager Execution):** Aquesta va ser la gran innovació. La xarxa es construeix mentre s'executa, la qual cosa permetia arquitectures variables (molt útils per a NLP) que a TensorFlow eren un malson d'implementar.

---
**Següent:** [2. Anàlisi del Repositori i Arqueologia](/cas-estudi-pytorch/02-analisi-repositori)

## Load 3D Model ##

This dialog loads a 3D protein model into xiVIEW. Once loaded, the structure is aligned to the search protein sequences and the [3D (NGL) view](./views/3dngl.html) opens automatically, showing crosslinks superimposed on the structure. The alignment between the search sequences and the chains in the model can be viewer in the [alignment view](./views/alignment.html) or by selecting "3D Model Aligned Region" from the [annotations menu](./menu/annotations.html).

### Loading Options ###

**Local Filesystem**

Click "Select PDB or mmCIF Files" to choose one or more `.pdb` or `.cif` (mmCIF) files from your local disk.

**By Accession**

Enter one or more 4-character PDB IDs (e.g. `1AO6`) into the text field, separated by spaces, then press Enter or the submit button. The structures are fetched directly from [RCSB PDB](https://www.rcsb.org/).

<video controls width="100%">
  <source src="../vid/load-3d-accession.webm" type="video/webm">
</video>

**AlphaFold**

Click "AlphaFold Structure" to fetch the predicted structure for a protein from the [EBI AlphaFold database](https://alphafold.ebi.ac.uk/). Exactly one protein must be selected in the network view.

<video controls width="100%">
  <source src="../vid/load-alphafold.webm" type="video/webm">
</video>

**PDB Query Service**

Click "Show PDBs Matching UniProt Accessions @ RCSB.org" to open a pre-built RCSB search in a new tab. The query uses the UniProt accession numbers of the currently selected proteins (or all proteins if none are selected) to find relevant PDB entries.

### Results ###

After loading, a results bar reports success or failure:

- On **success**: the number of sequence chains matched between the search proteins and the PDB structure is shown, and the 3D (NGL) view opens.
- On **failure**: the reason is reported (e.g. no matching sequences found, invalid PDB code, network error). Check that the PDB code is correct and that the structure contains at least one protein sequence present in the search data. 

!!! warning
xiVIEW uses the NGL Viewer which does not support all .cif files. Specifically, it does not support models without atomic resolution, i.e. the coarse grained models used in CIF-IHM. These models can be viewed using the [MolStar viewer at RCSB](./tutorials.html#viewing-crosslinks-using-molstar-at-rscb).

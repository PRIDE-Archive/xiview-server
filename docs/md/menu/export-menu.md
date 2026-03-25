## Export Menu ##

The Export menu provides options for downloading data from the current session in various formats. All exports reflect the current filter state — only data that passes the active filters is included.

### As a CSV File ###

- **Filtered Matches** — one row per match, with all match-level attributes (peptide sequences, scores, charge, scan number, etc.).
- **Filtered Crosslinks** — one row per unique crosslink position, aggregated across matches.
- **Filtered PPI** — one row per protein-protein interaction pair, with the count of supporting crosslinks.
- **Filtered Residues** — count of filtered crosslinks per residue position.
- **Filtered Modification Count** — count of each modification type across filtered matches.
- **Protein Accession list** — a single-row CSV of accession numbers for all currently visible proteins.
<!-- - **Groups** — protein accessions with a `complex` column indicating group membership (as defined in the Groups menu).

### As an SSL File ###

- **Filtered Matches** — exports filtered matches in SSL format for quantitation in [Skyline](https://skyline.ms/).
-->
### AlphaLink2 ###

- **AlphaLink2 for selected proteins** — exports a CSV file and corresponding FASTA for use with [AlphaLink2](https://github.com/Rappsilber-Laboratory/AlphaLink2) predicted structure analysis. *Prototype: exported FDR values are currently set to 0.05.*

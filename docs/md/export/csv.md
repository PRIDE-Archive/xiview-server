## CSV Export ##

The export menu offers the ability to export five types of information in CSV (Comma Separated Value) format:

1. Filtered Cross-Links
1. Filtered Matches
1. Filtered PPI (Protein-Protein Interactions)
1. Filtered Residues
2. Filtered Protein Accession List

The Cross-Links export option will output a CSV containing the Cross-Link ID, position of the ends of the cross-link in terms of protein, peptide start position and position within the peptide. Other columns in the CSV will describe the number of matches, the highest score, and the validation status of the Cross-Link. If a PDB file has been loaded the distance and PDB co-ordinates of the link will be output if the Cross-Link has a valid distance. The shortest non-homomultimeric distance is chosen if multiple distances can be attached to the Cross-Link. Finally, for aggregated searches a column per search is present, indicating if the Cross-Link occurred in that particular search or not.

The Matches export option performs a similar function to matches. Extra columns here include raw peptide sequences, charge, mass (experimental and calculated), mass/charge ratio, mass error, scan numbers and indices, crosslinker mass, fragment tolerance and ion types. Not all of these may be populated - it will depend on whether they are present in the input data. Similarly, distance data is also output if present, with the nuance that ambiguous matches can have multiple distances (the shortest one for each cross-link they could represent), and these are supplied as quoted comma-separated lists (so they won't break the csv format).

The PPI export produces a three column CSV file where the rows consist of all combinations of protein pairings that have one or more filtered crosslinks. The first two columns are the proteins and the third column the number of filtered crosslinks between them.

The Residues export option outputs a much simpler CSV file indicating how many times certain residues (AAs) turn up in the cross-link data set and how often each pairing of residue occurs. This is useful for confirming that cross-links only go between given residues.

The simplest of all is the Protein Accession List export, which produces a single row CSV file of currently visible proteins' accession numbers, separated by commas.

All exported CSV files are saved with timestamped file names that include a shorthand of the current data filter state.
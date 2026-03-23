## Import Cross-Link Metadata from a CSV File ##

This feature presents a dialog with just two options - firstly, to load a CSV file to import metadata onto existing cross-links, and secondly, a link to this page in the XiView documentation.

The first option will allow the user to select a file and load it, and the dialog will then report on the success of merging the CSV file with the existing cross-links: how many cross-links have been affected and have many columns (attributes) of metadata were loaded for them. 

If this is successful then the user will now have access to extra colour schemes in the [Legend View](../views/legend.html "Legend") based on the metadata, and the [Histogram](../views/histogram.html "Histogram") and [Scatterplot](../views/scatterplot.html "Scatterplot") will now have options to plot this metadata. 

### Expected CSV Format

The CSV parser here is looking to key on a cross-link's positional information, which is spread across four separate columns (`Protein 1, SeqPos 1, Protein 2, SeqPos 2`). Both Sequence positions are simply numbers, and the Protein fields use the SwissProt format (`sp|Accession|Name`). Every other column in the CSV file is regarded as metadata and are parsed and added as new or overwriting metadata attributes (with the attribute name taken from the header row) to the relevant cross-links. Each column is expected to be either numeric in value or a hexadecimal colour format. Columns with a discrete number of unique values are parsed as categorical attributes when used as colour scales.

A simple example of such a CSV file is given here:

    Protein 1,SeqPos 1,Protein 2,SeqPos 2,Quantitation,Fixed Colour
    Sp|P02768-A|ALBU_HUMAN,107,Sp|P02768-A|ALBU_HUMAN,466,57.07,#FF8800
    Sp|P02768-A|ALBU_HUMAN,126,Sp|P02768-A|ALBU_HUMAN,426,52.04,#FFaa00

Here, Quantification and Fixed Colour are metadata columns. Quantification is numeric and Fixed Colour is a fixed set of colours.

### PPI Format

To load PPI level metadata simply omit the values in the `SeqPos 1` and `SeqPos 2` columns. The metadata values will then be applied to all crosslinks that link the two proteins in each row.

    Protein 1,SeqPos 1,Protein 2,SeqPos 2,STRING
    Sp|O00268|TAF4_HUMAN,,Sp|P49848|TAF6_HUMAN,,0.512
    Sp|O00268|TAF4_HUMAN,,Sp|Q16594|TAF9_HUMAN,,0.852

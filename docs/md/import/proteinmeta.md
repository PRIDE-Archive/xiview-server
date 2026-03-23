## Importing Protein Metadata from a CSV File ##

Imported protein metadata can be used to colour the protein via 'View' > 'Legend & Colours'

A simple example of such a CSV file is given here:

    ProteinID,Name,Quantification,Complex
    P02768,A Human protein,423,ribosome

The columns 'Name' and 'Complex' are special cases.

'Name' changes the name of the protein with that ID,
if you save the layout the new names are also saved in that layout.

'Complex' places the protein in a group with that name,
groups are also saved in the layout.

All other metadata columns are treated as follows:

 - if they contain only hex colour values the protein is given that colour,

 - if they contain only numerical values they are given a threshold scale with a range slider,

 - anything else is assigned a categorical colour scheme based on the contents of the column.

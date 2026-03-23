## Importing Bespoke Annotation Data from a CSV File ##

This feature presents a dialog with just two options - firstly, to load a CSV file to import bespoke user annotations, and secondly, a display of the format of CSV file the dialog expects in the first case.

The first option will allow the user to select a file and load it, and the dialog will then report on the success of parsing the annotation file. If successful, extra annotation types will be available under the top-level "Annotations" menu.

The "Expected CSV format" accordion reveals that the CSV parser is looking for five column names with the following information in the rows

- ProteinID - SwissProt style ID of the protein (it can key on just name or annotation as well).
- AnnotName - The name of the annotation type.
- StartRes - The start position of the annotation in the search protein sequence.
- EndRes - The end position of the annotation in the search protein sequence.
- Color - The colour of the annotation type. This is fixed the first time the parser finds a row with a new annotation type. Changing the colour in a subsequent row has no effect.

A simple example of such a CSV file is given here:

    ProteinID,AnnotName,StartRes,EndRes,Color
    sp|P02768-A|ALBU_HUMAN,Strand,9,10,yellow
    sp|P02768-A|ALBU_HUMAN,Strand,85,89,yellow
    sp|P02768-A|ALBU_HUMAN,Strand,113,116,yellow
    sp|P02768-A|ALBU_HUMAN,Strand,717,722,yellow
    sp|P02768-A|ALBU_HUMAN,Strand_XIFIGURE,764,769,green
    sp|P02768-A|ALBU_HUMAN,Strand,775,784,yellow
    sp|P02768-A|ALBU_HUMAN,Strand,795,802,yellow
    sp|P02768-A|ALBU_HUMAN,Helix,219,225,blue

Here are eight user-defined annotations on protein P02768-A [ALBU HUMAN]. The annotation type "Strand" is given the colour yellow and the type "Helix" blue. To allow marking out one of the Strands with a different colour it has been given a different type name - "Strand_XIFIGURE"
## Annotations Menu ##

The Annotations dropdown lists all available sequence annotation types as a set of checkboxes. Checked annotation types are displayed as coloured bars overlaid on protein sequence representations in [xiNET](../views/xinet.html).

### Showing and Hiding Annotations ###

Click the checkbox next to an annotation type to toggle its visibility. When an annotation type is shown, a coloured swatch appears next to its name. Clicking the swatch opens a colour picker, allowing the display colour to be changed.

### Annotation Types ###

**Built-in annotations** (always present):

- *Amino Acids / Digestible* — marks residues that are cleavable by the enzyme used in the search, as inferred from the search data.
- *3D Alignment / 3D structure aligned region* — marks regions of each protein sequence that align to a currently loaded 3D structure. Appears automatically after a PDB file is successfully loaded.

<!-- **UniProt feature annotations** — populated automatically from UniProt data embedded in the loaded search results. These include features such as domains, binding sites, active sites, post-translational modifications, and secondary structure elements, organised by UniProt feature category.

**User-defined annotations** — custom annotations loaded from a CSV file via *Import → Sequence Annotations*. Each annotation type defined in the file appears here as a separate checkbox. See the [Sequence Annotations import page](../import/userannotations.html) for the expected file format.
-->
### Download Annotation Key as SVG ###

The "Download Annotation Key as SVG" button exports a legend of all currently shown annotation types as an SVG file. The button is disabled when no annotation types are checked.

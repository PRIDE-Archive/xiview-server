## 3D (NGL) View ##

![3D View](../../img/3d.png)

This view integrates the NGL 3D viewer (see references below) within Xi, showing the currently filtered cross-links in the context of a chosen PDB structure.

### Representation ###

The majority of the panel is devoted to a 3D representation of the loaded PDB file. Proteins are shown as configurable structures with cross-links superimposed on top as elongated coloured bars. Residues at either end of the cross-links are shown as small grey spheres. Cross-links where only one end is contained within the PDB are shown as residues.

Within this panel are two short pieces of textual information giving the PDB filename and the coverage it has of the proteins and cross-links in the search. This coverage can range from complete (100%) for single proteins with a fully covering PDB to tiny fractions (1-2%) for large protein complexes. The number of cross-links can similarly vary from all of the currently filtered cross-links to only a handful where a PDB covers only a small fraction of the search proteins. As a rule of thumb a PDB file that covers only 50% of the protein sequences in a search can expect to display 25% (0.5 squared) of the full link set (both residues are covered) and 50% of the remaining links with one residue covered. For 10% coverage this drops to 1% (0.1 squared) for full links and 18% for half links.

### Direct Interaction ###

Positional manipulation of the view is performed by clicking anywhere on the view and dragging the mouse pointer with the following effects:

* Left-click and drag - rotates structure around XY axes (up/down drags around X axis, left/right around Y axis)
* Right-click, CTRL key and drag - rotates structure around Z axis
* Right-click and drag - pans structure in XY plane
* Left-click, CTRL key and drag - pans structure in XY plane (same as above)
* Left-click, SHIFT key and drag - zooms in/out of structure
* Mouse-wheel - zooms in/out of structure (same as above)
* Mouse-wheel and SHIFT key - moves the near clip and far fog effects in and out of the z-axis. Useful for seeing slices of structure but beware doing it by accident. If you're seeing large parts of the structure cut off when you rotate it this is what you've done.

Pressing certain keys also performs operations on the view:

* 'R' - Re-position the structure so it sits in the centre of the window
* 'I' - Slowly rotates the structure around the Y-axis - toggle back off by pressing 'I' again
* 'K' - Slowly oscillate the structure around the Y-axis - aids depth perception of structure

A more in-depth manual for NGL is available here --> [NGL Manual](http://nglviewer.org/ngl/api/manual/index.html "http://nglviewer.org/ngl/api/manual/index.html")

Like the other views in xiVIEW, individual cross-links can be highlighted by moving the mouse pointer over them (plus a tooltip supplies details on the particular cross-link). Similarly, cross-links can be selected by using the left mouse button. In conjunction with the CTRL key, multiple cross-links can be selected (by clicking on unselected links) and currently selected cross-links can be unselected.

Clicking with the left mouse button on the background of the view will clear all selections.

### Options ###

There are a number of options available that can affect the visual presentation of the cross-links in the 3D view.

The "Re-Centre" button re-centres the structure within the panel (also available by pressing "R".)

There are three single selection drop-downs for choosing the parts of the PDB to display and for styling the protein structure itself. The first, "Assembly", offers a choice of which biological assembly within the PDB file to display. The default is the whole PDB structure, and other options may include UnitCell (usually the same thing), SuperCell (multiple copies of the PDB arranged spatially) and various Biological Assemblies. These Biological Assemblies can range in scale from part of the PDB, through matching the PDB exactly, up to being composed of multiple copies of the PDB - experimentation with these settings is the only way to find out for certain though details on definitions can be found at [https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/biological-assemblies](https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/biological-assemblies "Biological Assemblies").

The choice of assembly is important as it also usually constrains the PDB sub-structure on which cross-link distances will be calculated. For instance with PDB 1AO6, choosing to display the full PDB (two adjacent copies of the same protein) will look for possible cross-links within *and between* those two proteins. Choosing to display just one of the proteins (Bio-Assembly 1 or 2) will limit cross-link calculation to within just this protein.

The second, "Draw Proteins", changes the style of the protein representation. The default is "Cartoon" with other styles described here --> [NGL Representation Styles]("http://nglviewer.org/ngl/api/manual/molecular-representations.html"). In practice, they range from atom-level representations like "Point" or "Ball+Stick" to more abstract representations such as "Rope" or "Cartoon".

The third selection dropdown, "Colour Proteins", controls the colouring of the protein representations. They range from the default "Uniform" grey colouring to colour schemes that change on a per-atom or per-residue basis such as "Element" or "Residue Name". Consequently, some colour schemes are only useful in conjunction with given representation styles e.g. the "Element" colour scheme works with "Ball+Stick" but has no effect in the "Cartoon" representation. A full list of NGL colour schemes can be found here --> [NGL Colour Schemes]("http://nglviewer.org/ngl/api/manual/coloring.html"). There is one XiView specific scheme - "Residues with Half-Links" - that highlights residues that form one end of a cross-link where the other end is out of scope of the PDB structure.

Another drop-down menu, "Show", holds several options for setting various decorations on the protein structure, and some options for controlling how cross-links are superimposed upon the structure.

For cross-links there are three independent options, we can:

1. Show selected cross-links only - this reduces clutter and selected cross-links aren't obscured by unselected cross-links, which is particularly noticeable in 3D.
2. Show shortest possible cross-links only - in PDB structures with multiple copies of a protein, there are multiple places a cross-link could be positioned. E.g. in a dimer structure (protein copies A and B) a cross-link between positions 1 and 2 could have four possible solutions, A1-A2, A1-B2, B1-A2 or B1-B2. This setting, selected by default, tells the view to show only the shortest possible cross-link out of these possibilities.
3. Show Inter-Model distances - PDB structures are sometimes divided into separate models. These models may not be accurately aligned to each other or may even be a number of slightly different alternative structures occupying the same space, and thus distances between them may be meaningless. By default this option is set to off, but can be checked and will then calculate distances between residues in different PDB models.

The other available options under "Show" are

* Show Cross-Linked Residues - represent residues as balls at the ends of displayed cross-links.
* Show All Proteins - show proteins in multiple protein PDBs that aren't potentially involved in the current set of filtered cross-links. 
* Show Distance Labels - displayed cross-links are annotated with a small label showing their length in Angstroms. These show up regardless for selected or highlighted cross-links.
* Protein Chain Label Style - Long, Short, None, Fixed Size - a set of radio buttons for deciding the content of the label annotating each protein. Long for a verbose description which NGL pulls from the PDB file (plus the short description), short for a label with the protein name and chain index, and none to remove these labels altogether. A final checkbox, "Fixed Size", determines whether these labels stay a fixed size when the structure is zoomed in or out.

Finally, the "Export" dropdown offers three options for exporting various parts of the PDB/cross-links combinations.

* PDB & Cross-Links - Exports a basic copy of the PDB file (ATOM records only) with a number of LINK and CONECT files that represent cross-links that can be fully plotted within the structure. Since this is a PDB file, there is a limit of 100,000 atoms and structures with more than one model (NGL fuses PDBs by giving them different model indices) cannot have their inter-model cross-links successfully exported. This can be used in various molecule viewers but usually requires trial and error to figure out how to get the cross-links to appear in each one.

* Pymol Command File - Exports a Pymol command file that will reload and render the cross-links in the Pymol viewer. This supports multiple PDB files and inter-model/PDB cross-links, but obviously is limited to Pymol only.

* Haddock Distance Restraints File (not definitive)- for use with the [HADDOCK](https://haddock.science.uu.nl/services/HADDOCK2.2/) structure docker, this exports all the inter-model cross-links in a format compatible with the HADDOCK tool. These inter-model cross-links tend to be those we know exist between two pdb files, but since we cannot be sure of the PDB's relative orientation their distances are meaningless. However, HADDOCK can use their existence and restrictions based on cross-linker length to calculate the correct (or near to) orientation.
* csv export file - a plain csv file with crosslinks according to the residue numbering and Chain IDs of the pdb file.
* Chimerax Pseudobonds file - for visualizing crosslinks in [UCSF ChimeraX ](https://www.rbvi.ucsf.edu/chimerax/).
* Jwalk - for calculating solvent-accessible surface distance on the [Jwalk](http://jwalk.ismb.lon.ac.uk/jwalk/) webserver.
* XlinkAnalyzer - produces a crosslink and a session file for visualization with the [UCSF Chimera](https://www.cgl.ucsf.edu/chimera/) plugin XlinkAnalyzer(https://www.embl-hamburg.de/XlinkAnalyzer/XlinkAnalyzer.html) for visualizing crosslinks *and interactively moving* subunits with links displayed.

There is one remaining button which sits by itself, "Download Image as PNG", which will download a PNG (bitmap format) file of the current state of the 3D view. A vector graphic format is not available for this view. The filename will include information on search id and current filter settings.


### Using the exported files ###
* Pymol Command File - Place the pymol command file (.pml) in the same folder as the .pdb file you are analysing. If you have downloaded coordinates using a pdb code, then this can be anywhere in your computer, as the command file will instruct pymol to download the coordinates again. Open pymol, and from within pymol, open the command file - this will load the structure and the links. Often, it is preferable to then type the command "set dash\_gap, 0" and then "set dash\_width, 5", to make the crosslinks solid and more visible
* Haddock Distance Restraints File - this file can be used as ambiguous restraints in HADDOCK to dock multiple proteins together. Currently, this only works if each pdb file loaded into NGL viewer is made of a single chain. To obtain tables to dock protein complexes, each pdb file has to be formatted as a single chain, with non-overlapping residue numbering. 
* Chimerax pseudobond file - The file has to have the .pb extension. Open the structure in chimerax, then in the command line of the program type open filename.pb . The crosslinks will then be rendered on the structure.
* XlinkAnalyzer - save the .json file and the .csv file in the same directory. Open UCSF Chimera and the XlinkAnalyzer plugin (which has to be installed separately, and then is opened from tool->utilities->XlinkAnalyzer . Open the same protein you have uploaded to the Xi session in Chimera. In the plugin window, go to file-> load project. After a few seconds, it should load. Then go to "Xlinks", select the structure and click on "display all links". Crosslinks should appear. In the "Subunits" tab, individual subinits can be selected and activated for moving independently of the rest of a protein complex. Additionally, domains and regions to be moved independently can be defined in the "setup" tab. XlinkAnalyzer is powerful, for more details see their website.


### References ###

* AS Rose, AR Bradley, Y Valasatava, JM Duarte, A Prlić and PW Rose. _NGL viewer: web-based molecular graphics for large complexes._ Bioinformatics: bty419, 2018. [doi:10.1093/bioinformatics/bty419](http://dx.doi.org/10.1093/bioinformatics/bty419)
* AS Rose and PW Hildebrand. _NGL Viewer: a web application for molecular visualization._ Nucl Acids Res (1 July 2015) 43 (W1): W576-W579 first published online April 29, 2015. [doi:10.1093/nar/gkv402](https://doi.org/10.1093/nar/gkv402)
* Kosinski, J., et al. Xlink Analyzer: Software for analysis and visualization of cross-linking data in the context of three-dimensional structures. J. Struct. Biol. (2015) http://dx.doi.org/10.1016/j.jsb.2015.01.014
* UCSF Chimera--a visualization system for exploratory research and analysis. Pettersen EF, Goddard TD, Huang CC, Couch GS, Greenblatt DM, Meng EC, Ferrin TE. J Comput Chem. 2004 Oct;25(13):1605-12. 
*  UCSF ChimeraX: Structure visualization for researchers, educators, and developers. Pettersen EF, Goddard TD, Huang CC, Meng EC, Couch GS, Croll TI, Morris JH, Ferrin TE. Protein Sci. 2021 Jan;30(1):70-82. 
*  The Importance of Non-accessible Crosslinks and Solvent Accessible Surface Distance in Modeling Proteins with Restraints From Crosslinking Mass Spectrometry.
J Bullock, J Schwab, K Thalassinos, M Topf. Mol Cell Proteomics. 15, 2491–2500, 2016 



## Matrix View ##

![Matrix View](../../img/matrix.png)

### Representation ###

The Matrix View (aka a Contact Map) lays out a pair of proteins along the X and Y axes of a matrix and plots points where the row and column of the linked residues of a cross-link intersect. e.g. if a cross-link went between Protein A at Residue 200 and Protein B at Residue 100, a matrix view between Protein A and B would plot a point at the coordinate (200,100).

The matrix is extremely useful for exploring dense areas of cross-linking that could be impenetrable in other views. In addition, when a reasonably sized pdb file is used, full distance information can be plotted in the background of the matrix, enabling cross-links to be seen against this context.

The cross-links within the matrix are coloured with the current colour scheme, and a tooltip will show information on any cross-links within a small distance of the mouse pointer.

### Interaction & Options ###

#### Panning & Selecting

The first two options, "Drag to Pan" & "Or Select", are a pair of radio buttons that decide the mode of operation of the matrix when the left mouse button is clicked and dragged. When the "Pan" mode is set, the mouse-wheel will smoothly change the magnification level of the matrix, and holding down the left-mouse button and dragging will pan the matrix if the magnification level permits. Alternatively, when the "Select" mode is set, the mouse wheel has no effect, and holding down the left-mouse button and dragging will draw a box in the view that will select all the cross-links within it when the mouse button is released. This box, when in the "Select" mode, can also be resized and dragged around the matrix to gauge its effect upon cross-link selection. Left-clicking anywhere outside the box will remove it and the current cross-link selection.

#### Other

The dropdown menu, "Show Protein Pairing", in the view controls shows a list of possible protein-protein pairings that can be shown in the matrix. Only those pairings with any unfiltered cross-links are listed, and also ordered by the number of cross-links (again, this is the unfiltered count, it does not change upon cross-link filtering).

Choosing a pairing that pairs a protein with itself will show the self cross-links for that protein. In this particular case, we treat the protein along the Y axis as always having the highest residue index out of the two residues involved in a cross-link, so cross-links always appear "north-west" of the diagonal. Choosing a pairing of two different proteins will show the corresponding between cross-links, and also produce a rectangular matrix when the proteins are of different sizes. 

When a PDB file is loaded, the matrix will draw a background of distance data which helps to show the cross-links in context. For large PDBs, it simply shows a white banding of which areas of the protein are covered by the PDB - in this way it can be clearly seen which cross-links can be expected to have distance data or which will not be calculable. For smaller PDBs the shortest distances between the residues are displayed as a coloured background, the colours and cutoffs controlled by the Distance colour scheme in the [Legend ](../views/legend.html "Legend")view. This background is also affected by the Assembly setting in the [3D](../views/3dngl.html "3DNGL") view. If the assembly is restricted to only part of the full pdb, then the distance background here will change to reflect that e.g. only distances between molecules in the current assembly are considered. This is an important consideration in dimers etc where distances can often be shorter between neighbouring molecules than within individual instances.

Finally, the remaining button, "Download Image as SVG", will download an SVG (vector format) file of the current state of the matrix view. The filename will include information on search id and current filter settings.





## Spectrum View (xiSPEC) ##

The Spectrum view displays the annotated raw mass spectrum for a single selected match, allowing inspection of the underlying fragmentation data that supports a crosslink identification.

<video controls width="100%">
  <source src="../vid/open-spectrum.webm" type="video/webm">
</video>

### Opening the Spectrum View ###

Open the Spectrum view from the [Views menu](../menu/views-menu.html). To populate it with data, select one or more crosslinks in any view — the [Selected Match Table](./selection-table.html) will fill with the supporting matches. Click a row in that table to load the corresponding spectrum. If the Spectrum view is already open, selecting a new crosslink automatically loads the top-scoring match.

### Representation ###

The spectrum is plotted as m/z (mass-to-charge ratio) on the x-axis against intensity on the y-axis. Fragment ion peaks that have been annotated are coloured by ion type (b, y, etc.); crosslink-containing fragment ions are accentuated. Unannotated peaks are shown in grey.

Multiple spectra can be displayed side-by-side by opening additional spectrum panels; drag the divider between panels to resize them.

### xiSPEC Feature Support ###

**Zooming**

Click and drag below the x-axis to zoom into a specific region of the spectrum, or use the mouse wheel anywhere on the plot. The annotation updates automatically after zooming.

**Measure Distances**

Activate measurement mode via its checkbox in the controls bar — the cursor changes to a crosshair. Click and drag between two peaks to measure the m/z distance between them. Tooltips show potential amino acid mass matches for the measured distance.

**Move Labels**

Enable moveable labels via checkbox. Labels can then be dragged to avoid overlap; dashed lines connect each label to its corresponding peak.

**Change Crosslinker Position**

Click the crosslink indicator line in the sequence diagram, then hover over the desired amino acid positions and click to confirm the new crosslink site. The spectrum annotation updates immediately.

**Change Modification Position**

Click a modification marker, hover over the target amino acid, and click to reassign the modification. The annotation refreshes immediately.

**Butterfly Plot**

After modifying a spectrum annotation (e.g. changing crosslinker or modification position), activate the butterfly plot option to display both the original and modified annotations mirrored above and below the x-axis for direct comparison.

**Highlight Fragments**

Hover over a fragment ion label or peak to highlight the corresponding elements across all open views. Click to make the highlight persistent. Use Ctrl+Click to select multiple fragments simultaneously. Click the spectrum background to clear all highlights.

### Settings ###

Two collapsible settings panels are available:

- **Data Settings** — controls which ion types are shown, fragment mass tolerance, intensity cutoffs, and neutral loss labels.
- **Appearance Settings** — controls colours for each ion type, label font size, and other visual options.

### Reference ###

Kolbowski, L., Combe, C. & Rappsilber, J. xiSPEC: web-based visualization, analysis and sharing of proteomics data. *Nucleic Acids Research* 46, W473–W478 (2018). <https://doi.org/10.1093/nar/gky353>

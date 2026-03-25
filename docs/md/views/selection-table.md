## Selected Match Table ##

![Selection Table](../../img/selectedMatches.png)

In essence this is the bridge between selecting cross-links/matches in a view and accessing the underlying data in the Spectrum View.

Selection of cross-links and/or matches in a view populates this paged table, filling the bottom part of the display above the filter bar - the height of the displayed area is adjustable with a draggable split pane widget.

The table also reacts to filtering, as the matches shown in the table have to be both selected and pass the current filter state.

### Representation ###

In the table, matches are shown as rows which are divided into groups according to the cross-link they belong to, with cross-links in turn sorted by the score of their highest-scoring match. Ambiguous matches are repeated in each cross-link they could belong to. The title bar of the table states the number of currently selected cross-links and matches with a paging widget for tabulating through large collections of selected matches.

### Interaction

The main purpose of this table is then to allow selection of a single match (by left-clicking) which then prompts the Spectrum View to open and display the raw spectrum data supporting that match. If the Spectrum View is already open, making a new selection in a view (repopulating this table) will also automatically open the top match in the table in the Spectrum View.

Moving the mouse over a row will highlight the match in open views, and reciprocally, highlighting matches/links in views will highlight matches in the table. The table itself has a large number of data columns for each match and will generally require scrolling to view its full extent. 

### Options ###

Options here include the paging widget for tabulating to matches with lower scores, and an option "Only Show 2 Top-Scoring Matches Per Link" which is self-explanatory.



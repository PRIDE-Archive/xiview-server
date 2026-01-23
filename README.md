# Local deployemnt

You can deploy xiVIEW locally using the following three projects:
- https://github.com/Rappsilber-Laboratory/mzidentml-reader - to create the database xiVIEW accesses and populate this DB with data from mzIdentML files. A local installation the reads CSV files is currently a problem. Follow the instructions in that project.
- https://github.com/Rappsilber-Laboratory/crosslinking-api - run the flask app in that project to provide an API that accesses the database. xiVIEW will access that API.
- https://github.com/Rappsilber-Laboratory/xiview-server (this project) - run the flask app here to serve the xiVIEW webpages.



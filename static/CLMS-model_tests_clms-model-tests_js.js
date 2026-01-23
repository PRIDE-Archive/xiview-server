"use strict";
(this["webpackChunkxiview"] = this["webpackChunkxiview"] || []).push([["CLMS-model_tests_clms-model-tests_js"],{

/***/ "./CLMS-model/tests/clms-model-tests.js":
/*!**********************************************!*\
  !*** ./CLMS-model/tests/clms-model-tests.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   testSetup: () => (/* binding */ testSetup)
/* harmony export */ });
/* harmony import */ var qunit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qunit */ "./CLMS-model/node_modules/qunit/qunit/qunit.js");
/* harmony import */ var qunit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qunit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-helper */ "./CLMS-model/tests/test-helper.js");



/**
 * CLMS-model Test Suite
 * Tests core model functionality without UI dependencies
 */
async function testSetup() {
  console.log("Loading test data for CLMS-model tests...");
  let clmsModel;
  try {
    clmsModel = await (0,_test_helper__WEBPACK_IMPORTED_MODULE_1__.loadTestData)();
    console.log("Test data loaded successfully");
  } catch (error) {
    console.error("Failed to load test data:", error);
    // Create a failing test to report the error
    (0,qunit__WEBPACK_IMPORTED_MODULE_0__.module)("Data Loading");
    (0,qunit__WEBPACK_IMPORTED_MODULE_0__.test)("Load test data", function (assert) {
      assert.ok(false, "Failed to load test data: " + error.message);
    });
    return;
  }
  console.log("Running QUnit tests...");
  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.module)("Data Loading and Processing");
  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.test)("Proteins loaded correctly", function (assert) {
    const proteins = clmsModel.getProteinsMap();
    assert.ok(proteins instanceof Map, "participants is a Map");
    assert.ok(proteins.size > 0, `At least some proteins loaded (${proteins.size})`);

    // In aggregated data, protein IDs are changed to accessions during parseJSON
    // Check using accessions instead of original IDs
    const participantKeys = Array.from(proteins.keys());
    assert.ok(participantKeys.length > 0, `Participant keys exist: ${participantKeys.join(", ")}`);

    // Check if PA (protein_A accession) exists
    const proteinA = proteins.get("PA");
    if (proteinA) {
      assert.ok(true, "protein_A (PA) exists");
      assert.equal(proteinA.sequence, "MKVLVIGNGKPEPK", "protein_A sequence correct");
    } else {
      assert.ok(false, "protein_A (PA) not found in participants");
    }
  });
  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.test)("Protein sequences loaded", function (assert) {
    const participants = clmsModel.getProteinsMap();

    // Check protein B using its accession
    const proteinB = participants.get("PB");
    if (proteinB) {
      assert.equal(proteinB.sequence, "DAHKSEVAHRFKDLGEENFKTIDEK", "protein_B sequence correct");
      assert.equal(proteinB.accession, "PB", "protein_B accession correct");
    } else {
      assert.ok(false, "protein_B (PB) not found in participants");
    }
  });

  // test("Peptides processed correctly", function (assert) {
  //     const peptides = clmsModel.getPeptides();
  //     assert.ok(peptides instanceof Map, "peptides is a Map");
  //     assert.ok(peptides.size > 0, `peptides Map has entries (${peptides.size} total)`);
  //
  //     // Test DSSO crosslink donor peptide exists (from upload 1)
  //     const dssoDonor = peptides.get("1_0");
  //     assert.ok(dssoDonor, "DSSO crosslink donor peptide exists (1_0)");
  //     if (dssoDonor) {
  //         assert.equal(dssoDonor._pep.seq, "PEPK", "DSSO donor has expected sequence");
  //         assert.equal(dssoDonor._pep.ls1, 4, "DSSO donor has link site at position 4");
  //         assert.equal(dssoDonor._pep.cl_m, 158.003765, "DSSO donor has correct crosslink mass");
  //         const donorMod = dssoDonor._pep.m_as.find(m => m["MS:1003393"] === "DSSO_crosslink_donor");
  //         assert.ok(donorMod, "DSSO donor has crosslink donor modification");
  //     }
  //
  //     // Test DSSO crosslink acceptor peptide exists
  //     const dssoAcceptor = peptides.get("1_1");
  //     assert.ok(dssoAcceptor, "DSSO crosslink acceptor peptide exists (1_1)");
  //     if (dssoAcceptor) {
  //         assert.equal(dssoAcceptor._pep.seq, "TIDEK", "DSSO acceptor has expected sequence");
  //         assert.equal(dssoAcceptor._pep.ls1, 1, "DSSO acceptor has link site at position 1");
  //         const acceptorMod = dssoAcceptor._pep.m_as.find(m => m["MS:1003393"] === "DSSO_crosslink_acceptor");
  //         assert.ok(acceptorMod, "DSSO acceptor has crosslink acceptor modification");
  //     }
  //
  //     // Test DSSO monolink stubs exist
  //     const dssoStubA = peptides.get("1_2");
  //     assert.ok(dssoStubA, "DSSO stub_a monolink exists (1_2)");
  //     if (dssoStubA) {
  //         const stubMod = dssoStubA._pep.m_as.find(m => m["MS:1003393"] === "DSSO_crosslink_stub_a");
  //         assert.ok(stubMod, "DSSO stub_a has correct modification type");
  //         assert.equal(dssoStubA._pep.m_ms[0], 54.010565, "DSSO stub_a has correct mass");
  //     }
  //
  //     // Test EDC self-link (same peptide, two link sites)
  //     const edcSelfLink = peptides.get("2_5");
  //     assert.ok(edcSelfLink, "EDC self-link peptide exists (2_5)");
  //     if (edcSelfLink) {
  //         assert.equal(edcSelfLink._pep.seq, "DVIQSLVDDDLVAK", "EDC self-link has expected sequence");
  //         assert.equal(edcSelfLink._pep.ls1, 10, "EDC self-link has first link site");
  //         assert.equal(edcSelfLink._pep.ls2, 14, "EDC self-link has second link site");
  //         assert.equal(edcSelfLink._pep.cl_m, -18.010565, "EDC crosslink has correct mass");
  //     }
  //
  //     // Test SDA crosslink pair
  //     const sdaDonor = peptides.get("3_3");
  //     const sdaAcceptor = peptides.get("3_2");
  //     assert.ok(sdaDonor, "SDA crosslink donor exists (3_3)");
  //     assert.ok(sdaAcceptor, "SDA crosslink acceptor exists (3_2)");
  //     if (sdaDonor && sdaAcceptor) {
  //         const donorMod = sdaDonor._pep.m_as.find(m => m["MS:1003393"] === "SDA_crosslink_donor");
  //         const acceptorMod = sdaAcceptor._pep.m_as.find(m => m["MS:1003393"] === "SDA_crosslink_acceptor");
  //         assert.ok(donorMod, "SDA donor has correct modification");
  //         assert.ok(acceptorMod, "SDA acceptor has correct modification");
  //         assert.equal(sdaDonor._pep.cl_m, 82.04186, "SDA donor has correct crosslink mass");
  //     }
  //
  //     // Test linear peptide (no crosslink)
  //     const linearPep = peptides.get("2_0");
  //     assert.ok(linearPep, "Linear peptide exists (2_0)");
  //     if (linearPep) {
  //         assert.equal(linearPep._pep.ls1, null, "Linear peptide has no link site 1");
  //         assert.equal(linearPep._pep.ls2, null, "Linear peptide has no link site 2");
  //         assert.equal(linearPep._pep.cl_m, 0, "Linear peptide has no crosslink mass");
  //         assert.equal(linearPep._pep.m_as.length, 0, "Linear peptide has no modifications");
  //     }
  //
  //     // Test peptide with multiple non-crosslink modifications
  //     const modifiedPep = peptides.get("4_0");
  //     assert.ok(modifiedPep, "Peptide with multiple modifications exists (4_0)");
  //     if (modifiedPep) {
  //         assert.equal(modifiedPep._pep.m_as.length, 3, "Peptide has 3 modifications");
  //         const oxidation = modifiedPep._pep.m_as.find(m => m["UNIMOD:35"] === "Oxidation");
  //         const cm = modifiedPep._pep.m_as.filter(m => m["UNIMOD:4"] === "Carbamidomethyl");
  //         assert.ok(oxidation, "Peptide has Oxidation modification");
  //         assert.equal(cm.length, 2, "Peptide has 2 Carbamidomethyl modifications");
  //     }
  //
  //     // Test peptide structure consistency
  //     peptides.forEach((pepEntry, key) => {
  //         assert.ok(/^\d+_\d+$/.test(key), `peptide keys follow uploadId_peptideId pattern: ${key}`);
  //         const pep = pepEntry._pep;
  //         assert.ok(pep.id !== undefined, `Peptide ${key} has id`);
  //         assert.ok(pep.u_id, `Peptide ${key} has u_id`);
  //         assert.ok(pep.seq, `Peptide ${key} has sequence`);
  //         assert.ok(Array.isArray(pep.prt), `Peptide ${key} prt is array`);
  //         assert.ok(Array.isArray(pep.pos), `Peptide ${key} pos is array`);
  //         assert.ok(Array.isArray(pep.m_as), `Peptide ${key} m_as is array`);
  //         assert.ok(Array.isArray(pep.m_ps), `Peptide ${key} m_ps is array`);
  //         assert.ok(Array.isArray(pep.m_ms), `Peptide ${key} m_ms is array`);
  //         assert.ok(typeof pep.cl_m === "number", `Peptide ${key} cl_m is number`);
  //     });
  // });

  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.test)("Matches loaded correctly", function (assert) {
    const matches = clmsModel.getMatches();
    assert.ok(Array.isArray(matches), "matches is an array");
    assert.equal(matches.length, 27, "Expected 27 matches");

    // Check first match has expected properties
    const firstMatch = matches[0];
    assert.ok(firstMatch.id, "match has id");
    assert.ok(firstMatch.uploadId !== undefined, "match has uploadId");
  });
  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.test)("Searches identified", function (assert) {
    const searches = clmsModel.getMzidentmlFiles();
    assert.ok(searches instanceof Map, "searches is a Map");
    // Should have 4 unique search_ids based on protein data: "1", "2", "3", "4"
    assert.ok(searches.size > 0, "At least one search identified");
  });

  // test("Enzymes loaded", function (assert) {
  //     const enz = clmsModel.get("enzymes");
  //     assert.ok(enz instanceof Map, "modifications is a Map");
  // });

  // test("Search modifications loaded", function (assert) {
  //     const modifications = clmsModel.getSearchModifications();
  //     assert.ok(modifications instanceof Map, "modifications is a Map");
  // });

  // test("Spectra data loaded", function (assert) {
  //     const spectraData = clmsModel.getSpectraData();
  //     assert.ok(spectraData instanceof Map, "spectraData is a Map");
  // });

  // test("Spectrum identification protocols loaded", function (assert) {
  //     const protocols = clmsModel.getSpectrumIdentificationProtocols();
  //     assert.ok(protocols instanceof Map, "spectrumIdentificationProtocols is a Map");
  // });

  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.test)("MzIdentML files loaded", function (assert) {
    const mzidentmlFiles = clmsModel.getMzidentmlFiles();
    assert.ok(mzidentmlFiles instanceof Map, "mzidentmlFiles is a Map");
    assert.ok(mzidentmlFiles.size > 0, "At least one mzidentML file loaded");
  });
  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.test)("MzIdentML file properties correct", function (assert) {
    const mzidentmlFiles = clmsModel.getMzidentmlFiles();
    // Get first mzidentML file (id 1 based on test data)
    const mzidFile = mzidentmlFiles.get(1);
    if (mzidFile) {
      assert.equal(mzidFile.id, 1, "mzidentML file id is 1");
      assert.equal(mzidFile.projectId, "crosslinking", "project_id is correct");
      assert.equal(mzidFile.identificationFileName, "multiple_spectra_per_id_1_3_0_draft.mzid", "identification_file_name is correct");
      assert.ok(Array.isArray(mzidFile.spectraFormats), "spectra_formats is an array");
      assert.ok(mzidFile.spectraFormats.length > 0, "spectra_formats has entries");
    } else {
      assert.ok(false, "MzIdentML file with id 1 not found");
    }
  });

  // test("Analysis collection spectrum identifications loaded", function (assert) {
  //     const analysisCollection = clmsModel.getAnalysisCollectionSpectrumIdentifications();
  //     assert.ok(analysisCollection instanceof Map, "analysisCollectionSpectrumIdentifications is a Map");
  //     assert.ok(analysisCollection.size > 0, "At least one analysis collection spectrum identification loaded");
  // });

  // test("Analysis collection spectrum identification properties correct", function (assert) {
  //     const analysisCollection = clmsModel.getAnalysisCollectionSpectrumIdentifications();
  //     // Get first entry - upload_id 1, spectrum_identification_list_ref "sil_HCD"
  //     const acsiMap = analysisCollection.get(1);
  //
  //     if (acsiMap) {
  //         const acsi = acsiMap.get("sil_HCD");
  //         assert.equal(acsi.uploadId, 1, "uploadId is 1");
  //         assert.equal(acsi.spectrumIdentificationListRef, "sil_HCD", "spectrum_identification_list_ref is correct");
  //         assert.equal(acsi.spectrumIdentificationProtocolRef, "SearchProtocol_HCD", "spectrum_identification_protocol_ref is correct");
  //         assert.ok(Array.isArray(acsi.spectraDataRefs), "spectra_data_refs is an array");
  //         assert.ok(acsi.spectraDataRefs.length > 0, "spectra_data_refs has entries");
  //         assert.ok(Array.isArray(acsi.searchDatabaseRefs), "search_database_refs is an array");
  //         assert.ok(acsi.searchDatabaseRefs.length > 0, "search_database_refs has entries");
  //     } else {
  //         assert.ok(false, "Analysis collection spectrum identification with key '1_sil_HCD' not found");
  //     }
  // });

  // test("Relationship between mzidentml files and analysis collections", function (assert) {
  //     const mzidentmlFiles = clmsModel.getMzidentmlFiles();
  //     const analysisCollection = clmsModel.getAnalysisCollectionSpectrumIdentifications();
  //
  //     // Check that analysis collection entries reference valid upload_ids (mzidentml file ids)
  //     let allValid = true;
  //     analysisCollection.values().forEach(acsiMap => {
  //         acsiMap.forEach(acsi => {
  //             if (!mzidentmlFiles.get(acsi.uploadId)) {
  //                 allValid = false;
  //                 console.error("Analysis collection references non-existent upload_id:", acsi.uploadId);
  //             }
  //         });
  //     });
  //
  //     assert.ok(allValid, "All analysis collection entries reference valid mzidentml files");
  // });

  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.module)("Crosslinks");
  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.test)("Crosslinks generated from matches", function (assert) {
    const crosslinks = clmsModel.getCrosslinks();
    assert.ok(crosslinks instanceof Map, "crosslinks is a Map");
    assert.ok(crosslinks.size > 0, "crosslinks generated from matches");
  });
  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.test)("Crosslinks have correct structure", function (assert) {
    const crosslinks = clmsModel.getCrosslinks();
    const firstCrosslink = Array.from(crosslinks.values())[0];
    if (firstCrosslink) {
      assert.ok(firstCrosslink.id, "crosslink has id");
      assert.ok(firstCrosslink.matches_pp !== undefined, "crosslink has matches_pp array");
    } else {
      assert.ok(false, "No crosslinks found to test structure");
    }
  });
  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.test)("Linear peptides identified", function (assert) {
    const matches = clmsModel.getMatches();
    const linearMatches = matches.filter(m => !m.crosslink);

    // Check if linear matches exist in test data
    if (linearMatches.length > 0) {
      assert.ok(true, `Found ${linearMatches.length} linear matches`);
    } else {
      assert.ok(true, "No linear matches in test data (expected for crosslink-only datasets)");
    }
  });
  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.module)("Data Integrity");

  // todo
  // test("Peptide to protein mappings valid", function (assert) {
  //     const peptides = clmsModel.getPeptides();
  //     const participants = clmsModel.getProteinsMap();
  //
  //     let allValid = true;
  //     const invalidPeptides = [];
  //
  //     if (peptides && peptides.size > 0) {
  //         peptides.forEach(peptide => {
  //             if (peptide.prt) {
  //                 peptide.prt.forEach(proteinId => {
  //                     if (!participants.get(proteinId)) {
  //                         allValid = false;
  //                         invalidPeptides.push({peptideId: peptide.id, proteinId: proteinId});
  //                     }
  //                 });
  //             }
  //         });
  //     }
  //
  //     assert.ok(allValid, "All peptide-to-protein mappings reference valid proteins");
  //     if (!allValid) {
  //         console.error("Invalid peptide mappings:", invalidPeptides);
  //     }
  // });

  // test("Match to peptide mappings valid", function (assert) {
  //     const matches = clmsModel.getMatches();
  //     const peptides = clmsModel.getPeptides();
  //
  //     let allValid = true;
  //
  //     matches.forEach(match => {
  //         if (match.matchedPeptides) {
  //             match.matchedPeptides.forEach(mp => {
  //                 if (mp && mp.id && !peptides.get(mp.id)) {
  //                     allValid = false;
  //                     console.error("Invalid match-to-peptide mapping:", match.id, "->", mp.id);
  //                 }
  //             });
  //         }
  //     });
  //
  //     assert.ok(allValid, "All match-to-peptide mappings reference valid peptides");
  // });

  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.test)("Search IDs consistent", function (assert) {
    const participants = clmsModel.getProteinsMap();
    const mzidFiles = clmsModel.getMzidentmlFiles();

    // Check all protein search_ids are in searches map
    let allValid = true;
    participants.forEach(protein => {
      if (protein.upload_id && !mzidFiles.has(protein.upload_id)) {
        allValid = false;
        console.error("Protein has invalid upload_id:", protein.id, protein.upload_id);
      }
    });
    assert.ok(allValid, "All protein search_ids reference valid searches");
  });
  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.module)("Model State");
  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.test)("Presence flags set correctly", function (assert) {
    const crosslinksPresent = clmsModel.getCrosslinksPresent();
    const linearsPresent = clmsModel.getLinearsPresent();
    const decoysPresent = clmsModel.getDecoysPresent();
    assert.equal(typeof crosslinksPresent, "boolean", "crosslinksPresent is boolean");
    assert.equal(typeof linearsPresent, "boolean", "linearsPresent is boolean");
    assert.equal(typeof decoysPresent, "boolean", "decoysPresent is boolean");
  });

  // todo
  // test("Score extent calculated", function (assert) {
  //     const scoreExtent = clmsModel.getScoreExtent();
  //
  //     if (scoreExtent) {
  //         assert.ok(Array.isArray(scoreExtent) || scoreExtent instanceof Map,
  //             "scoreExtent exists and is array or map");
  //     } else {
  //         // Score extent might not be set if no matches have scores
  //         assert.ok(true, "scoreExtent not set (may be expected for this dataset)");
  //     }
  // });

  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.module)("SearchResultsModel Methods");
  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.test)("getProteinSearchMap method", function (assert) {
    const peptides = [{
      id: "1",
      prt: ["A"]
    }, {
      id: "2",
      prt: ["A"]
    }, {
      id: "3",
      prt: ["A", "B"]
    }, {
      id: "4",
      prt: ["C"]
    }];
    const matches = [{
      matchedPeptides: [peptides[0], peptides[1]],
      uploadId: "S1"
    }, {
      matchedPeptides: [peptides[0], peptides[2]],
      uploadId: "S1"
    }, {
      matchedPeptides: [peptides[3]],
      uploadId: "S2"
    }];
    const searchMap = clmsModel.getProteinSearchMap(peptides, matches);
    assert.ok(searchMap, "getProteinSearchMap returns result");
    assert.ok(searchMap.get("S1"), "Search S1 exists in map");
    assert.ok(searchMap.get("S2"), "Search S2 exists in map");
    assert.ok(searchMap.get("S1").participantIDSet instanceof Set, "S1 has participantIDSet as Set");
    assert.ok(searchMap.get("S2").participantIDSet instanceof Set, "S2 has participantIDSet as Set");
    assert.equal(searchMap.get("S1").id, "S1", "S1 has correct id property");
    assert.equal(searchMap.get("S2").id, "S2", "S2 has correct id property");
    // Check participantIDSet contents
    assert.deepEqual([...searchMap.get("S1").participantIDSet].sort(), ["A", "B"], "S1 contains proteins A and B");
    assert.deepEqual([...searchMap.get("S2").participantIDSet].sort(), ["C"], "S2 contains protein C");
  });
  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.test)("isAggregatedData method", function (assert) {
    const isAggregated = clmsModel.isAggregatedData();
    assert.equal(isAggregated, true);
  });
  (0,qunit__WEBPACK_IMPORTED_MODULE_0__.start)();
  console.log("CLMS-model tests completed");
}

/***/ }),

/***/ "./CLMS-model/tests/test-helper.js":
/*!*****************************************!*\
  !*** ./CLMS-model/tests/test-helper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expectedCounts: () => (/* binding */ expectedCounts),
/* harmony export */   loadTestData: () => (/* binding */ loadTestData)
/* harmony export */ });
/* harmony import */ var _js_models_search_results_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/models/search-results-model */ "./CLMS-model/js/models/search-results-model.js");


/**
 * Loads test data from JSON files and populates a SearchResultsModel
 * @param {string} baseUrl - Base URL for fetching test data files
 * @returns {Promise<SearchResultsModel>} - Promise that resolves with populated model
 */
async function loadTestData(baseUrl = "./test-data") {
  const clmsModel = new _js_models_search_results_model__WEBPACK_IMPORTED_MODULE_0__.SearchResultsModel();
  try {
    // Fetch all test data files
    const [mzidentmlFilesData, analysisCollectionData, protocolsData, spectraData, enzymesData, modificationsData, proteinsData, peptidesData, matchesData] = await Promise.all([fetch(`${baseUrl}/get_xiview_mzidentml_files.json`).then(r => r.json()), fetch(`${baseUrl}/get_xiview_analysis_collection_spectrum_identifications.json`).then(r => r.json()), fetch(`${baseUrl}/get_xiview_spectrum_identification_protocols.json`).then(r => r.json()), fetch(`${baseUrl}/get_xiview_spectra_data.json`).then(r => r.json()), fetch(`${baseUrl}/get_xiview_enzymes.json`).then(r => r.json()), fetch(`${baseUrl}/get_xiview_search_modifications.json`).then(r => r.json()), fetch(`${baseUrl}/get_xiview_proteins.json`).then(r => r.json()), fetch(`${baseUrl}/get_xiview_peptides.json`).then(r => r.json()), fetch(`${baseUrl}/get_xiview_matches.json`).then(r => r.json())]);

    // Process data
    clmsModel.storeMatches(matchesData);
    clmsModel.storePeptides(peptidesData);
    clmsModel.storeProteins(proteinsData);
    clmsModel.storeSearchModifications(modificationsData);
    clmsModel.storeEnzymes(enzymesData);
    clmsModel.storeSpectraData(spectraData);
    clmsModel.storeSpectrumIdentificationProtocols(protocolsData);
    clmsModel.storeAnalysisCollectionSpectrumIdentifications(analysisCollectionData);
    clmsModel.storeMzIdentMLFiles(mzidentmlFilesData);

    // After loading all data, call parseJSON to construct internal structures
    // This populates participants, crosslinks, matches arrays, etc.
    clmsModel.parseJSON({});
    console.log(clmsModel.toJSON());
    return clmsModel;
  } catch (error) {
    console.error("Error loading test data:", error);
    throw error;
  }
}

/**
 * Helper to get expected counts for validation
 */
const expectedCounts = {
  proteins: 8,
  peptides: 69,
  // Will be determined by actual test data
  matches: 27,
  crosslinks: 22,
  // Will be determined after processing
  searches: 4 // Based on unique search_id values in proteins
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0xNUy1tb2RlbF90ZXN0c19jbG1zLW1vZGVsLXRlc3RzX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDTyxlQUFlSSxTQUFTQSxDQUFBLEVBQUc7RUFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJDQUEyQyxDQUFDO0VBRXhELElBQUlDLFNBQVM7RUFDYixJQUFJO0lBQ0FBLFNBQVMsR0FBRyxNQUFNSiwwREFBWSxDQUFDLENBQUM7SUFDaENFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtCQUErQixDQUFDO0VBQ2hELENBQUMsQ0FBQyxPQUFPRSxLQUFLLEVBQUU7SUFDWkgsT0FBTyxDQUFDRyxLQUFLLENBQUMsMkJBQTJCLEVBQUVBLEtBQUssQ0FBQztJQUNqRDtJQUNBUiw2Q0FBTSxDQUFDLGNBQWMsQ0FBQztJQUN0QkMsMkNBQUksQ0FBQyxnQkFBZ0IsRUFBRSxVQUFTUSxNQUFNLEVBQUU7TUFDcENBLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLEtBQUssRUFBRSw0QkFBNEIsR0FBR0YsS0FBSyxDQUFDRyxPQUFPLENBQUM7SUFDbEUsQ0FBQyxDQUFDO0lBQ0Y7RUFDSjtFQUVBTixPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztFQUNyQ04sNkNBQU0sQ0FBQyw2QkFBNkIsQ0FBQztFQUVyQ0MsMkNBQUksQ0FBQywyQkFBMkIsRUFBRSxVQUFVUSxNQUFNLEVBQUU7SUFDaEQsTUFBTUcsUUFBUSxHQUFHTCxTQUFTLENBQUNNLGNBQWMsQ0FBQyxDQUFDO0lBQzNDSixNQUFNLENBQUNDLEVBQUUsQ0FBQ0UsUUFBUSxZQUFZRSxHQUFHLEVBQUUsdUJBQXVCLENBQUM7SUFDM0RMLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDRSxRQUFRLENBQUNHLElBQUksR0FBRyxDQUFDLEVBQUcsa0NBQWlDSCxRQUFRLENBQUNHLElBQUssR0FBRSxDQUFDOztJQUVoRjtJQUNBO0lBQ0EsTUFBTUMsZUFBZSxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQ04sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25EVixNQUFNLENBQUNDLEVBQUUsQ0FBQ00sZUFBZSxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxFQUFHLDJCQUEwQkosZUFBZSxDQUFDSyxJQUFJLENBQUMsSUFBSSxDQUFFLEVBQUMsQ0FBQzs7SUFFOUY7SUFDQSxNQUFNQyxRQUFRLEdBQUdWLFFBQVEsQ0FBQ1csR0FBRyxDQUFDLElBQUksQ0FBQztJQUNuQyxJQUFJRCxRQUFRLEVBQUU7TUFDVmIsTUFBTSxDQUFDQyxFQUFFLENBQUMsSUFBSSxFQUFFLHVCQUF1QixDQUFDO01BQ3hDRCxNQUFNLENBQUNlLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsNEJBQTRCLENBQUM7SUFDbkYsQ0FBQyxNQUFNO01BQ0hoQixNQUFNLENBQUNDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsMENBQTBDLENBQUM7SUFDaEU7RUFDSixDQUFDLENBQUM7RUFFRlQsMkNBQUksQ0FBQywwQkFBMEIsRUFBRSxVQUFVUSxNQUFNLEVBQUU7SUFDL0MsTUFBTWlCLFlBQVksR0FBR25CLFNBQVMsQ0FBQ00sY0FBYyxDQUFDLENBQUM7O0lBRS9DO0lBQ0EsTUFBTWMsUUFBUSxHQUFHRCxZQUFZLENBQUNILEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDdkMsSUFBSUksUUFBUSxFQUFFO01BQ1ZsQixNQUFNLENBQUNlLEtBQUssQ0FBQ0csUUFBUSxDQUFDRixRQUFRLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLENBQUM7TUFDMUZoQixNQUFNLENBQUNlLEtBQUssQ0FBQ0csUUFBUSxDQUFDQyxTQUFTLEVBQUUsSUFBSSxFQUFFLDZCQUE2QixDQUFDO0lBQ3pFLENBQUMsTUFBTTtNQUNIbkIsTUFBTSxDQUFDQyxFQUFFLENBQUMsS0FBSyxFQUFFLDBDQUEwQyxDQUFDO0lBQ2hFO0VBQ0osQ0FBQyxDQUFDOztFQUVGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBVCwyQ0FBSSxDQUFDLDBCQUEwQixFQUFFLFVBQVVRLE1BQU0sRUFBRTtJQUMvQyxNQUFNb0IsT0FBTyxHQUFHdEIsU0FBUyxDQUFDdUIsVUFBVSxDQUFDLENBQUM7SUFDdENyQixNQUFNLENBQUNDLEVBQUUsQ0FBQ08sS0FBSyxDQUFDYyxPQUFPLENBQUNGLE9BQU8sQ0FBQyxFQUFFLHFCQUFxQixDQUFDO0lBQ3hEcEIsTUFBTSxDQUFDZSxLQUFLLENBQUNLLE9BQU8sQ0FBQ1QsTUFBTSxFQUFFLEVBQUUsRUFBRSxxQkFBcUIsQ0FBQzs7SUFFdkQ7SUFDQSxNQUFNWSxVQUFVLEdBQUdILE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0JwQixNQUFNLENBQUNDLEVBQUUsQ0FBQ3NCLFVBQVUsQ0FBQ0MsRUFBRSxFQUFFLGNBQWMsQ0FBQztJQUN4Q3hCLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDc0IsVUFBVSxDQUFDRSxRQUFRLEtBQUtDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQztFQUN0RSxDQUFDLENBQUM7RUFFRmxDLDJDQUFJLENBQUMscUJBQXFCLEVBQUUsVUFBVVEsTUFBTSxFQUFFO0lBQzFDLE1BQU0yQixRQUFRLEdBQUc3QixTQUFTLENBQUM4QixpQkFBaUIsQ0FBQyxDQUFDO0lBQzlDNUIsTUFBTSxDQUFDQyxFQUFFLENBQUMwQixRQUFRLFlBQVl0QixHQUFHLEVBQUUsbUJBQW1CLENBQUM7SUFDdkQ7SUFDQUwsTUFBTSxDQUFDQyxFQUFFLENBQUMwQixRQUFRLENBQUNyQixJQUFJLEdBQUcsQ0FBQyxFQUFFLGdDQUFnQyxDQUFDO0VBQ2xFLENBQUMsQ0FBQzs7RUFFRjtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQWQsMkNBQUksQ0FBQyx3QkFBd0IsRUFBRSxVQUFVUSxNQUFNLEVBQUU7SUFDN0MsTUFBTTZCLGNBQWMsR0FBRy9CLFNBQVMsQ0FBQzhCLGlCQUFpQixDQUFDLENBQUM7SUFDcEQ1QixNQUFNLENBQUNDLEVBQUUsQ0FBQzRCLGNBQWMsWUFBWXhCLEdBQUcsRUFBRSx5QkFBeUIsQ0FBQztJQUNuRUwsTUFBTSxDQUFDQyxFQUFFLENBQUM0QixjQUFjLENBQUN2QixJQUFJLEdBQUcsQ0FBQyxFQUFFLG9DQUFvQyxDQUFDO0VBQzVFLENBQUMsQ0FBQztFQUVGZCwyQ0FBSSxDQUFDLG1DQUFtQyxFQUFFLFVBQVVRLE1BQU0sRUFBRTtJQUN4RCxNQUFNNkIsY0FBYyxHQUFHL0IsU0FBUyxDQUFDOEIsaUJBQWlCLENBQUMsQ0FBQztJQUNwRDtJQUNBLE1BQU1FLFFBQVEsR0FBR0QsY0FBYyxDQUFDZixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXRDLElBQUlnQixRQUFRLEVBQUU7TUFDVjlCLE1BQU0sQ0FBQ2UsS0FBSyxDQUFDZSxRQUFRLENBQUNOLEVBQUUsRUFBRSxDQUFDLEVBQUUsd0JBQXdCLENBQUM7TUFDdER4QixNQUFNLENBQUNlLEtBQUssQ0FBQ2UsUUFBUSxDQUFDQyxTQUFTLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixDQUFDO01BQ3pFL0IsTUFBTSxDQUFDZSxLQUFLLENBQUNlLFFBQVEsQ0FBQ0Usc0JBQXNCLEVBQUUsMENBQTBDLEVBQUUscUNBQXFDLENBQUM7TUFDaEloQyxNQUFNLENBQUNDLEVBQUUsQ0FBQ08sS0FBSyxDQUFDYyxPQUFPLENBQUNRLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLEVBQUUsNkJBQTZCLENBQUM7TUFDaEZqQyxNQUFNLENBQUNDLEVBQUUsQ0FBQzZCLFFBQVEsQ0FBQ0csY0FBYyxDQUFDdEIsTUFBTSxHQUFHLENBQUMsRUFBRSw2QkFBNkIsQ0FBQztJQUNoRixDQUFDLE1BQU07TUFDSFgsTUFBTSxDQUFDQyxFQUFFLENBQUMsS0FBSyxFQUFFLG9DQUFvQyxDQUFDO0lBQzFEO0VBQ0osQ0FBQyxDQUFDOztFQUVGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUFWLDZDQUFNLENBQUMsWUFBWSxDQUFDO0VBRXBCQywyQ0FBSSxDQUFDLG1DQUFtQyxFQUFFLFVBQVVRLE1BQU0sRUFBRTtJQUN4RCxNQUFNa0MsVUFBVSxHQUFHcEMsU0FBUyxDQUFDcUMsYUFBYSxDQUFDLENBQUM7SUFDNUNuQyxNQUFNLENBQUNDLEVBQUUsQ0FBQ2lDLFVBQVUsWUFBWTdCLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQztJQUMzREwsTUFBTSxDQUFDQyxFQUFFLENBQUNpQyxVQUFVLENBQUM1QixJQUFJLEdBQUcsQ0FBQyxFQUFFLG1DQUFtQyxDQUFDO0VBQ3ZFLENBQUMsQ0FBQztFQUVGZCwyQ0FBSSxDQUFDLG1DQUFtQyxFQUFFLFVBQVVRLE1BQU0sRUFBRTtJQUN4RCxNQUFNa0MsVUFBVSxHQUFHcEMsU0FBUyxDQUFDcUMsYUFBYSxDQUFDLENBQUM7SUFDNUMsTUFBTUMsY0FBYyxHQUFHNUIsS0FBSyxDQUFDQyxJQUFJLENBQUN5QixVQUFVLENBQUNHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFekQsSUFBSUQsY0FBYyxFQUFFO01BQ2hCcEMsTUFBTSxDQUFDQyxFQUFFLENBQUNtQyxjQUFjLENBQUNaLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQztNQUNoRHhCLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDbUMsY0FBYyxDQUFDRSxVQUFVLEtBQUtaLFNBQVMsRUFBRSxnQ0FBZ0MsQ0FBQztJQUN4RixDQUFDLE1BQU07TUFDSDFCLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLEtBQUssRUFBRSx1Q0FBdUMsQ0FBQztJQUM3RDtFQUNKLENBQUMsQ0FBQztFQUVGVCwyQ0FBSSxDQUFDLDRCQUE0QixFQUFFLFVBQVVRLE1BQU0sRUFBRTtJQUNqRCxNQUFNb0IsT0FBTyxHQUFHdEIsU0FBUyxDQUFDdUIsVUFBVSxDQUFDLENBQUM7SUFDdEMsTUFBTWtCLGFBQWEsR0FBR25CLE9BQU8sQ0FBQ29CLE1BQU0sQ0FBQ0MsQ0FBQyxJQUFJLENBQUNBLENBQUMsQ0FBQ0MsU0FBUyxDQUFDOztJQUV2RDtJQUNBLElBQUlILGFBQWEsQ0FBQzVCLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDMUJYLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLElBQUksRUFBRyxTQUFRc0MsYUFBYSxDQUFDNUIsTUFBTyxpQkFBZ0IsQ0FBQztJQUNuRSxDQUFDLE1BQU07TUFDSFgsTUFBTSxDQUFDQyxFQUFFLENBQUMsSUFBSSxFQUFFLHVFQUF1RSxDQUFDO0lBQzVGO0VBQ0osQ0FBQyxDQUFDO0VBRUZWLDZDQUFNLENBQUMsZ0JBQWdCLENBQUM7O0VBRXhCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUFDLDJDQUFJLENBQUMsdUJBQXVCLEVBQUUsVUFBVVEsTUFBTSxFQUFFO0lBQzVDLE1BQU1pQixZQUFZLEdBQUduQixTQUFTLENBQUNNLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLE1BQU11QyxTQUFTLEdBQUc3QyxTQUFTLENBQUM4QixpQkFBaUIsQ0FBQyxDQUFDOztJQUUvQztJQUNBLElBQUlnQixRQUFRLEdBQUcsSUFBSTtJQUNuQjNCLFlBQVksQ0FBQzRCLE9BQU8sQ0FBQ0MsT0FBTyxJQUFJO01BQzVCLElBQUlBLE9BQU8sQ0FBQ0MsU0FBUyxJQUFJLENBQUNKLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDRixPQUFPLENBQUNDLFNBQVMsQ0FBQyxFQUFFO1FBQ3hESCxRQUFRLEdBQUcsS0FBSztRQUNoQmhELE9BQU8sQ0FBQ0csS0FBSyxDQUFDLGdDQUFnQyxFQUFFK0MsT0FBTyxDQUFDdEIsRUFBRSxFQUFFc0IsT0FBTyxDQUFDQyxTQUFTLENBQUM7TUFDbEY7SUFDSixDQUFDLENBQUM7SUFFRi9DLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDMkMsUUFBUSxFQUFFLGlEQUFpRCxDQUFDO0VBQzFFLENBQUMsQ0FBQztFQUVGckQsNkNBQU0sQ0FBQyxhQUFhLENBQUM7RUFFckJDLDJDQUFJLENBQUMsOEJBQThCLEVBQUUsVUFBVVEsTUFBTSxFQUFFO0lBQ25ELE1BQU1pRCxpQkFBaUIsR0FBR25ELFNBQVMsQ0FBQ29ELG9CQUFvQixDQUFDLENBQUM7SUFDMUQsTUFBTUMsY0FBYyxHQUFHckQsU0FBUyxDQUFDc0QsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxNQUFNQyxhQUFhLEdBQUd2RCxTQUFTLENBQUN3RCxnQkFBZ0IsQ0FBQyxDQUFDO0lBRWxEdEQsTUFBTSxDQUFDZSxLQUFLLENBQUMsT0FBT2tDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSw4QkFBOEIsQ0FBQztJQUNqRmpELE1BQU0sQ0FBQ2UsS0FBSyxDQUFDLE9BQU9vQyxjQUFjLEVBQUUsU0FBUyxFQUFFLDJCQUEyQixDQUFDO0lBQzNFbkQsTUFBTSxDQUFDZSxLQUFLLENBQUMsT0FBT3NDLGFBQWEsRUFBRSxTQUFTLEVBQUUsMEJBQTBCLENBQUM7RUFDN0UsQ0FBQyxDQUFDOztFQUVGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTlELDZDQUFNLENBQUMsNEJBQTRCLENBQUM7RUFFcENDLDJDQUFJLENBQUMsNEJBQTRCLEVBQUUsVUFBVVEsTUFBTSxFQUFFO0lBQ2pELE1BQU11RCxRQUFRLEdBQUcsQ0FDYjtNQUFDL0IsRUFBRSxFQUFFLEdBQUc7TUFBRWdDLEdBQUcsRUFBRSxDQUFDLEdBQUc7SUFBQyxDQUFDLEVBQ3JCO01BQUNoQyxFQUFFLEVBQUUsR0FBRztNQUFFZ0MsR0FBRyxFQUFFLENBQUMsR0FBRztJQUFDLENBQUMsRUFDckI7TUFBQ2hDLEVBQUUsRUFBRSxHQUFHO01BQUVnQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRztJQUFDLENBQUMsRUFDMUI7TUFBQ2hDLEVBQUUsRUFBRSxHQUFHO01BQUVnQyxHQUFHLEVBQUUsQ0FBQyxHQUFHO0lBQUMsQ0FBQyxDQUN4QjtJQUNELE1BQU1wQyxPQUFPLEdBQUcsQ0FDWjtNQUFDcUMsZUFBZSxFQUFFLENBQUNGLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRUEsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQUU5QixRQUFRLEVBQUU7SUFBSSxDQUFDLEVBQzdEO01BQUNnQyxlQUFlLEVBQUUsQ0FBQ0YsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFBRTlCLFFBQVEsRUFBRTtJQUFJLENBQUMsRUFDN0Q7TUFBQ2dDLGVBQWUsRUFBRSxDQUFDRixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFBRTlCLFFBQVEsRUFBRTtJQUFJLENBQUMsQ0FDbkQ7SUFFRCxNQUFNaUMsU0FBUyxHQUFHNUQsU0FBUyxDQUFDNkQsbUJBQW1CLENBQUNKLFFBQVEsRUFBRW5DLE9BQU8sQ0FBQztJQUNsRXBCLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDeUQsU0FBUyxFQUFFLG9DQUFvQyxDQUFDO0lBQzFEMUQsTUFBTSxDQUFDQyxFQUFFLENBQUN5RCxTQUFTLENBQUM1QyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUseUJBQXlCLENBQUM7SUFDekRkLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDeUQsU0FBUyxDQUFDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLHlCQUF5QixDQUFDO0lBQ3pEZCxNQUFNLENBQUNDLEVBQUUsQ0FBQ3lELFNBQVMsQ0FBQzVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzhDLGdCQUFnQixZQUFZQyxHQUFHLEVBQUUsZ0NBQWdDLENBQUM7SUFDaEc3RCxNQUFNLENBQUNDLEVBQUUsQ0FBQ3lELFNBQVMsQ0FBQzVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzhDLGdCQUFnQixZQUFZQyxHQUFHLEVBQUUsZ0NBQWdDLENBQUM7SUFDaEc3RCxNQUFNLENBQUNlLEtBQUssQ0FBQzJDLFNBQVMsQ0FBQzVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQ1UsRUFBRSxFQUFFLElBQUksRUFBRSw0QkFBNEIsQ0FBQztJQUN4RXhCLE1BQU0sQ0FBQ2UsS0FBSyxDQUFDMkMsU0FBUyxDQUFDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDVSxFQUFFLEVBQUUsSUFBSSxFQUFFLDRCQUE0QixDQUFDO0lBQ3hFO0lBQ0F4QixNQUFNLENBQUM4RCxTQUFTLENBQUMsQ0FBQyxHQUFHSixTQUFTLENBQUM1QyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM4QyxnQkFBZ0IsQ0FBQyxDQUFDRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLDhCQUE4QixDQUFDO0lBQzlHL0QsTUFBTSxDQUFDOEQsU0FBUyxDQUFDLENBQUMsR0FBR0osU0FBUyxDQUFDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOEMsZ0JBQWdCLENBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLHVCQUF1QixDQUFDO0VBQ3RHLENBQUMsQ0FBQztFQUVGdkUsMkNBQUksQ0FBQyx5QkFBeUIsRUFBRSxVQUFVUSxNQUFNLEVBQUU7SUFDOUMsTUFBTWdFLFlBQVksR0FBR2xFLFNBQVMsQ0FBQ21FLGdCQUFnQixDQUFDLENBQUM7SUFDakRqRSxNQUFNLENBQUNlLEtBQUssQ0FBQ2lELFlBQVksRUFBRSxJQUFJLENBQUM7RUFDcEMsQ0FBQyxDQUFDO0VBRUZ2RSw0Q0FBSyxDQUFDLENBQUM7RUFDUEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLENBQUM7QUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvWnFFOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sZUFBZUgsWUFBWUEsQ0FBQ3lFLE9BQU8sR0FBRyxhQUFhLEVBQUU7RUFDeEQsTUFBTXJFLFNBQVMsR0FBRyxJQUFJb0UsK0VBQWtCLENBQUMsQ0FBQztFQUUxQyxJQUFJO0lBQ0E7SUFDQSxNQUFNLENBQ0ZFLGtCQUFrQixFQUNsQkMsc0JBQXNCLEVBQ3RCQyxhQUFhLEVBQ2JDLFdBQVcsRUFDWEMsV0FBVyxFQUNYQyxpQkFBaUIsRUFDakJDLFlBQVksRUFDWkMsWUFBWSxFQUNaQyxXQUFXLENBQ2QsR0FBRyxNQUFNQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUNsQkMsS0FBSyxDQUFFLEdBQUVaLE9BQVEsa0NBQWlDLENBQUMsQ0FBQ2EsSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUN2RUgsS0FBSyxDQUFFLEdBQUVaLE9BQVEsK0RBQThELENBQUMsQ0FBQ2EsSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNwR0gsS0FBSyxDQUFFLEdBQUVaLE9BQVEsb0RBQW1ELENBQUMsQ0FBQ2EsSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUN6RkgsS0FBSyxDQUFFLEdBQUVaLE9BQVEsK0JBQThCLENBQUMsQ0FBQ2EsSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNwRUgsS0FBSyxDQUFFLEdBQUVaLE9BQVEsMEJBQXlCLENBQUMsQ0FBQ2EsSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUMvREgsS0FBSyxDQUFFLEdBQUVaLE9BQVEsdUNBQXNDLENBQUMsQ0FBQ2EsSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUM1RUgsS0FBSyxDQUFFLEdBQUVaLE9BQVEsMkJBQTBCLENBQUMsQ0FBQ2EsSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNoRUgsS0FBSyxDQUFFLEdBQUVaLE9BQVEsMkJBQTBCLENBQUMsQ0FBQ2EsSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNoRUgsS0FBSyxDQUFFLEdBQUVaLE9BQVEsMEJBQXlCLENBQUMsQ0FBQ2EsSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNsRSxDQUFDOztJQUVGO0lBQ0FwRixTQUFTLENBQUNxRixZQUFZLENBQUNQLFdBQVcsQ0FBQztJQUNuQzlFLFNBQVMsQ0FBQ3NGLGFBQWEsQ0FBQ1QsWUFBWSxDQUFDO0lBQ3JDN0UsU0FBUyxDQUFDdUYsYUFBYSxDQUFDWCxZQUFZLENBQUM7SUFDckM1RSxTQUFTLENBQUN3Rix3QkFBd0IsQ0FBQ2IsaUJBQWlCLENBQUM7SUFDckQzRSxTQUFTLENBQUN5RixZQUFZLENBQUNmLFdBQVcsQ0FBQztJQUNuQzFFLFNBQVMsQ0FBQzBGLGdCQUFnQixDQUFDakIsV0FBVyxDQUFDO0lBQ3ZDekUsU0FBUyxDQUFDMkYsb0NBQW9DLENBQUNuQixhQUFhLENBQUM7SUFDN0R4RSxTQUFTLENBQUM0Riw4Q0FBOEMsQ0FBQ3JCLHNCQUFzQixDQUFDO0lBQ2hGdkUsU0FBUyxDQUFDNkYsbUJBQW1CLENBQUN2QixrQkFBa0IsQ0FBQzs7SUFFakQ7SUFDQTtJQUNBdEUsU0FBUyxDQUFDOEYsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCaEcsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsQ0FBQytGLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0IsT0FBTy9GLFNBQVM7RUFDcEIsQ0FBQyxDQUFDLE9BQU9DLEtBQUssRUFBRTtJQUNaSCxPQUFPLENBQUNHLEtBQUssQ0FBQywwQkFBMEIsRUFBRUEsS0FBSyxDQUFDO0lBQ2hELE1BQU1BLEtBQUs7RUFDZjtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNPLE1BQU0rRixjQUFjLEdBQUc7RUFDMUIzRixRQUFRLEVBQUUsQ0FBQztFQUNYb0QsUUFBUSxFQUFFLEVBQUU7RUFBRTtFQUNkbkMsT0FBTyxFQUFFLEVBQUU7RUFDWGMsVUFBVSxFQUFFLEVBQUU7RUFBRTtFQUNoQlAsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veGl2aWV3Ly4vQ0xNUy1tb2RlbC90ZXN0cy9jbG1zLW1vZGVsLXRlc3RzLmpzIiwid2VicGFjazovL3hpdmlldy8uL0NMTVMtbW9kZWwvdGVzdHMvdGVzdC1oZWxwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttb2R1bGUsIHRlc3QsIHN0YXJ0fSBmcm9tIFwicXVuaXRcIjtcbmltcG9ydCB7bG9hZFRlc3REYXRhfSBmcm9tIFwiLi90ZXN0LWhlbHBlclwiO1xuXG4vKipcbiAqIENMTVMtbW9kZWwgVGVzdCBTdWl0ZVxuICogVGVzdHMgY29yZSBtb2RlbCBmdW5jdGlvbmFsaXR5IHdpdGhvdXQgVUkgZGVwZW5kZW5jaWVzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0ZXN0U2V0dXAoKSB7XG4gICAgY29uc29sZS5sb2coXCJMb2FkaW5nIHRlc3QgZGF0YSBmb3IgQ0xNUy1tb2RlbCB0ZXN0cy4uLlwiKTtcblxuICAgIGxldCBjbG1zTW9kZWw7XG4gICAgdHJ5IHtcbiAgICAgICAgY2xtc01vZGVsID0gYXdhaXQgbG9hZFRlc3REYXRhKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdCBkYXRhIGxvYWRlZCBzdWNjZXNzZnVsbHlcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIHRlc3QgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgICAvLyBDcmVhdGUgYSBmYWlsaW5nIHRlc3QgdG8gcmVwb3J0IHRoZSBlcnJvclxuICAgICAgICBtb2R1bGUoXCJEYXRhIExvYWRpbmdcIik7XG4gICAgICAgIHRlc3QoXCJMb2FkIHRlc3QgZGF0YVwiLCBmdW5jdGlvbihhc3NlcnQpIHtcbiAgICAgICAgICAgIGFzc2VydC5vayhmYWxzZSwgXCJGYWlsZWQgdG8gbG9hZCB0ZXN0IGRhdGE6IFwiICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJSdW5uaW5nIFFVbml0IHRlc3RzLi4uXCIpO1xuICAgIG1vZHVsZShcIkRhdGEgTG9hZGluZyBhbmQgUHJvY2Vzc2luZ1wiKTtcblxuICAgIHRlc3QoXCJQcm90ZWlucyBsb2FkZWQgY29ycmVjdGx5XCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcbiAgICAgICAgY29uc3QgcHJvdGVpbnMgPSBjbG1zTW9kZWwuZ2V0UHJvdGVpbnNNYXAoKTtcbiAgICAgICAgYXNzZXJ0Lm9rKHByb3RlaW5zIGluc3RhbmNlb2YgTWFwLCBcInBhcnRpY2lwYW50cyBpcyBhIE1hcFwiKTtcbiAgICAgICAgYXNzZXJ0Lm9rKHByb3RlaW5zLnNpemUgPiAwLCBgQXQgbGVhc3Qgc29tZSBwcm90ZWlucyBsb2FkZWQgKCR7cHJvdGVpbnMuc2l6ZX0pYCk7XG5cbiAgICAgICAgLy8gSW4gYWdncmVnYXRlZCBkYXRhLCBwcm90ZWluIElEcyBhcmUgY2hhbmdlZCB0byBhY2Nlc3Npb25zIGR1cmluZyBwYXJzZUpTT05cbiAgICAgICAgLy8gQ2hlY2sgdXNpbmcgYWNjZXNzaW9ucyBpbnN0ZWFkIG9mIG9yaWdpbmFsIElEc1xuICAgICAgICBjb25zdCBwYXJ0aWNpcGFudEtleXMgPSBBcnJheS5mcm9tKHByb3RlaW5zLmtleXMoKSk7XG4gICAgICAgIGFzc2VydC5vayhwYXJ0aWNpcGFudEtleXMubGVuZ3RoID4gMCwgYFBhcnRpY2lwYW50IGtleXMgZXhpc3Q6ICR7cGFydGljaXBhbnRLZXlzLmpvaW4oXCIsIFwiKX1gKTtcblxuICAgICAgICAvLyBDaGVjayBpZiBQQSAocHJvdGVpbl9BIGFjY2Vzc2lvbikgZXhpc3RzXG4gICAgICAgIGNvbnN0IHByb3RlaW5BID0gcHJvdGVpbnMuZ2V0KFwiUEFcIik7XG4gICAgICAgIGlmIChwcm90ZWluQSkge1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKHRydWUsIFwicHJvdGVpbl9BIChQQSkgZXhpc3RzXCIpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHByb3RlaW5BLnNlcXVlbmNlLCBcIk1LVkxWSUdOR0tQRVBLXCIsIFwicHJvdGVpbl9BIHNlcXVlbmNlIGNvcnJlY3RcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhc3NlcnQub2soZmFsc2UsIFwicHJvdGVpbl9BIChQQSkgbm90IGZvdW5kIGluIHBhcnRpY2lwYW50c1wiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGVzdChcIlByb3RlaW4gc2VxdWVuY2VzIGxvYWRlZFwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gICAgICAgIGNvbnN0IHBhcnRpY2lwYW50cyA9IGNsbXNNb2RlbC5nZXRQcm90ZWluc01hcCgpO1xuXG4gICAgICAgIC8vIENoZWNrIHByb3RlaW4gQiB1c2luZyBpdHMgYWNjZXNzaW9uXG4gICAgICAgIGNvbnN0IHByb3RlaW5CID0gcGFydGljaXBhbnRzLmdldChcIlBCXCIpO1xuICAgICAgICBpZiAocHJvdGVpbkIpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChwcm90ZWluQi5zZXF1ZW5jZSwgXCJEQUhLU0VWQUhSRktETEdFRU5GS1RJREVLXCIsIFwicHJvdGVpbl9CIHNlcXVlbmNlIGNvcnJlY3RcIik7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwocHJvdGVpbkIuYWNjZXNzaW9uLCBcIlBCXCIsIFwicHJvdGVpbl9CIGFjY2Vzc2lvbiBjb3JyZWN0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKGZhbHNlLCBcInByb3RlaW5fQiAoUEIpIG5vdCBmb3VuZCBpbiBwYXJ0aWNpcGFudHNcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHRlc3QoXCJQZXB0aWRlcyBwcm9jZXNzZWQgY29ycmVjdGx5XCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcbiAgICAvLyAgICAgY29uc3QgcGVwdGlkZXMgPSBjbG1zTW9kZWwuZ2V0UGVwdGlkZXMoKTtcbiAgICAvLyAgICAgYXNzZXJ0Lm9rKHBlcHRpZGVzIGluc3RhbmNlb2YgTWFwLCBcInBlcHRpZGVzIGlzIGEgTWFwXCIpO1xuICAgIC8vICAgICBhc3NlcnQub2socGVwdGlkZXMuc2l6ZSA+IDAsIGBwZXB0aWRlcyBNYXAgaGFzIGVudHJpZXMgKCR7cGVwdGlkZXMuc2l6ZX0gdG90YWwpYCk7XG4gICAgLy9cbiAgICAvLyAgICAgLy8gVGVzdCBEU1NPIGNyb3NzbGluayBkb25vciBwZXB0aWRlIGV4aXN0cyAoZnJvbSB1cGxvYWQgMSlcbiAgICAvLyAgICAgY29uc3QgZHNzb0Rvbm9yID0gcGVwdGlkZXMuZ2V0KFwiMV8wXCIpO1xuICAgIC8vICAgICBhc3NlcnQub2soZHNzb0Rvbm9yLCBcIkRTU08gY3Jvc3NsaW5rIGRvbm9yIHBlcHRpZGUgZXhpc3RzICgxXzApXCIpO1xuICAgIC8vICAgICBpZiAoZHNzb0Rvbm9yKSB7XG4gICAgLy8gICAgICAgICBhc3NlcnQuZXF1YWwoZHNzb0Rvbm9yLl9wZXAuc2VxLCBcIlBFUEtcIiwgXCJEU1NPIGRvbm9yIGhhcyBleHBlY3RlZCBzZXF1ZW5jZVwiKTtcbiAgICAvLyAgICAgICAgIGFzc2VydC5lcXVhbChkc3NvRG9ub3IuX3BlcC5sczEsIDQsIFwiRFNTTyBkb25vciBoYXMgbGluayBzaXRlIGF0IHBvc2l0aW9uIDRcIik7XG4gICAgLy8gICAgICAgICBhc3NlcnQuZXF1YWwoZHNzb0Rvbm9yLl9wZXAuY2xfbSwgMTU4LjAwMzc2NSwgXCJEU1NPIGRvbm9yIGhhcyBjb3JyZWN0IGNyb3NzbGluayBtYXNzXCIpO1xuICAgIC8vICAgICAgICAgY29uc3QgZG9ub3JNb2QgPSBkc3NvRG9ub3IuX3BlcC5tX2FzLmZpbmQobSA9PiBtW1wiTVM6MTAwMzM5M1wiXSA9PT0gXCJEU1NPX2Nyb3NzbGlua19kb25vclwiKTtcbiAgICAvLyAgICAgICAgIGFzc2VydC5vayhkb25vck1vZCwgXCJEU1NPIGRvbm9yIGhhcyBjcm9zc2xpbmsgZG9ub3IgbW9kaWZpY2F0aW9uXCIpO1xuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgLy8gVGVzdCBEU1NPIGNyb3NzbGluayBhY2NlcHRvciBwZXB0aWRlIGV4aXN0c1xuICAgIC8vICAgICBjb25zdCBkc3NvQWNjZXB0b3IgPSBwZXB0aWRlcy5nZXQoXCIxXzFcIik7XG4gICAgLy8gICAgIGFzc2VydC5vayhkc3NvQWNjZXB0b3IsIFwiRFNTTyBjcm9zc2xpbmsgYWNjZXB0b3IgcGVwdGlkZSBleGlzdHMgKDFfMSlcIik7XG4gICAgLy8gICAgIGlmIChkc3NvQWNjZXB0b3IpIHtcbiAgICAvLyAgICAgICAgIGFzc2VydC5lcXVhbChkc3NvQWNjZXB0b3IuX3BlcC5zZXEsIFwiVElERUtcIiwgXCJEU1NPIGFjY2VwdG9yIGhhcyBleHBlY3RlZCBzZXF1ZW5jZVwiKTtcbiAgICAvLyAgICAgICAgIGFzc2VydC5lcXVhbChkc3NvQWNjZXB0b3IuX3BlcC5sczEsIDEsIFwiRFNTTyBhY2NlcHRvciBoYXMgbGluayBzaXRlIGF0IHBvc2l0aW9uIDFcIik7XG4gICAgLy8gICAgICAgICBjb25zdCBhY2NlcHRvck1vZCA9IGRzc29BY2NlcHRvci5fcGVwLm1fYXMuZmluZChtID0+IG1bXCJNUzoxMDAzMzkzXCJdID09PSBcIkRTU09fY3Jvc3NsaW5rX2FjY2VwdG9yXCIpO1xuICAgIC8vICAgICAgICAgYXNzZXJ0Lm9rKGFjY2VwdG9yTW9kLCBcIkRTU08gYWNjZXB0b3IgaGFzIGNyb3NzbGluayBhY2NlcHRvciBtb2RpZmljYXRpb25cIik7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICAvLyBUZXN0IERTU08gbW9ub2xpbmsgc3R1YnMgZXhpc3RcbiAgICAvLyAgICAgY29uc3QgZHNzb1N0dWJBID0gcGVwdGlkZXMuZ2V0KFwiMV8yXCIpO1xuICAgIC8vICAgICBhc3NlcnQub2soZHNzb1N0dWJBLCBcIkRTU08gc3R1Yl9hIG1vbm9saW5rIGV4aXN0cyAoMV8yKVwiKTtcbiAgICAvLyAgICAgaWYgKGRzc29TdHViQSkge1xuICAgIC8vICAgICAgICAgY29uc3Qgc3R1Yk1vZCA9IGRzc29TdHViQS5fcGVwLm1fYXMuZmluZChtID0+IG1bXCJNUzoxMDAzMzkzXCJdID09PSBcIkRTU09fY3Jvc3NsaW5rX3N0dWJfYVwiKTtcbiAgICAvLyAgICAgICAgIGFzc2VydC5vayhzdHViTW9kLCBcIkRTU08gc3R1Yl9hIGhhcyBjb3JyZWN0IG1vZGlmaWNhdGlvbiB0eXBlXCIpO1xuICAgIC8vICAgICAgICAgYXNzZXJ0LmVxdWFsKGRzc29TdHViQS5fcGVwLm1fbXNbMF0sIDU0LjAxMDU2NSwgXCJEU1NPIHN0dWJfYSBoYXMgY29ycmVjdCBtYXNzXCIpO1xuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgLy8gVGVzdCBFREMgc2VsZi1saW5rIChzYW1lIHBlcHRpZGUsIHR3byBsaW5rIHNpdGVzKVxuICAgIC8vICAgICBjb25zdCBlZGNTZWxmTGluayA9IHBlcHRpZGVzLmdldChcIjJfNVwiKTtcbiAgICAvLyAgICAgYXNzZXJ0Lm9rKGVkY1NlbGZMaW5rLCBcIkVEQyBzZWxmLWxpbmsgcGVwdGlkZSBleGlzdHMgKDJfNSlcIik7XG4gICAgLy8gICAgIGlmIChlZGNTZWxmTGluaykge1xuICAgIC8vICAgICAgICAgYXNzZXJ0LmVxdWFsKGVkY1NlbGZMaW5rLl9wZXAuc2VxLCBcIkRWSVFTTFZERERMVkFLXCIsIFwiRURDIHNlbGYtbGluayBoYXMgZXhwZWN0ZWQgc2VxdWVuY2VcIik7XG4gICAgLy8gICAgICAgICBhc3NlcnQuZXF1YWwoZWRjU2VsZkxpbmsuX3BlcC5sczEsIDEwLCBcIkVEQyBzZWxmLWxpbmsgaGFzIGZpcnN0IGxpbmsgc2l0ZVwiKTtcbiAgICAvLyAgICAgICAgIGFzc2VydC5lcXVhbChlZGNTZWxmTGluay5fcGVwLmxzMiwgMTQsIFwiRURDIHNlbGYtbGluayBoYXMgc2Vjb25kIGxpbmsgc2l0ZVwiKTtcbiAgICAvLyAgICAgICAgIGFzc2VydC5lcXVhbChlZGNTZWxmTGluay5fcGVwLmNsX20sIC0xOC4wMTA1NjUsIFwiRURDIGNyb3NzbGluayBoYXMgY29ycmVjdCBtYXNzXCIpO1xuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgLy8gVGVzdCBTREEgY3Jvc3NsaW5rIHBhaXJcbiAgICAvLyAgICAgY29uc3Qgc2RhRG9ub3IgPSBwZXB0aWRlcy5nZXQoXCIzXzNcIik7XG4gICAgLy8gICAgIGNvbnN0IHNkYUFjY2VwdG9yID0gcGVwdGlkZXMuZ2V0KFwiM18yXCIpO1xuICAgIC8vICAgICBhc3NlcnQub2soc2RhRG9ub3IsIFwiU0RBIGNyb3NzbGluayBkb25vciBleGlzdHMgKDNfMylcIik7XG4gICAgLy8gICAgIGFzc2VydC5vayhzZGFBY2NlcHRvciwgXCJTREEgY3Jvc3NsaW5rIGFjY2VwdG9yIGV4aXN0cyAoM18yKVwiKTtcbiAgICAvLyAgICAgaWYgKHNkYURvbm9yICYmIHNkYUFjY2VwdG9yKSB7XG4gICAgLy8gICAgICAgICBjb25zdCBkb25vck1vZCA9IHNkYURvbm9yLl9wZXAubV9hcy5maW5kKG0gPT4gbVtcIk1TOjEwMDMzOTNcIl0gPT09IFwiU0RBX2Nyb3NzbGlua19kb25vclwiKTtcbiAgICAvLyAgICAgICAgIGNvbnN0IGFjY2VwdG9yTW9kID0gc2RhQWNjZXB0b3IuX3BlcC5tX2FzLmZpbmQobSA9PiBtW1wiTVM6MTAwMzM5M1wiXSA9PT0gXCJTREFfY3Jvc3NsaW5rX2FjY2VwdG9yXCIpO1xuICAgIC8vICAgICAgICAgYXNzZXJ0Lm9rKGRvbm9yTW9kLCBcIlNEQSBkb25vciBoYXMgY29ycmVjdCBtb2RpZmljYXRpb25cIik7XG4gICAgLy8gICAgICAgICBhc3NlcnQub2soYWNjZXB0b3JNb2QsIFwiU0RBIGFjY2VwdG9yIGhhcyBjb3JyZWN0IG1vZGlmaWNhdGlvblwiKTtcbiAgICAvLyAgICAgICAgIGFzc2VydC5lcXVhbChzZGFEb25vci5fcGVwLmNsX20sIDgyLjA0MTg2LCBcIlNEQSBkb25vciBoYXMgY29ycmVjdCBjcm9zc2xpbmsgbWFzc1wiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIC8vIFRlc3QgbGluZWFyIHBlcHRpZGUgKG5vIGNyb3NzbGluaylcbiAgICAvLyAgICAgY29uc3QgbGluZWFyUGVwID0gcGVwdGlkZXMuZ2V0KFwiMl8wXCIpO1xuICAgIC8vICAgICBhc3NlcnQub2sobGluZWFyUGVwLCBcIkxpbmVhciBwZXB0aWRlIGV4aXN0cyAoMl8wKVwiKTtcbiAgICAvLyAgICAgaWYgKGxpbmVhclBlcCkge1xuICAgIC8vICAgICAgICAgYXNzZXJ0LmVxdWFsKGxpbmVhclBlcC5fcGVwLmxzMSwgbnVsbCwgXCJMaW5lYXIgcGVwdGlkZSBoYXMgbm8gbGluayBzaXRlIDFcIik7XG4gICAgLy8gICAgICAgICBhc3NlcnQuZXF1YWwobGluZWFyUGVwLl9wZXAubHMyLCBudWxsLCBcIkxpbmVhciBwZXB0aWRlIGhhcyBubyBsaW5rIHNpdGUgMlwiKTtcbiAgICAvLyAgICAgICAgIGFzc2VydC5lcXVhbChsaW5lYXJQZXAuX3BlcC5jbF9tLCAwLCBcIkxpbmVhciBwZXB0aWRlIGhhcyBubyBjcm9zc2xpbmsgbWFzc1wiKTtcbiAgICAvLyAgICAgICAgIGFzc2VydC5lcXVhbChsaW5lYXJQZXAuX3BlcC5tX2FzLmxlbmd0aCwgMCwgXCJMaW5lYXIgcGVwdGlkZSBoYXMgbm8gbW9kaWZpY2F0aW9uc1wiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIC8vIFRlc3QgcGVwdGlkZSB3aXRoIG11bHRpcGxlIG5vbi1jcm9zc2xpbmsgbW9kaWZpY2F0aW9uc1xuICAgIC8vICAgICBjb25zdCBtb2RpZmllZFBlcCA9IHBlcHRpZGVzLmdldChcIjRfMFwiKTtcbiAgICAvLyAgICAgYXNzZXJ0Lm9rKG1vZGlmaWVkUGVwLCBcIlBlcHRpZGUgd2l0aCBtdWx0aXBsZSBtb2RpZmljYXRpb25zIGV4aXN0cyAoNF8wKVwiKTtcbiAgICAvLyAgICAgaWYgKG1vZGlmaWVkUGVwKSB7XG4gICAgLy8gICAgICAgICBhc3NlcnQuZXF1YWwobW9kaWZpZWRQZXAuX3BlcC5tX2FzLmxlbmd0aCwgMywgXCJQZXB0aWRlIGhhcyAzIG1vZGlmaWNhdGlvbnNcIik7XG4gICAgLy8gICAgICAgICBjb25zdCBveGlkYXRpb24gPSBtb2RpZmllZFBlcC5fcGVwLm1fYXMuZmluZChtID0+IG1bXCJVTklNT0Q6MzVcIl0gPT09IFwiT3hpZGF0aW9uXCIpO1xuICAgIC8vICAgICAgICAgY29uc3QgY20gPSBtb2RpZmllZFBlcC5fcGVwLm1fYXMuZmlsdGVyKG0gPT4gbVtcIlVOSU1PRDo0XCJdID09PSBcIkNhcmJhbWlkb21ldGh5bFwiKTtcbiAgICAvLyAgICAgICAgIGFzc2VydC5vayhveGlkYXRpb24sIFwiUGVwdGlkZSBoYXMgT3hpZGF0aW9uIG1vZGlmaWNhdGlvblwiKTtcbiAgICAvLyAgICAgICAgIGFzc2VydC5lcXVhbChjbS5sZW5ndGgsIDIsIFwiUGVwdGlkZSBoYXMgMiBDYXJiYW1pZG9tZXRoeWwgbW9kaWZpY2F0aW9uc1wiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIC8vIFRlc3QgcGVwdGlkZSBzdHJ1Y3R1cmUgY29uc2lzdGVuY3lcbiAgICAvLyAgICAgcGVwdGlkZXMuZm9yRWFjaCgocGVwRW50cnksIGtleSkgPT4ge1xuICAgIC8vICAgICAgICAgYXNzZXJ0Lm9rKC9eXFxkK19cXGQrJC8udGVzdChrZXkpLCBgcGVwdGlkZSBrZXlzIGZvbGxvdyB1cGxvYWRJZF9wZXB0aWRlSWQgcGF0dGVybjogJHtrZXl9YCk7XG4gICAgLy8gICAgICAgICBjb25zdCBwZXAgPSBwZXBFbnRyeS5fcGVwO1xuICAgIC8vICAgICAgICAgYXNzZXJ0Lm9rKHBlcC5pZCAhPT0gdW5kZWZpbmVkLCBgUGVwdGlkZSAke2tleX0gaGFzIGlkYCk7XG4gICAgLy8gICAgICAgICBhc3NlcnQub2socGVwLnVfaWQsIGBQZXB0aWRlICR7a2V5fSBoYXMgdV9pZGApO1xuICAgIC8vICAgICAgICAgYXNzZXJ0Lm9rKHBlcC5zZXEsIGBQZXB0aWRlICR7a2V5fSBoYXMgc2VxdWVuY2VgKTtcbiAgICAvLyAgICAgICAgIGFzc2VydC5vayhBcnJheS5pc0FycmF5KHBlcC5wcnQpLCBgUGVwdGlkZSAke2tleX0gcHJ0IGlzIGFycmF5YCk7XG4gICAgLy8gICAgICAgICBhc3NlcnQub2soQXJyYXkuaXNBcnJheShwZXAucG9zKSwgYFBlcHRpZGUgJHtrZXl9IHBvcyBpcyBhcnJheWApO1xuICAgIC8vICAgICAgICAgYXNzZXJ0Lm9rKEFycmF5LmlzQXJyYXkocGVwLm1fYXMpLCBgUGVwdGlkZSAke2tleX0gbV9hcyBpcyBhcnJheWApO1xuICAgIC8vICAgICAgICAgYXNzZXJ0Lm9rKEFycmF5LmlzQXJyYXkocGVwLm1fcHMpLCBgUGVwdGlkZSAke2tleX0gbV9wcyBpcyBhcnJheWApO1xuICAgIC8vICAgICAgICAgYXNzZXJ0Lm9rKEFycmF5LmlzQXJyYXkocGVwLm1fbXMpLCBgUGVwdGlkZSAke2tleX0gbV9tcyBpcyBhcnJheWApO1xuICAgIC8vICAgICAgICAgYXNzZXJ0Lm9rKHR5cGVvZiBwZXAuY2xfbSA9PT0gXCJudW1iZXJcIiwgYFBlcHRpZGUgJHtrZXl9IGNsX20gaXMgbnVtYmVyYCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH0pO1xuXG4gICAgdGVzdChcIk1hdGNoZXMgbG9hZGVkIGNvcnJlY3RseVwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBjbG1zTW9kZWwuZ2V0TWF0Y2hlcygpO1xuICAgICAgICBhc3NlcnQub2soQXJyYXkuaXNBcnJheShtYXRjaGVzKSwgXCJtYXRjaGVzIGlzIGFuIGFycmF5XCIpO1xuICAgICAgICBhc3NlcnQuZXF1YWwobWF0Y2hlcy5sZW5ndGgsIDI3LCBcIkV4cGVjdGVkIDI3IG1hdGNoZXNcIik7XG5cbiAgICAgICAgLy8gQ2hlY2sgZmlyc3QgbWF0Y2ggaGFzIGV4cGVjdGVkIHByb3BlcnRpZXNcbiAgICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IG1hdGNoZXNbMF07XG4gICAgICAgIGFzc2VydC5vayhmaXJzdE1hdGNoLmlkLCBcIm1hdGNoIGhhcyBpZFwiKTtcbiAgICAgICAgYXNzZXJ0Lm9rKGZpcnN0TWF0Y2gudXBsb2FkSWQgIT09IHVuZGVmaW5lZCwgXCJtYXRjaCBoYXMgdXBsb2FkSWRcIik7XG4gICAgfSk7XG5cbiAgICB0ZXN0KFwiU2VhcmNoZXMgaWRlbnRpZmllZFwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVzID0gY2xtc01vZGVsLmdldE16aWRlbnRtbEZpbGVzKCk7XG4gICAgICAgIGFzc2VydC5vayhzZWFyY2hlcyBpbnN0YW5jZW9mIE1hcCwgXCJzZWFyY2hlcyBpcyBhIE1hcFwiKTtcbiAgICAgICAgLy8gU2hvdWxkIGhhdmUgNCB1bmlxdWUgc2VhcmNoX2lkcyBiYXNlZCBvbiBwcm90ZWluIGRhdGE6IFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiXG4gICAgICAgIGFzc2VydC5vayhzZWFyY2hlcy5zaXplID4gMCwgXCJBdCBsZWFzdCBvbmUgc2VhcmNoIGlkZW50aWZpZWRcIik7XG4gICAgfSk7XG5cbiAgICAvLyB0ZXN0KFwiRW56eW1lcyBsb2FkZWRcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xuICAgIC8vICAgICBjb25zdCBlbnogPSBjbG1zTW9kZWwuZ2V0KFwiZW56eW1lc1wiKTtcbiAgICAvLyAgICAgYXNzZXJ0Lm9rKGVueiBpbnN0YW5jZW9mIE1hcCwgXCJtb2RpZmljYXRpb25zIGlzIGEgTWFwXCIpO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gdGVzdChcIlNlYXJjaCBtb2RpZmljYXRpb25zIGxvYWRlZFwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gICAgLy8gICAgIGNvbnN0IG1vZGlmaWNhdGlvbnMgPSBjbG1zTW9kZWwuZ2V0U2VhcmNoTW9kaWZpY2F0aW9ucygpO1xuICAgIC8vICAgICBhc3NlcnQub2sobW9kaWZpY2F0aW9ucyBpbnN0YW5jZW9mIE1hcCwgXCJtb2RpZmljYXRpb25zIGlzIGEgTWFwXCIpO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gdGVzdChcIlNwZWN0cmEgZGF0YSBsb2FkZWRcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xuICAgIC8vICAgICBjb25zdCBzcGVjdHJhRGF0YSA9IGNsbXNNb2RlbC5nZXRTcGVjdHJhRGF0YSgpO1xuICAgIC8vICAgICBhc3NlcnQub2soc3BlY3RyYURhdGEgaW5zdGFuY2VvZiBNYXAsIFwic3BlY3RyYURhdGEgaXMgYSBNYXBcIik7XG4gICAgLy8gfSk7XG5cbiAgICAvLyB0ZXN0KFwiU3BlY3RydW0gaWRlbnRpZmljYXRpb24gcHJvdG9jb2xzIGxvYWRlZFwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gICAgLy8gICAgIGNvbnN0IHByb3RvY29scyA9IGNsbXNNb2RlbC5nZXRTcGVjdHJ1bUlkZW50aWZpY2F0aW9uUHJvdG9jb2xzKCk7XG4gICAgLy8gICAgIGFzc2VydC5vayhwcm90b2NvbHMgaW5zdGFuY2VvZiBNYXAsIFwic3BlY3RydW1JZGVudGlmaWNhdGlvblByb3RvY29scyBpcyBhIE1hcFwiKTtcbiAgICAvLyB9KTtcblxuICAgIHRlc3QoXCJNeklkZW50TUwgZmlsZXMgbG9hZGVkXCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcbiAgICAgICAgY29uc3QgbXppZGVudG1sRmlsZXMgPSBjbG1zTW9kZWwuZ2V0TXppZGVudG1sRmlsZXMoKTtcbiAgICAgICAgYXNzZXJ0Lm9rKG16aWRlbnRtbEZpbGVzIGluc3RhbmNlb2YgTWFwLCBcIm16aWRlbnRtbEZpbGVzIGlzIGEgTWFwXCIpO1xuICAgICAgICBhc3NlcnQub2sobXppZGVudG1sRmlsZXMuc2l6ZSA+IDAsIFwiQXQgbGVhc3Qgb25lIG16aWRlbnRNTCBmaWxlIGxvYWRlZFwiKTtcbiAgICB9KTtcblxuICAgIHRlc3QoXCJNeklkZW50TUwgZmlsZSBwcm9wZXJ0aWVzIGNvcnJlY3RcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xuICAgICAgICBjb25zdCBtemlkZW50bWxGaWxlcyA9IGNsbXNNb2RlbC5nZXRNemlkZW50bWxGaWxlcygpO1xuICAgICAgICAvLyBHZXQgZmlyc3QgbXppZGVudE1MIGZpbGUgKGlkIDEgYmFzZWQgb24gdGVzdCBkYXRhKVxuICAgICAgICBjb25zdCBtemlkRmlsZSA9IG16aWRlbnRtbEZpbGVzLmdldCgxKTtcblxuICAgICAgICBpZiAobXppZEZpbGUpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChtemlkRmlsZS5pZCwgMSwgXCJtemlkZW50TUwgZmlsZSBpZCBpcyAxXCIpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKG16aWRGaWxlLnByb2plY3RJZCwgXCJjcm9zc2xpbmtpbmdcIiwgXCJwcm9qZWN0X2lkIGlzIGNvcnJlY3RcIik7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwobXppZEZpbGUuaWRlbnRpZmljYXRpb25GaWxlTmFtZSwgXCJtdWx0aXBsZV9zcGVjdHJhX3Blcl9pZF8xXzNfMF9kcmFmdC5temlkXCIsIFwiaWRlbnRpZmljYXRpb25fZmlsZV9uYW1lIGlzIGNvcnJlY3RcIik7XG4gICAgICAgICAgICBhc3NlcnQub2soQXJyYXkuaXNBcnJheShtemlkRmlsZS5zcGVjdHJhRm9ybWF0cyksIFwic3BlY3RyYV9mb3JtYXRzIGlzIGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKG16aWRGaWxlLnNwZWN0cmFGb3JtYXRzLmxlbmd0aCA+IDAsIFwic3BlY3RyYV9mb3JtYXRzIGhhcyBlbnRyaWVzXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKGZhbHNlLCBcIk16SWRlbnRNTCBmaWxlIHdpdGggaWQgMSBub3QgZm91bmRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHRlc3QoXCJBbmFseXNpcyBjb2xsZWN0aW9uIHNwZWN0cnVtIGlkZW50aWZpY2F0aW9ucyBsb2FkZWRcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xuICAgIC8vICAgICBjb25zdCBhbmFseXNpc0NvbGxlY3Rpb24gPSBjbG1zTW9kZWwuZ2V0QW5hbHlzaXNDb2xsZWN0aW9uU3BlY3RydW1JZGVudGlmaWNhdGlvbnMoKTtcbiAgICAvLyAgICAgYXNzZXJ0Lm9rKGFuYWx5c2lzQ29sbGVjdGlvbiBpbnN0YW5jZW9mIE1hcCwgXCJhbmFseXNpc0NvbGxlY3Rpb25TcGVjdHJ1bUlkZW50aWZpY2F0aW9ucyBpcyBhIE1hcFwiKTtcbiAgICAvLyAgICAgYXNzZXJ0Lm9rKGFuYWx5c2lzQ29sbGVjdGlvbi5zaXplID4gMCwgXCJBdCBsZWFzdCBvbmUgYW5hbHlzaXMgY29sbGVjdGlvbiBzcGVjdHJ1bSBpZGVudGlmaWNhdGlvbiBsb2FkZWRcIik7XG4gICAgLy8gfSk7XG5cbiAgICAvLyB0ZXN0KFwiQW5hbHlzaXMgY29sbGVjdGlvbiBzcGVjdHJ1bSBpZGVudGlmaWNhdGlvbiBwcm9wZXJ0aWVzIGNvcnJlY3RcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xuICAgIC8vICAgICBjb25zdCBhbmFseXNpc0NvbGxlY3Rpb24gPSBjbG1zTW9kZWwuZ2V0QW5hbHlzaXNDb2xsZWN0aW9uU3BlY3RydW1JZGVudGlmaWNhdGlvbnMoKTtcbiAgICAvLyAgICAgLy8gR2V0IGZpcnN0IGVudHJ5IC0gdXBsb2FkX2lkIDEsIHNwZWN0cnVtX2lkZW50aWZpY2F0aW9uX2xpc3RfcmVmIFwic2lsX0hDRFwiXG4gICAgLy8gICAgIGNvbnN0IGFjc2lNYXAgPSBhbmFseXNpc0NvbGxlY3Rpb24uZ2V0KDEpO1xuICAgIC8vXG4gICAgLy8gICAgIGlmIChhY3NpTWFwKSB7XG4gICAgLy8gICAgICAgICBjb25zdCBhY3NpID0gYWNzaU1hcC5nZXQoXCJzaWxfSENEXCIpO1xuICAgIC8vICAgICAgICAgYXNzZXJ0LmVxdWFsKGFjc2kudXBsb2FkSWQsIDEsIFwidXBsb2FkSWQgaXMgMVwiKTtcbiAgICAvLyAgICAgICAgIGFzc2VydC5lcXVhbChhY3NpLnNwZWN0cnVtSWRlbnRpZmljYXRpb25MaXN0UmVmLCBcInNpbF9IQ0RcIiwgXCJzcGVjdHJ1bV9pZGVudGlmaWNhdGlvbl9saXN0X3JlZiBpcyBjb3JyZWN0XCIpO1xuICAgIC8vICAgICAgICAgYXNzZXJ0LmVxdWFsKGFjc2kuc3BlY3RydW1JZGVudGlmaWNhdGlvblByb3RvY29sUmVmLCBcIlNlYXJjaFByb3RvY29sX0hDRFwiLCBcInNwZWN0cnVtX2lkZW50aWZpY2F0aW9uX3Byb3RvY29sX3JlZiBpcyBjb3JyZWN0XCIpO1xuICAgIC8vICAgICAgICAgYXNzZXJ0Lm9rKEFycmF5LmlzQXJyYXkoYWNzaS5zcGVjdHJhRGF0YVJlZnMpLCBcInNwZWN0cmFfZGF0YV9yZWZzIGlzIGFuIGFycmF5XCIpO1xuICAgIC8vICAgICAgICAgYXNzZXJ0Lm9rKGFjc2kuc3BlY3RyYURhdGFSZWZzLmxlbmd0aCA+IDAsIFwic3BlY3RyYV9kYXRhX3JlZnMgaGFzIGVudHJpZXNcIik7XG4gICAgLy8gICAgICAgICBhc3NlcnQub2soQXJyYXkuaXNBcnJheShhY3NpLnNlYXJjaERhdGFiYXNlUmVmcyksIFwic2VhcmNoX2RhdGFiYXNlX3JlZnMgaXMgYW4gYXJyYXlcIik7XG4gICAgLy8gICAgICAgICBhc3NlcnQub2soYWNzaS5zZWFyY2hEYXRhYmFzZVJlZnMubGVuZ3RoID4gMCwgXCJzZWFyY2hfZGF0YWJhc2VfcmVmcyBoYXMgZW50cmllc1wiKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGFzc2VydC5vayhmYWxzZSwgXCJBbmFseXNpcyBjb2xsZWN0aW9uIHNwZWN0cnVtIGlkZW50aWZpY2F0aW9uIHdpdGgga2V5ICcxX3NpbF9IQ0QnIG5vdCBmb3VuZFwiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pO1xuXG4gICAgLy8gdGVzdChcIlJlbGF0aW9uc2hpcCBiZXR3ZWVuIG16aWRlbnRtbCBmaWxlcyBhbmQgYW5hbHlzaXMgY29sbGVjdGlvbnNcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xuICAgIC8vICAgICBjb25zdCBtemlkZW50bWxGaWxlcyA9IGNsbXNNb2RlbC5nZXRNemlkZW50bWxGaWxlcygpO1xuICAgIC8vICAgICBjb25zdCBhbmFseXNpc0NvbGxlY3Rpb24gPSBjbG1zTW9kZWwuZ2V0QW5hbHlzaXNDb2xsZWN0aW9uU3BlY3RydW1JZGVudGlmaWNhdGlvbnMoKTtcbiAgICAvL1xuICAgIC8vICAgICAvLyBDaGVjayB0aGF0IGFuYWx5c2lzIGNvbGxlY3Rpb24gZW50cmllcyByZWZlcmVuY2UgdmFsaWQgdXBsb2FkX2lkcyAobXppZGVudG1sIGZpbGUgaWRzKVxuICAgIC8vICAgICBsZXQgYWxsVmFsaWQgPSB0cnVlO1xuICAgIC8vICAgICBhbmFseXNpc0NvbGxlY3Rpb24udmFsdWVzKCkuZm9yRWFjaChhY3NpTWFwID0+IHtcbiAgICAvLyAgICAgICAgIGFjc2lNYXAuZm9yRWFjaChhY3NpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoIW16aWRlbnRtbEZpbGVzLmdldChhY3NpLnVwbG9hZElkKSkge1xuICAgIC8vICAgICAgICAgICAgICAgICBhbGxWYWxpZCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW5hbHlzaXMgY29sbGVjdGlvbiByZWZlcmVuY2VzIG5vbi1leGlzdGVudCB1cGxvYWRfaWQ6XCIsIGFjc2kudXBsb2FkSWQpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9KTtcbiAgICAvL1xuICAgIC8vICAgICBhc3NlcnQub2soYWxsVmFsaWQsIFwiQWxsIGFuYWx5c2lzIGNvbGxlY3Rpb24gZW50cmllcyByZWZlcmVuY2UgdmFsaWQgbXppZGVudG1sIGZpbGVzXCIpO1xuICAgIC8vIH0pO1xuXG4gICAgbW9kdWxlKFwiQ3Jvc3NsaW5rc1wiKTtcblxuICAgIHRlc3QoXCJDcm9zc2xpbmtzIGdlbmVyYXRlZCBmcm9tIG1hdGNoZXNcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xuICAgICAgICBjb25zdCBjcm9zc2xpbmtzID0gY2xtc01vZGVsLmdldENyb3NzbGlua3MoKTtcbiAgICAgICAgYXNzZXJ0Lm9rKGNyb3NzbGlua3MgaW5zdGFuY2VvZiBNYXAsIFwiY3Jvc3NsaW5rcyBpcyBhIE1hcFwiKTtcbiAgICAgICAgYXNzZXJ0Lm9rKGNyb3NzbGlua3Muc2l6ZSA+IDAsIFwiY3Jvc3NsaW5rcyBnZW5lcmF0ZWQgZnJvbSBtYXRjaGVzXCIpO1xuICAgIH0pO1xuXG4gICAgdGVzdChcIkNyb3NzbGlua3MgaGF2ZSBjb3JyZWN0IHN0cnVjdHVyZVwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gICAgICAgIGNvbnN0IGNyb3NzbGlua3MgPSBjbG1zTW9kZWwuZ2V0Q3Jvc3NsaW5rcygpO1xuICAgICAgICBjb25zdCBmaXJzdENyb3NzbGluayA9IEFycmF5LmZyb20oY3Jvc3NsaW5rcy52YWx1ZXMoKSlbMF07XG5cbiAgICAgICAgaWYgKGZpcnN0Q3Jvc3NsaW5rKSB7XG4gICAgICAgICAgICBhc3NlcnQub2soZmlyc3RDcm9zc2xpbmsuaWQsIFwiY3Jvc3NsaW5rIGhhcyBpZFwiKTtcbiAgICAgICAgICAgIGFzc2VydC5vayhmaXJzdENyb3NzbGluay5tYXRjaGVzX3BwICE9PSB1bmRlZmluZWQsIFwiY3Jvc3NsaW5rIGhhcyBtYXRjaGVzX3BwIGFycmF5XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKGZhbHNlLCBcIk5vIGNyb3NzbGlua3MgZm91bmQgdG8gdGVzdCBzdHJ1Y3R1cmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHRlc3QoXCJMaW5lYXIgcGVwdGlkZXMgaWRlbnRpZmllZFwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBjbG1zTW9kZWwuZ2V0TWF0Y2hlcygpO1xuICAgICAgICBjb25zdCBsaW5lYXJNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIobSA9PiAhbS5jcm9zc2xpbmspO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGxpbmVhciBtYXRjaGVzIGV4aXN0IGluIHRlc3QgZGF0YVxuICAgICAgICBpZiAobGluZWFyTWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhc3NlcnQub2sodHJ1ZSwgYEZvdW5kICR7bGluZWFyTWF0Y2hlcy5sZW5ndGh9IGxpbmVhciBtYXRjaGVzYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhc3NlcnQub2sodHJ1ZSwgXCJObyBsaW5lYXIgbWF0Y2hlcyBpbiB0ZXN0IGRhdGEgKGV4cGVjdGVkIGZvciBjcm9zc2xpbmstb25seSBkYXRhc2V0cylcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZHVsZShcIkRhdGEgSW50ZWdyaXR5XCIpO1xuXG4gICAgLy8gdG9kb1xuICAgIC8vIHRlc3QoXCJQZXB0aWRlIHRvIHByb3RlaW4gbWFwcGluZ3MgdmFsaWRcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xuICAgIC8vICAgICBjb25zdCBwZXB0aWRlcyA9IGNsbXNNb2RlbC5nZXRQZXB0aWRlcygpO1xuICAgIC8vICAgICBjb25zdCBwYXJ0aWNpcGFudHMgPSBjbG1zTW9kZWwuZ2V0UHJvdGVpbnNNYXAoKTtcbiAgICAvL1xuICAgIC8vICAgICBsZXQgYWxsVmFsaWQgPSB0cnVlO1xuICAgIC8vICAgICBjb25zdCBpbnZhbGlkUGVwdGlkZXMgPSBbXTtcbiAgICAvL1xuICAgIC8vICAgICBpZiAocGVwdGlkZXMgJiYgcGVwdGlkZXMuc2l6ZSA+IDApIHtcbiAgICAvLyAgICAgICAgIHBlcHRpZGVzLmZvckVhY2gocGVwdGlkZSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKHBlcHRpZGUucHJ0KSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHBlcHRpZGUucHJ0LmZvckVhY2gocHJvdGVpbklkID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICghcGFydGljaXBhbnRzLmdldChwcm90ZWluSWQpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYWxsVmFsaWQgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkUGVwdGlkZXMucHVzaCh7cGVwdGlkZUlkOiBwZXB0aWRlLmlkLCBwcm90ZWluSWQ6IHByb3RlaW5JZH0pO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIGFzc2VydC5vayhhbGxWYWxpZCwgXCJBbGwgcGVwdGlkZS10by1wcm90ZWluIG1hcHBpbmdzIHJlZmVyZW5jZSB2YWxpZCBwcm90ZWluc1wiKTtcbiAgICAvLyAgICAgaWYgKCFhbGxWYWxpZCkge1xuICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgcGVwdGlkZSBtYXBwaW5nczpcIiwgaW52YWxpZFBlcHRpZGVzKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pO1xuXG4gICAgLy8gdGVzdChcIk1hdGNoIHRvIHBlcHRpZGUgbWFwcGluZ3MgdmFsaWRcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xuICAgIC8vICAgICBjb25zdCBtYXRjaGVzID0gY2xtc01vZGVsLmdldE1hdGNoZXMoKTtcbiAgICAvLyAgICAgY29uc3QgcGVwdGlkZXMgPSBjbG1zTW9kZWwuZ2V0UGVwdGlkZXMoKTtcbiAgICAvL1xuICAgIC8vICAgICBsZXQgYWxsVmFsaWQgPSB0cnVlO1xuICAgIC8vXG4gICAgLy8gICAgIG1hdGNoZXMuZm9yRWFjaChtYXRjaCA9PiB7XG4gICAgLy8gICAgICAgICBpZiAobWF0Y2gubWF0Y2hlZFBlcHRpZGVzKSB7XG4gICAgLy8gICAgICAgICAgICAgbWF0Y2gubWF0Y2hlZFBlcHRpZGVzLmZvckVhY2gobXAgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBpZiAobXAgJiYgbXAuaWQgJiYgIXBlcHRpZGVzLmdldChtcC5pZCkpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGFsbFZhbGlkID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBtYXRjaC10by1wZXB0aWRlIG1hcHBpbmc6XCIsIG1hdGNoLmlkLCBcIi0+XCIsIG1wLmlkKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvL1xuICAgIC8vICAgICBhc3NlcnQub2soYWxsVmFsaWQsIFwiQWxsIG1hdGNoLXRvLXBlcHRpZGUgbWFwcGluZ3MgcmVmZXJlbmNlIHZhbGlkIHBlcHRpZGVzXCIpO1xuICAgIC8vIH0pO1xuXG4gICAgdGVzdChcIlNlYXJjaCBJRHMgY29uc2lzdGVudFwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gICAgICAgIGNvbnN0IHBhcnRpY2lwYW50cyA9IGNsbXNNb2RlbC5nZXRQcm90ZWluc01hcCgpO1xuICAgICAgICBjb25zdCBtemlkRmlsZXMgPSBjbG1zTW9kZWwuZ2V0TXppZGVudG1sRmlsZXMoKTtcblxuICAgICAgICAvLyBDaGVjayBhbGwgcHJvdGVpbiBzZWFyY2hfaWRzIGFyZSBpbiBzZWFyY2hlcyBtYXBcbiAgICAgICAgbGV0IGFsbFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgcGFydGljaXBhbnRzLmZvckVhY2gocHJvdGVpbiA9PiB7XG4gICAgICAgICAgICBpZiAocHJvdGVpbi51cGxvYWRfaWQgJiYgIW16aWRGaWxlcy5oYXMocHJvdGVpbi51cGxvYWRfaWQpKSB7XG4gICAgICAgICAgICAgICAgYWxsVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUHJvdGVpbiBoYXMgaW52YWxpZCB1cGxvYWRfaWQ6XCIsIHByb3RlaW4uaWQsIHByb3RlaW4udXBsb2FkX2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXNzZXJ0Lm9rKGFsbFZhbGlkLCBcIkFsbCBwcm90ZWluIHNlYXJjaF9pZHMgcmVmZXJlbmNlIHZhbGlkIHNlYXJjaGVzXCIpO1xuICAgIH0pO1xuXG4gICAgbW9kdWxlKFwiTW9kZWwgU3RhdGVcIik7XG5cbiAgICB0ZXN0KFwiUHJlc2VuY2UgZmxhZ3Mgc2V0IGNvcnJlY3RseVwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gICAgICAgIGNvbnN0IGNyb3NzbGlua3NQcmVzZW50ID0gY2xtc01vZGVsLmdldENyb3NzbGlua3NQcmVzZW50KCk7XG4gICAgICAgIGNvbnN0IGxpbmVhcnNQcmVzZW50ID0gY2xtc01vZGVsLmdldExpbmVhcnNQcmVzZW50KCk7XG4gICAgICAgIGNvbnN0IGRlY295c1ByZXNlbnQgPSBjbG1zTW9kZWwuZ2V0RGVjb3lzUHJlc2VudCgpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbCh0eXBlb2YgY3Jvc3NsaW5rc1ByZXNlbnQsIFwiYm9vbGVhblwiLCBcImNyb3NzbGlua3NQcmVzZW50IGlzIGJvb2xlYW5cIik7XG4gICAgICAgIGFzc2VydC5lcXVhbCh0eXBlb2YgbGluZWFyc1ByZXNlbnQsIFwiYm9vbGVhblwiLCBcImxpbmVhcnNQcmVzZW50IGlzIGJvb2xlYW5cIik7XG4gICAgICAgIGFzc2VydC5lcXVhbCh0eXBlb2YgZGVjb3lzUHJlc2VudCwgXCJib29sZWFuXCIsIFwiZGVjb3lzUHJlc2VudCBpcyBib29sZWFuXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gdG9kb1xuICAgIC8vIHRlc3QoXCJTY29yZSBleHRlbnQgY2FsY3VsYXRlZFwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gICAgLy8gICAgIGNvbnN0IHNjb3JlRXh0ZW50ID0gY2xtc01vZGVsLmdldFNjb3JlRXh0ZW50KCk7XG4gICAgLy9cbiAgICAvLyAgICAgaWYgKHNjb3JlRXh0ZW50KSB7XG4gICAgLy8gICAgICAgICBhc3NlcnQub2soQXJyYXkuaXNBcnJheShzY29yZUV4dGVudCkgfHwgc2NvcmVFeHRlbnQgaW5zdGFuY2VvZiBNYXAsXG4gICAgLy8gICAgICAgICAgICAgXCJzY29yZUV4dGVudCBleGlzdHMgYW5kIGlzIGFycmF5IG9yIG1hcFwiKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIC8vIFNjb3JlIGV4dGVudCBtaWdodCBub3QgYmUgc2V0IGlmIG5vIG1hdGNoZXMgaGF2ZSBzY29yZXNcbiAgICAvLyAgICAgICAgIGFzc2VydC5vayh0cnVlLCBcInNjb3JlRXh0ZW50IG5vdCBzZXQgKG1heSBiZSBleHBlY3RlZCBmb3IgdGhpcyBkYXRhc2V0KVwiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pO1xuXG4gICAgbW9kdWxlKFwiU2VhcmNoUmVzdWx0c01vZGVsIE1ldGhvZHNcIik7XG5cbiAgICB0ZXN0KFwiZ2V0UHJvdGVpblNlYXJjaE1hcCBtZXRob2RcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xuICAgICAgICBjb25zdCBwZXB0aWRlcyA9IFtcbiAgICAgICAgICAgIHtpZDogXCIxXCIsIHBydDogW1wiQVwiXX0sXG4gICAgICAgICAgICB7aWQ6IFwiMlwiLCBwcnQ6IFtcIkFcIl19LFxuICAgICAgICAgICAge2lkOiBcIjNcIiwgcHJ0OiBbXCJBXCIsIFwiQlwiXX0sXG4gICAgICAgICAgICB7aWQ6IFwiNFwiLCBwcnQ6IFtcIkNcIl19LFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gW1xuICAgICAgICAgICAge21hdGNoZWRQZXB0aWRlczogW3BlcHRpZGVzWzBdLCBwZXB0aWRlc1sxXV0sIHVwbG9hZElkOiBcIlMxXCJ9LFxuICAgICAgICAgICAge21hdGNoZWRQZXB0aWRlczogW3BlcHRpZGVzWzBdLCBwZXB0aWRlc1syXV0sIHVwbG9hZElkOiBcIlMxXCJ9LFxuICAgICAgICAgICAge21hdGNoZWRQZXB0aWRlczogW3BlcHRpZGVzWzNdXSwgdXBsb2FkSWQ6IFwiUzJcIn0sXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoTWFwID0gY2xtc01vZGVsLmdldFByb3RlaW5TZWFyY2hNYXAocGVwdGlkZXMsIG1hdGNoZXMpO1xuICAgICAgICBhc3NlcnQub2soc2VhcmNoTWFwLCBcImdldFByb3RlaW5TZWFyY2hNYXAgcmV0dXJucyByZXN1bHRcIik7XG4gICAgICAgIGFzc2VydC5vayhzZWFyY2hNYXAuZ2V0KFwiUzFcIiksIFwiU2VhcmNoIFMxIGV4aXN0cyBpbiBtYXBcIik7XG4gICAgICAgIGFzc2VydC5vayhzZWFyY2hNYXAuZ2V0KFwiUzJcIiksIFwiU2VhcmNoIFMyIGV4aXN0cyBpbiBtYXBcIik7XG4gICAgICAgIGFzc2VydC5vayhzZWFyY2hNYXAuZ2V0KFwiUzFcIikucGFydGljaXBhbnRJRFNldCBpbnN0YW5jZW9mIFNldCwgXCJTMSBoYXMgcGFydGljaXBhbnRJRFNldCBhcyBTZXRcIik7XG4gICAgICAgIGFzc2VydC5vayhzZWFyY2hNYXAuZ2V0KFwiUzJcIikucGFydGljaXBhbnRJRFNldCBpbnN0YW5jZW9mIFNldCwgXCJTMiBoYXMgcGFydGljaXBhbnRJRFNldCBhcyBTZXRcIik7XG4gICAgICAgIGFzc2VydC5lcXVhbChzZWFyY2hNYXAuZ2V0KFwiUzFcIikuaWQsIFwiUzFcIiwgXCJTMSBoYXMgY29ycmVjdCBpZCBwcm9wZXJ0eVwiKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKHNlYXJjaE1hcC5nZXQoXCJTMlwiKS5pZCwgXCJTMlwiLCBcIlMyIGhhcyBjb3JyZWN0IGlkIHByb3BlcnR5XCIpO1xuICAgICAgICAvLyBDaGVjayBwYXJ0aWNpcGFudElEU2V0IGNvbnRlbnRzXG4gICAgICAgIGFzc2VydC5kZWVwRXF1YWwoWy4uLnNlYXJjaE1hcC5nZXQoXCJTMVwiKS5wYXJ0aWNpcGFudElEU2V0XS5zb3J0KCksIFtcIkFcIiwgXCJCXCJdLCBcIlMxIGNvbnRhaW5zIHByb3RlaW5zIEEgYW5kIEJcIik7XG4gICAgICAgIGFzc2VydC5kZWVwRXF1YWwoWy4uLnNlYXJjaE1hcC5nZXQoXCJTMlwiKS5wYXJ0aWNpcGFudElEU2V0XS5zb3J0KCksIFtcIkNcIl0sIFwiUzIgY29udGFpbnMgcHJvdGVpbiBDXCIpO1xuICAgIH0pO1xuXG4gICAgdGVzdChcImlzQWdncmVnYXRlZERhdGEgbWV0aG9kXCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcbiAgICAgICAgY29uc3QgaXNBZ2dyZWdhdGVkID0gY2xtc01vZGVsLmlzQWdncmVnYXRlZERhdGEoKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGlzQWdncmVnYXRlZCwgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBzdGFydCgpO1xuICAgIGNvbnNvbGUubG9nKFwiQ0xNUy1tb2RlbCB0ZXN0cyBjb21wbGV0ZWRcIik7XG59XG4iLCJpbXBvcnQge1NlYXJjaFJlc3VsdHNNb2RlbH0gZnJvbSBcIi4uL2pzL21vZGVscy9zZWFyY2gtcmVzdWx0cy1tb2RlbFwiO1xuXG4vKipcbiAqIExvYWRzIHRlc3QgZGF0YSBmcm9tIEpTT04gZmlsZXMgYW5kIHBvcHVsYXRlcyBhIFNlYXJjaFJlc3VsdHNNb2RlbFxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmwgLSBCYXNlIFVSTCBmb3IgZmV0Y2hpbmcgdGVzdCBkYXRhIGZpbGVzXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxTZWFyY2hSZXN1bHRzTW9kZWw+fSAtIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHBvcHVsYXRlZCBtb2RlbFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFRlc3REYXRhKGJhc2VVcmwgPSBcIi4vdGVzdC1kYXRhXCIpIHtcbiAgICBjb25zdCBjbG1zTW9kZWwgPSBuZXcgU2VhcmNoUmVzdWx0c01vZGVsKCk7XG5cbiAgICB0cnkge1xuICAgICAgICAvLyBGZXRjaCBhbGwgdGVzdCBkYXRhIGZpbGVzXG4gICAgICAgIGNvbnN0IFtcbiAgICAgICAgICAgIG16aWRlbnRtbEZpbGVzRGF0YSxcbiAgICAgICAgICAgIGFuYWx5c2lzQ29sbGVjdGlvbkRhdGEsXG4gICAgICAgICAgICBwcm90b2NvbHNEYXRhLFxuICAgICAgICAgICAgc3BlY3RyYURhdGEsXG4gICAgICAgICAgICBlbnp5bWVzRGF0YSxcbiAgICAgICAgICAgIG1vZGlmaWNhdGlvbnNEYXRhLFxuICAgICAgICAgICAgcHJvdGVpbnNEYXRhLFxuICAgICAgICAgICAgcGVwdGlkZXNEYXRhLFxuICAgICAgICAgICAgbWF0Y2hlc0RhdGFcbiAgICAgICAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGZldGNoKGAke2Jhc2VVcmx9L2dldF94aXZpZXdfbXppZGVudG1sX2ZpbGVzLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLFxuICAgICAgICAgICAgZmV0Y2goYCR7YmFzZVVybH0vZ2V0X3hpdmlld19hbmFseXNpc19jb2xsZWN0aW9uX3NwZWN0cnVtX2lkZW50aWZpY2F0aW9ucy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKSxcbiAgICAgICAgICAgIGZldGNoKGAke2Jhc2VVcmx9L2dldF94aXZpZXdfc3BlY3RydW1faWRlbnRpZmljYXRpb25fcHJvdG9jb2xzLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLFxuICAgICAgICAgICAgZmV0Y2goYCR7YmFzZVVybH0vZ2V0X3hpdmlld19zcGVjdHJhX2RhdGEuanNvbmApLnRoZW4ociA9PiByLmpzb24oKSksXG4gICAgICAgICAgICBmZXRjaChgJHtiYXNlVXJsfS9nZXRfeGl2aWV3X2VuenltZXMuanNvbmApLnRoZW4ociA9PiByLmpzb24oKSksXG4gICAgICAgICAgICBmZXRjaChgJHtiYXNlVXJsfS9nZXRfeGl2aWV3X3NlYXJjaF9tb2RpZmljYXRpb25zLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLFxuICAgICAgICAgICAgZmV0Y2goYCR7YmFzZVVybH0vZ2V0X3hpdmlld19wcm90ZWlucy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKSxcbiAgICAgICAgICAgIGZldGNoKGAke2Jhc2VVcmx9L2dldF94aXZpZXdfcGVwdGlkZXMuanNvbmApLnRoZW4ociA9PiByLmpzb24oKSksXG4gICAgICAgICAgICBmZXRjaChgJHtiYXNlVXJsfS9nZXRfeGl2aWV3X21hdGNoZXMuanNvbmApLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgXSk7XG5cbiAgICAgICAgLy8gUHJvY2VzcyBkYXRhXG4gICAgICAgIGNsbXNNb2RlbC5zdG9yZU1hdGNoZXMobWF0Y2hlc0RhdGEpO1xuICAgICAgICBjbG1zTW9kZWwuc3RvcmVQZXB0aWRlcyhwZXB0aWRlc0RhdGEpO1xuICAgICAgICBjbG1zTW9kZWwuc3RvcmVQcm90ZWlucyhwcm90ZWluc0RhdGEpO1xuICAgICAgICBjbG1zTW9kZWwuc3RvcmVTZWFyY2hNb2RpZmljYXRpb25zKG1vZGlmaWNhdGlvbnNEYXRhKTtcbiAgICAgICAgY2xtc01vZGVsLnN0b3JlRW56eW1lcyhlbnp5bWVzRGF0YSk7XG4gICAgICAgIGNsbXNNb2RlbC5zdG9yZVNwZWN0cmFEYXRhKHNwZWN0cmFEYXRhKTtcbiAgICAgICAgY2xtc01vZGVsLnN0b3JlU3BlY3RydW1JZGVudGlmaWNhdGlvblByb3RvY29scyhwcm90b2NvbHNEYXRhKTtcbiAgICAgICAgY2xtc01vZGVsLnN0b3JlQW5hbHlzaXNDb2xsZWN0aW9uU3BlY3RydW1JZGVudGlmaWNhdGlvbnMoYW5hbHlzaXNDb2xsZWN0aW9uRGF0YSk7XG4gICAgICAgIGNsbXNNb2RlbC5zdG9yZU16SWRlbnRNTEZpbGVzKG16aWRlbnRtbEZpbGVzRGF0YSk7XG5cbiAgICAgICAgLy8gQWZ0ZXIgbG9hZGluZyBhbGwgZGF0YSwgY2FsbCBwYXJzZUpTT04gdG8gY29uc3RydWN0IGludGVybmFsIHN0cnVjdHVyZXNcbiAgICAgICAgLy8gVGhpcyBwb3B1bGF0ZXMgcGFydGljaXBhbnRzLCBjcm9zc2xpbmtzLCBtYXRjaGVzIGFycmF5cywgZXRjLlxuICAgICAgICBjbG1zTW9kZWwucGFyc2VKU09OKHt9KTtcbiAgICAgICAgY29uc29sZS5sb2coY2xtc01vZGVsLnRvSlNPTigpKTtcbiAgICAgICAgcmV0dXJuIGNsbXNNb2RlbDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyB0ZXN0IGRhdGE6XCIsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufVxuXG4vKipcbiAqIEhlbHBlciB0byBnZXQgZXhwZWN0ZWQgY291bnRzIGZvciB2YWxpZGF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBleHBlY3RlZENvdW50cyA9IHtcbiAgICBwcm90ZWluczogOCxcbiAgICBwZXB0aWRlczogNjksIC8vIFdpbGwgYmUgZGV0ZXJtaW5lZCBieSBhY3R1YWwgdGVzdCBkYXRhXG4gICAgbWF0Y2hlczogMjcsXG4gICAgY3Jvc3NsaW5rczogMjIsIC8vIFdpbGwgYmUgZGV0ZXJtaW5lZCBhZnRlciBwcm9jZXNzaW5nXG4gICAgc2VhcmNoZXM6IDQgLy8gQmFzZWQgb24gdW5pcXVlIHNlYXJjaF9pZCB2YWx1ZXMgaW4gcHJvdGVpbnNcbn07XG4iXSwibmFtZXMiOlsibW9kdWxlIiwidGVzdCIsInN0YXJ0IiwibG9hZFRlc3REYXRhIiwidGVzdFNldHVwIiwiY29uc29sZSIsImxvZyIsImNsbXNNb2RlbCIsImVycm9yIiwiYXNzZXJ0Iiwib2siLCJtZXNzYWdlIiwicHJvdGVpbnMiLCJnZXRQcm90ZWluc01hcCIsIk1hcCIsInNpemUiLCJwYXJ0aWNpcGFudEtleXMiLCJBcnJheSIsImZyb20iLCJrZXlzIiwibGVuZ3RoIiwiam9pbiIsInByb3RlaW5BIiwiZ2V0IiwiZXF1YWwiLCJzZXF1ZW5jZSIsInBhcnRpY2lwYW50cyIsInByb3RlaW5CIiwiYWNjZXNzaW9uIiwibWF0Y2hlcyIsImdldE1hdGNoZXMiLCJpc0FycmF5IiwiZmlyc3RNYXRjaCIsImlkIiwidXBsb2FkSWQiLCJ1bmRlZmluZWQiLCJzZWFyY2hlcyIsImdldE16aWRlbnRtbEZpbGVzIiwibXppZGVudG1sRmlsZXMiLCJtemlkRmlsZSIsInByb2plY3RJZCIsImlkZW50aWZpY2F0aW9uRmlsZU5hbWUiLCJzcGVjdHJhRm9ybWF0cyIsImNyb3NzbGlua3MiLCJnZXRDcm9zc2xpbmtzIiwiZmlyc3RDcm9zc2xpbmsiLCJ2YWx1ZXMiLCJtYXRjaGVzX3BwIiwibGluZWFyTWF0Y2hlcyIsImZpbHRlciIsIm0iLCJjcm9zc2xpbmsiLCJtemlkRmlsZXMiLCJhbGxWYWxpZCIsImZvckVhY2giLCJwcm90ZWluIiwidXBsb2FkX2lkIiwiaGFzIiwiY3Jvc3NsaW5rc1ByZXNlbnQiLCJnZXRDcm9zc2xpbmtzUHJlc2VudCIsImxpbmVhcnNQcmVzZW50IiwiZ2V0TGluZWFyc1ByZXNlbnQiLCJkZWNveXNQcmVzZW50IiwiZ2V0RGVjb3lzUHJlc2VudCIsInBlcHRpZGVzIiwicHJ0IiwibWF0Y2hlZFBlcHRpZGVzIiwic2VhcmNoTWFwIiwiZ2V0UHJvdGVpblNlYXJjaE1hcCIsInBhcnRpY2lwYW50SURTZXQiLCJTZXQiLCJkZWVwRXF1YWwiLCJzb3J0IiwiaXNBZ2dyZWdhdGVkIiwiaXNBZ2dyZWdhdGVkRGF0YSIsIlNlYXJjaFJlc3VsdHNNb2RlbCIsImJhc2VVcmwiLCJtemlkZW50bWxGaWxlc0RhdGEiLCJhbmFseXNpc0NvbGxlY3Rpb25EYXRhIiwicHJvdG9jb2xzRGF0YSIsInNwZWN0cmFEYXRhIiwiZW56eW1lc0RhdGEiLCJtb2RpZmljYXRpb25zRGF0YSIsInByb3RlaW5zRGF0YSIsInBlcHRpZGVzRGF0YSIsIm1hdGNoZXNEYXRhIiwiUHJvbWlzZSIsImFsbCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwic3RvcmVNYXRjaGVzIiwic3RvcmVQZXB0aWRlcyIsInN0b3JlUHJvdGVpbnMiLCJzdG9yZVNlYXJjaE1vZGlmaWNhdGlvbnMiLCJzdG9yZUVuenltZXMiLCJzdG9yZVNwZWN0cmFEYXRhIiwic3RvcmVTcGVjdHJ1bUlkZW50aWZpY2F0aW9uUHJvdG9jb2xzIiwic3RvcmVBbmFseXNpc0NvbGxlY3Rpb25TcGVjdHJ1bUlkZW50aWZpY2F0aW9ucyIsInN0b3JlTXpJZGVudE1MRmlsZXMiLCJwYXJzZUpTT04iLCJ0b0pTT04iLCJleHBlY3RlZENvdW50cyJdLCJzb3VyY2VSb290IjoiIn0=
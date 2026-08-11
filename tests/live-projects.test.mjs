import assert from "node:assert/strict";
import test from "node:test";

import { selectLiveProjects } from "../src/data/liveProjects.ts";

test("selectLiveProjects returns every project with both a public link and preview", () => {
  const projects = [
    { name: "UltyMyLife", link: "https://ulty.example", previewImage: "previews/ulty.png" },
    { name: "Dr. Mix", link: "https://drmix.example", previewImage: "previews/drmix.png" },
    { name: "REZERV", link: "https://rezerv.example", previewImage: "previews/rezerv.png" },
    { name: "Internal agent", previewImage: "previews/internal.png" },
    { name: "No artwork", link: "https://no-artwork.example" },
  ];

  assert.deepEqual(
    selectLiveProjects(projects).map(({ name }) => name),
    ["UltyMyLife", "Dr. Mix", "REZERV"],
  );
});

import { export1 } from "./exportTest";

(export1('auto run'))();

function callExport1() {
  export1('callExport1');
}
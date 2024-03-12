import { checkPageProgress } from "../utilities/checkPageProgress.js";

function handleFieldChangeEvent(event, kdf, field) {
  checkPageProgress();
}

export { handleFieldChangeEvent };
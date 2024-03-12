import { checkPageProgress } from "../utilities/checkPageProgress.js";

function handlePageChangeEvent(event, kdf, currentpageid, targetpageid) {
  checkPageProgress();

  $(`div[data-type="page"][data-pos="${targetpageid}"]`).each(function () {
    pageId = this.id.slice(11);
  });

  if (pageId === 'page_about_you'
    && kdf.access === 'agent'
    && kdf.customerset === 'agent_false') {
    KDF.sendDesktopAction('raised_by');
  }
}

export { handlePageChangeEvent };
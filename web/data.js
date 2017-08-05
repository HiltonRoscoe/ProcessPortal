#import("bpmn", "com.nomagic.reports.WebReportTool")
#set($void = $bpmn.setWebReportToolProviderCreator($WebReportToolProviderCreator.getValue()))
#set($void = $bpmn.loadContent($elements))

window.feedback = '$Feedback';
window.indexPageDir = '$bpmn.getIndexFileName()';
window.index_page_json = $bpmn.getIndexPageJson();
window.navigation_json = $bpmn.getNavigationPanelData();
window.content_data_json = $bpmn.getContentDataJson();
window.search_data_json = $bpmn.getSearchDataJson();
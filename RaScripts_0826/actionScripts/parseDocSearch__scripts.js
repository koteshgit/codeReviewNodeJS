
    const parseDocSearch = () => {
        var resp = context.docSearch.response.body.template.graph_answer.payload;
if (Object.keys(resp).length == 0) {
    context.noGraphAnswer = true;
} else {
    let response = "";
    context.docLinks = {};
    resp = resp["center_panel"].data?.[0]?.["snippet_content"];
    if (Array.isArray(resp)) {
        resp.forEach(i => {
            i.sources.forEach(j => {
                if (j.title != "") {
                    context.docLinks[j.title] = j.url;
                }
            })
        });
        resp = resp?.map(i => i["answer_fragment"]);
        resp.forEach(i => {
            response += i
        });
        context.response = response;
    } else {
        context.response = resp;
    }
}
    }


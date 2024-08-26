
    const setDocIdOnBus = () => {
        let docId = context.ingestRespIntoCacheApp.response.body[0]?.["_source"]?.doc_id || undefined;

context.session.BotUserSession.IsPrevAnsFromCache = false;
context.session.BotUserSession.DocId = docId;

    }



    const prepOpenAIPayload = () => {
        context.searchResults = context.cacheAppSearch.response.body.template.results?.data?.data || context.cacheAppSearch.response.body.template.results?.default_group?.data || null;
let userQuery = context.cacheAppSearch.response.body.template.originalQuery;
if(context.searchResults){
    let targetPrompt = `Given Question : ${userQuery} \n Shortlisted Questions : \n`;
    for(let i = 0; i < context.searchResults.length; i++){
        targetPrompt += `${i+1}.${context.searchResults[i].query}\n`;
    }
    // koreDebugger.log(targetPrompt);
    context.openAIPayload =  JSON.stringify({
        "messages": [
            {
                "role": "system",
                "content": "You are an inference expert. Your task is to leverage your knowledge and expertise to identify the most similar question from the shortlisted questions for the given question. When generating your response, please adhere to the following guidelines:\n1: Use only the list of options provided to you in Shortlisted Questions and DO NOT fabricate new questions. 2:Restrict your information source to the content given in the input and refrain from using external references.\n3: Respond with only one question number if there is a match.\n4: Do not try to abbreviate acronyms or assume synonyms for any parts of speech.\nIf you find a match for the given question in the given shortlisted questions, return ONLY the index number of the shortlisted question. If you cannot find a relevant or similar match among the shortlisted questions, or are faced with an out of domain, reply with \"I don't know\"."
            },
            {
                "role": "user",
                "content": "Given Question : What is the price for a fridge?\nShortlisted Questions: 1.what is the price of a tv\n2.What is the conversion for miles to kilometers"
            },
            {
                "role": "assistant",
                "content": "I don't know"
            },
            {
                "role": "user",
                "content": "Given Question : how much does a tv cost?\nShortlisted Questions: 1.what is the price of a tv\n2.What is the conversion for miles to kilometers"
            },
            {
                "role": "assistant",
                "content": "1"
            },
            {
                "role" : "user",
                "content" : targetPrompt
            }
        ],
        "temperature": 0.1,
        "max_tokens": 10,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
        });
}

    }


print(context.getConsolidateQuery.response.body.consolidatedQuery)

koreDebugger.log("Product Search - UserId : "+ context.userId + " UserInput : "+context.actualQuery +" Consolidated Query : "+context.getConsolidateQuery.response.body.consolidatedQuery )

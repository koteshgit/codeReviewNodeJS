const lineItemId = context.entities.displayLineItems;
koreDebugger.log("lineItemId"+lineItemId+"  "+JSON.stringify(context.whatsAppLineItems));
print(context.whatsAppLineItems[lineItemId]);

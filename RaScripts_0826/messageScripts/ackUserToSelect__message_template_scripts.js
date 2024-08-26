var info = context.fetchDeliveryAddressDetails.response.body.addresses;
var message = {
    "type": "template",
    "payload": {
        "template_type": "retailOrderSelection",
        "card_type": "detail",
        "title": "Address Details",
        "showMore": "true",
        "showMoreTitle": "show More", // we can customize
        "displayLimit": "3", //  limit for show more
        "isSelectionEnabled": "true",
        "elements": [],
        // "buttons": []
    }
}

var elements = []
for(i=0;i<info.length ;i++){
    var address = {
                "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuOTk5NjcgMTguODMzM0MxMC44MzMgMTQuNjY2NyAxNi42NjYzIDE0LjE4MTkgMTYuNjY2MyA4LjgzMzMyQzE2LjY2NjMgNS4xNTE0MiAxMy42ODE2IDIuMTY2NjYgOS45OTk2NyAyLjE2NjY2QzYuMzE3NzggMi4xNjY2NiAzLjMzMzAxIDUuMTUxNDIgMy4zMzMwMSA4LjgzMzMyQzMuMzMzMDEgMTQuMTgxOSA5LjE2NjM0IDE0LjY2NjcgOS45OTk2NyAxOC44MzMzWiIgc3Ryb2tlPSIjMzQ0MDU0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05Ljk5OTY3IDExLjMzMzNDMTEuMzgwNCAxMS4zMzMzIDEyLjQ5OTcgMTAuMjE0IDEyLjQ5OTcgOC44MzMzMkMxMi40OTk3IDcuNDUyNjEgMTEuMzgwNCA2LjMzMzMyIDkuOTk5NjcgNi4zMzMzMkM4LjYxODk2IDYuMzMzMzIgNy40OTk2NyA3LjQ1MjYxIDcuNDk5NjcgOC44MzMzMkM3LjQ5OTY3IDEwLjIxNCA4LjYxODk2IDExLjMzMzMgOS45OTk2NyAxMS4zMzMzWiIgc3Ryb2tlPSIjMzQ0MDU0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
                "title": info[i].address1 +" "+ info[i].address2 ,
                "flag":"addressTemplate", 
                "values": [
                    {
                        "title":info[i].city+","+info[i].country+" "+info[i].zip,
                        "style": {
                            "color": "#344054"
                        }
                    }
                ]
        }
        
    elements.push(address)
}

message.payload.elements = elements
print(JSON.stringify(message));

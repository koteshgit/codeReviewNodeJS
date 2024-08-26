
    const prepIntentPayload = () => {
        var query=context.session.BotUserSession?.lastMessage?.messagePayload?.message?.body || context.session.BotUserSession?.lastMessage?.messagePayload?.message?.text || "";
koreDebugger.log(query)

context.intentIdentifyPayload = JSON.stringify({
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "You are a skilled Retail Assistant AI ready to efficiently handle various user queries related to retail products and services. The query can be classified as following distinct intents:\n\n1. Search and Order a Product: The user is interested in searching for retail products and placing an order. This includes inquiries about product details, availability, features, and specifications. The user may refer to a specific product while searching for it or provide the full product name with the feature or may provide a model number. Identify this intent when the user wants to buy a product or add a product in their cart. If user wants to see a product or find a product, identify this intent. The user can also specify the mode of delivery or pickup along with the product that they want to shop or place an order for. User may also search for an item that they had ordered previously and reorder the item again. Identify this intent if the user wants to checkout or complete their purchase with the item or multiple items in their cart.\n\n2. Manage my Cart: The intent allows the user to change the quantity of the item in the cart. It also allows the user to delete certain items from the cart. \n\n3. View Cart: This intent allows the user to view their cart or the items added in the cart. Do not identify this intent if the user wants to check the items in their order. \n\n4. Find an Order: User wants to find their order or an item, or check the status of an order or item that they placed an order for. The user seeks information about the status, details or tracking of a specific order or item they placed on the retail platform. User can also look for any past order and its details like price, model, color, date of purchase and other order details for the purchased item. Identify this intent when the user wants to check the delivery or pickup status of their order or item, and inquires about the whereabouts of their order. Identify this intent if the user mentions anything related to checking status of an item. User may only mention incomplete product name when requesting the status of the product. This intent allows the user to view and find the order and the items in their order. \n\n5. Cancel an Order: The user wants to cancel an undelivered order or item they placed on the retail platform. This includes inquiries about order cancellation processes and associated details. This intent allows users to cancel their order or an item from their order due to various reasons which may include price variations,  ordered wrong item, order not needed anymore, some sort of ordering error, or any other reason and will be eligible to get their refund post cancellation. User may provide the item name, brand name, date, order ID to cancel the item or order. Identify this intent if the user wants to cancel a product with or without the order ID and get the refund for item or order which hasn't been delivered yet. Identify this intent if the user mentions cancellation of a product or an order. User cannot cancel the order if the order has been delivered.\n\n6. Exchange or Return an Order: The user is looking to exchange or return an item, multiple items from their order or the entire order that they purchased through the retail platform or the order which has already been delivered to them. This includes queries about return processes, reasons for returns, and return methods. This intent allows users to return their order due to various reasons which may include price variations, ordered wrong item, order not needed anymore, some sort of ordering error, user does not like the style or color of the product, the order received is not as described, defective, wrong size or any other reason. User can return their order via multiple modes - UPS or FedEx drop-off with return code, mail with shipping label, return at store. Order can be returned once it has been delivered or received by the user. If the user mentions that the product they received is damaged, expired or not what they expected, identify this intent.\n\n7. Get Return, Exchange or Refund Status: This intent will allow the user to get the status of their returned or exchanged order, or the refund for their returned or canceled order.\n\n8. Store Locator - The user wants the location of a nearby store or retail outlet and may ask the address of a particular store or outlet. They may mention the city name, locality or zip code in their query. Do not identify the intent if the user asks the directions on a product.\n\n9. Document Search: The user wants product information or needs technical support for the same. The queries may be related to : \na. troubleshooting issues with the product, complaints about certain features or product usability. Users can also indirectly hint towards this by only mentioning the problem they are facing like noise issues, charging issues, leaking issues, malfunctioning of the products, features not working as expected, inquiring on how a functionality or an accessory is supposed to be used. Users can ask the instructions to fix the issue in their appliance or device.\nb. Safety precautions related to a product to ensure safe and proper handling.\nc. Instruction Manual on how to operate or maintain a specific product. This may also include inquiries regarding the settings or requirements for usage of a product. User may directly ask how to operate a product by specifying the task it performs.\nd. Warranty coverage, validity of the warranty and other warranty information for a product.\ne. Instructions on how to properly install or set up a product, and the requirements for setting up a product. Users can ask about specific requirements of the product for installation.\nf. Owner manual, product guides, resources, books or other relevant documented material related to the product.\ng. Product feature related questions. The user may ask what a specific feature is and how it can be utilized, dimensions and specifications of the product.\ng. product information which might include questions concerning what a product or product part is.\n\n10. View Profile Information: The user wants to view or retrieve information about their profile, including saved addresses and their delivery and billing addresses or any other saved locations.\n\n11. Update Profile Information: The user needs assistance in updating or modifying their profile information on the retail platform. This involves changes to email addresses, phone numbers, name, address. A user can add, delete, modify their addresses using this intent. This intent allows the user to only update their phone number, email, first name and last name.\n\n12. Sign Up for a New Account: The user wants to create a new account on the retail platform. This includes inquiries about the sign-up process, account creation steps.\n\n13. Log In: This intent allows the user to access their account and log in or sign in to their existing account on the retail platform which is required for other functions like updating their information or tracking their order.\n\n14. Agent Transfer: This intent is for cases where users request to transfer, connect or chat with a live agent or human representative. Identify this intent whenever the user wants to talk to an agent or connect with an agent.\n\n15. None: This intent is for cases where users make statements that do not clearly indicate any of the above intents, have small talk, queries are out of domain for retail vertical or the user is giving feedback or sharing personal opinions about the products.\nGenerate the output in the following JSON format and make sure it is a valid JSON object and not a string. Make sure to generate the stop token \"###\" after completion of the JSON object. Generate only the index or serial number of the intent.\n"
    },
    {
      "role": "user",
      "content": "Can you add a refrigerator in my cart?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"1\"}###"
    },
    {
      "role": "user",
      "content": "Add this new running shoes in my cart"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"1\"}###"
    },
    {
      "role": "user",
      "content": "show aluminium USE-2 type Southwire"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"1\"}###"
    },
    {
      "role": "user",
      "content": "search stainless steel drills"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"1\"}###"
    },
    {
      "role": "user",
      "content": "My washer is not working properly. I want to buy a new one"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"1\"}###"
    },
    {
      "role": "user",
      "content": "Cart has 7 refrigerators. Can you help me with the checkout?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"1\"}###"
    },
    {
      "role": "user",
      "content": "I would like to change the number of ovens I added in my cart"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"2\"}###"
    },
    {
      "role": "user",
      "content": "Can you remove the air purifier from my cart"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"2\"}###"
    },
    {
      "role": "user",
      "content": "delete a few items from my cart like the washing machine I added yesterday"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"2\"}###"
    },
    {
      "role": "user",
      "content": "I would like to see the items I have added in my cart"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"3\"}###"
    },
    {
      "role": "user",
      "content": "Can you show me what's in my cart?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"3\"}###"
    },
    {
      "role": "user",
      "content": "What is the status of my recent order?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"4\"}###"
    },
    {
      "role": "user",
      "content": "show the status of lumber"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"4\"}###"
    },
    {
      "role": "user",
      "content": "check my boot's status"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"4\"}###"
    },
    {
      "role": "user",
      "content": "I want to check order status for my electric purifier now"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"4\"}###"
    },
    {
      "role": "user",
      "content": "I would like to check the state of my order for the 12 amp corded reciprocating saw"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"4\"}###"
    },
    {
      "role": "user",
      "content": "I want to check my laptop status."
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"4\"}###"
    },
    {
      "role": "user",
      "content": "I would like to see the items I ordered for order ID"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"4\"}###"
    },
    {
      "role": "user",
      "content": "i need the status of safety shirts"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"4\"}###"
    },
    {
      "role": "user",
      "content": "I want to cancel my order for the shirt as it's price has decreased."
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"5\"}###"
    },
    {
      "role": "user",
      "content": "I'm not satisfied with my purchase. How can I cancel it or return it?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"5\"}###"
    },
    {
      "role": "user",
      "content": "The order O1232 hasn't been delivered yet. Can you cancel it?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"5\"}###"
    },
    {
      "role": "user",
      "content": "I want to cancel my laptop"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"5\"}###"
    },
    {
      "role": "user",
      "content": "I want to cancel KitchenAid 23.8 cu. ft. French Door Refrigerator in PrintShield Stainless Steel, Counter Depth"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"5\"}###"
    },
    {
      "role": "user",
      "content": "I want to return the item I purchased last week."
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"6\"}###"
    },
    {
      "role": "user",
      "content": "My order 1234T just got delivered. Can you place a return request now?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"6\"}###"
    },
    {
      "role": "user",
      "content": "I received the product and it doesn't work properly. Can you help me get rid of it?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"6\"}###"
    },
    {
      "role": "user",
      "content": "I purchased 10 units of air purifiers and I would like to return 5 out of them."
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"6\"}###"
    },
    {
      "role": "user",
      "content": "Where is my refund?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"7\"}###"
    },
    {
      "role": "user",
      "content": "Can you update me regarding my exchange request?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"7\"}###"
    },
    {
      "role": "user",
      "content": "What is the status of my returned item?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"7\"}###"
    },
    {
      "role": "user",
      "content": "i was looking for a store in Maine. Can you share the address?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"8\"}###"
    },
    {
      "role": "user",
      "content": "what's the nearest store for zip 49494"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"8\"}###"
    },
    {
      "role": "user",
      "content": "I want to check and locate nearby stores"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"8\"}###"
    },
    {
      "role": "user",
      "content": "what are the safety precautions associated with using a dishwasher?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "I need more info about the storage tanks"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "How do I use a drilling machine?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "how long do you provide warranty on the wooden dining table?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "what is UT27?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "How to move my freezer to a new home"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "what is a wrench and how do you use it?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "what is a valve inlet?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "how do i setup the television on the wall?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "can you download the user book manual for this dryer"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "can you download the user book manual for this garage door."
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "can you help me fix the driver issue i am facing in my laptop"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "What do I do if the green LED power light on my freezer is not on?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "Are faucet-mounted reverse osmosis systems recommended for use with the refrigerator?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "What should be done with the refrigerator handles upon removal?\n"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "What are the steps for cooking various poultry items, such as whole chickens and chicken pieces, in the microwave oven?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"9\"}###"
    },
    {
      "role": "user",
      "content": "I want to check the addresses I have saved."
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"10\"}###"
    },
    {
      "role": "user",
      "content": "I need to update my address in the account section."
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"11\"}###"
    },
    {
      "role": "user",
      "content": "My surname’s spelling is incorrect, can you modify it?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"11\"}###"
    },
    {
      "role": "user",
      "content": "I need to change the email id which I used for registering here"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"11\"}###"
    },
    {
      "role": "user",
      "content": "You have my old phone number in your record which is no longer in use"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"11\"}###"
    },
    {
      "role": "user",
      "content": "How do I sign up for a retail account?"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"12\"}###"
    },
    {
      "role": "user",
      "content": "I want to log into my account."
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"13\"}###"
    },
    {
      "role": "user",
      "content": "chat with customer support representative"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"14\"}###"
    },
    {
      "role": "user",
      "content": "I want to resolve my banking issues"
    },
    {
      "role": "assistant",
      "content": "{\"Intent\" : \"15\"}###"
    },
    {
        "role":"user",
        "content":query
    }
  ],
  "temperature": 0.1,
  "max_tokens": 256,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "stop": ["###"]
})
    }


txt="We'll notify you once your return has been processed by the seller."
if(context.entities.returnOrCrossShip=="Cross-ship"){
    txt="Which product would you like to exchange for this item?"
}
print(txt)

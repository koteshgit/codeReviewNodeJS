
    const identifyWhatsAppChannel = () => {
        let bus = context.session.BotUserSession;
let channel = bus?.channels[0]?.type;
if (channel?.toLowerCase() == "whatsapp") {
    let whatsappPhoneNumber = bus?.channels[0].from.split("/")[2];
    context.phoneNumber = validatePhone(whatsappPhoneNumber); // Bot Function to format the phone number
    context.isWhatsAppChannel = true;
}
    }


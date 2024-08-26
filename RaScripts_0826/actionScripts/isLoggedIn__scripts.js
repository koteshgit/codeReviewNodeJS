
    const isLoggedIn = () => {
        var userInfo = context.session.BotUserSession?.UserInfo?.id;
if(userInfo){
    context.isUserLoggedIn = true;
}

// context.displayOrdersCount = 0;


    }


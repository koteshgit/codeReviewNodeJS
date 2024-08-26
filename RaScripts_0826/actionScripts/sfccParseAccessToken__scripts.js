
    const sfccParseAccessToken = () => {
        let access_token=context.sfccGetAccessToken.response.body.access_token;
context.access_token=`Bearer ${access_token}`;


    }


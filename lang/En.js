Lang = {
    add: 'Add',
    home : 'Home',
    error : 'Error',
    details : 'Details',
    back : 'Back',
    share : 'Share',
    settings : 'Settings',
    deleteFeedTitle : 'Delete feed?',
    deleteFeedMsg : 'Are you sure you want to delete this feed?',

    pullRefresh : (function(){
        return {
            lastUpdated : 'Last Updated',
            pullText: 'Pull down to refresh rss list!',
            releaseText: 'Release to refresh...'
        }
    })(),
				
    validations : (function(){
        return {
            feedExists : 'This feed url already exists',
            required : {
                feedTitle : 'Feed title is required',
                feedUrl : 'Feed url is required'
            },
												
            format : {
                feedUrl : 'Please provide a proper RSS url'
            }
        }
    })(),
				
    addFeed : (function(){
        return {
            title: 'Add feed',
            name : 'Feed Title',
            url : 'Feed Url'
        }
    })(),

    loading : (function(){
        return {
            feeds : 'Loading feeds...'
        }
    })(),

    shareOptions : (function(){
        return {
            fb : 'Facebook',
            email : 'Email',
            linkedin : 'LinkedIn',
            gplus : 'Google+',
            twitter : 'Twitter'
        }
    })(),

    settingsOptions : (function(){
        return [{
            name : 'Edit feed',
            action : 'editfeed'
        }, {
            name : 'Delete feed',
            action : 'deletefeed'
        }]
    })()
};
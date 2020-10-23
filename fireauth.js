const fireAuth = {
  create: function(config, callback){
    /*
    config = {
      firebase: { // if you already defined firebaseConfig you can skip this
        apiKey: "your api key",
        authDomain: "your auth domain",
        databaseURL: "your database URL",
        projectId: "your project id",
        storageBucket: "your storage bucket",
        messagingSenderId: "your messaging sender id",
        appId: "your app id",
        measurementId: "your measurement id"
      },
      signInMetheods: [
        //facebook, google, github, etc..
        //sign in with email&pw will require signup
      ], //(required) the sign in metheods you will use. must be configured in the firebase console.
      database: 'firestore',//(optional)select firestore or database. default is firestore. MUST CONFIGURE in the firebase console. RULES must be READ:TRUE, WRITE:AUTH.UID!=NULL
    }
    */
    if(!(!!config.firebase||!!firebaseConfig)) {
      Error('no firebase\ndefine firebaseConfig or include them in config.firebase');
      return;
    }
    if(typeof(callback)!="function") {
      Error('callback must be a function');
      return;
    }
  }
};

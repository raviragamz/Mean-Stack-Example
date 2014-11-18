(function (database))
{
	var mongodb = require("mongodb");
	var mongoUrl = "mongodb://localhost:27017/NotesDS";
	var theDb = null;//want to be pass back the same database object when somenoe else needs it.
	database.getDb = function(next)
	{
		if(!theDb)
		{
			//connect to database.
			mongodb.MongoClient.connect(mongoUrl,function(err,db)
			{
				if(err)
				{
					next(err,null);
				}
				else
				{
					//done this way to add addtional params
					theDb = {
							 db: db,
							 notes: db.collection("notes")
							 };
					next(null,theDb);
				}
			})
		}
		else
		{
			next(null,theDb);
		}
	}
	

})(module.exports);
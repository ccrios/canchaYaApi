let commonConfig = {

};

let config = {
	//-----------------------------------DEVELOPMENT--------------------------
	dev: {
		datastoreURL: 'postgres://postgres:postgres@localhost:5432/chanchayaDB',
		//migrateDB: 'safe',
		migrateDB: 'alter',
	},
	//-----------------------------------PRODUCTION---------------------------
	prod: {
		corsAllowOrigins:'*',
       	
	}
	//------------------------------------------------------------------------
};

module.exports = {
	prodConfig: config.prod,
	devConfig: config.dev,
	commonConfig: commonConfig
};

let commonConfig = {

};

let config = {
	//-----------------------------------DEVELOPMENT--------------------------
	dev: {
		datastoreURL: 'postgres://postgres:postgres@localhost:5432/canchayaDB',
		//migrateDB: 'safe', //pruebas
		migrateDB: 'alter', //cuando se quiere hacer la modificacion en la base de datos
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

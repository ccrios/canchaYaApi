let commonConfig = {
  email:{
		service: 'Gmail',
		//user: 'info@provibes.co',
		user: 'canchaya@gmail.com',
		pass: 'canchaya123',
		from: "<noreply@canchaya.com>",
		testMode: false,

	},

};

let config = {
	//-----------------------------------DEVELOPMENT--------------------------
	dev: {
		datastoreURL: 'postgres://postgres:postgres@localhost:5432/canchayaDB',
		migrateDB: 'safe', //pruebas
		// migrateDB: 'drop', //cuando se quiere hacer la modificacion en la base de datos
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

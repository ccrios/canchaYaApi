let commonConfig = {

  // email:{
	// 	service: 'Gmail',
	// 	user: 'camilo12987@gmail.com',
	// 	pass: 'Camilo12987',
	// 	from: "canchaYA<noreply@canchaya.com>",
	// 	testMode: false,
  // },

  email: {
		service: 'Zoho',
		user: 'noreply@devman.com.co',
		pass: 'Proyecto.123',
		testMode: false,
		from: "Casillero Virtual<noreply@devman.com.co>"
	},

	domain:{
		url:'http://localhost:4200'
	}

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

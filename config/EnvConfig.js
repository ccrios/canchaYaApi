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
    //datastoreURL: 'postgres://postgres:postgres@localhost:5432/canchayaDB',
    datastoreURL: 'postgres://owjxaxtpmiplev:343e57db70432ca2c8e1d789a6a5db2080583b872e78a76ddd99dc0f6d8e430b@ec2-3-230-106-126.compute-1.amazonaws.com:5432/db11qln4jb3qbe',
    migrateDB: 'alter', //pruebas
    //migrateDB: 'alter', //pruebas
		// migrateDB: 'drop', //cuando se quiere hacer la modificacion en la base de datos
	},
	//-----------------------------------PRODUCTION---------------------------
	prod: {
    corsAllowOrigins:'*',
    //datastoreURL: 'postgres://owjxaxtpmiplev:343e57db70432ca2c8e1d789a6a5db2080583b872e78a76ddd99dc0f6d8e430b@ec2-3-230-106-126.compute-1.amazonaws.com:5432/db11qln4jb3qbe',
    datastoreURL: 'postgres://root:$demodevman*@demodevman.ce9qcyeha87k.us-east-2.rds.amazonaws.com:5432/test',
    migrateDB: 'safe', //pruebas

	}
	//------------------------------------------------------------------------
};

module.exports = {
	prodConfig: config.prod,
	devConfig: config.dev,
	commonConfig: commonConfig
};

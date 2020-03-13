/**
 * Archivo que reune todas las posibles respuestas que puede dar el servidor al cliente en un servicio
 */
module.exports = {
	//-------------GENERAL---------
	InvalidField:{status:false, code:"INF", message:"Invalid Field"},
	NoParamsBody:{status:false, code:"NPB", message:"Not params body"},
	Error500: {status: false, code:"ERSR", message: "Error 500"},
	error500: function(err) {sails.log.error(err); return this.Error500;},
	//--------------LOGIN----------
	InvalidCrenditial:{status:false,code:"IVC",message:"Invalid Credential"},
	Accountnotactivated:{status:false,code:"ANA",message:"Account not activated"},
	LoginSuccesfully:{status:true,code:"LSC",message:"Login Succesfully"},
	SuccessRegister:{status:true,code:"RSC",message:" Register Succesfully" },
	SuccessReSend:{status:true,code:"RSSC",message:" Send Email Succesfully" },
	//--------------USER-----------
	DocumentExist:{status:false,code:"EDC",message:" Exist Document" },
	EmailExist: {status: false, code:"EXM", message:" Exist email"},
	successfullyChangedPassword:{status: true, code:"SCHPSS", message: "Sucess changed pass"},
	InvalidUser:{ status: false, code:"IVU",message: "Invalid User" },
	NotFoundUser:{status:false,code:"NUFS",message:"Not Found User"},
	ErrorCreateUser:{status:false,code:"ECU",message:"Error Create User"},
	SuccessCreateUser:{status:true,code:"SUCU",message:"Success Create User"},
	ErrorUpdatingUser:{status:false, code:"EUU", message: "Error Updating User"},
  SuccessUpdatingUser:{status:true, code:"SUU", message: "Success Updating User"},
  ErrorCreateTournament:{status:false,code:"ECT",message:"Error Create Tournament"},
  SuccessCreateTournament:{status:true,code:"SCT",message:"Success Create Tournament"},
  SuccessViewTournament: {status:true,code:"SVT", message: "Success View Tournament"},
  SuccessViewDetailTournament: {status:true,code:"SVDT", message: "Success View Detail Tournament"},
  ErrorViewDetailTournament: {status:false,code:"EVDT", message: "Error View Detail Tournament"},
  SuccessRegisterParticipantTournament: {status:true,code:"SRPT", message: "Registro torneo exitoso"},
	//-----------purchase-------------------------------------
	ErrorTokenInPurchase:{status:false, code:"EUU", message: "Error processing the purchase"},

};

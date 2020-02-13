const EnvConfig = require('../config/EnvConfig').commonConfig;

module.exports.email = {
  service: EnvConfig.email.service,
  auth: {user: EnvConfig.email.user, pass: EnvConfig.email.pass},
  testMode: EnvConfig.email.testMode,
	from: EnvConfig.email.from
};



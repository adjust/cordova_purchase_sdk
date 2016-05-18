function ADJPConfig(appToken, environment) {
    // iOS & Android
    this.appToken = appToken;
    this.environment = environment;

    this.logLevel = null;
    this.sdkPrefix = "cordova0.1.0";
}

ADJPConfig.EnvironmentSandbox               = "sandbox";
ADJPConfig.EnvironmentProduction            = "production";

ADJPConfig.LogLevelVerbose                  = "VERBOSE",
ADJPConfig.LogLevelDebug                    = "DEBUG",
ADJPConfig.LogLevelInfo                     = "INFO",
ADJPConfig.LogLevelWarn                     = "WARN",
ADJPConfig.LogLevelError                    = "ERROR",
ADJPConfig.LogLevelAssert                   = "ASSERT",

ADJPConfig.ADJPVerificationStatePassed      = "ADJPVerificationStatePassed";
ADJPConfig.ADJPVerificationStateFailed      = "ADJPVerificationStateFailed";
ADJPConfig.ADJPVerificationStateUnknown     = "ADJPVerificationStateUnknown";
ADJPConfig.ADJPVerificationStateNotVerified = "ADJPVerificationStateNotVerified";

ADJPConfig.prototype.setLogLevel = function(logLevel) {
    this.logLevel = logLevel;
};

module.exports = ADJPConfig;

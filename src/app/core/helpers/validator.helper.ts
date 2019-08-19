export class ValidatorHelper {
  static getNoteValidationConfigs() {
    return {
      title: {
        minLength: 5,
        maxLength: 255,
      },
      description: {
        minLength: 10,
        maxLength: 1000,
      }
    };
  }

  static getNotepadValidationConfigs() {
    return {
      title: {
        minLength: 5,
        maxLength: 255,
      }
    };
  }
}

export class CustomError extends Error {
  public readonly code: string;
  public readonly status: number;
  public readonly context?: {
    field?: string;
    index?: number;
  };

  constructor(
    code: string,
    status: number,
    message: string,
    context?: { field?: string; index?: number }
  ) {
    super(code);
    this.code = code;
    this.status = status;
    this.message = message;
    this.context = context;
  }
}

export function throwIfErrors(errors: CustomError[]) {
  if (errors.length > 0) {
    throw errors;
  }
}

export const GenericErrors = {
  // Validation
  missingRequiredItems: (
    field: string,
    displayName: string,
    count: number = 1,
    index?: number
  ) => {
    const pluralSuffix = count > 1 ? "s" : "";
    const message =
      count === 1
        ? `Requires at least 1 ${displayName}`
        : `Requires at least ${count} ${displayName}${pluralSuffix}`;

    return new CustomError("MISSING_REQUIRED_ITEMS", 400, message, {
      field,
      index,
    });
  },

  missingRequiredField: (
    field: string,
    displayName: string,
    index?: number
  ) => {
    return new CustomError(
      "MISSING_REQUIRED_FIELD",
      400,
      `The field "${displayName}" is missing but required.`,
      { field, index }
    );
  },

  valueOutOfBounds: (
    field: string,
    displayName: string,
    min?: number,
    max?: number,
    index?: number
  ) => {
    let rangeMessage = "";
    if (min != null && max != null) {
      rangeMessage = `between ${min} and ${max}`;
    } else if (min != null) {
      rangeMessage = `at least ${min}`;
    } else if (max != null) {
      rangeMessage = `no more than ${max}`;
    }

    return new CustomError(
      "VALUE_OUT_OF_BOUNDS",
      400,
      `The field "${displayName}" must be ${rangeMessage}.`,
      { field, index }
    );
  },

  invalidUUID: () =>
    new CustomError("INVALID_UUID", 400, "Invalid identifier format."),
  invalidDate: () =>
    new CustomError("INVALID_DATE", 400, "Please enter a valid date."),
  invalidFormat: () =>
    new CustomError("INVALID_FORMAT", 400, "Input is in an incorrect format."),

  // Resource
  notFound: () =>
    new CustomError(
      "NOT_FOUND",
      404,
      "The requested resource could not be found."
    ),
  alreadyExists: () =>
    new CustomError("ALREADY_EXISTS", 409, "This resource already exists."),
  conflict: () =>
    new CustomError(
      "RESOURCE_CONFLICT",
      409,
      "There is a conflict with the current state of the resource."
    ),

  // Permissions / Access
  unauthorized: () =>
    new CustomError(
      "UNAUTHORIZED",
      401,
      "You must be signed in to perform this action."
    ),
  forbidden: () =>
    new CustomError(
      "FORBIDDEN",
      403,
      "You do not have permission to perform this action."
    ),

  // Rate Limiting / Throttling
  tooManyRequests: () =>
    new CustomError(
      "TOO_MANY_REQUESTS",
      429,
      `You've made too many requests. Please try again later.`
    ),

  // Internal / Unexpected
  internalServerError: () =>
    new CustomError(
      "INTERNAL_SERVER_ERROR",
      500,
      "Something went wrong. Please try again later."
    ),
  serviceUnavailable: () =>
    new CustomError(
      "SERVICE_UNAVAILABLE",
      503,
      "The service is temporarily unavailable."
    ),
  timeout: () =>
    new CustomError(
      "REQUEST_TIMEOUT",
      504,
      "The request timed out. Please try again."
    ),

  // Parsing / Decoding
  jsonParseError: () =>
    new CustomError("INVALID_JSON", 400, "Could not parse the request."),
  unexpectedToken: () =>
    new CustomError("UNEXPECTED_TOKEN", 400, "Unexpected data encountered."),

  // Fallback
  unknownError: () =>
    new CustomError("UNKNOWN_ERROR", 500, "An unknown error occurred."),
};

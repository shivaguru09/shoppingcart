/**
 * Environment values used by the common framework.
 */
export interface TzfCommonEnvironment {
  /**
   * Headers to be added to all http requests. This can be used during development to call services directly without a security session.
   */
  mockAuthHeaders?: { [key: string]: string };
}

/**
 * A place to set environment values and make available to common components.
 */
export const tzfCommonEnvironment: TzfCommonEnvironment = { };

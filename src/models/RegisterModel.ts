// Interface representing the structure of a Register object for the registration form
export interface Register {
  email: string // User's email for registration
  password: string // User's chosen password
  passwordConfirm: string // Confirmation of the password for validation
}
